package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import com.fidelity.jackpot.repository.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeHistoryService
{
    @Autowired
    private TradeHistoryRepository tradeHistoryRepository;

    public List<TradeHistory> getAll(){
        return tradeHistoryRepository.findAll();
    }

//    public List<TradeHistory> getTradeHistoryByUserUserId (String fundName){
//
//        return tradeHistoryRepository.findByFundName(fundName);
//
//    }
//    public TradeHistory insertTradeHistoryByUserId (Long userId, TradeHistory tradeHistory){
//        return null;
//    }
}
