package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.AssetClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetClassRepository extends JpaRepository<AssetClass,Long> {
}
