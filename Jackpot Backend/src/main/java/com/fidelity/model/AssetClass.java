package com.fidelity.model;

public enum AssetClass {

    MAIN_INDEX(1,"Main Index"),
    SMALL_CAP (2,"Small Cap Company"),
    BONDS(3,"Bonds");

    private int assetID;
    private String assetName;

    AssetClass(int assetID, String assetName) {
        this.assetID = assetID;
        this.assetName = assetName;
    }

    public static AssetClass of(int code){
        for(AssetClass acctType1:values()){
            if(acctType1.assetID == code){
                return acctType1;
            }
        }
        throw new IllegalArgumentException("Unknown asset type");
    }

    public int getAssetID() {
        return assetID;
    }

    public void setAssetID(int assetID) {
        this.assetID = assetID;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }
}
