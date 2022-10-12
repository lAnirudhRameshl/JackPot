package com.fidelity.model;

import java.math.BigDecimal;
import java.sql.Timestamp;


public class TradeHistory {
    private Integer TradeHistoryID;
    private String fundName;
    private Double quantity;//1 th->1user ;
    private BigDecimal price;
    private AcctType accountTypeID;
    private Timestamp transactionDate;
    private User user;
    private AssetClass assetClass;

    public TradeHistory(){}

    public TradeHistory(Integer tradeHistoryID, String fundName, Double quantity, BigDecimal price, AcctType accountTypeID, Timestamp transactionDate, User user, AssetClass assetClass) {
        TradeHistoryID = tradeHistoryID;
        this.fundName = fundName;
        this.quantity = quantity;
        this.price = price;
        this.accountTypeID = accountTypeID;
        this.transactionDate = transactionDate;
        this.user = user;
        this.assetClass = assetClass;
    }

    public Integer getTradeHistoryID() {
        return TradeHistoryID;
    }

    public void setTradeHistoryID(Integer tradeHistoryID) {
        TradeHistoryID = tradeHistoryID;
    }

    public String getFundName() {
        return fundName;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public AcctType getAccountTypeID() {
        return accountTypeID;
    }

    public void setAccountTypeID(AcctType accountTypeID) {
        this.accountTypeID = accountTypeID;
    }

    public Timestamp getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Timestamp transactionDate) {
        this.transactionDate = transactionDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public AssetClass getAssetClass() {
        return assetClass;
    }

    public void setAssetClass(AssetClass assetClass) {
        this.assetClass = assetClass;
    }
}
