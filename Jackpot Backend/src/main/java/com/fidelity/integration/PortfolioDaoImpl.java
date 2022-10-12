package com.fidelity.integration;

import com.fidelity.model.Portfolio;
import com.fidelity.model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class PortfolioDaoImpl implements PortfolioDao<Portfolio> {


    public List<Portfolio> getAllPortfolio() {
        try {
            Connection connection = DataSource.getConnection();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    public void insertPortfolio(Portfolio portfolio) {
        try {
            String add_user_sql = "insert into user_detail(first_name,last_name,email,password,investment_risk,phone_number) values ('Swathika','B','s@gmail.com','123',4,'89756434')";
            String add_portfolio_sql = "insert into portfolio(portfolio_id," +
                    "fund_name,quantity,avg_cost,ltp," +
                    "current_value,net_change,day_change," +
                    "profit_loss,account_type_id,user_id,asset_class_id) values " +
                    "(?,?,?,?,?,?,?,?,?,?,?,?)";
            String check_user = "select * from user_detail where id = ?";
            Connection connection = DataSource.getConnection();

            PreparedStatement stmt = connection.prepareStatement(check_user);
            User user = portfolio.getUser();
            stmt.setInt(1,user.getUserID());
            int count = stmt.executeUpdate();
            if(count > 0){//implies that particular user is already present. So just add another portfolio..
                PreparedStatement stmt2 = connection.prepareStatement(add_portfolio_sql);
                stmt2.setInt(1,portfolio.getPortfolioID());
                stmt2.setString(2,portfolio.getFundName());
                stmt2.setBigDecimal(3,portfolio.getQuantity());
                stmt2.setBigDecimal(4,portfolio.getAvgCost());
                stmt2.setBigDecimal(5,portfolio.getLTP());
                stmt2.setBigDecimal(6,portfolio.getCurrentValue());
                stmt2.setBigDecimal(7,portfolio.getNetChange());
                stmt2.setBigDecimal(8,portfolio.getDayChange());
                stmt2.setBigDecimal(9,portfolio.getProfitLoss());
                stmt2.setInt(10,portfolio.getAccountType().getAcctID());
                stmt2.setInt(11,user.getUserID());
                stmt2.setInt(12,portfolio.getAssetClass().getAssetID());

                int c = stmt2.executeUpdate();
                if(c>0){
                    System.out.println("Row successfully inserted");
                }
                else{
                    System.out.println("Can't insert row..");
                }


            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    public void deletePortfolioById(int id) {

    }
}
