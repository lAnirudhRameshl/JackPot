package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.AssetClass;
import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.repository.AccountTypeRepository;
import com.fidelity.jackpot.repository.AssetClassRepository;
import com.fidelity.jackpot.repository.PortfolioRepository;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.sampled.Port;
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

    public List<Portfolio> getPortfolio (Long userId){
        User user = userRepository.findById(userId).get();
        return user.getPortfolios();
//        return portfolioRepository.findByUserId(userId);
    }

    public Portfolio getPortfolioById (Long userId, Long portfolioId){
        User user = userRepository.findById(userId).get();

        Portfolio portfolio = portfolioRepository.findById(portfolioId).get();

        if(!portfolio.getUser().getUserId().equals(user.getUserId())){
            return null;
        }
        return portfolio;
    }

    public Portfolio insertPortfolio (Long userId, Long accountId, Long assetId, Portfolio portfolio){
        User user = userRepository.findById(userId).get();

        AccountType accountType = accountTypeRepository.findById(accountId).get();

        AssetClass assetClass = assetClassRepository.findById(assetId).get();


        portfolio.setAccountType(accountType);
        portfolio.setAssetClass(assetClass);
        portfolio.setUser(user);

        return portfolioRepository.save(portfolio);
    }
    public Portfolio updatePortfolioById (Long userId, Long portfolioId, Portfolio portfolio){
        return null;
    }

    public void deletePortfolioById (Long userId, Long portfolioId){

    }
}
