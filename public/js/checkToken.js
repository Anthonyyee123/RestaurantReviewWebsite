$(document).ready(function (){

    var token = sessionStorage.getItem("token");
    if (token != null) {
        $('#register').hide();
        $('#login').hide();
    }

})