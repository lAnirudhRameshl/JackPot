package com.fidelity.jackpot.payload;

import lombok.Data;

@Data
public class StockDetailResponse {
    private String name;
    private Double last;
    private Double change;
    private Double volume;
    private String company;
    private String index;
    private String sector;
}
