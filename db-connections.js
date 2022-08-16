var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'restaurantreviewdb.c0p9vh0kgujb.us-east-1.rds.amazonaws.com',

    port: '3306',

    user:'admin',

    password:'tG077032',

    database: 'restaurantreview'

});



connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection
