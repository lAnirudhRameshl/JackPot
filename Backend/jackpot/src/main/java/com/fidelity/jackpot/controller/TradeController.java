package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.payload.StockDetailResponse;
import com.fidelity.jackpot.payload.TradeRequest;
import com.fidelity.jackpot.payload.TradeResponse;
import com.fidelity.jackpot.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jackpot/api/trade")
public class TradeController {
    @Autowired
    private TradeService tradeService;

    @GetMapping("/{ticker}")
    public ResponseEntity<?> getStockDetails(@PathVariable("ticker") String ticker) {
        ResponseEntity response = null;

        try {
            StockDetailResponse responseBody = tradeService.getStockDetail(ticker);
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    @GetMapping("/market-movers")
    public ResponseEntity<?> getMarketMovers() {
        ResponseEntity response = null;

        try {
            List<StockDetailResponse> responseBody = tradeService.getMarketMovers();
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    @GetMapping("/market-gainers")
    public ResponseEntity<?> getMarketGainers() {
        ResponseEntity response = null;

        try {
            List<StockDetailResponse> responseBody = tradeService.getMarketGainers();
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    @GetMapping("/market-losers")
    public ResponseEntity<?> getMarketLosers() {
        ResponseEntity response = null;

        try {
            List<StockDetailResponse> responseBody = tradeService.getMarketLosers();
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

    @PostMapping
    public ResponseEntity<?> completeTrade(@RequestBody TradeRequest tradeRequest) {
        ResponseEntity response = null;

        try {
            boolean isTradeComplete = tradeService.completeTrade(tradeRequest.getTicker(), tradeRequest.getQuantity(), tradeRequest.getUserId());
            TradeResponse responseBody = TradeResponse.builder()
                    .ticker(tradeRequest.getTicker())
                    .quantity(tradeRequest.getQuantity())
                    .completed(isTradeComplete)
                    .build();
            response = new ResponseEntity(responseBody, HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }
}
