package com.fidelity.model;

public enum AcctType {
//    Brokerage, 401k, IRAs, Roth IRAs, HSAs
    BROKERAGE(1,"Brokerage"),
    IRA(2,"IRA"),
    HSA(3,"HSA");

    private int acctID;
    private String acctType;

    private AcctType(int acctID, String acctType) {
        this.acctID = acctID;
        this.acctType = acctType;
    }
    public static AcctType of(int code){
        for(AcctType acctType1:values()){
            if(acctType1.acctID == code){
                return acctType1;
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
