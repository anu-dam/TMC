$(document).ready(function() {

    // Getting references to our form and inputs
    var loginForm = $("#submit");
    var name = $("#title-input");
    var address = $("#inputAddress");
    var city = $("#inputCity");
    var email = $("#email-input");
    var status = $("#status");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("click", function(event) {
        event.preventDefault();
        var clientData = {
            name: name.val().trim(),
            address: address.val().trim(),
            city: city.val().trim(),
            email: email.val().trim(),
            status: status.val()

        };

        console.log(clientData);

        loginUser(clientData);
        
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(clientData) {
        $.post("/api/createclient", {
            name: clientData.name,
            address: clientData.address,
            city: clientData.city,
            email: clientData.email,
            status: clientData.status
        })
            .then(function() {
                window.location.replace("/");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});



