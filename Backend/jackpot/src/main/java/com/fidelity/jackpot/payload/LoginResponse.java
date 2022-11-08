package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class LoginResponse {
    private Long userId;
    private String firstName;
    private String lastName;
    private String jwt;
}
