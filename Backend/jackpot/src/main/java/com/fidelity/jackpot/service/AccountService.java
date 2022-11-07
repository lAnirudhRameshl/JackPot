package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.payload.AddAccountRequest;
import com.fidelity.jackpot.payload.UpdateAccountRequest;
import com.fidelity.jackpot.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService  {

    @Autowired
    private UserAccountRepository userAccountRepository;
    public List<UserAccount> getUserAccountByUserId(Long userId){

//        return userAccountRepository.findAll();
        return userAccountRepository.findByUser_UserId(userId);

    }

    @Transactional
    public UserAccount addUserAccountByUserId(AddAccountRequest addAcc){

         UserAccount UA_from_req = new UserAccount();;

        //System.out.println(addAcc.toString());
        UA_from_req.setUserAccountId(addAcc.getUserAccountId());
        UA_from_req.setMarginAvailable(addAcc.getMarginAvailable());
        UA_from_req.setMarginUsed(addAcc.getMarginUsed());

        UA_from_req.setUser(new User());
        UA_from_req.setAccountType(new AccountType());
        UA_from_req.getAccountType().setAccountTypeId(addAcc.getAccountTypeId());
        UA_from_req.getUser().setUserId(addAcc.getUserId());

        return userAccountRepository.save(UA_from_req);
    }

    @Transactional
    public UserAccount updateUserAccountMarginByUserAccountId(UpdateAccountRequest uar){

        UserAccount acc2update = userAccountRepository.findById(uar.getUserAccountId()).get();
        acc2update.setMarginAvailable(uar.getMarginAvailable());
        acc2update.setMarginUsed(uar.getMarginUsed());

        return userAccountRepository.save(acc2update);

    }
    
}
