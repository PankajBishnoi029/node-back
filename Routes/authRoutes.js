const express = require("express");
const { loginup, createAccount } = require("../controllers/auth/index.js");
const authRoutes = express.Router();

//
authRoutes.post("/signup", createAccount);
authRoutes.post("/loginedup", loginup);

module.exports = authRoutes;
