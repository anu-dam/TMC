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
    var usertable = $("#usertable");
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

getClientTasks(function (allClientTasks) {
    initialiseTable(allClientTasks);
})
