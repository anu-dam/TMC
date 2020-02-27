//******************************** */
// Checking user autherisation
//******************************** */
function isAdmin(cb) {
    // call api to check user type
    var validUser = false;
    //******************************** */
    // Getting user type
    //******************************** */
    $.ajax({
        type: "GET",
        url: "/api/checkuser",
        success: function (data) {
            if (data === 'administrator') {
                validUser = true;
            }
        },
        error: function (xhr, status, error) {
            window.location.replace('/login')
        },
        complete: function () {
            if (!validUser) {
                window.location.replace('/login')
            }
            else {
                cb();
            }
        }
    })
}