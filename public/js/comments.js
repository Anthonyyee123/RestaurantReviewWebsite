function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
    };

    request.send();
}

function showRestaurantComments(element) {
    document.getElementById("emptyComment").innerHTML = "";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].nameRestaurant;
    document.getElementById("commentBody").textContent = "";
 
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].restaurantId === restaurant_array[item].id_restaurant) {
            var display_review_url = comment_url + "/" + restaurant_array[item].id_restaurant;
            var displayreview = new XMLHttpRequest();
            displayreview.open("GET", display_review_url, true);
            displayreview.setRequestHeader("Content-Type", "application/json");
            document.getElementById("emptyComment").innerHTML = "";
            selectedMovieId = restaurant_array[item].id_restaurant;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <h5 class="card-text" id="rating' + i + '"' + comment_array[i].commentTitle + "></h5>               \
                                    <p>" + comment_array[i].comment + "</p>   \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].timestamp + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

             var star = "";
             for (var j = 0; j < comment_array[i].commentThumbs; j++) {
                 console.log(i);
                 star += "<img src='Images/thumb.png' style='width:30px' />";
             }

            if (comment_array[i].userId === user_array[0].id_user) {
                // star += "<i class='far fa-edit fa-2x edit' data-bs-toggle='modal' data-bs-target='#editCommentModal' data-bs-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
                star += "<i class='far fa-trash-alt fa-2x edit' data-bs-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            }
            //  star += "<i class='far fa-trash-alt fa-2x edit' data-bs-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            //  star += "<i class='far fa-edit fa-2x edit' data-bs-toggle='modal' data-bs-target='#editCommentModal' data-bs-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
             document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    //}


    }
}

function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("commentTitle").value = "";
}

// Submit or send the new comment to the server to be added.
function addComment() {
    var comment = new Object();
    var userId = user_array[0].id_user
    var username = user_array[0].userId
    comment.userId = userId; 
    comment.restaurantId = restaurant_array[currentIndex].id_restaurant; // restaurant ID is required by server to create new comment 
    comment.commentThumbs = rating;
    // comment.commentTitle = document.getElementById("commentTitle").value // Value from HTML input text
    comment.comment = document.getElementById("userComments").value; // Value from HTML input text
    comment.username = username ; 
    comment.restaurantName = restaurant_array[currentIndex].nameRestaurant; // restaurant title is required by server to create new comment
    comment.timestamp = null; // Change the datePosted to null instead of taking the timestamp on the client side;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log(comment)
        console.log("new comment sent");
    fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var popcorns = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let popcorn of popcorns) {
        popcorn.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changePopcornImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", popcornImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", popcornImage);
            rating = 5;
            break;
    }
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorPopcorn(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", popcornBWImage);
    }
    changePopcornImage(num, classTarget);
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or restaurant comment
function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;


    document.getElementById("commentTitle").value = comment_array[item].commentTitle;
    document.getElementById("comment").value = comment_array[item].comment;
    console.log(comment_array[item].comment);
    displayColorPopcorn('editpop', comment_array[item].commentThumbs);
}


//This function sends the Comment data to the server for updating
function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = comment_url + "/" + comment_array[currentIndex]._id;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].username = document.getElementById("editnickname").value;
        comment_array[currentIndex].comment = document.getElementById("edituserCommentsTitle").value;
        comment_array[currentIndex].comment = document.getElementById("edituserCommentsThumb").value;
        comment_array[currentIndex].comment = document.getElementById("edituserComments").value;
        comment_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

//This function deletes the selected comment in a specific restaurant
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = comment_url + "/" + comment_array[item].id_review;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function() {
            fetchComments();
            location.reload();
            
        };
        eraseComment.send();
    }
    eraseComment.send(JSON.stringify(eraseComment));
}




