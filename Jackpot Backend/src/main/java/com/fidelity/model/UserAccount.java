package com.fidelity.model;

import java.math.BigDecimal;

public class UserAccount {
    String accountNumber;
    BigDecimal marginAvailable;
    BigDecimal marginUsed;
    AcctType accountTypeID;

    public UserAccount(String accountNumber, BigDecimal marginAvailable, BigDecimal marginUsed, AcctType accountTypeID) {
        this.accountNumber = accountNumber;
        this.marginAvailable = marginAvailable;
        this.marginUsed = marginUsed;
        this.accountTypeID = accountTypeID;
    }
}
