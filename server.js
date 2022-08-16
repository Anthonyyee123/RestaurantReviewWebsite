var express = require("express"); //using the express web framework

var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var userController = require('./controllers/userController'); // set userController to the userController class

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.

app.route('/restaurant').get(restaurantController.getAllRestaurants); // activate the getAllRestaurants method if the route is GET(method) /restaurant
app.route('/restaurant').post(restaurantController.addRestaurant); // activate the addRestaurant method if the route is POST(method) /comments
app.route('/restaurant/:id').put(restaurantController.updateRestaurant); // activate the updateRestaurant method if the route is PUT(method) /comments/:id
app.route('/restaurant/:id').delete(restaurantController.deleteRestaurant); // activate the deleteRestaurant method if the route is DELETE(method) /comments/:id

//Search
app.route('/restaurantSearch').get(restaurantController.getRestaurantSearch);
app.route('/searchRest/:nameRestaurant').get(restaurantController.searchRest);

//Filter
app.route('/filterCuisine').get(restaurantController.getFilterCuisine);
app.route('/filterThumb').get(restaurantController.getFilterThumb);
app.route('/filterPrice').get(restaurantController.getFilterPrice);
app.route('/filterCuisineThumb').get(restaurantController.getFilterCuisineThumb);
app.route('/filterThumbPrice').get(restaurantController.getFilterThumbPrice);
app.route('/filterCuisinePrice').get(restaurantController.getFilterCuisinePrice);
app.route('/filterCuisineThumbPrice').get(restaurantController.getFilterCuisineThumbPrice);

app.route('/comments').get(commentController.getAllComments); // activate the getAllComments method if the route is GET(method) /comments
app.route('/comments').post(commentController.addComment); // activate the addComments method if the route is POST(method) /comments
app.route('/comments/:id').put(commentController.updateComment); // activate the updateComments method if the route is PUT(method) /comments/:id
app.route('/comments/:id').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:id
app.route('/RestaurantComments/:restaurantId').get(commentController.getAllRestaurantComments);

app.route('/userComment').post(userController.getUser);

app.route('/user').get(userController.getAllUsers); // activate the getAllUsers method if the route is GET(method) /user
app.route('/user').post(userController.addUser); // activate the addUser method if the route is POST(method) /user
app.route('/user/login').post(userController.loginUser); // activate the loginProfile method if the route is POST(method) /profiles/login
app.route('/user/:id').put(userController.updateUser); // activate the updateUser method if the route is PUT(method) /user/:id
app.route('/user/:id').delete(userController.deleteUser); // activate the deleteUser method if the route is DELETE(method) /user/:id
app.route('/userValidatePassword/:id_user').get(userController.validateUserPassword);
app.route('/userValidateId/:id_user').get(userController.validateUserId);

app.listen(8080, "ec2-54-167-183-158.compute-1.amazonaws.com:8080"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://ec2-54-167-183-158.compute-1.amazonaws.com:8080"); // output to console 
