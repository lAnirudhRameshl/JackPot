package com.fidelity.integration;

import java.util.List;

public interface PortfolioDao <T>{
    List<T> getAllPortfolio();
    void insertPortfolio (T t);
    void deletePortfolioById (int id);
}
