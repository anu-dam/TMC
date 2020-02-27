//******************************** */
// This is for getting all the tasks
//******************************** */
function getTasks(cb) {
    $.get("/api/gettasks", function (data) {
        // console.log(data);
        return cb(data);
    })
}

//******************************** */
//This is for creating data table
//******************************** */
function initialiseTable(data) {
    var taskTable = $("#tasktable");
    taskTable.DataTable({
        data,
        rowId: 'id',
        "columns": [
            { "data": "title" },
            { "data": "description" },
            { "data": "completedBy" },
            { "data": "status" },
            { "data": "User.name" }
        ]
    });
    // console.log("finished drawing table");

}

//******************************** */
// Document ready funciton will run in parrllel with API data pull
//******************************** */
// When the dom is loaded
$(document).ready(function () {
    $('.modal').modal({
        dismissible: false, // Modal cannot be closed by clicking anywhere outside
    });

    var selectedRow;
    $('#tasktable tbody').on('click', 'tr', function () {
        var table = $("#tasktable").DataTable();
        // console.log(table.row(this).data());
        selectedRow = table.row(this).data();
        $("#assign").attr('data-id', selectedRow.id);
        $("#assign").attr('data-status', selectedRow.status);
        $("#tasktitle").text(selectedRow.title);
        $("#taskdetail").text(selectedRow.description);
        $("#taskcompletedby").text(selectedRow.completedBy);
        $("#taskstatus").text(selectedRow.status);
        $("#taskowner").text(selectedRow.User.name);
        if ($("#taskstatus").text() != "Active") {
            $("#assign").hide();
        } else {
            $("#assign").show();
        }
        openModel();
    });


});

//******************************** */
//******************************** */
function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
}

//******************************** */
// This is for handling model
//******************************** */
function openModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
};

function closeModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.close();
};

//******************************** */
// get current active client list
//******************************** */
function getClients(taskID) {
    $.get("/api/getclients", function (data) {
        // console.log(data);
        createClientTaskList(taskID, data);
    })
}

//******************************** */
// preparing client task list
//******************************** */
function createClientTaskList(taskID, clientList) {
    var clientTaskList = [];
    for (var i = 0; i < clientList.length; i++) {
        // console.log("clientId"+clientList[i].id);
        // console.log("taskID"+taskID);
        var clientTask = {
            clientId: parseInt(clientList[i].id),
            taskId: parseInt(taskID),
            status: "Assigned"
        }
        clientTaskList.push(clientTask);
    }
    // console.log("created clientTaskList");

    //******************************** */
    // Call API to push data to database
    //populate database with clitnt tasks
    //******************************** */

    $.post("/api/createclienttasks", { data: JSON.stringify(clientTaskList) })
        .then(function (data) {
            closeModel();
            updaTaskStatus(taskID, clientList);
        })
        .catch(handleLoginErr);
}


//******************************** */
// update the current task status to "Assigned"
//******************************** */
function updaTaskStatus(taskID, clientList) {
    // console.log("function updaTaskStatus(taskID) started");
    // Send the PUT request.
    $.ajax("/api/updataskstatus", {
        type: "PUT",
        data: { id: taskID }
    })
        .then(function (data) {
            location.reload();
            sendEmailtoClient(clientList)
        })
        .catch(handleLoginErr);
}

//******************************** */
// FUTURE DEVELOPMENT (EMAIL ALERT)
//******************************** */
// this part is pending
function sendEmailtoClient(clientList) {
    // your code goes here for sending email
    //clientlist contains all the client details
    // console.log("sendEmailtoClient(clientList) funciton");
}

//******************************** */
// Waiting for assign button click
//******************************** */
//assign to client function
$(document).on("click", "#assign", function () {
    event.preventDefault();
    var taskID = $(this).attr("data-id");
    // console.log(taskID);
    let data;
    getClients(taskID);
});


//******************************** */
// execute immidiately
//function to prevent unautherised access
//available in all UI level througn main
//******************************** */
isAdmin(function () {
    //bring out from document.ready for speed up page
    //will call api and dom painting together
    getTasks(function (allTasks) {
        // build table after getting data only (callback)
        initialiseTable(allTasks);
    })

})