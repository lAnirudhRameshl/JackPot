package com.fidelity.jackpot.util;

public class StockAPIConstants {
    public static final String API_KEY = "7cfe213ac2ad33f7112550b91df58be3";

    public static String getStockAPI(String ticker) {
        return String.format("https://financialmodelingprep.com/api/v3/profile/%s?apikey=%s", ticker, API_KEY);
    }

    public static String getMarketMoversAPI() {
        return String.format("https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=%s", API_KEY);
    }

    public static String getMarketGainersAPI() {
        return String.format("https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=%s", API_KEY);
    }

    public static String getMarketLosersAPI() {
        return String.format("https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=%s", API_KEY);
    }
}
