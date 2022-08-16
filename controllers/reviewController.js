"use strict";
const ReviewDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewDB = new ReviewDB();


function getAllReviews(request, respond){
    reviewDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addReview(request, respond){
 
    var review = new Review(null,request.body.user_Id, request.body.restaurant_Id ,request.body.description, request.body.rating, request.body.price, request.body.datePosted, request.body.like_review, request.body.picture_review, request.body.title);
    reviewDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}


function updateReview(request, respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.user_Id, request.body.restaurant_Id, request.body.description, request.body.rating, request.body.price, request.body.datePosted,request.body.like_review,request.body.picture_review , request.body.title );
   reviewDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    var reviewID = request.params.id;
    reviewDB.deleteReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

// INNER JOIN



function ReviewAndUser(request, respond) {
    var review = new Review(null,parseInt(request.params.user_Id));
    reviewDB.ReviewAndUser(review,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, addReview, updateReview, deleteReview, ReviewAndUser};
