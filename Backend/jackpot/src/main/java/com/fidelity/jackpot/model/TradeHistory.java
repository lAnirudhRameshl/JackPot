package com.fidelity.jackpot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
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
    private Long TradeHistoryID;

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

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
