package com.fidelity.jackpot.model;

public enum AccountType {
//    Brokerage, 401k, IRAs, Roth IRAs, HSAs
    BROKERAGE(1,"Brokerage"),
    IRA(2,"IRA"),
    HSA(3,"HSA");

    private int acctID;
    private String acctType;

    private AccountType(int acctID, String acctType) {
        this.acctID = acctID;
        this.acctType = acctType;
    }
    public static AccountType of(int code){
        for(AccountType accountType1 :values()){
            if(accountType1.acctID == code){
                return accountType1;
            }
        }
        throw new IllegalArgumentException("Unknown account type");
    }

    public int getAcctID() {
        return acctID;
    }

    public void setAcctID(int acctID) {
        this.acctID = acctID;
    }

    public String getAcctType() {
        return acctType;
    }

    public void setAcctType(String acctType) {
        this.acctType = acctType;
    }
}
