$(document).ready(function() {
    var usertable = $("#usertable");
    function getUsers() {
        $.get("/api/viewusers", function(data) {             
            usertable.DataTable( {
                data: data,
                "columns": [
                    { "data": "name" },
                    { "data": "email" },
                    { "data": "type" },
                    { "data": "status" },                    
                    { "data": "Client.name", "defaultContent": ""}//if data is not avalilable, show empty column
                ]
            });
        console.log(data);
        });
      }
      getUsers();

} );