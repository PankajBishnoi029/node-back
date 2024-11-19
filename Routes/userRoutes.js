const express = require("express");
const { createAccount} = require("../controllers/auth/signUp.js");
const userRoutes = express.Router();

// end ponits
userRoutes.post("/create", createAccount);


module.exports = userRoutes;