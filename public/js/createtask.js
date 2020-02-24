$(document).ready(function() {

    // Getting references to our form and inputs
    var taskForm = $("#submit");
    var title = $("#title");
    var description = $("#description");
    var status = $("#status");
    var date = $("#date");
    var ClientId = $("#id");

    // When the form is submitted, we validate there's an email and password entered
    taskForm.on("click", function(event) {
        event.preventDefault();
        var taskData = {
            title: title.val().trim(),
            description: description.val().trim(),
            status: ("created"),
            date: ("2020-05-30"),
            ClientId: ClientId.val(),
            UserId: (2)
        };

        console.log(taskData);

        createtask(taskData);
        
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function createtask(taskData) {
        $.post("/api/createtask", {
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
            date: taskData.date,
            ClientId: taskData.ClientId,
            UserId: taskData.UserId
        })
            
            .then(function() {
                window.location.replace("/viewtasks");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
});



