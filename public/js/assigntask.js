$(document).ready(function () {
    var taskTable = $("#tasktable");
    var selectedRow;
    function getTasks() {
        $.get("/api/viewtasks", function (data) {
            console.log( data);
            taskTable.DataTable({
                data: data,
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

            $('#tasktable tbody').on('click', 'tr', function () {
                console.log(table.row(this).data());
                selectedRow = table.row(this).data();
            });
        })


        
    }
    getTasks();

});