module.exports = app => {
    const verifySignUp  = require("../helpers");
    const userController = require("../controllers/user.controller.js");
  
    const router = require("express").Router();
  
    // Create a new user
    router.post("/",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    userController.create
    );
    
    // Retrieve a single user with id
    //router.get("/:id", userController.findOne);
  
    // Update a user with id
    //router.put("/:id/change-password", userController.update);
  
    // Delete a user with id
    //router.delete("/:id", userController.delete);
  
    // Delete all users
    //router.delete("/", userController.deleteAll);
  
    app.use("/api/users", router);
  };