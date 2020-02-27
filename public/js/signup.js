$(document).ready(function () {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var nameInput = $("input#name-input");
    var usertypeInput = $("#usertype");
    var statusInput = $("#status");
    var clientidInput = $("#clientid");
    var message = $(".msg");

    var userData;

    function getClientTasks() {
        $.get("/api/viewclients", function (data) {
            console.log(data);
            data.forEach(function (item) {
                var option = ($('<option>', {
                    value: item.id,
                    text: item.name
                }))
                clientidInput.append(option);
            })
        })
    }
    $(document).ready(function () {
        getClientTasks();
        

        $("#usertype").change(function() {
            if ($(this).val() == "client") {
              $('#clientid-div').show();
            } else {
              $('#clientid-div').hide();
            }
          });
          $("#usertype").trigger("change");

    });






    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        if(usertypeInput.val() == "administrator"){
            userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim(),
                name: nameInput.val().trim(),
                type: usertypeInput.val(),
                status: "active"                
            };
        }
        else{
            userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim(),
                name: nameInput.val().trim(),
                type: usertypeInput.val(),
                status: "active",
                ClientId: clientidInput.val().trim()
            };
        }
        

        console.log('userdata', userData);
        if (!userData.email || !userData.password || !userData.type || !userData.name || !userData.status) {

            console.log('complete all fields');
            return;
        }

        signUpUser(userData);
        // emailInput.val("");
        // passwordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        console.log('userdata', userData);
        $.post("/api/signup", userData)
            .then(function () {
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

// isAdmin(function () { });