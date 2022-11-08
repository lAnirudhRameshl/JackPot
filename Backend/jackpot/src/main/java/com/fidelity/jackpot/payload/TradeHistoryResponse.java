package com.fidelity.jackpot.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TradeHistoryResponse {
    private String fund;

    private BigDecimal quantity;

    private BigDecimal price;

    private String account;

    private Timestamp date;

    private String asset;
}
