// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var Sequelize = require("sequelize");
//*************************************** */
//This section is for passport autherisation for individual api route
var { isAdmin, isClientUser, isUser } = require("../config/middleware/isAuthenticated")
//*************************************** */

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    var data = {
      id: req.user.id,
      type: req.user.type,
      clientId: req.user.ClientId,
      name: req.user.name
    }
    res.json(data);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/signup", isAdmin, function (req, res)
  app.post("/api/signup", isAdmin, function (req, res) {
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
        res.redirect(201, '/viewusers');
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
  app.get("/api/users", isAdmin, function (req, res) {
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
  //this is for creating a new client
  app.post("/api/createclient", isAdmin, function (req, res) {
    console.log(req.body);
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


  //******************************** */
  // for creating new task
  app.post("/api/createtask", isAdmin, function (req, res) {

    var taskData = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      completedBy: req.body.date,
      // ClientId: req.body.ClientId,
      UserId: req.body.UserId
    }

    // console.log(taskData);
    //inserting data to Task table
    db.Task.create(taskData)
      .then(function () {
        // console.log("done");
        res.redirect('/assigntask');
      })
      .catch(function (err) {
        // console.log(err);
        res.status(401).json(err);
      });
  });

  //*************************************** */


  // id, title, description, completedBy, status, creator
  // Route for getting task list
  app.get("/api/gettasks", isAdmin, function (req, res) {
    db.Task.findAll({
      attributes: ['id', 'title', 'description', 'completedBy', 'status'],
      include: [{ model: db.User, attributes: ['id', 'name'] }]
    })
      .then(function (dbTask) {
        res.json(dbTask);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
  // Route for getting user list
  app.get("/api/viewusers", isAdmin, function (req, res) {
    db.User.findAll({
      attributes: ['id', 'name', 'type', 'status', 'email'],
      include: [{ model: db.Client, attributes: ['id', 'name'] }]
    })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
  // Route for getting client list
  app.get("/api/viewclients", isAdmin, function (req, res) {
    db.Client.findAll({
      attributes: ['id', 'name', 'email', 'address', 'status']
    })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });


  //*************************************** */
  // to view all current users in the system for admin
  app.get("/api/signup", isAdmin, function (req, res) {
    db.User.findAll({
      attributes: ['id', 'name', 'email', 'address', 'status']
    })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
  // route for getting all the active clients
  // ignore inactive clients in the future update
  app.get("/api/getclients", isAdmin, function (req, res) {
    db.Client.findAll({
      attributes: ['id', 'email', 'status'],
      where: {
        status: 'Active'
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //******************************** */
  // inserting all the client tasks generated to database
  app.post("/api/createclienttasks", isAdmin, function (req, res) {
    var data = req.body.data;
    // console.log(data);
    db.ClientTask.bulkCreate(JSON.parse(data), { validate: true })
      .then(function () {
        res.sendStatus(200);
      })
      .catch(function (err) {
        // console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
  // update all assigned tasks to "Assigned"
  app.put("/api/updataskstatus", isAdmin, function (req, res) {
    var data = req.body;
    console.log(data);
    db.Task.update(
      { status: 'Assigned' },
      { where: { id: data.id } }
    )
      .then(function () {
        res.render('assigntask'); // returning assign task page 
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });

  //*************************************** */
  // Route for getting clienttasks list for admins (view only)
  // this is for admin user to view all the tasks 
  app.get("/api/viewclienttasks", isAdmin, function (req, res) {
    db.sequelize.query(" select `ClientTasks`.`id` as `clienttasks_id`, `ClientTasks`.`status` as `clienttasks_status`, " +
      "`Clients`.`id` AS `clients_id`, `Clients`.`name` AS `clients_name`, `Clients`.`address` AS `clients_address`, " +
      "`Tasks`.`id` AS`tasks_id`, `Tasks`.`title` AS`tasks_title`, `Tasks`.`description` AS`tasks_description`, " +
      "`Tasks`.`status` AS`tasks_status`, `Tasks`.`UserId` AS`tasks_UserId` , `Tasks`.`completedBy` AS`tasks_completedBy` " +
      "from ClientTasks  inner join " +
      "Clients on ClientTasks.clientId = Clients.id " +
      "inner join Tasks on ClientTasks.taskId = Tasks.id ", { type: Sequelize.QueryTypes.SELECT })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });


  //*************************************** */
  // this is for client user to view his own tasks
  // Route for getting clienttasks list for clients to complete
  app.get("/api/viewclienttasksclient/:clientId", isUser, function (req, res) {
    var client = req.params.clientId;
    db.sequelize.query(" select `ClientTasks`.`id` as `clienttasks_id`, `ClientTasks`.`status` as `clienttasks_status`, " +
      "`Clients`.`id` AS `clients_id`, `Clients`.`name` AS `clients_name`, `Clients`.`address` AS `clients_address`, " +
      "`Tasks`.`id` AS`tasks_id`, `Tasks`.`title` AS`tasks_title`, `Tasks`.`description` AS`tasks_description`, " +
      "`Tasks`.`status` AS`tasks_status`, `Tasks`.`UserId` AS`tasks_UserId` , `Tasks`.`completedBy` AS`tasks_completedBy` " +
      "from ClientTasks  inner join " +
      "Clients on ClientTasks.clientId = Clients.id " +
      "inner join Tasks on ClientTasks.taskId = Tasks.id WHERE ClientTasks.clientId = :clientId",
      {
        replacements: { clientId: client },
        type: Sequelize.QueryTypes.SELECT
      })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        console.log(err);
        res.sendStatus(401).json(err);
      });
  });


  //*************************************** */
  // this is for updating assigned tasks to update status
  app.put("/api/updateassignedtaskstatus", isClientUser, function (req, res) {
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

  //*************************************** */
  // route for getting all the active clients
  // this is for getting user type for autherisation purpose
  app.get("/api/checkuser", isUser, function (req, res) {
    res.json(req.user.type);
  })
}

