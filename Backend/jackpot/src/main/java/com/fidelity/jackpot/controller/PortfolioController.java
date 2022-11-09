package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.payload.PortfolioDto;
import com.fidelity.jackpot.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sound.sampled.Port;
import java.util.List;


@RequestMapping("jackpot/api/v1/portfolio")
@RestController
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user/{id}")
    public List<Portfolio> getAll (@PathVariable("id") Long userId){
        return portfolioService.getPortfolio(userId);
    }


    @PostMapping
    public Portfolio add (@RequestBody PortfolioDto portfolio){
        return portfolioService.insertPortfolio(portfolio);
    }

    @PutMapping("/{pid}")
    public Portfolio update(@PathVariable("pid") Long portfolioId,@RequestBody PortfolioDto portfolio){
        return  portfolioService.updatePortfolioById(portfolioId,portfolio);
    }


//    @GetMapping("/{pid}")
//    public Portfolio getById (@PathVariable("id") Long userId, @PathVariable("pid")Long portfolioId){
//        return portfolioService.getPortfolioById(userId,portfolioId);
//    }
}
