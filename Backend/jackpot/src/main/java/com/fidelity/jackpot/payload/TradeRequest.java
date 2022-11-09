package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class TradeRequest {
    private String ticker;
    private Double quantity;
    private Long userId;
    private String accountNumber;
    private Long assetClassId;
}
