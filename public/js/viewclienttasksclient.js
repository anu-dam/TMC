//******************************** */
// Getting all assigned tasks for a particular client based on user
//******************************** */
function getClientTasks(cb) {
    var users = JSON.parse(sessionStorage.getItem("userInfo"));
    var clientId = users.clientId;
    $.get("/api/viewclienttasksclient/" + clientId, function (data) {
        return cb(data);
    })
}

//******************************** */
// Show the heading for client page
//******************************** */

function updateHeaders(data) {
    if (data.length > 0) {
        $("#clientname").attr('data-clintid', data[0].clients_id);
        $("#clientname").text(data[0].clients_name);
        $("#clientaddress").text(data[0].clients_address);
    }

}

//******************************** */
// creating table
//******************************** */

function initialiseTables(data) {
    updateHeaders(data);
    var usertable = $("#clienttaskstable");
    usertable.DataTable({
        dom: 'Bfrtip',
        data,
        rowId: 'clienttasks_id',
        "columns": [
            { "data": "tasks_title" },
            { "data": "tasks_description" },
            { "data": "tasks_completedBy" },
            { "data": "clienttasks_status" }
        ],
        "createdRow": function (row, rowData, dataIndex) {
            // console.log(rowData.tasks_completedBy);
            // console.log(new Date(rowData.clienttasks_status));

            if ((new Date(rowData.tasks_completedBy)) < (new Date()) && (rowData.clienttasks_status !== "Completed")) {
                $(row).addClass('red');
            }
        }
    });
}


//******************************** */
// When the dom is loaded
//******************************** */
$(document).ready(function () {
    console.log("started loading data");
    $('.modal').modal({
        dismissible: false, // Modal cannot be closed by clicking anywhere outside
    });


    var selectedRow;
    $('#clienttaskstable tbody').on('click', 'tr', function () {
        var table = $("#clienttaskstable").DataTable();
        // console.log(table.row(this).data());
        selectedRow = table.row(this).data();
        $("#complete").attr('data-id', selectedRow.clienttasks_id);
        $("#complete").attr('data-status', selectedRow.clienttasks_status);
        $("#tasktitle").text(selectedRow.tasks_title);
        $("#taskdetail").text(selectedRow.tasks_description);
        $("#taskcompletedby").text(selectedRow.tasks_completedBy);
        $("#taskstatus").text(selectedRow.clienttasks_status);
        if ($("#taskstatus").text() != "Assigned") {
            $("#complete").hide();
        } else {
            $("#complete").show();
        }
        openModel();
    });
});

//******************************** */
// Model actions
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
//update task status by user
//******************************** */
function updateClientTaskStatus(taskID) {
    console.log(taskID);
    console.log("function updaTaskStatus(taskID) started");
    // Send the PUT request.
    $.ajax("/api/updateassignedtaskstatus", {
        type: "PUT",
        data: { id: taskID }
    })
        .then(function (data) {
            closeModel();
            location.reload();
            // res.redirect('/viewclienttasksclient');
        })
        .catch(handleLoginErr);
};

//******************************** */
// assign to client function triggering
//******************************** */
$(document).on("click", "#complete", function () {
    event.preventDefault();
    var taskID = $(this).attr("data-id");
    // console.log(taskID);    
    updateClientTaskStatus(taskID);
});

//******************************** */
// initialize logic
//******************************** */
getClientTasks(function (allClientTasks) {
    initialiseTables(allClientTasks);
})    
