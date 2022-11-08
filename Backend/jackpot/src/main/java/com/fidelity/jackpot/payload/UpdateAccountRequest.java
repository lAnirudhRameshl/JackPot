package com.fidelity.jackpot.payload;


import lombok.Data;

import java.math.BigDecimal;

@Data
public class UpdateAccountRequest {
    private String userAccountId;

    private BigDecimal marginAvailable;

    private BigDecimal marginUsed;

    private Long userId;
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