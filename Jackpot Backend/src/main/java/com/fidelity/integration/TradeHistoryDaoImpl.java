package com.fidelity.integration;

import com.fidelity.model.TradeHistory;

import java.math.BigDecimal;
import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class TradeHistoryDaoImpl implements TradeHistoryDao{
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


                Connection conn = datasource.getConnection();
                PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
            List<TradeHistory> tradinghistories = handleResults(rs);
            return tradinghistories;

    }






    public void insertTrade(TradeHistory t) {

    }

    public void deleteTradeById(int id) {

    }
}
