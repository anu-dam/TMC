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

    var userData; // to make user data globally available

    //to get all the created clients so that when create new client user, assign client
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

    //main function
    $(document).ready(function () {
        getClientTasks(); // calling to get all the client tasks

        //upon triggering show and hide client name field
        $("#usertype").change(function () {
            if ($(this).val() == "client") {
                $('#clientid-div').show();
            } else {
                $('#clientid-div').hide();
            }
        });

        //create trigger
        $("#usertype").trigger("change");

    });

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();
        //based on user type set the object
        //Administrator is not belongs to any client
        if (usertypeInput.val() == "administrator") {
            userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim(),
                name: nameInput.val().trim(),
                type: usertypeInput.val(),
                status: "active"
            };
        }
        else {
            //client user belongs to a client then client id is a must
            userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim(),
                name: nameInput.val().trim(),
                type: usertypeInput.val(),
                status: "active",
                ClientId: clientidInput.val().trim()
            };
        }

        //verifying all data is available or print erro
        console.log('userdata', userData);
        if (!userData.email || !userData.password || !userData.type || !userData.name || !userData.status) {
            console.log('complete all fields');//show error in console only
            return;
        }
        //calling api function
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



});

<<<<<<< HEAD
=======
<<<<<<< HEAD
//function to prevent unautherised access
//available in all UI level througn main
isAdmin(function () {});
=======
>>>>>>> master

//function to prevent unautherised access
//available in all UI level througn main
isAdmin(function () {});

<<<<<<< HEAD
=======
>>>>>>> e8eb86603ad1e6b913805093631333aef30030e7
>>>>>>> master
