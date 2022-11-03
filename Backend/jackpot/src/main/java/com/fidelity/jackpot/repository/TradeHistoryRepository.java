package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.TradeHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeHistoryRepository extends JpaRepository<TradeHistory,Long> {
    List<TradeHistory> findByUserId(Long userId);
}
