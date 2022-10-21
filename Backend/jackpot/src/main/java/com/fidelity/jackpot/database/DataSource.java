package com.fidelity.jackpot.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class DataSource {
   private static Connection connection = null;

    private DataSource() {}

    public static Connection getConnection() throws SQLException {
        if(connection == null){
            ResourceBundle resourceBundle = ResourceBundle.getBundle("db");
            String url = resourceBundle.getString("db.url");
            String username=resourceBundle.getString("db.username");
            String psswd=resourceBundle.getString("db.password");

            connection= DriverManager.getConnection(url,username,psswd);
        }
        return connection;
    }
}
