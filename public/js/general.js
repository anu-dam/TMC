$(document).ready(function () {
    var users = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(users.name);
    $("#loggedInUserName").text(users.name);
})