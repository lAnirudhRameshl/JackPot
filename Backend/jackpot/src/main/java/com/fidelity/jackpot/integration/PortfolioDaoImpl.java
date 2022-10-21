package com.fidelity.jackpot.integration;

import com.fidelity.jackpot.dao.PortfolioDao;
import com.fidelity.jackpot.database.DataSource;
import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.AssetClass;
import com.fidelity.jackpot.model.Portfolio;
import com.fidelity.jackpot.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class PortfolioDaoImpl implements PortfolioDao<Portfolio> {
        private static Logger logger = LoggerFactory.getLogger(PortfolioDaoImpl.class);

        @Override
        public List<Portfolio> getAllPortfolio() {
            String sql = "select * from portfolio_detail";
            String sql2 = "select * from user_detail where user_id = ?";

            List<Portfolio> portfolios = new ArrayList<>();
            try {
                Connection connection = DataSource.getConnection();
                PreparedStatement stmt = connection.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery();
                while(rs.next()){
                    Portfolio portfolio =  new Portfolio();
                    portfolio.setPortfolioID(rs.getInt(1));
                    portfolio.setFundName(rs.getString(2));
                    portfolio.setQuantity(rs.getBigDecimal(3));
                    portfolio.setAvgCost(rs.getBigDecimal(4));
                    portfolio.setLTP(rs.getBigDecimal(5));
                    portfolio.setCurrentValue(rs.getBigDecimal(6));
                    portfolio.setNetChange(rs.getBigDecimal(7));
                    portfolio.setDayChange(rs.getBigDecimal(8));
                    portfolio.setProfitLoss(rs.getBigDecimal(9));
                    portfolio.setAccountType(AccountType.of(rs.getInt(10)));
                    portfolio.setAssetClass(AssetClass.of(rs.getInt(12)));

                    User user= new User();
                    PreparedStatement stmt2 = connection.prepareStatement(sql2);
                    stmt2.setInt(1,rs.getInt(11));
                    ResultSet rs2 = stmt2.executeQuery();
                    while(rs2.next()){
                        user.setUserID(rs.getInt(11));
                        user.setFirstName(rs2.getString(2));
                        user.setLastName(rs2.getString(3));
                        user.setEmail(rs2.getString(4));
                        user.setPassword(rs2.getString(5));
                        user.setInvestmentRisk(rs2.getInt(6));
                        user.setPhoneNumber(rs.getString(7));
                    }
                    portfolio.setUser(user);

                    portfolios.add(portfolio);
                }
                logger.info(String.valueOf(portfolios));

            } catch (SQLException e) {
                throw new RuntimeException(e);
            }

            return portfolios;
        }

        @Override
        public void insertPortfolio(Portfolio portfolio) {
            String sql = "insert into portfolio_detail(fund_name,quantity,avg_cost,ltp,current_val,net_change,day_change,profit_loss,account_type_id,user_id,asset_class_id) values (?,?,?,?,?,?,?,?,?,?,?)";
//        String sql2 = "insert into user_detail (first_name,last_name,email,password,investment_risk,phone_number) values ('Harshad','Chopda','h@gmail.com','1234',3,'123456')";
            try {
                Connection connection = DataSource.getConnection();
                PreparedStatement stmt = connection.prepareStatement(sql);

                stmt.setString(1,portfolio.getFundName());
                stmt.setBigDecimal(2,portfolio.getQuantity());
                stmt.setBigDecimal(3,portfolio.getAvgCost());
                stmt.setBigDecimal(4,portfolio.getLTP());
                stmt.setBigDecimal(5,portfolio.getCurrentValue());
                stmt.setBigDecimal(6,portfolio.getNetChange());
                stmt.setBigDecimal(7,portfolio.getDayChange());
                stmt.setBigDecimal(8,portfolio.getProfitLoss());
                stmt.setInt(9,portfolio.getAccountType().getAcctID());
                stmt.setInt(10,portfolio.getUser().getUserID());
                stmt.setInt(11,portfolio.getAssetClass().getAssetID());

                int c = stmt.executeUpdate();
                logger.info("C is: "+c);
                connection.close();
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }

        @Override
        public void deletePortfolioById(int id) {
            String sql = "delete from portfolio_detail where portfolio_id= ?";
            try {
                Connection connection = DataSource.getConnection();
                PreparedStatement stmt = connection.prepareStatement(sql);
                stmt.setInt(1,id);
                int c=stmt.executeUpdate();
                logger.info("Value of c is : "+c);
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }


