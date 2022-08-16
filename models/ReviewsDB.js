"use strict";

var db = require('../db-connections');


class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * from mydb.review";
        db.query(sql, callback);
    }

    addReview(review, callback){
        var sql = "INSERT INTO review (user_Id, restaurant_Id, description, rating , price , datePosted, like_review ,picture_review , title) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getUser_Id(), review.getRestaurant_Id(),review.getDescription(), review.getRating(), review.getPrice(), review.getDatePosted(), review.getLike_review(), review.getPicture_review(), review.getTitle()], callback);
    }
    updateReview(review, callback){
        var sql = "UPDATE review SET user_Id = ?, restaurant_Id = ?, description = ?, rating = ?, price = ?, datePosted = ?, like_review = ?, picture_review = ?, title = ? WHERE _Id = ?";
        return db.query(sql, [review.getUser_Id(), review.getRestaurant_Id(), review.getDescription(), review.getRating(), review.getPrice(), review.getDatePosted(), review.getLike_review(), review.getPicture_review(),review.getTitle(), review.getId()], callback);
    }

    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _Id = ?";
        return db.query(sql, [reviewID], callback);
    }

    ReviewAndUser(review, callback){
        var sql ="SELECT description, rating, price, datePosted, like_review, picture_review, title, username FROM( review INNER JOIN user ON review.user_Id = user._Id) WHERE user_Id = ?";
        return db.query(sql,[review.getUser_Id()],callback);
    
    }

    
    
}

module.exports = ReviewsDB;