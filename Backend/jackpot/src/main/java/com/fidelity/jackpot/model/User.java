package com.fidelity.jackpot.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_detail")
public class User {
    private Integer userID;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Integer investmentRisk;
    private String phoneNumber;

    public User() {

    }

    public User(Integer userID, String firstName, String lastName, String email, String password, Integer investmentRisk, String phoneNumber) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.investmentRisk = investmentRisk;
        this.phoneNumber = phoneNumber;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getInvestmentRisk() {
        return investmentRisk;
    }

    public void setInvestmentRisk(Integer investmentRisk) {
        this.investmentRisk = investmentRisk;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
