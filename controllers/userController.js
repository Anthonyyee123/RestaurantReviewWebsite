"use strict";

const UserDB = require('../models/UserDB');
const User = require('../models/User');
var jwt = require('jsonwebtoken');
var secret = "somesecretkey";

var userDB = new UserDB();

function getAllUsers(request, respond){
    userDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){
    var user = new User(null, request.body.firstName, request.body.lastName, request.body.userId, request.body.password, request.body.gender, request.body.mobile, request.body.address, request.body.unitNo, request.body.postalCode, request.body.email);
    userDB.addUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function loginUser(request, respond){
    var userId = request.body.userId;
    var password = request.body.password;
    userDB.loginUser(userId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            const value = result[0].password;
            var flag = (password == value);
            if (flag) {
                var token = jwt.sign(userId,secret);
                respond.json({result:token});
            }
            else{
                respond.json({result: false});
            }
        }
    })
}

function getUser(request, respond){
    var token = request.body.token;

    try{
        var decoded = jwt.verify(token, secret);
        userDB.getUser(decoded, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });


    } catch(err){
        respond.json({result:"invalid token"});
    }

}

function updateUser(request, respond){
    var user = new User(parseInt(request.params.id), request.body.firstName, request.body.lastName, request.body.userId, request.body.password, request.body.gender, request.body.mobile, request.body.address, request.body.unitNo, request.body.postalCode, request.body.email);
    userDB.updateUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteUser(request, respond){
    var userID = request.params.id;
    userDB.deleteUser(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function validateUserPassword(request, respond){
    var user = new User(parseInt(request.params.id_user));
    userDB.validateUserPassword(user,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function validateUserId(request, respond){
    var user = new User(parseInt(request.params.id_user));
    userDB.validateUserId(user,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers, addUser, getUser, loginUser, updateUser, deleteUser, validateUserPassword, validateUserId};