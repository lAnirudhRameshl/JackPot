package com.fidelity.integration;

import java.util.List;

public interface UserDao<T> {
    List<T> getAllUsers();
    void insertUser(T User);
    void updateUser(T User);
    void deleteUserById(int id);
}
