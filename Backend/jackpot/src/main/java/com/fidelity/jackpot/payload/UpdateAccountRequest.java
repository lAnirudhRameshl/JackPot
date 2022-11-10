package com.fidelity.jackpot.payload;


import lombok.Data;

import java.math.BigDecimal;

@Data
public class UpdateAccountRequest {
    private String userAccountId;

    private BigDecimal margin;

    private Long userId;

    private Long accountTypeId;
}


/***
 *
 * JSON
 * {
 *     "userAccountId": "TST-ACC-123",
 *     "marginAvailable": 5167,
 *     "marginUsed": 420,
 *     "userId": 1
 * }
 */