package com.fidelity;

import com.fidelity.integration.PortfolioDao;
import com.fidelity.integration.PortfolioImpl;
import com.fidelity.model.AccountType;
import com.fidelity.model.AssetClass;
import com.fidelity.model.Portfolio;
import com.fidelity.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.math.BigDecimal;

public class PortfolioImplTest {
    PortfolioDao dao;
    private JdbcTemplate jdbcTemplate;
//    private DbTestUtils dbTestUtils;


    @BeforeEach
    void setUp(){
        dao = new PortfolioImpl();
    }

    @Test
    void insertTest(){
        User user = new User();
        user.setUserID(62);
//        user.setFirstName("Maya");
//        user.setLastName("Malhotra");
//        user.setEmail("m@gmail.com");
//        user.setInvestmentRisk(3);
//        user.setPassword("maya@123");
//        user.setPhoneNumber("8220187848");

        Portfolio portfolio = new Portfolio();
        portfolio.setFundName("APPL");
        portfolio.setQuantity(new BigDecimal("100"));
        portfolio.setAvgCost(new BigDecimal("23"));
        portfolio.setLTP(new BigDecimal("10"));
        portfolio.setCurrentValue(new BigDecimal("120"));
        portfolio.setNetChange(new BigDecimal("12"));
        portfolio.setDayChange(new BigDecimal("23"));
        portfolio.setProfitLoss(new BigDecimal("34"));
        portfolio.setAccountType(AccountType.BROKERAGE);
        portfolio.setUser(user);
        portfolio.setAssetClass(AssetClass.SMALL_CAP);
        dao.insertPortfolio(portfolio);
    }

    @Test
    void selectAllCheck(){
        dao.getAllPortfolio();
    }

    @Test
    void deleteByIdCheck(){
        dao.deletePortfolioById(21);
    }

}
