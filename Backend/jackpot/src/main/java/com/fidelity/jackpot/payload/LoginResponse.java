package com.fidelity.jackpot.payload;

import lombok.Data;

import java.util.Date;


@Data
public class LoginResponse {
    private Long userId;
    private String firstName;
    private String lastName;
    private String jwt;
    private String email;
    private String phoneNumber;
    private Integer investmentRisk;
}
