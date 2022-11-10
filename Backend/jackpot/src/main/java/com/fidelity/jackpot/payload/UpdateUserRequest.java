package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class UpdateUserRequest {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Integer investmentRisk;
}
