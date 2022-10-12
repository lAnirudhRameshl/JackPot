package com.fidelity.integration;

import com.fidelity.model.User;

import java.util.List;

public interface UserDao {
    List<User> getAllUsers();
    User getUserById(Integer userId);
    User insertUser(User User);
    User updateUser(User User);
    void deleteUserById(int id);
}
