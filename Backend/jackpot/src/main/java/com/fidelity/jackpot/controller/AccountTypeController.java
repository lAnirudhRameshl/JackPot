package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.service.AccountTypeService;
import com.fidelity.jackpot.service.AssetClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jackpot/api/v1/account-type")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountTypeController {
    @Autowired
    private AccountTypeService accountTypeService;

    @GetMapping
    public ResponseEntity<?> getAllAccountTypes() {
        ResponseEntity<?> response = null;

        try {
            response = new ResponseEntity<>(accountTypeService.getAllAccountTypes(), HttpStatus.OK);
        } catch (Exception e) {
            response = new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return response;
    }

}
