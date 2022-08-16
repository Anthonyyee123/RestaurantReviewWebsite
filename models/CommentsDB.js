"use strict";

var db = require('../db-connection');

class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from restaurant_review.reviews";
        db.query(sql, callback);
    }

    addComment(reviews, callback){
        var sql = "INSERT INTO restaurant_review.reviews (userId, restaurantId, commentThumbs, commentTitle, comment, username, restaurantName, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [reviews.getUserId(), reviews.getRestaurantId(), reviews.getCommentThumbs(), reviews.getCommentTitle(), reviews.getComment(), reviews.getUsername(), reviews.getRestaurantName(), reviews.getTimestamp()], callback);
    }

    updateComment(reviews, callback){
        var sql = "UPDATE restaurant_review.reviews SET commentThumbs = ?, commentTitle = ?, comment = ?, timestamp = ? WHERE id_review = ?";
        return db.query(sql, [reviews.getCommentThumbs(), reviews.getCommentTitle(), reviews.getComment(), reviews.getTimestamp(), reviews.getId_Review()], callback);
    }

    deleteComment(reviewsID, callback){
        var sql = "DELETE from restaurant_review.reviews WHERE id_review = ?";
        return db.query(sql, [reviewsID], callback);
    }

    getAllRestaurantComments(reviews, callback){
        var sql = "SELECT * FROM restaurant_review.reviews WHERE restaurantId = ?";
        db.query(sql, [reviews.getRestaurantId()], callback);
    }

}

module.exports = CommentsDB;