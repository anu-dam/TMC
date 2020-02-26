$(document).ready(function() {

 

    // Getting references to our form and inputs
    var taskForm = $("#submit");
    var title = $("#title");
    var description = $("#description");
    var status = $("#status");
    var date = $("#date");
    // var ClientId = $("#id");

    // When the form is submitted, we validate there's an email and password entered
    taskForm.on("click", function(event) {
        event.preventDefault();
        var users = JSON.parse(sessionStorage.getItem("userInfo"));
        var taskData = {
            title: title.val().trim(),
            description: description.val().trim(),
            status: ("Active"),
            date: date.val(),
            // ClientId: ClientId.val(),
            UserId: users.id
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
                window.location.replace("/assigntask");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    $(function () {
        $('#datetimepicker1').datetimepicker({
            format: 'YYYY-MM-DD',
        });
    });
});



isAdmin(function () { })