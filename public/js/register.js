function fetchusers() {
    var request = new XMLHttpRequest();

    request.open('GET', user_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        checkUser_array = JSON.parse(request.responseText);
        console.log(checkUser_array);
    };
    request.send();

    userIdValidation()
}

// function userIdValidation(){
//     for (var i = 0; i < user_array.length; i++) {
//         if (checkUser_array[i].userId == document.getElementById("userId").value) {
//             alert("User ID already exists")
//             break;
//         }
//     }
//     addUser();
// }

function addUser(){
    var register = new Object();
    register.firstName = document.getElementById("firstName").value;
    register.lastName = document.getElementById("lastName").value;
    register.userId = document.getElementById("userId").value;
    register.password = document.getElementById("password").value;
    register.gender = document.getElementById("gender").value;
    register.mobile = document.getElementById("mobile").value;
    register.address = document.getElementById("address").value;
    register.unitNo = document.getElementById("unitNo").value;
    register.postalCode = document.getElementById("postalCode").value;
    register.email = document.getElementById("email").value;
    
            var response = "";
            var request = new XMLHttpRequest();
            request.open("POST", adduser_url, true)
            request.setRequestHeader("Content-Type", "application/json");
            request.onload = function() 
            {
                response = JSON.parse(request.responseText);
                if(register.firstName == '') 
                {
                    alert("First name cannot be blank!")
                }
                else if (register.lastName == '') 
                {
                    alert("Last name cannot be blank!")
                } 
                else if (register.userId == '') 
                {
                    alert("User ID cannot be blank!")
                }
                else if (register.password == '') 
                {
                    alert("Password cannot be blank!")
                }
                else if (register.password.length < 8) 
                {
                    alert("Password must be more than or equal to 8 characters")
                }
                else if (register.gender == 'Gender') 
                {
                    alert("Please specify your gender!")
                }
                else if (register.mobile == '') 
                {
                    alert("Mobile number cannot be blank!")
                }
                else if (register.address == '') 
                {
                    alert("Address cannot be blank!")
                }
                else if (register.postalCode == '') 
                {
                    alert("Postal code cannot be blank!")
                }
                else if (register.email == '') 
                {
                    alert("Email cannot be blank!")
                }
                else 
                {
                    alert("User registered!")
                    window.location = "login.html"; 
                    //request.send(JSON.stringify(register));
                }
            } 

    request.send(JSON.stringify(register));
}

// function addUser() {
//     var users = new Object();
//     users.firstName = document.getElementById("firstName").value;
//     users.lastName = document.getElementById("lastName").value;
//     users.userId = document.getElementById("userId").value;
//     users.password = document.getElementById("password").value;
//     users.gender = document.getElementById("gender").value;
//     users.mobile = document.getElementById("mobile").value;
//     users.address = document.getElementById("address").value;
//     users.unitNo = document.getElementById("unitNo").value;
//     users.postalCode = document.getElementById("postalCode").value;
//     users.email = document.getElementById("email").value;


//     var feedback = ""
//     var postUsers = new XMLHttpRequest(); // new HttpRequest instance to send comment

//     postUsers.open("POST", adduser_url , true); //Use the HTTP POST method to send data to server

//     postUsers.setRequestHeader("Content-Type", "application/json");
//     postUsers.onload = function () {
//         feedback = JSON.parse(postUsers.responseText);
//         alert("User registered!")
//         window.location = "login.html"; 
//         console.log(users)
        

//         // fetch all comments again so that the web page can have updated comments.
//     };
//     // Convert the data in Comment object to JSON format before sending to the server.
//     postUsers.send(JSON.stringify(users));
// }