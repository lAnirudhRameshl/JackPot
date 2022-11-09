package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.ResourceNotFoundException;
import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.AssetClass;
import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.payload.PortfolioDto;
import com.fidelity.jackpot.payload.StockDetailResponse;
import com.fidelity.jackpot.repository.AccountTypeRepository;
import com.fidelity.jackpot.repository.AssetClassRepository;
import com.fidelity.jackpot.repository.PortfolioRepository;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.sampled.Port;
import javax.transaction.Transactional;
import java.lang.module.ResolutionException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {
    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountTypeRepository accountTypeRepository;

    @Autowired
    private AssetClassRepository assetClassRepository;

    @Autowired
    private TradeService tradeService;

    @Transactional
    public List<Portfolio> getDynamicPortfolio(List<Portfolio> oldPortfolio) {
        for(Portfolio portfolio: oldPortfolio) {
            StockDetailResponse stockDetail = tradeService.getStockDetail(portfolio.getFundName());
            portfolio.setLTP(BigDecimal.valueOf(stockDetail.getLast()));
            portfolio.setNetChange(portfolio.getLTP().subtract(portfolio.getAvgCost()));
            portfolio.setCurrentValue(portfolio.getLTP().multiply(portfolio.getQuantity()));
            portfolio.setProfitLoss(portfolio.getCurrentValue()
                    .subtract(portfolio.getAvgCost().multiply(portfolio.getQuantity())));
            portfolio.setDayChange(BigDecimal.valueOf(stockDetail.getChange()));
            portfolioRepository.save(portfolio);
        }

        return oldPortfolio;
    }

    public List<Portfolio> getPortfolio (Long userId){
        User user = userRepository.findById(userId).orElseThrow(()->{
            throw new ResolutionException();
        });
//        return user.getPortfolios();
//        return portfolioRepository.findByUserId(userId);
        return getDynamicPortfolio(user.getPortfolios());
    }

    public Portfolio getPortfolioById (Long userId, Long portfolioId){
        User user = userRepository.findById(userId)
                                  .orElseThrow(()->{throw new ResourceNotFoundException("User with ID " + userId + " not found");});

        Portfolio portfolio = portfolioRepository.findById(portfolioId)
                                                 .orElseThrow(()->{throw new ResourceNotFoundException("Portfolio with ID " + portfolioId + " not found");});

        if(!portfolio.getUser().getUserId().equals(user.getUserId())){
            return null;
        }
        return portfolio;
    }

    @Transactional
    public Portfolio insertPortfolio (PortfolioDto portfolio){
        User user = userRepository.findById(portfolio.getUserId())
                .orElseThrow(()->{throw new ResourceNotFoundException("User with ID " + portfolio.getUserId() + " not found");});

        AccountType accountType = accountTypeRepository.findById(portfolio.getAccountId())
                .orElseThrow(()->{throw new ResourceNotFoundException("Asset with ID " + portfolio.getAssetId() + " not found");});

        AssetClass assetClass = assetClassRepository.findById(portfolio.getAssetId())
                .orElseThrow(()->{throw new ResourceNotFoundException("Account type with ID " + portfolio.getAccountId() + " not found");});


        Portfolio portfolio1 = new Portfolio();
        portfolio1.setAccountType(accountType);
        portfolio1.setAssetClass(assetClass);
        portfolio1.setUser(user);


        portfolio1.setFundName(portfolio.getFundName());
        portfolio1.setQuantity(portfolio.getQuantity());
        portfolio1.setAvgCost(portfolio.getAvgCost());
        portfolio1.setLTP(portfolio.getLTP());
        portfolio1.setCurrentValue(portfolio.getCurrentValue());
        portfolio1.setNetChange(portfolio.getNetChange());
        portfolio1.setDayChange(portfolio.getDayChange());
        portfolio1.setProfitLoss(portfolio.getProfitLoss());

        return portfolioRepository.save(portfolio1);
    }

    @Transactional
    public Portfolio updatePortfolioById (Long portfolioId, PortfolioDto portfolioDto){
        Portfolio portfolio = portfolioRepository.findById(portfolioId)
                .orElseThrow(()->{throw new ResourceNotFoundException("Portfolio with ID " + portfolioId + " not found");});

        if(portfolio.getQuantity().compareTo(new BigDecimal(0))<=0){
            deletePortfolioById(portfolioId);
        }
        portfolio.setQuantity(portfolioDto.getQuantity());

        return portfolioRepository.save(portfolio);
    }

    @Transactional
    public void deletePortfolioById (Long portfolioId){
        portfolioRepository.deleteById(portfolioId);
    }
}

