package com.fidelity.integration;

import com.fidelity.model.User;

import java.util.List;

public interface UserDao {
    User getUserById(Integer userId);
    User insertUser(User user);
    User updateUser(User user);
    void deleteUserById(int id);

    public boolean login(String email, String password);
}
