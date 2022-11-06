package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    public String index(){

        return "Jackpot-API-Accounts " ;

    }

    @GetMapping("/{userId}")
    public List<UserAccount> getUserAccountByUserId(@PathVariable Long userId){
        return accountService.getUserAccountByUserId(userId);

    }


}
