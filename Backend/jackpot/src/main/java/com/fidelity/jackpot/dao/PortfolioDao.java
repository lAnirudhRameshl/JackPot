package com.fidelity.jackpot.dao;

import java.util.List;

public interface PortfolioDao <T>{
    List<T> getAllPortfolio();
    void insertPortfolio (T t);
    void deletePortfolioById (int id);
}
