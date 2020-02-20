// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
   
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
   
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/task", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/task.html"));
  });

  app.get("/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/client.html"));
  });

  app.get("/viewclient", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/viewclient.html"));
  });

  app.get("/viewusers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/viewusers.html"));
  });

  app.get("/asigntask", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assigntask.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};