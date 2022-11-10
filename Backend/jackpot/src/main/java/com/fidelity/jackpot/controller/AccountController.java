package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.model.UserAccount;
import com.fidelity.jackpot.payload.AddAccountRequest;
import com.fidelity.jackpot.payload.UpdateAccountRequest;
import com.fidelity.jackpot.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/jackpot/api/v1/account")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    public String index(){

        return "Jackpot-API-Accounts " ;

    }

    @GetMapping("/{userId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<UserAccount> getUserAccountByUserId(@PathVariable Long userId){
        return accountService.getUserAccountByUserId(userId);

    }



    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<?> addUserAccountByUserId(@RequestBody AddAccountRequest addAcc){

        ResponseEntity response = null;

        System.out.println("POST BODY => "+addAcc);

        try{
            response =  new ResponseEntity(accountService.addUserAccountByUserId(addAcc), HttpStatus.OK) ;
        }catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping
    public ResponseEntity<?> updateUserAccountMarginByUserAccountId(@RequestBody UpdateAccountRequest updAcc){
        ResponseEntity response = null;

        System.out.println("POST BODY => "+updAcc);

        try{
            response =  new ResponseEntity(accountService.updateUserAccountMarginByUserAccountId(updAcc), HttpStatus.OK) ;
        }catch (Exception e) {
            response = new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;

    }



}
