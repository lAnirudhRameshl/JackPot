package com.fidelity;

import com.fidelity.integration.UserDao;
import com.fidelity.integration.UserDaoImpl;
import com.fidelity.model.User;

public class App 
{
    public static void main( String[] args )
    {

        UserDaoImpl userDaoImpl = new UserDaoImpl();

        User user = new User();
        user.setFirstName("Anirudh");
        user.setLastName("Ramesh");
        user.setEmail("anirudhramesh0@gmail.com");
        user.setPassword("Passw0rd!");
        user.setInvestmentRisk(5);
        user.setPhoneNumber("9443390416");
        userDaoImpl.insertUser(user);
//        user.setLastName("Ram");
//        user.setUserID(3);
//        userDaoImpl.updateUser(user);
//        User retrivedUser = userDaoImpl.getUserById(1);
//        System.out.println("name: " + retrivedUser.getFirstName() + " " + retrivedUser.getLastName());
//        userDaoImpl.deleteUserById(4);
//        System.out.println(userDaoImpl.login("anirudhramesh0@gmail.com", "password!"));
    }
}
