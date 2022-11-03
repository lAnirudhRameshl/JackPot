package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import com.fidelity.jackpot.service.TradeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/trade-history")
@RestController
public class TradeHistoryController {

    @Autowired
    private TradeHistoryService tradeHistoryService;

    @GetMapping
    public ResponseEntity<List<TradeHistory>> getaALL(){
        List<TradeHistory> tradeHistories = tradeHistoryService.getAll();

        ResponseEntity<List<TradeHistory>> responseEntity;
        responseEntity = ResponseEntity.ok(tradeHistories);
        return responseEntity;
    }

//    @GetMapping("/{fundName}")
//    public List<TradeHistory> getTradeHistoryByUserUserId(@PathVariable String fundName){
//        return tradeHistoryService.getTradeHistoryByUserUserId(fundName);
//    }
}
