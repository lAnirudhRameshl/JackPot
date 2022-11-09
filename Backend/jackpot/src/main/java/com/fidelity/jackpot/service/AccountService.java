package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.ResourceNotFoundException;
import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.payload.AddAccountRequest;
import com.fidelity.jackpot.payload.UpdateAccountRequest;
import com.fidelity.jackpot.repository.AccountTypeRepository;
import com.fidelity.jackpot.repository.UserAccountRepository;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService  {

    @Autowired
    private UserAccountRepository userAccountRepository;

    @Autowired
    private AccountTypeRepository accountTypeRepository;

    @Autowired
    private UserRepository userRepository;
    public List<UserAccount> getUserAccountByUserId(Long userId){

//        return userAccountRepository.findAll();
        return userAccountRepository.findByUser_UserId(userId);

    }

    @Transactional
    public UserAccount addUserAccountByUserId(AddAccountRequest addAcc){

         UserAccount UA_from_req = new UserAccount();

        //System.out.println(addAcc.toString());
        UA_from_req.setAccountNumber(addAcc.getAccountNumber());
        UA_from_req.setMarginAvailable(addAcc.getMarginAvailable());
        UA_from_req.setMarginUsed(BigDecimal.ZERO);

        UA_from_req.setUser(userRepository.findById(addAcc.getUserId()).orElseThrow(() -> new ResourceNotFoundException("User with given ID not found")));
        UA_from_req.setAccountType(accountTypeRepository.findById(addAcc.getAccountTypeId()).orElseThrow(() -> new ResourceNotFoundException("Account type not found")));

        return userAccountRepository.save(UA_from_req);
    }

    @Transactional
    public UserAccount updateUserAccountMarginByUserAccountId(UpdateAccountRequest uar){

        UserAccount acc2update = userAccountRepository.findByAccountTypeAccountTypeIdAndUserUserId(uar.getAccountTypeId(), uar.getUserId()).orElseThrow(() -> new ResourceNotFoundException("Cannot find account"));
        acc2update.setMarginAvailable(acc2update.getMarginAvailable().add(uar.getMargin()));

        return userAccountRepository.save(acc2update);

    }
    
}
