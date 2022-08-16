"use strict";

const RestaurantDB = require('../models/RestaurantDB');
const Restaurant = require('../models/Restaurant');

var restaurantDB = new RestaurantDB();



function getAllRestaurants(request, respond){

    restaurantDB.getAllRestaurants(function(error, result){

        if(error){
            respond.json(error);
        }

        else{
            respond.json(result);
        }
    });
}

function addRestaurant(request, respond){
    var restaurant = new Restaurant(null, request.body.nameRestaurant, request.body.hyperlink, request.body.numReviews, request.body.averageThumbs, request.body.address, request.body.openingHours, request.body.phone, request.body.map, request.body.cuisine, request.body.price, request.body.teaser);
    restaurantDB.addRestaurant(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function updateRestaurant(request, respond){
    var restaurant = new Restaurant(parseInt(request.params.id), request.body.nameRestaurant, request.body.hyperlink, request.body.numReviews, request.body.averageThumbs, request.body.address, request.body.openingHours, request.body.phone, request.body.map, request.body.cuisine, request.body.price, request.body.teaser);
    restaurantDB.updateRestaurant(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteRestaurant(request, respond){
    var restaurantID = request.params.id;
    restaurantDB.deleteRestaurant(restaurantID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantSearch(request, respond){
    restaurantDB.getSearchRestaurant(request.body.nameRestaurant, request.body.address, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRest(request, respond) {
    var searchTerm = request.params.nameRestaurant;
    restaurantDB.searchRest(searchTerm, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });

}

function getFilterCuisine(request, respond){
    restaurantDB.getFilterCuisine(request.body.cuisine, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterThumb(request, respond){
    restaurantDB.getFilterThumb(request.body.averageThumbs, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterPrice(request, respond){
    restaurantDB.getFilterPrice(request.body.price, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterCuisineThumb(request, respond){
    restaurantDB.getFilterCuisineThumb(request.body.cuisine, request.body.averageThumbs, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterThumbPrice(request, respond){
    restaurantDB.getFilterThumbPrice(request.body.averageThumbs, request.body.price, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterCuisinePrice(request, respond){
    restaurantDB.getFilterCuisinePrice(request.body.cuisine, request.body.price, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getFilterCuisineThumbPrice(request, respond){
    restaurantDB.getFilterCuisineThumbPrice(request.body.cuisine, request.body.averageThumbs, request.body.price, function(error, result){
        if(error){
             respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}



module.exports = {getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant, getRestaurantSearch, 
    getFilterCuisine, getFilterThumb, getFilterPrice, 
    getFilterCuisineThumb, getFilterThumbPrice, getFilterCuisinePrice, 
    getFilterCuisineThumbPrice, searchRest};