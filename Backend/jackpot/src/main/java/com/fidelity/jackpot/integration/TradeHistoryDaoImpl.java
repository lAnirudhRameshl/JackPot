package com.fidelity.jackpot.integration;

import com.fidelity.jackpot.dao.TradeHistoryDao;
import com.fidelity.jackpot.database.DataSource;
import com.fidelity.jackpot.exception.DatabaseException;
import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.AssetClass;
import com.fidelity.jackpot.model.TradeHistory;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class TradeHistoryDaoImpl implements TradeHistoryDao {
    private DataSource datasource;

    public TradeHistoryDaoImpl(DataSource datasource){
        this.datasource = datasource;
    }

    public List<TradeHistory> getTradeHistory() throws SQLException {
        String sql = """
			SELECT
			    th.trade_history_id,
			    th.fund_name,
			    th.quantity,
			    th.price,
			    th.transaction_date,
			    at.account_type_name,
			    ac.asset_class_name
			    
			FROM
			    trade_history            th
                LEFT JOIN account_type     at ON th.account_type_id = at.account_type_id 
			    LEFT JOIN asset_class  ac ON th.asset_class_id = ac.asset_class_id
			ORDER BY
			    th.transaction_date
		""";

        try (Connection conn = datasource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            ResultSet rs = stmt.executeQuery();
            List<TradeHistory> tradeHistories = handleResults(rs);
            return tradeHistories;
        }
        catch (SQLException e) {
            String msg = "Cannot execute query";

            throw new DatabaseException(msg);
        }
    }

    private List<TradeHistory> handleResults(ResultSet rs) throws SQLException {
        List<TradeHistory> tradehistories = new ArrayList<>();
        while (rs.next()) {
            int tradeHistoryId = rs.getInt("trade_history_id");
            String fundName = rs.getString("fund_name");
            BigDecimal quantity = rs.getBigDecimal("quantity");
            BigDecimal price = rs.getBigDecimal("price");
            Timestamp transactionDate = rs.getTimestamp("transaction_date");
            int accountId = rs.getInt("account_type_id");
            int assetId = rs.getInt("asset_class_id");
            int userId = rs.getInt("user_id");

            AccountType accountType = AccountType.of(accountId);
            AssetClass assetClass = AssetClass.of(assetId);

            TradeHistory tradeHistory = new TradeHistory(tradeHistoryId, fundName, quantity, price,  accountType,transactionDate, userId, assetClass);
            tradehistories.add(tradeHistory);
        }
        return tradehistories;
    }

    public void insertTrade(TradeHistory tradeHistory) {
        String sql = """
			INSERT INTO trade_history (
			    fund_name,
			    quantity,
			    price,
			    transaction_date,
			    account_type_id,
			    user_id,
			    asset_class_id
			) VALUES (
			    ?,
			    ?,
			    ?,
			    ?,
			    ?,
			    ?
			)
		""";

        Objects.requireNonNull(tradeHistory);
        try (Connection conn = datasource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, tradeHistory.getFundName());
            stmt.setBigDecimal(2, tradeHistory.getQuantity());
            stmt.setBigDecimal(3, tradeHistory.getPrice());
            stmt.setTimestamp(4, tradeHistory.getTransactionDate());
            AccountType accountType  = tradeHistory.getAccountType();
            stmt.setInt(5, accountType.getAcctID());
            stmt.setInt(6, tradeHistory.getUserId());
            AssetClass assetClass = tradeHistory.getAssetClass();
            stmt.setInt(7, assetClass.getAssetID());
            stmt.executeUpdate();
        } catch (SQLException e) {
            String msg = "Cannot execute insertClient for " + tradeHistory;
            throw new DatabaseException(msg);
        }
    }

}
