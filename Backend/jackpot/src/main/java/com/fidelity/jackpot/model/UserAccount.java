package com.fidelity.jackpot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "USER_ACCOUNT")
public class UserAccount {
    @Id
    String userAccountId;

    BigDecimal marginAvailable;

    BigDecimal marginUsed;

    @OneToOne
    @JoinColumn(name = "account_type_id", referencedColumnName = "account_type_id")
    AccountType accountType;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    User user;
}
