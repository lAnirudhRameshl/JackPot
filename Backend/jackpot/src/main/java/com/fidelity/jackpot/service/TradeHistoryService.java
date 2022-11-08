package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import com.fidelity.jackpot.payload.TradeHistoryResponse;
import com.fidelity.jackpot.repository.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TradeHistoryService
{
    @Autowired
    private TradeHistoryRepository tradeHistoryRepository;

    public List<TradeHistoryResponse> getTradeHistoryByUserUserId (Long userId){

        List<TradeHistory> tradeHistories = tradeHistoryRepository.findByUserUserId(userId);
        List<TradeHistoryResponse> tradeHistoryResponses = new ArrayList<>();
        for (TradeHistory tradeHistory: tradeHistories ){
            TradeHistoryResponse tradeHistoryResponse = new TradeHistoryResponse();
            tradeHistoryResponse.setFund(tradeHistory.getFundName());
            tradeHistoryResponse.setQuantity(tradeHistory.getQuantity());
            tradeHistoryResponse.setPrice(tradeHistory.getPrice());
            tradeHistoryResponse.setAccount(tradeHistory.getAccountType().getAccountTypeName());
            tradeHistoryResponse.setDate(tradeHistory.getTransactionDate());
            tradeHistoryResponse.setAsset(tradeHistory.getAssetClass().getAssetClassName());

            tradeHistoryResponses.add(tradeHistoryResponse);
        }
        return tradeHistoryResponses;
    }
    public Integer insertTradeHistoryByUserId (TradeHistoryDto tradeHistoryDto){
         return tradeHistoryRepository.insertTradeHistoryByUserId(tradeHistoryDto);
    }
}
