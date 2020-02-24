function getClientTasks(cb) {
    $.get("/api/viewclienttasks", function (data) {
        console.log(data);
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
    $("#clientname").attr('data-clintid', data[0].id);
    $("#clientname").text(data[0].name);
    $("#clientaddress").text(data[0].address);
}

function initialiseTable(data) {
    var usertable = $("#usertable");
    usertable.DataTable({
        data,
        rowId: 'id',
        "columns": [
            { "data": "tasks.title" },
            { "data": "tasks.description" },
            { "data": "tasks.completedBy" },
            { "data": "tasks.status" }
        ]
    });
    updateHeaders(data);
}

getClientTasks(function (allClientTasks) {
    initialiseTable(allClientTasks);
})
