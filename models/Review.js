"use strict";

class Review {
    constructor(id,user_Id, restaurant_Id, description, rating , price , datePosted , like_review , picture_review ,  title) {
        this.id = id;
        this.user_Id = user_Id;
        this.restaurant_Id = restaurant_Id;
        this.description = description;
        this.rating = rating;
        this.price = price;
        this.datePosted = datePosted;
        this.like_review = like_review;
        this.picture_review = picture_review;
        this.title = title;
    }

    getId() {
        return this.id;
    }

    getUser_Id() {
        return this.user_Id;
    }

    getRestaurant_Id() {
        return this.restaurant_Id;
    }

    getDescription() {
        return this.description;
    }

    getRating() {
        return this.rating;
    }

    getPrice() {
        return this.price;
    }

    getDatePosted() {
        return this.datePosted;
    }

    getLike_review() {
        return this.like_review;
    }

    getPicture_review() {
        return this.picture_review;
    }

    getTitle() {
        return this.title;
    }

    setUser_Id() {
        return this.user_Id;
    }

    setRestaurant_Id() {
        return this.restaurant_Id;
    }

    setDecription() {
        return this.description;
    }

    setRating() {
        return this.rating;
    }

    setPrice() {
        return this.price;
    }

    setDatePosted() {
        return this.datePosted;
    }

    setLike_review() {
        return this.like_review;
    }

    setPicture_review() {
        return this.picture_review;
    }

    setTitle() {
        return this.title;
    }

    
}

module.exports = Review;