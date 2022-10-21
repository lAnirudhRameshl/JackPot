package com.fidelity;

import com.fidelity.integration.DataSource;
import com.fidelity.integration.PortfolioDao;
//import com.fidelity.integration.PortfolioDaoImpl;
import com.fidelity.integration.PortfolioImpl;
import com.fidelity.model.AccountType;
import com.fidelity.model.AssetClass;
import com.fidelity.model.Portfolio;
import com.fidelity.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class PortfolioDaoImplTest {
    PortfolioDao<Portfolio> dao;

    @BeforeEach
    void setUp(){
        dao = new PortfolioImpl();

    }

    @Test
    void checkInsertPortfolio(){
        User user = new User(21,"Swathika","B","s@gmail.com","123",4,"8220187848");
        Portfolio p = new Portfolio(111,"RTC",new BigDecimal("21"),new BigDecimal("34.5"),new BigDecimal("8"),new BigDecimal("1021"),new BigDecimal("23"),new BigDecimal("10"),new BigDecimal(("9980")), AccountType.BROKERAGE,user, AssetClass.SMALL_CAP);
        dao.insertPortfolio(p);
    }

    @Test
    void checkInsertPortfolioWithUser(){
        User user = new User(23,"Anirudh","Styles","h@gmail.com","456",4,"8220187848");
        Portfolio p = new Portfolio(2345,"RTC",new BigDecimal("21"),new BigDecimal("34.5"),new BigDecimal("8"),new BigDecimal("1021"),new BigDecimal("23"),new BigDecimal("10"),new BigDecimal(("9980")), AccountType.BROKERAGE,user, AssetClass.SMALL_CAP);
        dao.insertPortfolio(p);
    }

    @Test
    void checkGetAllPortfolio(){
        dao.getAllPortfolio();
    }

    @Test
    void basicCheck(){
        try {
            assertNotNull(DataSource.getConnection());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
