const db = require("../models");
let bcrypt =require('bcryptjs');
const User = db.user;
// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  
  let hash = bcrypt.hashSync(req.body.password, 10);
  // Create a user
  const user = {
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
    password: hash,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
  };

  // Save user in database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
      });
    });
};