"use strict";

var db = require('../db-connection');


class UserDB{
    getAllUsers(callback){
        var sql = "SELECT * from restaurant_review.user";
        db.query(sql, callback);
    }

    addUser(user, callback){
        var sql = "INSERT INTO restaurant_review.user (firstName, lastName, userId, password, gender, mobile, address, unitNo, postalCode, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [user.getFirstName(), user.getLastName(), user.getUserId(), user.getPassword(), user.getGender(), user.getMobile(), user.getAddress(), user.getUnitNo(), user.getPostalCode(), user.getEmail()], callback);
    }

    loginUser(userId, callback){
        var sql = "SELECT password from restaurant_review.user WHERE userId = ?";
        db.query(sql, [userId], callback);
    }

    getUser(userId,callback){
        var sql = "SELECT * from restaurant_review.user WHERE userId = ?";
        db.query(sql,[userId],callback);
    }

    updateUser(user, callback){
        var sql = "UPDATE restaurant_review.user SET firstName = ?, lastName = ?, password = ?, gender = ?, mobile = ?, address = ?, unitNo = ?, postalCode = ?, email = ? WHERE id_user = ?";
        return db.query(sql, [user.getFirstName(), user.getLastName(), user.getPassword(), user.getGender(), user.getMobile(), user.getAddress(), user.getUnitNo(), user.getPostalCode(), user.getEmail(), user.getId_User()], callback);
    }

    deleteUser(userID, callback){
        var sql = "DELETE from restaurant_review.user WHERE id_user = ?";
        return db.query(sql, [userID], callback);
    }

    validateUserPassword(user, callback){
        var sql = "SELECT password FROM restaurant_review.user WHERE id_user = ?";
        db.query(sql, [user.getId_User()], callback);
    }

    validateUserId(user, callback){
        var sql = "SELECT userId FROM restaurant_review.user WHERE id_user = ?";
        db.query(sql, [user.getId_User()], callback);
    }
    
}

module.exports = UserDB;