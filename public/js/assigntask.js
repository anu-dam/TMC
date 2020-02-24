function getTasks(cb) {
    $.get("/api/viewtasks", function (data) {
        console.log(data);
        return cb(data);
    })
}


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

// When the dom is loaded
$(document).ready(function () {
    $('.modal').modal({
        dismissible: false, // Modal cannot be closed by clicking anywhere outside
    });
    var table = $("#tasktable").DataTable();
    var selectedRow;
    $('#tasktable tbody').on('click', 'tr', function () {
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

function openModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
};

function closeModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.close();
};


// get current active client list
function getActiveClients(taskID) {
    $.get("/api/getclients", function (data) {
        console.log(data);
        createClientTasks(taskID, data);
    })
}

function createClientTasks(taskID, clientList) {
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
    console.log("created clientTaskList");
    $.post("/api/createclienttasks", { data: JSON.stringify(clientTaskList) })
        .then(function (data) {
            closeModel();
            console.log("closeModel(); completed");
            updaTaskStatus(taskID);
        })
        .catch(handleLoginErr);
}

// update the current task status to "Assigned"
function updaTaskStatus(taskID) {
    // Send the PUT request.
    $.ajax("/api/updataskstatus", {
        type: "PUT",
        data: {id : taskID }
    })
        .then(function (data) {
            location.reload();
        })
        .catch(handleLoginErr);
}

//assign to client function
$(document).on("click", "#assign", function () {
    event.preventDefault();
    var taskID = $(this).attr("data-id");
    // console.log(taskID);
    let data;
    getActiveClients(taskID);
});

//for showing error
function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
}

// execute immidiately
getTasks(function (allTasks) {
    initialiseTable(allTasks);
})
