package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount,Long> {
    List<UserAccount> findByUserId (Long userId);
}
