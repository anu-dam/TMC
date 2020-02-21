$(document).ready(function () {
    var taskTable = $("#tasktable");

    function getTasks() {
        $.get("/api/viewtasks", function (data) {
            clientTable.DataTable({
                data: data,
                rowId: 'id',
                "columns": [
                    { "data": "title" },
                    { "data": "description" },
                    { "data": "completedBy" },
                    { "data": "status" },
                    { "data": "creator" }
                    
                    // { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
                ]
            });
            var table = $('#tasktable').DataTable();

            $('#tasktable tbody').on('click', 'tr', function () {
                console.log(table.row(this).data());
            });
        })

    }
    getTasks();

});