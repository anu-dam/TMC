function getClientTasks(cb) {
    $.get("/api/viewclienttasks", function (data) {
        return cb(data);
    })
}



function updateHeaders(data) {    
    $("#clientname").attr('data-clintid', data[0].clients_id);
    $("#clientname").text(data[0].clients_name);
    $("#clientaddress").text(data[0].clients_address);
}

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
        ]
    });      
}



// When the dom is loaded
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

function openModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
};

function closeModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.close();
};

//update task status by user
function updateClientTaskStatus(taskID){
    console.log(taskID);
};

// assign to client function
$(document).on("click", "#complete", function () {
    event.preventDefault();
    var taskID = $(this).attr("data-id");
    // console.log(taskID);    
    updateClientTaskStatus(taskID);
});

getClientTasks(function (allClientTasks) {
    initialiseTables(allClientTasks);
})
