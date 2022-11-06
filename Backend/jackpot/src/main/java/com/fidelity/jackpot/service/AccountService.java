package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.math.BigDecimal;

@Service
public class AccountService  {

    @Autowired
    private UserAccountRepository userAccountRepository;
    public List<UserAccount> getUserAccountByUserId(Long userId){

//        return userAccountRepository.findAll();
        return userAccountRepository.findByUser_UserId(userId);

    }

    public UserAccount addUserAccountByUserId(){return null;}

    public UserAccount updateUserAccountByUserId(){return null;}
    
}
