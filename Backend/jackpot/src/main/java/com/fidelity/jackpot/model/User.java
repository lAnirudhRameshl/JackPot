package com.fidelity.jackpot.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user_detail")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String firstName;

    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    private Integer investmentRisk;

    @Column(nullable = false, unique = true)
    private String phoneNumber;

//    @OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
//    private Set<UserAccount> accounts;

//    @JsonIgnore
    @OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Portfolio> portfolios = new ArrayList<>();


//    @OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
//    private List<TradeHistory> tradeHistories;

}
