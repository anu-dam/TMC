function getClientTasks(cb) {
    $.get("/api/viewclienttasks", function (data) {
        return cb(data);
    })
}

// db.ClientTask.findAll({
//     attributes: ['id', 'taskId', 'clientId', 'status'],
//     include: [{ model: db.Client, attributes: ['id', 'name','address'] }],
//     include: [{ model: db.Task, attributes: ['id','title', 'description','completedBy'] }]
//   })

//   <h2 id="clientname"></h2>
//     <h4 id="clientaddress"></h4>

function updateHeaders(data) {
    console.log(data);
    $("#clientname").attr('data-clintid', data[0].clients_id);
    $("#clientname").text(data[0].clients_name);
    $("#clientaddress").text(data[0].clients_address);
}

function initialiseTable(data) {
    var usertable = $("#clienttasktable");
    usertable.DataTable({
        data,
        rowId: 'clienttasks_id',
        "columns": [
            { "data": "tasks_title" },
            { "data": "tasks_description" },
            { "data": "tasks_completedBy" },
            { "data": "tasks_status" }
        ]
    });
    updateHeaders(data);
}



// When the dom is loaded
$(document).ready(function () {
    $('.modal').modal({
        dismissible: false, // Modal cannot be closed by clicking anywhere outside
    });
    var table = $("#clienttasktable").DataTable();
    var selectedRow;
    $('#clienttasktable tbody').on('click', 'tr', function () {
        // console.log(table.row(this).data());
        selectedRow = table.row(this).data();
        $("#complete").attr('data-id', selectedRow.clienttasks_id);
        $("#complete").attr('data-status', selectedRow.tasks_status);
        $("#tasktitle").text(selectedRow.tasks_title);
        $("#taskdetail").text(selectedRow.tasks_description);
        $("#taskcompletedby").text(selectedRow.tasks_completedBy);
        $("#taskstatus").text(selectedRow.tasks_status);
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


getClientTasks(function (allClientTasks) {
    initialiseTable(allClientTasks);
})
