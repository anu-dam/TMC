//******************************** */
// Get all the users
//******************************** */
function getUsers(cb) {
    $.get("/api/viewusers", function (data) {
        return cb(data);
    })
    .catch(handleLoginErr);
}
//******************************** */
// Create table
//******************************** */
function initialiseTable(data) {
    var usertable = $("#usertable");
    usertable.DataTable({
        data : data,
        rowId: 'id',
        dom: 'lBfrtip',
        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "type" },
            { "data": "status" },
            { "data": "Client.name", "defaultContent": "" }//if data is not avalilable, show empty column
        ]
    });
}

//******************************** */
// Initialize and check whether the user is the right one
//******************************** */
// isAdmin(function () {
    getUsers(function (allUsers) {
        initialiseTable(allUsers);
    })
// })

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