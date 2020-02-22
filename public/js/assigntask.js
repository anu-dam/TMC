

function getTasks(cb) {
    $.get("/api/viewtasks", function (data) {
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
            { "data": "User.name"}                    
        ]
    });
    // console.log("finished drawing table");
    
}

// When the dom is loaded
$(document).ready(function () {    
    var table = $("#tasktable").DataTable();
    $('#tasktable tbody').on('click', 'tr', function () {
        // console.log(table.row(this).data());
        selectedRow = table.row(this).data();
        console.log(selectedRow);
    });
});

// execute immidiately
getTasks(function(allTasks) {
    initialiseTable(allTasks);
})

