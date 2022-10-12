package com.fidelity.integration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class DataSource {
   private static Connection connection = null;

    private DataSource() {}

    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        if(connection == null){
            Class.forName("oracle.jdbc.driver.OracleDriver");
            ResourceBundle resourceBundle = ResourceBundle.getBundle("db");
            String url = resourceBundle.getString("db.url");
            String username=resourceBundle.getString("db.username");
            String psswd=resourceBundle.getString("db.password");

            connection= DriverManager.getConnection(url,username,psswd);
        }
        return connection;
    }
}
