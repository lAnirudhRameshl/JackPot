package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class SignupRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private Integer investmentRisk;
}
