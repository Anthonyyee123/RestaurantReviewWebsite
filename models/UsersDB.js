"use strict";

var db = require('../db-connections');

class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * from mydb.user";
        db.query(sql, callback);
    }

    addUser(comment, callback){
        var sql = "INSERT INTO user (email, password, gender, profile_picture, first_name, last_name, mobilenum, address, username) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?)";
        db.query(sql, [comment.getEmail(), comment.getPassword(), comment.getGender(), comment.getProfile_picture(), comment.getFirst_name(), comment.getLast_name(), comment.getMobilenum(), comment.getAddress(), comment.getUsername()], callback);
    }
    updateUser(comment, callback){
        var sql = "UPDATE user SET email = ?, password = ?, gender = ?, profile_picture = ?, first_name = ?, last_name = ?, mobilenum = ?, address = ?, username = ? WHERE _id = ?";
        return db.query(sql, [comment.getEmail(), comment.getPassword(), comment.getGender(), comment.getProfile_picture(), comment.getFirst_name(),comment.getLast_name(),comment.getMobilenum(),comment.getAddress(),comment.getUsername(),comment.getId()], callback);
    }
    deleteUser(userID, callback){
        var sql = "DELETE from user WHERE _id = ?";
        return db.query(sql, [userID], callback);
    }
}

module.exports = UsersDB;