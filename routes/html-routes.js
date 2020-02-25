// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("login");

  });

  app.get("/assigntask", function (req, res) {
    res.render("assigntask");

  });

 
  app.get("/createclient", function (req, res) {
    res.render("createclient");
  });

  app.get("/createtask", function (req, res) {
    res.render("createtask");
  });

  app.get("/home", function (req, res) {
    res.render("home");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("login");
  });


  app.get("/signup", function (req, res) {
    res.render("signup");
  });



  app.get("/viewclient", function (req, res) {
    res.render("viewclient");
  });


  app.get("/viewclienttasks", function (req, res) {
    res.render("viewclienttasks");
  });


  app.get("/viewusers", function (req, res) {
    res.render("viewusers");
  });

  
  app.get("/assigntasks", function (req, res) {
    res.render("assigntask");
  }); 

  app.get("/index", function (req, res) {
    res.render("index");
  }); 
};
