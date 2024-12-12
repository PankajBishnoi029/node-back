const express = require("express");
const { createAccount } = require("../controllers/auth/signUp.js");
const userRoutes = express.Router();
const {
  addUser,
  oneUser,
  allUsers,
  deleteUser,
  updateUser,
  searchUser,
} = require("../controllers/User/index.js");

// end ponits
userRoutes.post("/create", createAccount);
userRoutes.post("/addUser", addUser);
userRoutes.get("/oneUser/:id", oneUser);
userRoutes.get("/allUsers", allUsers); // Fetch all users
userRoutes.delete("/deleteUser/:id", deleteUser); // Delete a user by ID
userRoutes.put("/updateUser/:id", updateUser);
userRoutes.get("/searchUser", searchUser);

module.exports = userRoutes;
