function getTasks(cb) {
    $.get("/api/viewtasks", function (data) {
       return cb(data);
    })
}

function initialiseTable(data) {
    var taskTable = $("#tasktable");
    var selectedRow;
    
    taskTable.DataTable({
        data,
        rowId: 'id',
        "columns": [
            { "data": "title" },
            { "data": "description" },
            { "data": "completedBy" },
            { "data": "status" },
            { "data": "User.name"}                    
        ]
    });
    // console.log("finished drawing table");
    var table = $('#tasktable').DataTable();
}

// When the dom is loaded
// $(document).ready(function () {
//     $('#tasktable tbody').on('click', 'tr', function () {
//         // console.log(table.row(this).data());
//         selectedRow = table.row(this).data();
//     });
// });

// execute immidiately
getTasks(function(allTasks) {
    initialiseTable(allTasks);
})

