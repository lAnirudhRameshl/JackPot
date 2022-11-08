package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.TradeHistory;
import com.fidelity.jackpot.payload.TradeHistoryDto;
import com.fidelity.jackpot.payload.TradeHistoryResponse;
import com.fidelity.jackpot.service.TradeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/jackpot/api/trade-history")
@RestController
public class TradeHistoryController {

    @Autowired
    private TradeHistoryService tradeHistoryService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{userId}")
    public ResponseEntity<List<TradeHistoryResponse>> getTradeHistoryByUserUserId(@PathVariable Long userId){
        ResponseEntity response = null;

        try {
            List<TradeHistoryResponse> responseBody = tradeHistoryService.getTradeHistoryByUserUserId(userId);
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    @PostMapping
    public ResponseEntity<Integer> insertTradeHistoryByUserId(@RequestBody TradeHistoryDto tradeHistoryDto){
        var data = tradeHistoryService.insertTradeHistoryByUserId(tradeHistoryDto);
        if (data == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }
}
