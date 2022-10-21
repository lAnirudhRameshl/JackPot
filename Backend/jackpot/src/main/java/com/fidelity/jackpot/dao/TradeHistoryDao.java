package com.fidelity.jackpot.dao;

import java.util.List;

public interface TradeHistoryDao<T> {
    List<T> getAllTradeHistory();
    void insertTrade(T t);
    void deleteTradeById(int id);
}
