//This function is to call the restaurants api and get all the restaurants
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the restaurants records into our restaurant array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the comments as well        
        fetchComments()
        console.log(restaurant_array) // output to console        
        //call the function so as to display all restaurants titles for "Now Showing"        	
        displayRestaurants();
    };

    //This command starts the calling of the restaurants web api    
    request.send();
}


function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;

    table.innerHTML = "";
    totalrestaurants = restaurant_array.length;
    for (var count = 0; count < totalrestaurants; count++) {
        if (restaurant_array[count].id_restaurant > 0) {
            var teaser = restaurant_array[count].teaser;
            var nameRestaurant = restaurant_array[count].nameRestaurant;
            var numReviews = restaurant_array[count].numReviews;
            var address = restaurant_array[count].address;
            var cell = ' <div class = "col-md-4 pt-3">\
            <div class ="card-deck">\
            <div class="card">\
              <a><img class="card-img" src="'+ teaser +'" height="200px" width="200px" alt="Card image cap" onclick = "showRestaurantDetails(this)" data-toggle="modal" data-target="#viewRestInfo" item="' + count + '"></a>\
              <div class="card-body">\
                <h5 class="card-title" style="cursor: pointer" data-toggle="modal" data-target="#viewRestInfo" item="' + count + '" onClick="showRestaurantDetails(this)">'+nameRestaurant+'</h5>\
                <div class = "row">\
                     <div class = "col-lg-7">\
                        <img src = "Images/thumb.png" id = "" width="25px">\
                        <img src = "Images/thumb.png" id = "" width="25px">\
                        <img src = "Images/thumb.png" id = "" width="25px">\
                        <img src = "Images/thumb.png" id = "" width="25px">\
                        <img src = "Images/thumb.png" id = "" width="25px">\
                     </div>\
                    <div class = "col-lg-5">\
                    <p class="card-text" style="padding-left: 10px; cursor: pointer" data-toggle="modal" data-target="#viewComments" item="' + count + '" onClick="showRestaurantComments(this)"> <span class="badge badge-pill badge-dark font-weight-bold">Reviews</span></p>\
                  </div>\
                </div>\
                <p class="card-text">'+address+'</p>\
              </div>\
            </div>\
          </div>\
        </div>'
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }

}


//This function is to display the "Now Showing" movies
function listNowShowingMovies() {
    category = "Now Showing";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("nameRestaurant").textContent = restaurant_array[item].nameRestaurant;
    document.getElementById("hyperlink").textContent = restaurant_array[item].hyperlink;
    //document.getElementById("numReviews").textContent = restaurant_array[item].numReviews;
    //document.getElementById("averageThumbs").src = restaurant_array[item].averageThumbs;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("openingHours").textContent = restaurant_array[item].openingHours;
    document.getElementById("phone").textContent = restaurant_array[item].phone;
    document.getElementById("cuisine").textContent = restaurant_array[item].cuisine;
    document.getElementById("maps").src = restaurant_array[item].map;
    document.getElementById("price").textContent = restaurant_array[item].price;
    document.getElementById("teaser").src = restaurant_array[item].teaser;
    // nameRestaurant, hyperlink, numReviews, averageThumbs, address, openingHours, phone, map, cuisine, price, teaser
}

//This function opens a new window/tab and loads the
//particular restaurant website (hyperlink)
function openHyperlink() {
    window.open(restaurant_array[currentIndex].hyperlink, "_blank");
}

// document.addEventListener('DOMContentLoaded', function() {
// 	document.getElementById('tab-group').className = 'ready';
    
//     var tabHeaders = document.getElementsByClassName('tab-header');
    
// 	for (var i = 0; i < tabHeaders.length; i++) 
//     {
// 		tabHeaders[i].addEventListener('click', activateTab);
// 	}
	
// 	function activateTab(event) 
//     {
// 		var myID = this.id, // e.g. tab-header-1
// 			contentID = myID.replace('header', 'content'); // result: tab-content-1
		
//         deactivateAllTabs();
        
// 		document.getElementById(myID).className = 'tab-header active';
// 		document.getElementById(contentID).className = 'tab-content active';
// 	}
    
//     function deactivateAllTabs() 
//     {
// 		document.getElementById('tab-header-1').className = 'tab-header';
// 		document.getElementById('tab-header-2').className = 'tab-header';
// 		document.getElementById('tab-header-3').className = 'tab-header';
// 		document.getElementById('tab-content-1').className = 'tab-content';
// 		document.getElementById('tab-content-2').className = 'tab-content';
// 		document.getElementById('tab-content-3').className = 'tab-content';
// 	}
// });

function searchRest() {
    restaurantName = document.getElementById("userSearch").value; 
    restaurant_array = [];
    pattern = new RegExp("No restaurant yet");
    restaurant_url = "/searchRest/"+restaurantName;
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function (){
        restaurant_array = JSON.parse(request.responseText);
            console.log(restaurant_array);
            pattern = new RegExp(restaurantName, "i"); // "g" for global, "i" for case-insensitive
            displayRestaurants()
            fetchComments()
        };
    request.send();
}

