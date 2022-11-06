package com.fidelity.jackpot.payload;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TradeResponse {
    private String ticker;
    private Double quantity;
    private boolean completed;
}
