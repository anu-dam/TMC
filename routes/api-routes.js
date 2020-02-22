// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {    
    var userData;
    if(req.body.ClientId ==''){
      userData = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        type: req.body.type,
        status: req.body.status
      }
    }
    else{
      userData = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        type: req.body.type,
        status: req.body.status,
        ClientId: req.body.ClientId
      }
    }
    console.log("req:", userData);
    db.User.create(userData)
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.log(err);
        res.status(400).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/users", function (req, res) {
    // if(req.user.type == 'client') return 403;
    // if(req.user == 1) return db.User.findAll();
    // return return db.User.findAll({});
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // // id, title, description, completedBy, status, creator
  // // Route for getting task list
  // app.get("/api/viewtasks", function (req, res) {
  //   db.Task.findAll({  
  //     attributes: ['id', 'name', 'type', 'status','email'], 

  //   })
  //     .then(function (dbUser) {
  //       res.json(dbUser);
  //     });
  // });


  // id, title, description, completedBy, status, creator
  // Route for getting task list
  app.get("/api/viewtasks", function (req, res) {
    db.Task.findAll({  
      attributes: ['id', 'title', 'description', 'completedBy', 'status'],
      include: [{ model: db.User, attributes: ['id','name'] }]
    })
      .then(function (dbUser) {
        console.log(dbUser);
        res.json(dbUser);
      });
  });


 // Route for getting user list
  app.get("/api/viewusers", function (req, res) {
    db.User.findAll({  
      attributes: ['id', 'name', 'type', 'status','email'], 
      include: [{ model: db.Client, attributes: ['id','name'] }]
    })
      .then(function (dbUser) {
        console.log("api-routes:", dbUser);
        res.json(dbUser);
      });
  });
  // Route for getting client list
  app.get("/api/viewclients", function (req, res) {
    db.Client.findAll({  
      attributes: ['id', 'name', 'email', 'address', 'status']})
      .then(function (dbUser) {
        console.log("api-routes:", dbUser);
        res.json(dbUser);
      });
  });

};
