package com.fidelity.jackpot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AccountType {
//    Brokerage, 401k, IRAs, Roth IRAs, HSAs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountTypeId;

    private String accountTypeName;
}
