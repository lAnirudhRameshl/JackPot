package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class FinancialAPICompanyProfile {
    private String symbol;
    private Double price;
    private Double beta;
    private Double volAvg;
    private Double mktCap;
    private Double lastDiv;
    private String range;
    private Double changes;
    private String companyName;
    private String currency;
    private String cik;
    private String isin;
    private String cusip;
    private String exchange;
    private String exchangeShortName;
    private String industry;
    private String website;
    private String description;
    private String ceo;
    private String sector;
    private String country;
    private String fullTimEmployees;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private Double dcfDiff;
    private Double dcf;
    private String image;
    private String ipoDate;
    private Boolean defaultImage;
    private Boolean isEtf;
    private Boolean isActivelyTrading;
    private Boolean isAdr;
    private Boolean isFund;
}
