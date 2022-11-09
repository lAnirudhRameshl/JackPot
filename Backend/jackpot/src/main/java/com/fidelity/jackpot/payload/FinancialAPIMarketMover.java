package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class FinancialAPIMarketMover {
    private String symbol;
    private String name;
    private Double change;
    private Double price;
    private Double changesPercentage;
}
