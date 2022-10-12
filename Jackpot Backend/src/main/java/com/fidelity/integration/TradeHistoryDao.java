package com.fidelity.integration;

import com.fidelity.model.TradeHistory;

import java.sql.SQLException;
import java.util.List;

public interface TradeHistoryDao {
    List<TradeHistory> getTradeHistory() throws SQLException;
    void insertTrade(TradeHistory t);
    void deleteTradeById(int id);
}
