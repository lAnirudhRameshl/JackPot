package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio,Long> {
//    List<Portfolio> findByUserId (Long userId);

    Optional<Portfolio> findByFundNameAndUserUserId(String fundName, Long userId);
}
