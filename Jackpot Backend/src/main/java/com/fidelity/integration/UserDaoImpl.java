package com.fidelity.integration;

import com.fidelity.exception.DatabaseException;
import com.fidelity.model.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDaoImpl implements UserDao{

    Connection connection;

    public UserDaoImpl() {
        try {
            connection = DataSource.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not establish connection to database");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not find driver");
        }
    }

    public User getUserById(Integer userId) {
        String sql = "SELECT * FROM user_detail WHERE user_id=?";
        User user = null;
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()) {
                String firstName = resultSet.getString(2);
                String lastName = resultSet.getString(3);
                String email = resultSet.getString(4);
                String password = resultSet.getString(5);
                int investmentRisk = resultSet.getInt(6);
                String phoneNumber = resultSet.getString(7);
                user = new User(userId, firstName, lastName, email, password, investmentRisk, phoneNumber);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not retrieve data");
        }
        return user;
    }

    public User insertUser(User user) {
        String sql = "INSERT INTO user_detail(first_name, last_name, email, password, investment_risk, phone_number)" +
                " VALUES (?, ?, ?, ?, ?, ?)";
        String emailCheckQuery = "SELECT * from user_detail WHERE email=?";
        String phoneNumberCheckQuery = "SELECT * FROM user_detail where phone_number=?";

        try {
            PreparedStatement preparedStatement = connection.prepareStatement(emailCheckQuery);
            preparedStatement.setString(1, user.getEmail());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()) {
                throw new DatabaseException("Entered email already exists");
            }
            preparedStatement = connection.prepareStatement(phoneNumberCheckQuery);
            preparedStatement.setString(1, user.getPhoneNumber());
            resultSet = preparedStatement.executeQuery();
            if(resultSet.next()) {
                throw new DatabaseException("Entered phone number already exists");
            }
            preparedStatement = connection.prepareStatement(sql, new String[]{"user_id"});
            preparedStatement.setString(1, user.getFirstName());
            preparedStatement.setString(2, user.getLastName());
            preparedStatement.setString(3, user.getEmail());
            preparedStatement.setString(4, user.getPassword());
            preparedStatement.setInt(5, user.getInvestmentRisk());
            preparedStatement.setString(6, user.getPhoneNumber());
            int rows = preparedStatement.executeUpdate();
            if(rows >= 0) {
                ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
                if(generatedKeys.next()) {
                    user.setUserID(generatedKeys.getInt(1));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not add a new user");
        }
        return user;
    }

    public User updateUser(User user) {
        User existingUser = getUserById(user.getUserID());
        String sql = "UPDATE user_detail SET first_name=?,last_name=?, email=?, investment_risk=?, " +
                "phone_number=? WHERE user_id=?";
        try {
            if(!existingUser.getEmail().equals(user.getEmail())) {
                String emailCheckQuery = "SELECT * FROM user_detail WHERE email=?";
                PreparedStatement checkStatement = connection.prepareStatement(emailCheckQuery);
                checkStatement.setString(1, user.getEmail());
                ResultSet resultSet = checkStatement.executeQuery();
                if(resultSet.next()) {
                    throw new DatabaseException("Entered email already exists");
                }
            }
            if(!existingUser.getPhoneNumber().equals(user.getPhoneNumber())) {
                String phoneNumberQuery = "SELECT * FROM user_detail WHERE phone_number=?";
                PreparedStatement checkStatement = connection.prepareStatement(phoneNumberQuery);
                checkStatement.setString(1, user.getPhoneNumber());
                ResultSet resultSet = checkStatement.executeQuery();
                if(resultSet.next()) {
                    throw new DatabaseException("Entered phone number already exists");
                }
            }
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, user.getFirstName());
            preparedStatement.setString(2, user.getLastName());
            preparedStatement.setString(3, user.getEmail());
            preparedStatement.setInt(4, user.getInvestmentRisk());
            preparedStatement.setString(5, user.getPhoneNumber());
            preparedStatement.setInt(6, user.getUserID());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not update user");
        }
        return user;
    }

    public void deleteUserById(int id) {
        String sql = "DELETE FROM user_detail WHERE user_id=?";
        try {
            String checkUserQuery = "SELECT * FROM user_detail WHERE user_id=?";
            PreparedStatement preparedStatement = connection.prepareStatement(checkUserQuery);
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(!resultSet.next()) {
                throw new DatabaseException("User does not exist");
            }
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Could not delete user");
        }
    }

    @Override
    public boolean login(String email, String password) {
        boolean isLoggedIn = false;
        String sql = "SELECT * FROM user_detail WHERE email=?";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, email);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()) {
                if(resultSet.getString("password").trim().equals(password)) {
                    isLoggedIn = true;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new DatabaseException("Error while trying to log in");
        }
        return isLoggedIn;
    }
}
