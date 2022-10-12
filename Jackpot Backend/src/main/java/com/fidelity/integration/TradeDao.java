package com.fidelity.integration;

import java.math.BigDecimal;

public interface TradeDao {
    public boolean buyStock(String fundName, BigDecimal quantity, BigDecimal price);
    public boolean sellStock(String fundName, BigDecimal quantity, BigDecimal price);
}
