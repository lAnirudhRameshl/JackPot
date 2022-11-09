package com.fidelity.jackpot.service;

import com.fidelity.jackpot.exception.ResourceNotFoundException;
import com.fidelity.jackpot.exception.UserException;
import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.payload.LoginResponse;
import com.fidelity.jackpot.payload.SignupRequest;
import com.fidelity.jackpot.payload.SignupResponse;
import com.fidelity.jackpot.payload.UpdateUserRequest;
import com.fidelity.jackpot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponse login(String email, String password) {
        LoginResponse response = null;

        try {
            User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));

            if(passwordEncoder.matches(password, user.getPassword())) {
                response = new LoginResponse();
                response.setUserId(user.getUserId());
                response.setFirstName(user.getFirstName());
                response.setLastName(user.getLastName());
                response.setEmail(user.getEmail());
                response.setInvestmentRisk(user.getInvestmentRisk());
                response.setPhoneNumber(user.getPhoneNumber());
            }
        } catch (Exception e) {
            throw new UserException(e.getMessage());
        }

        return response;
    }

    @Transactional
    public SignupResponse signup(SignupRequest signupRequest) {
        SignupResponse response = new SignupResponse();

        User user = new User();
        user.setFirstName(signupRequest.getFirstName());
        user.setLastName(signupRequest.getLastName());
        user.setInvestmentRisk(signupRequest.getInvestmentRisk());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setPhoneNumber(signupRequest.getPhoneNumber());

        user = userRepository.saveAndFlush(user);

        response.setUserId(user.getUserId());
        response.setEmail(user.getEmail());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setPhoneNumber(user.getPhoneNumber());
        response.setInvestmentRisk(user.getInvestmentRisk());

        return response;
    }

    @Transactional
    public LoginResponse updateUser(Long userId, UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserException("User with ID not found"));

        user.setFirstName(updateUserRequest.getFirstName());
        user.setLastName(updateUserRequest.getLastName());
        user.setPhoneNumber(updateUserRequest.getPhoneNumber());
        user.setInvestmentRisk(updateUserRequest.getInvestmentRisk());

        user = userRepository.save(user);

        LoginResponse response = new LoginResponse();
        response.setUserId(user.getUserId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setEmail(user.getEmail());
        response.setInvestmentRisk(user.getInvestmentRisk());
        response.setPhoneNumber(user.getPhoneNumber());

        return response;

    }
}
