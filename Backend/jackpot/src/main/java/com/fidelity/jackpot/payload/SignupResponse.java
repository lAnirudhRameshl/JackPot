package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class SignupResponse {
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private Integer investmentRisk;
    private String phoneNumber;
}
