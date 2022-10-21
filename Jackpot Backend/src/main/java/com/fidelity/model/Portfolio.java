package com.fidelity.model;

import java.math.BigDecimal;

public class Portfolio {
    private Integer portfolioID;
    private String fundName;
    private BigDecimal quantity;
    private BigDecimal avgCost;
    private BigDecimal LTP;
    private BigDecimal currentValue;
    private BigDecimal netChange;
    private BigDecimal dayChange;
    private BigDecimal profitLoss;
    private AccountType accountType;
    private User user;
    private AssetClass assetClass;

    public Portfolio() {
    }

    public Portfolio(Integer portfolioID, String fundName, BigDecimal quantity, BigDecimal avgCost, BigDecimal LTP, BigDecimal currentValue, BigDecimal netChange, BigDecimal dayChange, BigDecimal profitLoss, AccountType accountType, User user, AssetClass assetClass) {
        this.portfolioID = portfolioID;
        this.fundName = fundName;
        this.quantity = quantity;
        this.avgCost = avgCost;
        this.LTP = LTP;
        this.currentValue = currentValue;
        this.netChange = netChange;
        this.dayChange = dayChange;
        this.profitLoss = profitLoss;
        this.accountType = accountType;
        this.user = user;
        this.assetClass = assetClass;
    }

    @Override
    public String toString() {
        return "Portfolio{" +
                "portfolioID=" + portfolioID +
                ", fundName='" + fundName + '\'' +
                ", quantity=" + quantity +
                ", avgCost=" + avgCost +
                ", LTP=" + LTP +
                ", currentValue=" + currentValue +
                ", netChange=" + netChange +
                ", dayChange=" + dayChange +
                ", profitLoss=" + profitLoss +
                ", accountType=" + accountType +
                ", user=" + user +
                ", assetClass=" + assetClass +
                '}';
    }

    public Integer getPortfolioID() {
        return portfolioID;
    }

    public void setPortfolioID(Integer portfolioID) {
        this.portfolioID = portfolioID;
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

    public BigDecimal getAvgCost() {
        return avgCost;
    }

    public void setAvgCost(BigDecimal avgCost) {
        this.avgCost = avgCost;
    }

    public BigDecimal getLTP() {
        return LTP;
    }

    public void setLTP(BigDecimal LTP) {
        this.LTP = LTP;
    }

    public BigDecimal getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(BigDecimal currentValue) {
        this.currentValue = currentValue;
    }

    public BigDecimal getNetChange() {
        return netChange;
    }

    public void setNetChange(BigDecimal netChange) {
        this.netChange = netChange;
    }

    public BigDecimal getDayChange() {
        return dayChange;
    }

    public void setDayChange(BigDecimal dayChange) {
        this.dayChange = dayChange;
    }

    public BigDecimal getProfitLoss() {
        return profitLoss;
    }

    public void setProfitLoss(BigDecimal profitLoss) {
        this.profitLoss = profitLoss;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
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
