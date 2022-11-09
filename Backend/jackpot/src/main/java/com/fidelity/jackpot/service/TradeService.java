package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.StockException;
import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.payload.FinancialAPICompanyProfile;
import com.fidelity.jackpot.payload.FinancialAPIMarketMover;
import com.fidelity.jackpot.payload.StockDetailResponse;
import com.fidelity.jackpot.repository.AssetClassRepository;
import com.fidelity.jackpot.repository.PortfolioRepository;
import com.fidelity.jackpot.repository.TradeHistoryRepository;
import com.fidelity.jackpot.repository.UserAccountRepository;
import com.fidelity.jackpot.util.StockAPIConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TradeService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private TradeHistoryRepository tradeHistoryRepository;

    @Autowired
    private AssetClassRepository assetClassRepository;

    public StockDetailResponse convertToStockDetailResponse(FinancialAPICompanyProfile financialAPICompanyProfile) {
        StockDetailResponse response = new StockDetailResponse();
        response.setName(financialAPICompanyProfile.getSymbol());
        response.setLast(financialAPICompanyProfile.getPrice());
        response.setChange(financialAPICompanyProfile.getChanges());
        response.setSector(financialAPICompanyProfile.getSector());
        response.setIndex(financialAPICompanyProfile.getExchangeShortName());
        response.setCompany(financialAPICompanyProfile.getCompanyName());
        response.setVolume(financialAPICompanyProfile.getVolAvg());
        return response;
    }

    public StockDetailResponse convertToStockDetailResponse(FinancialAPIMarketMover marketMover) {
        StockDetailResponse response = new StockDetailResponse();
        response.setName(marketMover.getSymbol());
        response.setCompany(marketMover.getName());
        response.setChange(marketMover.getChangesPercentage());
        response.setLast(marketMover.getPrice());
        return response;
    }

    public List<StockDetailResponse> getMarketMoverStockDetailResponse(FinancialAPIMarketMover[] marketMovers) {
        return Arrays.stream(marketMovers).map(marketMover -> convertToStockDetailResponse(marketMover)).collect(Collectors.toList());
    }

    public List<StockDetailResponse> getMarketMovers() {
        List<StockDetailResponse> response = null;

        try {
            FinancialAPIMarketMover[] marketMovers = restTemplate.getForObject(StockAPIConstants.getMarketMoversAPI(),
                    FinancialAPIMarketMover[].class);
            response = getMarketMoverStockDetailResponse(marketMovers);
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return response;
    }

    public List<StockDetailResponse> getMarketGainers() {
        List<StockDetailResponse> response = null;

        try {
            FinancialAPIMarketMover[] marketMovers = restTemplate.getForObject(StockAPIConstants.getMarketGainersAPI(),
                    FinancialAPIMarketMover[].class);
            response = getMarketMoverStockDetailResponse(marketMovers);
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return response;
    }

    public List<StockDetailResponse> getMarketLosers() {
        List<StockDetailResponse> response = null;

        try {
            FinancialAPIMarketMover[] marketMovers = restTemplate.getForObject(StockAPIConstants.getMarketLosersAPI(),
                    FinancialAPIMarketMover[].class);
            response = getMarketMoverStockDetailResponse(marketMovers);
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return response;
    }

    public StockDetailResponse getStockDetail(String ticker) {
        StockDetailResponse response = null;

        try {
            FinancialAPICompanyProfile[] marketMovers = restTemplate.getForObject(StockAPIConstants.getStockAPI(ticker),
                    FinancialAPICompanyProfile[].class);
            response = convertToStockDetailResponse(marketMovers[0]);
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return response;
    }

    @Transactional
    public boolean completeTrade(String tickerName, Double quantity, Long userId, String accountNumber, Long assetClassId) {
        boolean isSuccess = false;

        try {
            //TODO: Modify account, portfolio and trade history
            Portfolio portfolio = portfolioRepository.findByFundNameAndUserUserId(tickerName, userId).orElse(null);
            StockDetailResponse stockDetail = getStockDetail(tickerName);
            userAccountRepository.findByAccountNumberAndUserUserId(accountNumber, userId).orElseThrow(() -> new StockException("Account invalid"));
            if(portfolio == null) {
                if(quantity > 0) {
                    UserAccount account = userAccountRepository.findById(accountNumber).orElseThrow(() -> new StockException("Account with number does not exist"));
                    BigDecimal amount = BigDecimal.valueOf(quantity * stockDetail.getLast());
                    if(account.getMarginAvailable().compareTo(amount) >= 0) {
                        account.setMarginUsed(amount.add(account.getMarginUsed()));
                        account.setMarginAvailable(account.getMarginAvailable().subtract(amount));
                        account = userAccountRepository.save(account);

                        Portfolio addedPortfolio = new Portfolio();
                        addedPortfolio.setFundName(tickerName);
                        addedPortfolio.setLTP(BigDecimal.valueOf(stockDetail.getLast()));
                        addedPortfolio.setQuantity(BigDecimal.valueOf(quantity));
                        addedPortfolio.setAvgCost(BigDecimal.valueOf(stockDetail.getLast()));
                        addedPortfolio.setCurrentValue(BigDecimal.valueOf(stockDetail.getLast() * quantity));
                        addedPortfolio.setDayChange(BigDecimal.valueOf(stockDetail.getChange()));
                        addedPortfolio.setNetChange(addedPortfolio.getLTP().subtract(addedPortfolio.getAvgCost()));
                        addedPortfolio.setProfitLoss(addedPortfolio.getCurrentValue().subtract(addedPortfolio.getAvgCost().multiply(addedPortfolio.getQuantity())));
                        addedPortfolio.setAccountType(account.getAccountType());
                        addedPortfolio.setAssetClass(assetClassRepository.findById(assetClassId).orElseThrow(() -> new StockException("Asset Class not found")));
                        addedPortfolio.setUser(account.getUser());
                        addedPortfolio = portfolioRepository.save(addedPortfolio);

                        TradeHistory tradeHistory = new TradeHistory();
                        tradeHistory.setFundName(tickerName);
                        tradeHistory.setQuantity(BigDecimal.valueOf(quantity));
                        tradeHistory.setPrice(BigDecimal.valueOf(stockDetail.getLast()));
                        tradeHistory.setTransactionDate(Timestamp.valueOf(LocalDateTime.now()));
                        tradeHistory.setAccountType(account.getAccountType());
                        tradeHistory.setAssetClass(assetClassRepository.findById(assetClassId).orElseThrow(() -> new StockException("Invalid Asset class")));
                        tradeHistory.setUser(account.getUser());
                        tradeHistory = tradeHistoryRepository.save(tradeHistory);
                    } else {
                        throw new StockException("Insufficient funds");
                    }
                } else {
                    throw new StockException("Short trades not allowed");
                }
            } else {
                UserAccount account = userAccountRepository.findById(accountNumber).orElseThrow(() -> new StockException("Account with number does not exist"));
                BigDecimal amount = BigDecimal.valueOf(quantity * stockDetail.getLast());
                if(account.getMarginAvailable().compareTo(amount) >= 0) {
                    if(quantity <= 0) {
                        if(portfolio.getQuantity().compareTo(BigDecimal.valueOf(quantity).abs()) >= 0){
                            if (portfolio.getQuantity().compareTo(BigDecimal.valueOf(quantity).abs()) == 0) {
                                portfolioRepository.delete(portfolio);
                            } else {
                                portfolio.setLTP(BigDecimal.valueOf(stockDetail.getLast()));
                                portfolio.setAvgCost((portfolio.getCurrentValue()
                                        .add(BigDecimal.valueOf(quantity * stockDetail.getLast()))
                                        .divide(portfolio.getQuantity().add(BigDecimal.valueOf(quantity)))));
                                portfolio.setQuantity(portfolio.getQuantity().add(BigDecimal.valueOf(quantity)));
                                portfolio.setNetChange(portfolio.getLTP().subtract(portfolio.getAvgCost()));
                                portfolio.setDayChange(BigDecimal.valueOf(stockDetail.getChange()));
                                portfolio.setCurrentValue(portfolio.getQuantity().multiply(portfolio.getLTP()));
                                portfolio.setProfitLoss(portfolio.getCurrentValue().subtract(portfolio.getAvgCost().multiply(portfolio.getQuantity())));
                                portfolio = portfolioRepository.save(portfolio);
                            }
                            account.setMarginUsed(amount.add(account.getMarginUsed()));
                            account.setMarginAvailable(account.getMarginAvailable().subtract(amount));
                            account = userAccountRepository.save(account);

                            TradeHistory tradeHistory = new TradeHistory();
                            tradeHistory.setFundName(tickerName);
                            tradeHistory.setQuantity(BigDecimal.valueOf(quantity));
                            tradeHistory.setPrice(BigDecimal.valueOf(stockDetail.getLast()));
                            tradeHistory.setTransactionDate(Timestamp.valueOf(LocalDateTime.now()));
                            tradeHistory.setAccountType(account.getAccountType());
                            tradeHistory.setAssetClass(assetClassRepository.findById(assetClassId).orElseThrow(() -> new StockException("Invalid Asset class")));
                            tradeHistory.setUser(account.getUser());
                            tradeHistory = tradeHistoryRepository.save(tradeHistory);
                        } else {
                            throw new StockException("Cannot sell more than you own");
                        }
                    } else {
                        portfolio.setLTP(BigDecimal.valueOf(stockDetail.getLast()));
                        portfolio.setAvgCost((portfolio.getCurrentValue()
                                .add(BigDecimal.valueOf(quantity * stockDetail.getLast()))
                                .divide(portfolio.getQuantity().add(BigDecimal.valueOf(quantity)))));
                        portfolio.setQuantity(portfolio.getQuantity().add(BigDecimal.valueOf(quantity)));
                        portfolio.setNetChange(portfolio.getLTP().subtract(portfolio.getAvgCost()));
                        portfolio.setDayChange(BigDecimal.valueOf(stockDetail.getChange()));
                        portfolio.setCurrentValue(portfolio.getQuantity().multiply(portfolio.getLTP()));
                        portfolio.setProfitLoss(portfolio.getCurrentValue().subtract(portfolio.getAvgCost().multiply(portfolio.getQuantity())));
                        portfolio = portfolioRepository.save(portfolio);

                        account.setMarginUsed(amount.add(account.getMarginUsed()));
                        account.setMarginAvailable(account.getMarginAvailable().subtract(amount));
                        account = userAccountRepository.save(account);

                        TradeHistory tradeHistory = new TradeHistory();
                        tradeHistory.setFundName(tickerName);
                        tradeHistory.setQuantity(BigDecimal.valueOf(quantity));
                        tradeHistory.setPrice(BigDecimal.valueOf(stockDetail.getLast()));
                        tradeHistory.setTransactionDate(Timestamp.valueOf(LocalDateTime.now()));
                        tradeHistory.setUser(account.getUser());
                        tradeHistory.setAccountType(account.getAccountType());
                        tradeHistory.setAssetClass(assetClassRepository.findById(assetClassId).orElseThrow(() -> new StockException("Invalid Asset class")));
                        tradeHistory = tradeHistoryRepository.save(tradeHistory);
                    }
                } else {
                    throw new StockException("Insufficient funds");
                }
            }

            isSuccess = true;
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return isSuccess;
    }
}
