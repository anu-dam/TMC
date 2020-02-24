$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var nameInput = $("input#name-input");
    var usertypeInput = $("#usertype");
    var statusInput = $("#status");
    var clientidInput = $("input#clientid");

    var userData;

    $.ajax({
        url : "/api/viewclients",
        type : "GET",
        success : function(data){

            var len = data.length;

            console.log(data);
            
        }
    });


    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            name: nameInput.val().trim(),
            type: usertypeInput.val(),
            status: statusInput.val(),
            ClientId: clientidInput.val().trim()
        };

        console.log('userdata', userData);
        if (!userData.email || !userData.password || !userData.type || !userData.status) {
            console.log('complete all fields');
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        console.log('userdata', userData);
        $.post("/api/signup", userData)
            .then(function(data) {
                window.location.replace("/viewusers");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
