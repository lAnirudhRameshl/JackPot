package com.fidelity.jackpot.service;

import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers (){
        return userRepository.findAll();
    }
    public User getByUserId (Long userId){
        return userRepository.findById(userId).get();
    }
    public User addUser (User user){
        return userRepository.save(user);
    }
    public User updateUser (User user,Long userId){
        return null;
    }
    public void deleteUser (Long userId){
        userRepository.deleteById(userId);
    }
}
