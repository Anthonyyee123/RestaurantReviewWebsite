"use strict";



var db = require('../db-connection');

class RestaurantDB{

    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }

    addRestaurant(restaurant, callback){
        var sql = "INSERT INTO restaurant_review.restaurant (nameRestaurant, hyperlink, numReviews, averageThumbs, address, openingHours, phone, map, cuisine, price, teaser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [restaurant.getNameRestaurant(), restaurant.getHyperlink(), restaurant.getNumReviews(), restaurant.getAverageThumbs(), restaurant.getAddress(), restaurant.getOpeningHours(), restaurant.getPhone(), restaurant.getMap(), restaurant.getCuisine(), restaurant.getPrice(), restaurant.getTeaser()], callback);
    }

    updateRestaurant(restaurant, callback){
        var sql = "UPDATE restaurant_review.restaurant SET hyperlink = ?, numReviews = ?, averageThumbs = ?, address = ?, openingHours = ?, phone = ?, map = ?, cuisine = ?, price = ?, teaser = ? WHERE id_restaurant = ?";
        return db.query(sql, [restaurant.getHyperlink(), restaurant.getNumReviews(), restaurant.getAverageThumbs(), restaurant.getAddress(), restaurant.getOpeningHours(), restaurant.getPhone(), restaurant.getMap(), restaurant.getCuisine(), restaurant.getPrice(), restaurant.getTeaser(), restaurant.getId_Restaurant()], callback);
    }

    deleteRestaurant(restaurantID, callback){
        var sql = "DELETE from restaurant_review.restaurant WHERE id_restaurant = ?";
        return db.query(sql, [restaurantID], callback);
    }

    getSearchRestaurant(nameRestaurant, address, callback){
        var sql = "SELECT * from restaurant_review.restaurant WHERE nameRestaurant LIKE '%" + nameRestaurant.trim() + "%'" + " OR address LIKE '%" + address.trim() + "%' ";
        db.query(sql, callback);
    }

    searchRest(keyword, callback){
        var key =  "%"+keyword+"%";
        var sql = "SELECT * from restaurant_review.restaurant WHERE nameRestaurant LIKE ? " ;
        db.query(sql, [key], callback);
    }

    // Filter by 1 category

    getFilterCuisine(cuisine, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE cuisine = '" + cuisine + "' ";
        db.query(sql, callback);
    }

    getFilterThumb(averageThumbs, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE averageThumbs = '" + averageThumbs + "' ";
        db.query(sql, callback);
    }

    getFilterPrice(price, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE price = '" + price + "' ";
        db.query(sql, callback);
    }

    // Filter by 2 categories

    getFilterCuisineThumb(cuisine, averageThumbs, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE cuisine = '" + cuisine + "' AND averageThumbs = '" + averageThumbs + "' ";
        db.query(sql, callback);
    }

    getFilterThumbPrice(averageThumbs, price, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE averageThumbs = '" + averageThumbs + "' AND price = '" + price + "' ";
        db.query(sql, callback);
    }

    getFilterCuisinePrice(cuisine, price, callback) {
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE cuisine = '" + cuisine + "' AND price = '" + price + "' ";
        db.query(sql, callback);
    }
    
    // Filter by all 3 categories

    getFilterCuisineThumbPrice(cuisine, averageThumbs, price, callback) {
        var sql = "SELECT * from restaurant_review.restaurant WHERE cuisine = '" + cuisine + "' AND averageThumbs = '" + averageThumbs + "' AND price = '" + price + "' ";
        db.query(sql, callback);
    }


}



module.exports = RestaurantDB;