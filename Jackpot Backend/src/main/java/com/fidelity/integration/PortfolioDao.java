package com.fidelity.integration;

import java.util.List;

public interface PortfolioDao <T>{
    List<T> getAllPortfolio();
    T insertPortfolio (T t);
    void deletePortfolioById (int id);
}
