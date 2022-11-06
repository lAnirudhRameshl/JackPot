package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.StockException;
import com.fidelity.jackpot.payload.FinancialAPICompanyProfile;
import com.fidelity.jackpot.payload.FinancialAPIMarketMover;
import com.fidelity.jackpot.payload.StockDetailResponse;
import com.fidelity.jackpot.util.StockAPIConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TradeService {

    @Autowired
    private RestTemplate restTemplate;

    public StockDetailResponse convertToStockDetailResponse(FinancialAPICompanyProfile financialAPICompanyProfile) {
        StockDetailResponse response = new StockDetailResponse();
        response.setName(financialAPICompanyProfile.getSymbol());
        response.setLast(financialAPICompanyProfile.getPrice());
        response.setChange(financialAPICompanyProfile.getChanges());
        response.setSector(financialAPICompanyProfile.getSector());
        response.setIndex(financialAPICompanyProfile.getExchange());
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
    public boolean completeTrade(String tickerName, Double quantity, Long userId) {
        boolean isSuccess = false;

        try {
            StockDetailResponse stockDetails = getStockDetail(tickerName);

            //TODO: Modify account, portfolio and trade history

            isSuccess = true;
        } catch (Exception e) {
            throw new StockException(e.getMessage());
        }

        return isSuccess;
    }
}
