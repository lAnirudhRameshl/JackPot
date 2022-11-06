package com.fidelity.jackpot.repository;

import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount,String> {
    List<UserAccount> findByUser_UserId (Long userId);



    Optional<UserAccount> findByAccountTypeAccountTypeName(String accountTypeName);
}
