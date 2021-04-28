module.exports = app => {
    const verifySignUp  = require("../helpers");
    const userController = require("../controllers/user.controller.js");
  
    const router = require("express").Router();
  
    // Create a new user
    router.post("/sign-up/",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    userController.signup
    );
    
    // login
    router.post("/sign-in/",userController.signin);
  
    app.use("/api/users", router);
  };