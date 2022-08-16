"use strict";

class Comment {

    constructor(id_review, userId, restaurantId, commentThumbs, commentTitle, comment, username, restaurantName, timestamp) 
    {
        this.id_review = id_review;

        this.userId = userId;

        this.restaurantId = restaurantId;

        this.commentThumbs = commentThumbs;

        this.commentTitle = commentTitle;

        this.comment = comment;

        this.username = username;

        this.restaurantName = restaurantName;

        this.timestamp = timestamp;
    }


    getId_Review() 
    {
        return this.id_review;
    }

    getUserId() 
    {
        return this.userId;
    }

    getRestaurantId() 
    {
        return this.restaurantId;
    }

    getCommentThumbs() 
    {
        return this.commentThumbs;
    }

    getCommentTitle() 
    {
        return this.commentTitle;
    }

    getComment()
    {
        return this.comment;
    }

    getUsername()
    {
        return this.username;
    }

    getRestaurantName()
    {
        return this.restaurantName;
    }

    getTimestamp()
    {
        return this.timestamp;
    }


    setUserId(userId) 
    {
        this.userId = userId;
    }

    setRestaurantId(restaurantId) 
    {
        this.restaurantId = restaurantId;
    }

    setCommentThumbs(commentThumbs) 
    {
        this.commentThumbs = commentThumbs;
    }

    setCommentTitle(commentTitle) 
    {
        this.commentTitle = commentTitle; 
    }

    setComment(comment)
    {
        this.comment = comment; 
    }

    setUsername(username)
    {
        this.username = username; 
    }

    setRestaurantName(restaurantName)
    {
        this.restaurantName = restaurantName; 
    }

    setTimestamp(timestamp)
    {
        this.timestamp = timestamp; 
    }

}

module.exports = Comment;