// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = { isAdmin, isClientUser, isUser, isUrlAdmin, isUrlClientUser, isUrlUser}

// is admin
function isAdmin (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && req.user.type=="administrator") {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.sendStatus(401);
  // location.redirect("/login");
};


// is Normal user
function isClientUser (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && (req.user.type=="client" )) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.sendStatus(401);
};


function isUser (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && (req.user.type=="administrator" || req.user.type=="client" )) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.sendStatus(401);
};





// is admin
function isUrlAdmin (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && req.user.type=="administrator") {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.redirect('/404');
  // location.redirect("/login");
};


// is Normal user
function isUrlClientUser (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && (req.user.type=="client" )) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.redirect('/404');
};


function isUrlUser (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  // console.log(`Authenticaing : ${JSON.stringify(req.user)}` )
  if (req.user && (req.user.type=="administrator" || req.user.type=="client" )) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  res.redirect('/404');
};
