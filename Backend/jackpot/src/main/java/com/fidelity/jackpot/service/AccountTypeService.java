package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.AccountType;
import com.fidelity.jackpot.payload.AccountTypeResponse;
import com.fidelity.jackpot.repository.AccountTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountTypeService {

    @Autowired
    private AccountTypeRepository accountTypeRepository;

    public List<AccountTypeResponse> getAllAccountTypes() {
        return accountTypeRepository.findAll().stream().map(accountType -> {
            AccountTypeResponse accountTypeResponse = new AccountTypeResponse();
            accountTypeResponse.setAccountType(accountType.getAccountTypeName());
            accountTypeResponse.setAccountTypeId(accountType.getAccountTypeId());
            return accountTypeResponse;
        }).collect(Collectors.toList());
    }

}
