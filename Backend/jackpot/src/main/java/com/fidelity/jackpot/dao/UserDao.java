package com.fidelity.jackpot.dao;

import com.fidelity.jackpot.model.User;

public interface UserDao {
    User getUserById(Integer userId);
    User insertUser(User user);
    User updateUser(User user);
    void deleteUserById(int id);

    public boolean login(String email, String password);
}