$(document).ready(function () {
    var users = JSON.parse(sessionStorage.getItem("userInfo"));
    $("#loggedInUserName").text(users.name);
})