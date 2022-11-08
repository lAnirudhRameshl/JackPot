package com.fidelity.jackpot.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data

public class AddAccountRequest {
    private String userAccountId;

    private BigDecimal marginAvailable;

    private BigDecimal marginUsed;

    private Long accountTypeId;
    private Long userId;

}
/*
JSON
{
    "userAccountId": "TST-ACC-123",
    "marginAvailable": 5167,
    "marginUsed": 420,
    "accountTypeId": 1,
    "userId": 1
}
 */