//package com.fidelity.integration;
//
//import com.fidelity.model.AccountType;
//import com.fidelity.model.AssetClass;
//import com.fidelity.model.Portfolio;
//import com.fidelity.model.User;
//
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.List;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//
//public class PortfolioDaoImpl implements PortfolioDao<Portfolio> {
//
////    private static final Logger logger =  LoggerFactory.getLogger(PortfolioDaoImpl.class);
//private static Logger logger  = LoggerFactory.getLogger(PortfolioDaoImpl.class);
//    public List<Portfolio> getAllPortfolio() {
//        List<Portfolio> portfolios = new ArrayList<>();
//        try {
//            String get_portfolio_sql = "select portfolio_id, fund_name,quantity,avg_cost,ltp,current_value,net_change,day_change,profit_loss,account_type_id,user_id,asset_class_id from portfolio";
//            String get_user_sql = "select * from portfolio";
//            Connection connection = DataSource.getConnection();
//            PreparedStatement stmt = connection.prepareStatement(get_user_sql);
//            ResultSet rs = stmt.executeQuery();
//
//            logger.info("Outside while...");
//            while(rs.next()){
//                logger.info("Inside while...");
//                User user = new User();
//                Portfolio portfolio = new Portfolio(rs.getInt(1),rs.getString(2),rs.getBigDecimal(3),rs.getBigDecimal(4),rs.getBigDecimal(5),rs.getBigDecimal(6),rs.getBigDecimal(7),rs.getBigDecimal(8),rs.getBigDecimal(9),AccountType.of(rs.getInt(10)),null, AssetClass.of(rs.getInt(12)));
//                logger.info("PPORTFOLIO:"+portfolio);
//                portfolios.add(portfolio);
//            }
//
//        } catch (SQLException e) {
//            logger.info(e.getMessage());
//            throw new RuntimeException(e);
//        }
//        System.out.println(portfolios);
//        return portfolios;
//    }
//
//    public void insertPortfolio(Portfolio portfolio) {
//        try {
//            String add_user_sql = "insert into user_detail(first_name,last_name,email,password,investment_risk,phone_number) values (?,?,?,?,?,?)";
//            String add_portfolio_sql = "insert into portfolio(portfolio_id,fund_name,quantity,avg_cost,ltp,current_value,net_change,day_change,profit_loss,account_type_id,user_id,asset_class_id) values (?,?,?,?,?,?,?,?,?,?,?,?)";
//            String dummy_insert = "insert into portfolio(portfolio_id,fund_name,quantity,avg_cost,ltp,current_value,net_change,day_change,profit_loss,account_type_id,user_id,asset_class_id) values (10,'abc',3,5,34,2,1,10,23,1,22,2)";
//            String check_user = "select * from user_detail where user_id = ?";
//            Connection connection = DataSource.getConnection();
//
//            PreparedStatement stmt = connection.prepareStatement(check_user);
//            User user = portfolio.getUser();
//            stmt.setInt(1,user.getUserID());
//            ResultSet rs = stmt.executeQuery();
//            if(rs.next()){//implies that particular user is already present. So just add another portfolio..
//                logger.info("INside if stmt...");
//                PreparedStatement stmt3 = connection.prepareStatement(dummy_insert);
//                int k = stmt3.executeUpdate();
//                logger.info("Value of k is: "+ k);
//                logger.info(String.valueOf(portfolio.getAccountType().getAcctID()));
//                PreparedStatement stmt2 = connection.prepareStatement(add_portfolio_sql);
//                stmt2.setInt(1,portfolio.getPortfolioID());
//                stmt2.setString(2,portfolio.getFundName());
//                stmt2.setBigDecimal(3,portfolio.getQuantity());
//                stmt2.setBigDecimal(4,portfolio.getAvgCost());
//                stmt2.setBigDecimal(5,portfolio.getLTP());
//                logger.info("First 5 done...");
//                stmt2.setBigDecimal(6,portfolio.getCurrentValue());
//                stmt2.setBigDecimal(7,portfolio.getNetChange());
//                stmt2.setBigDecimal(8,portfolio.getDayChange());
//                stmt2.setBigDecimal(9,portfolio.getProfitLoss());
//                stmt2.setInt(10, (portfolio.getAccountType().getAcctID()));
//                logger.info("Next 5 done...");
//                stmt2.setInt(11,user.getUserID());
//                logger.info(String.valueOf(user.getUserID()));
//                stmt2.setInt(12,portfolio.getAssetClass().getAssetID());
//                logger.info(String.valueOf(portfolio.getAssetClass().getAssetID()));
//                logger.info(stmt2.toString());
////                stmt2.getSql
////                logger.info(((Statement) stmt2).get);
//                logger.debug(portfolio.getPortfolioID() + " NAME: "+portfolio.getFundName());
////                logger.debug(String.valueO);
//                int c = stmt2.executeUpdate();
//                logger.info("Value of c is:"+c);
//                if(c>0){
//                    System.out.println("Row successfully inserted");
//                }
//                else{
//                    System.out.println("Can't insert row..");
//                }
//
//
//            }
//            else{
////                String add_user_sql = "insert into user_detail(first_name,last_name,email,password,investment_risk,phone_number) values ('Swathika','B','s@gmail.com','123',4,'89756434')";
//                PreparedStatement stmt1 = connection.prepareStatement(add_user_sql);
//                stmt1.setString(1,user.getFirstName());
//                stmt1.setString(2,user.getLastName());
//                stmt1.setString(3,user.getEmail());
//                stmt1.setString(4,user.getPassword());
//                stmt1.setInt(5,user.getInvestmentRisk());
//                stmt1.setString(6,user.getPhoneNumber());
//
//                PreparedStatement stmt2 = connection.prepareStatement(add_portfolio_sql);
//                stmt2.setInt(1,portfolio.getPortfolioID());
//                stmt2.setString(2,portfolio.getFundName());
//                stmt2.setBigDecimal(3,portfolio.getQuantity());
//                stmt2.setBigDecimal(4,portfolio.getAvgCost());
//                stmt2.setBigDecimal(5,portfolio.getLTP());
//                stmt2.setBigDecimal(6,portfolio.getCurrentValue());
//                stmt2.setBigDecimal(7,portfolio.getNetChange());
//                stmt2.setBigDecimal(8,portfolio.getDayChange());
//                stmt2.setBigDecimal(9,portfolio.getProfitLoss());
//                stmt2.setInt(10,portfolio.getAccountType().getAcctID());
//                stmt2.setInt(11,user.getUserID());
//                stmt2.setInt(12,portfolio.getAssetClass().getAssetID());
//
//                int c2 = stmt1.executeUpdate();
//                int c1 = stmt2.executeUpdate();
//
//                if(c1>0 && c2>0){
//                    System.out.println("Row successfully inserted");
//                }
//                else{
//                    if(c1 ==0 ){
//                        logger.debug("Problem with Statement 2");
//                    }
//                    else if(c2 == 0){
//                        logger.debug("Problem with sttem 1");
//                    }
//                    System.out.println("Can't insert row..");
//                }
//
//
//            }
//
//        } catch (SQLException e) {
//            throw new RuntimeException(e);
//        }
//
//    }
//
//    public void deletePortfolioById(int id) {
//
//    }
//}
