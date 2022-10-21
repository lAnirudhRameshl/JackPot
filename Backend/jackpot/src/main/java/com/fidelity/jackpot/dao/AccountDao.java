package com.fidelity.jackpot.dao;

import com.fidelity.jackpot.model.User;

import java.util.List;

public interface AccountDao {
    public List<User> getUserAccounts(Integer userId);
    public User addUserAccount(User userAccount);
    public void deleteUserAccount(String accountNumber, Integer userId);
}
