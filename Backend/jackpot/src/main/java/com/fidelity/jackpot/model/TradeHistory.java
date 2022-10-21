package com.fidelity.jackpot.model;

import javax.persistence.Entity;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class TradeHistory {
    private Integer TradeHistoryID;
    private String fundName;
    private BigDecimal quantity;
    private BigDecimal price;
    private AccountType accountType;
    private Timestamp transactionDate;
    int userId;
    private AssetClass assetClass;

    public TradeHistory(){}

    public TradeHistory(Integer tradeHistoryID, String fundName, BigDecimal quantity, BigDecimal price, AccountType accountType, Timestamp transactionDate, int userId, AssetClass assetClass) {
        TradeHistoryID = tradeHistoryID;
        this.fundName = fundName;
        this.quantity = quantity;
        this.price = price;
        this.accountType = accountType;
        this.transactionDate = transactionDate;
        this.userId = userId;
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

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountTypeID) {
        this.accountType = accountTypeID;
    }

    public Timestamp getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Timestamp transactionDate) {
        this.transactionDate = transactionDate;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public AssetClass getAssetClass() {
        return assetClass;
    }

    public void setAssetClass(AssetClass assetClass) {
        this.assetClass = assetClass;
    }
}
