function getClients(cb) {
    $.get("/api/viewclients", function (data) {
        return cb(data);
    })
}


function initialiseTable(data) {
    var clientTable = $("#clienttable");
    console.log(data);
    clientTable.DataTable({
        data,
        rowId: 'id',
        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "address" },
            { "data": "status" }
            // { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
        ]
    });
    // var table = $('#clienttable').DataTable();
    // $('#clienttable tbody').on('click', 'tr', function () {
    //     console.log(table.row(this).data());
    // });
}

// execute immidiately
getClients(function (allTasks) {
    initialiseTable(allTasks);
})


// $(document).ready(function () {
//     var clientTable = $("#clienttable");
//     function getClients() {
//         $.get("/api/viewclients", function (data) {
//             clientTable.DataTable({
//                 data: data,
//                 rowId: 'id',
//                 "columns": [
//                     { "data": "name" },
//                     { "data": "email" },
//                     { "data": "address" },
//                     { "data": "status" }
//                     // { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
//                 ]
//             });
//             // var table = $('#clienttable').DataTable();
//             // $('#clienttable tbody').on('click', 'tr', function () {
//             //     console.log(table.row(this).data());
//             // });
//         })
//     }
//     getClients();
// });