package com.fidelity.jackpot.dao;

import com.fidelity.jackpot.model.TradeHistory;

import java.sql.SQLException;
import java.util.List;

public interface TradeHistoryDao<T> {
    List<TradeHistory> getTradeHistory() throws SQLException;
    void insertTrade(TradeHistory tradeHistory);
}
