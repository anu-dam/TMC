

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
            { "data": "User.name" }
        ]
    });
    // console.log("finished drawing table");

}

// When the dom is loaded
$(document).ready(function () {
    $('.modal').modal({
        dismissible: false, // Modal cannot be closed by clicking anywhere outside
    });
    var table = $("#tasktable").DataTable();
    var selectedRow;
    $('#tasktable tbody').on('click', 'tr', function () {
        console.log(table.row(this).data());
        selectedRow = table.row(this).data();

        $("#assign").attr('data-id',selectedRow.id);
        $("#assign").attr('data-status',selectedRow.status);
        $("#tasktitle").text(selectedRow.title);
        $("#taskdetail").text(selectedRow.description);
        $("#taskcompletedby").text(selectedRow.completedBy);
        $("#tasstatus").text(selectedRow.status);
        $("#taskowner").text(selectedRow.User.name);
        // if ($("#tasstatus").text()==="") {
        //     bt.disabled = false;
        // }
        // openModel();

    });
});

function openModel() {
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
};



// execute immidiately
getTasks(function (allTasks) {
    initialiseTable(allTasks);
})

//<a href="#!" id="assign" class="waves-effect waves-light btn">Assign</a>
//<a href="#!" id="cancel" class="modal-close btn waves-red">Cancel</a> 

$(document).on("click", "#assign", function(){
    var taskID = $("#assign").data().id;
    var taskStatus = $("#assign").data().status;
    console.log(taskID, taskStatus);
});

