package com.fidelity.jackpot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AccountType {
//    Brokerage, 401k, IRAs, Roth IRAs, HSAs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_type_id")
    private Long accountTypeId;

    @Column(name= "account_type_name")
    private String accountTypeName;
}
