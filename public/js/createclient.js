$(document).ready(function() {

    // Getting references to our form and inputs
    var loginForm = $("#submit");
    var name = $("#name");
    var address = $("#address");
    var email = $("#email");
    var status = $("#status");
    
    $(".fa-map").on("click", function(event){
        event.preventDefault();
        console.log("redirect")
        window.location.replace("index");
        
    }
    );
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("click", function(event) {

        event.preventDefault();
        var clientData = {
            name: name.val().trim(),
            email: email.val().trim(),
            address: address.val().trim(),
            status: status.val()

        };

        console.log(clientData);

        loginUser(clientData);
        
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(clientData) {
        $.post("/api/createclient", {
            name: clientData.name,
            email: clientData.email,
            address: clientData.address,
            status: clientData.status
        })
            .then(function() {
                window.location.replace("/viewclient");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});


isAdmin(function () {});