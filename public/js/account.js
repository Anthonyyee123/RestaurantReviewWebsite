function showUserDetails() {
    // var item = element.getAttribute("item");
    // currentIndex = item;
    
    document.getElementById("firstName").value = user_array[0].firstName;
    document.getElementById("lastName").value = user_array[0].lastName;
    document.getElementById("userId").value = user_array[0].userId;
    document.getElementById("password").value = user_array[0].password;
    document.getElementById("gender").value = user_array[0].gender;
    document.getElementById("mobile").value = user_array[0].mobile;
    document.getElementById("address").value = user_array[0].address;
    document.getElementById("unitNo").value = user_array[0].unitNo;
    document.getElementById("postalCode").value = user_array[0].postalCode;
    document.getElementById("email").value = user_array[0].email;
    
    
}