function getUsers(cb) {
    $.get("/api/viewusers", function (data) {
        console.log("/api/viewusers");
        console.log(data);
        return cb(data);
    })
}

function initialiseTable(data) {
    var usertable = $("#usertable");
    usertable.DataTable({
        data,
        rowId: 'id',
        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "type" },
            { "data": "status" },
            { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
        ]
    });
}

getUsers(function (allUsers) {
    initialiseTable(allUsers);
})


// $(document).ready(function () {
//     var usertable = $("#usertable");
//     function getUsers() {
//         $.get("/api/viewusers", function (data) {
//             console.log("finished api query")
//             usertable.DataTable({
//                 data: data,
//                 rowId: 'id',
//                 "columns": [
//                     { "data": "name" },
//                     { "data": "email" },
//                     { "data": "type" },
//                     { "data": "status" },
//                     { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
//                 ]
//             });

//             // console.log("finished drawing table");

//             // var table = $('#usertable').DataTable();

//             // $('#usertable tbody').on('click', 'tr', function () {
//             //     console.log(table.row(this).data());
//             // });
//         })
//     }
//     getUsers();
// });