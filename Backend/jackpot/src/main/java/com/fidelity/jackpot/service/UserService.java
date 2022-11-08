package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.ResourceNotFoundException;
import com.fidelity.jackpot.exception.UserException;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean login(String email, String password) {
        boolean isLoggedIn = false;

        try {
            User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));

        } catch (Exception e) {
            throw new UserException(e.getMessage());
        }

        return isLoggedIn;
    }
}
