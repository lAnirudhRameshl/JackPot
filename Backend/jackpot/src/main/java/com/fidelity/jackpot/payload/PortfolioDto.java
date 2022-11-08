package com.fidelity.jackpot.payload;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class PortfolioDto {
    private Long userId;
    private String fundName;
    private BigDecimal quantity;
    private BigDecimal avgCost;
    private BigDecimal LTP;
    private BigDecimal currentValue;
    private BigDecimal netChange;
    private BigDecimal dayChange;
    private BigDecimal profitLoss;
    private Long accountId;
    private Long assetId;


}
