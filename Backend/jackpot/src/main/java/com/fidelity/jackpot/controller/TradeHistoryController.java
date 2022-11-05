package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import com.fidelity.jackpot.service.TradeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{userId}")
    public List<TradeHistory> getTradeHistoryByUserUserId(@PathVariable Long userId){
        return tradeHistoryService.getTradeHistoryByUserUserId(userId);
    }

    @PostMapping
    public ResponseEntity<Integer> insertTradeHistoryByUserId(@RequestBody TradeHistoryDto tradeHistoryDto){
        var data = tradeHistoryService.insertTradeHistoryByUserId(tradeHistoryDto);
        if (data == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }
}
