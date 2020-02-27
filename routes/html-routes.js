//******************************** */
// Requiring path to so we can use relative routes to our HTML files
//******************************** */
var path = require("path");
var { isAdmin, isClientUser, isUser } = require("../config/middleware/isAuthenticated")

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //******************************** */
  // Home page
  //******************************** */
  app.get("/", function (req, res) {
    res.render("login");
  });

  //******************************** */
  // Assign Task / View Tasks fir admin users (duplicated code)
  //******************************** */
  app.get("/assigntask", function (req, res) {
    res.render("assigntask");
  });

  //******************************** */
  // Create client 
  //******************************** */
  app.get("/createclient", function (req, res) {
    res.render("createclient");
  });

  //******************************** */
  // Creating task
  //******************************** */
  app.get("/createtask", function (req, res) {
    res.render("createtask");
  });

  //******************************** */
  // Admin home
  //******************************** */
  app.get("/home", function (req, res) {
    res.render("home");
  })
  //******************************** */
  // Client home
  //******************************** */
  app.get("/clienthome", function (req, res) {
    res.render("clienthome");
  })
  //******************************** */
  // Login
  //******************************** */
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("login");
  });

  //******************************** */
  // Create users (administrators and clients)
  //******************************** */
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  //******************************** */
  // Creating table 
  //******************************** */
  app.get("/viewclient", function (req, res) {
    res.render("viewclient");
  });

  //******************************** */
  // Viewing client tasks for all the clients (for admin)
  //******************************** */
  app.get("/viewclienttasks", function (req, res) {
    res.render("viewclienttasks");
  });
  //******************************** */
  // Viewing client Tasks for individual client user and updating status
  //******************************** */
  app.get("/viewclienttasksclient", function (req, res) {
    res.render("viewclienttasksclient");
  });

  //******************************** */
  // View all the users in the system for admin
  //******************************** */
  app.get("/viewusers", function (req, res) {
    res.render("viewusers");
  });

  // //******************************** */
  // // Duplicated 
  // //******************************** */
  //   app.get("/assigntask", function (req, res) {
  //     res.render("assigntask");
  //   });

  
  //******************************** */
  // for getting the google map
  //******************************** */
  app.get("/index", function (req, res) {
    res.render("index");
  });

};
