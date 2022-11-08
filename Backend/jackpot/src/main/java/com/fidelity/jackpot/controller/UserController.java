package com.fidelity.jackpot.controller;

import com.fidelity.jackpot.model.User;
import com.fidelity.jackpot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable("id")Long userId){
        return userService.getByUserId(userId);
    }

    @PostMapping
    public User add(@RequestBody User user){
        return userService.addUser(user);
    }

    @PutMapping("/{id}")
    public User update(@RequestBody User user, @PathVariable("id")Long userId){
        return userService.updateUser(user,userId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
    }




}
