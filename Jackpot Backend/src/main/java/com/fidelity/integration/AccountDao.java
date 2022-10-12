package com.fidelity.integration;

import com.fidelity.model.UserAccount;

import java.util.List;

public interface AccountDao {
    public List<UserAccount> getUserAccounts(Integer userId);
    public UserAccount addUserAccount(UserAccount userAccount);
    public void deleteUserAccount(String accountNumber, Integer userId);
}
