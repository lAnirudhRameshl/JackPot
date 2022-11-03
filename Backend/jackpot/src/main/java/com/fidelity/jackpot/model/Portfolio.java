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
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long portfolioId;

    private String fundName;

    private BigDecimal quantity;

    private BigDecimal avgCost;

    private BigDecimal LTP;

    private BigDecimal currentValue;

    private BigDecimal netChange;

    private BigDecimal dayChange;

    private BigDecimal profitLoss;

    @OneToOne
    @JoinColumn(name = "account_type_id", referencedColumnName = "account_type_id")
    private AccountType accountType;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "asset_class_id", referencedColumnName = "asset_class_id")
    private AssetClass assetClass;
}
