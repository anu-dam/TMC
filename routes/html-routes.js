// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
   
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  app.get("/assigntask", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/assigntask.html"));
    }
    else{
      res.redirect("/login");
    }
  });

  app.get("/createclient", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/createclient.html"));
    }
    else{
      res.redirect("/login");
    }
  });

  app.get("/createtask", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/createtask.html"));
    }
    else{
      res.redirect("/login");
    }
  });

  app.get("/home", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }
    else{
      res.redirect("/login");
    }
  });


  app.get("/login",  function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    else{
      res.sendFile(path.isAuthenticated,join(__dirname, "../public/login.html"));
    }
  });


  app.get("/signup",  function(req, res) {

      res.sendFile(path.join(__dirname, "../public/signup.html"));

  });


  // app.get("/signup", isAuthenticated, function(req, res) {
  //   if(req.user){
  //     res.sendFile(path.join(__dirname, "../public/signup.html"));
  //   }
  //   else{
  //     res.redirect("/login");
  //   }
  // });


  app.get("/viewclient", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/viewclient.html"));
    }
  });


  app.get("/viewclienttasks", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/viewclienttasks"));
    }
  });

  app.get("/viewusers", isAuthenticated, function(req, res) {
    if(req.user){
      res.sendFile(path.join(__dirname, "../public/viewusers.html"));
    }
  });

};
