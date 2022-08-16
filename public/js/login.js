function getUserData() {
    
    var token = sessionStorage.getItem("token")
    var getProfile = "";
    var getProfile = new XMLHttpRequest();
    getProfile.open('POST', user_url, true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    
    //This function will be called when data returns from the web api    
    getProfile.onload = function () {
        //get all the user records into the user array
        response = JSON.parse(getProfile.responseText)        
        user_array = JSON.parse(getProfile.responseText);
        console.log(user_array)
    };
    var payload = {token: token};
    getProfile.send(JSON.stringify(payload));
}

function login() {
    var loginUser = new XMLHttpRequest();
    loginUser.open("POST", "http://ec2-54-167-183-158.compute-1.amazonaws.com:8080/user/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload=function() {



        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if (token.result != false) {
            alert("Login successfully!");
            window.location = "logout-home.html";
            // paste state change codes here
            document.getElementById("register").style.display="none";
            document.getElementById("login").style.display="none";
            sessionStorage.setItem("token",token.result);
            
        } 
        else {
            alert("Wrong Username or Password. Please Try Again!");
        }
    }

    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var payload = {userId:userId, password:password,}
    loginUser.send(JSON.stringify(payload));
}
