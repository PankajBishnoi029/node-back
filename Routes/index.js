const express = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const routes = express.Router();

// end points
routes.use("/admin", adminRoutes);
routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
