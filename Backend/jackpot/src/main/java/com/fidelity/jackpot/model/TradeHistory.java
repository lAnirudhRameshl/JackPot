package com.fidelity.jackpot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class TradeHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tradeHistoryId;


    private String fundName;

    private BigDecimal quantity;

    private BigDecimal price;

    private Timestamp transactionDate;

    @OneToOne
    @JoinColumn(name = "account_type_id", referencedColumnName = "account_type_id")

    private AccountType accountType;

    @OneToOne
    @JoinColumn(name = "asset_class_id", referencedColumnName = "asset_class_id")

    private AssetClass assetClass;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
