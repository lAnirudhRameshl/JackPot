package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sound.sampled.Port;
import java.util.List;


@RequestMapping("/api/v1/users/{id}/portfolios")
@RestController
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping
    public List<Portfolio> getAll (@PathVariable("id") Long userId){
        return portfolioService.getPortfolio(userId);
    }

    @GetMapping("/{pid}")
    public Portfolio getById (@PathVariable("id") Long userId, @PathVariable("pid")Long portfolioId){
        return portfolioService.getPortfolioById(userId,portfolioId);
    }

    @PostMapping("/{acctId}/{assetId}")
    public Portfolio add (@PathVariable("id") Long userId, @PathVariable("acctId") Long accountId, @PathVariable("assetId") Long assetId,@RequestBody Portfolio portfolio){
        return portfolioService.insertPortfolio(userId, accountId, assetId, portfolio);
    }

    @PutMapping("/{pid}")
    public Portfolio update(@PathVariable("id") Long userId, @PathVariable("pid") Long portfolioId,@RequestBody Portfolio portfolio){
        return  portfolioService.updatePortfolioById(userId,portfolioId,portfolio);
    }
}
