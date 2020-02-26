// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var Sequelize = require("sequelize");

var { isAdmin, isClientUser, isUser } = require("../config/middleware/isAuthenticated")

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    var data = {
      id : req.user.id,
      type : req.user.type,
      clientId : req.user.ClientId,
      name : req.user.name
    }
    res.json(data);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup",isAdmin, function (req, res) {
    // console.log(req);
    var userData;
    if (req.body.ClientId == '') {
      userData = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        type: req.body.type,
        status: req.body.status
      }
    }
    else {
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
        res.redirect(307, "/viewusers");
      })
      .catch(function (err) {
        res.sendStatus(400).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/users", isAdmin,function (req, res) {
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

  //******************************** */
  app.post("/api/createclient",isAdmin, function (req, res) {

    var clientData = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      status: req.body.status
    }


    db.Client.create(clientData)
      .then(function () {
        res.redirect('/viewclient');
      })
      .catch(function (err) {
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
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


  //******************************** */
  app.post("/api/createtask",isAdmin, function (req, res) {

    var taskData = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      completedBy: req.body.date,
      // ClientId: req.body.ClientId,
      UserId: req.body.UserId
    }

    console.log(taskData);

    db.Task.create(taskData)
      .then(function () {
        console.log("done");
        res.redirect('/assigntask');
      })
      .catch(function (err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  //*************************************** */


  // id, title, description, completedBy, status, creator
  // Route for getting task list
  app.get("/api/gettasks",isAdmin, function (req, res) {
    db.Task.findAll({
      attributes: ['id', 'title', 'description', 'completedBy', 'status'],
      include: [{ model: db.User, attributes: ['id', 'name'] }]
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });


  // Route for getting user list
  app.get("/api/viewusers",isAdmin, function (req, res) {
    db.User.findAll({
      attributes: ['id', 'name', 'type', 'status', 'email'],
      include: [{ model: db.Client, attributes: ['id', 'name'] }]
    })
      .then(function (dbUser) {

        res.json(dbUser);
      });
  });
  // Route for getting client list
  app.get("/api/viewclients", isAdmin, function (req, res) {
    db.Client.findAll({
      attributes: ['id', 'name', 'email', 'address', 'status']
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/signup", isAdmin, function (req, res) {

    db.User.findAll({
      attributes: ['id', 'name', 'email', 'address', 'status']
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });


  // route for getting all the active clients
  app.get("/api/getclients", isAdmin, function (req, res) {
    db.Client.findAll({
      attributes: ['id', 'email', 'status'],
      where: {
        status: 'Active'
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  //******************************** */
  app.post("/api/createclienttasks", isAdmin, function (req, res) {
    var data = req.body.data;
    // console.log(data);
    db.ClientTask.bulkCreate(JSON.parse(data), { validate: true })
      .then(function () {
        res.sendStatus(200);
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });


  app.put("/api/updataskstatus",isAdmin, function (req, res) {
    var data = req.body;
    console.log(data);
    db.Task.update(
      { status: 'Assigned' },
      { where: { id: data.id } }
    )
      .then(function () {
        res.render('assigntask');
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  // Route for getting clienttasks list for admins (view only)
  app.get("/api/viewclienttasks",isAdmin, function (req, res) {
    db.sequelize.query(" select `clienttasks`.`id` as `clienttasks_id`, `clienttasks`.`status` as `clienttasks_status`, " +
      "`clients`.`id` AS `clients_id`, `clients`.`name` AS `clients_name`, `clients`.`address` AS `clients_address`, " +
      "`tasks`.`id` AS`tasks_id`, `tasks`.`title` AS`tasks_title`, `tasks`.`description` AS`tasks_description`, " +
      "`tasks`.`status` AS`tasks_status`, `tasks`.`UserId` AS`tasks_UserId` , `tasks`.`completedBy` AS`tasks_completedBy` " +
      "from clienttasks  inner join " +
      "clients on clienttasks.clientId = clients.id " +
      "inner join tasks on clienttasks.taskId = tasks.id ", { type: Sequelize.QueryTypes.SELECT })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });



  // Route for getting clienttasks list for clients to complete
  app.get("/api/viewclienttasksclient/:clientId",isUser, function (req, res) {
    var client = req.params.clientId;
    db.sequelize.query(" select `clienttasks`.`id` as `clienttasks_id`, `clienttasks`.`status` as `clienttasks_status`, " +
      "`clients`.`id` AS `clients_id`, `clients`.`name` AS `clients_name`, `clients`.`address` AS `clients_address`, " +
      "`tasks`.`id` AS`tasks_id`, `tasks`.`title` AS`tasks_title`, `tasks`.`description` AS`tasks_description`, " +
      "`tasks`.`status` AS`tasks_status`, `tasks`.`UserId` AS`tasks_UserId` , `tasks`.`completedBy` AS`tasks_completedBy` " +
      "from clienttasks  inner join " +
      "clients on clienttasks.clientId = clients.id " +
      "inner join tasks on clienttasks.taskId = tasks.id WHERE clienttasks.clientId = :clientId", 
      { replacements: { clientId: client },
       type: Sequelize.QueryTypes.SELECT })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  

  app.put("/api/updateassignedtaskstatus",isClientUser, function (req, res) {
    var data = req.body;
    console.log(data);
    db.ClientTask.update(
      { status: 'Completed' },
      { where: { id: data.id } }
    )
      .then(function () {
        // window.location.replace('/viewclienttasksclient');
        res.render('viewclienttasksclient');
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  // route for getting all the active clients
  app.get("/api/checkuser", isUser, function (req, res) {
    res.json(req.user.type);
  })

}
  
