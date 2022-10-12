package com.fidelity;

import com.fidelity.integration.PortfolioDao;
import com.fidelity.integration.PortfolioDaoImpl;
import com.fidelity.model.AccountType;
import com.fidelity.model.AssetClass;
import com.fidelity.model.Portfolio;
import com.fidelity.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

public class PortfolioDaoImplTest {
    PortfolioDao<Portfolio> dao;

    @BeforeEach
    void setUp(){
        dao = new PortfolioDaoImpl();

    }

    @Test
    void checkInsertPortfolio(){
        User user = new User(1,"Swathika","B","s@gmail.com","123",4,"89756434");
        Portfolio p = new Portfolio(111,"RTC",new BigDecimal("21"),new BigDecimal("34.5"),new BigDecimal("8"),new BigDecimal("1021"),new BigDecimal("23"),new BigDecimal("10"),new BigDecimal(("9980")), AccountType.BROKERAGE,user, AssetClass.SMALL_CAP);
        dao.insertPortfolio(p);
    }
}
