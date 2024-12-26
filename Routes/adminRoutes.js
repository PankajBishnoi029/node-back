// const express = require("express");
// const { adminDashboard } = require("../controllers/admin/adminPanel.js");
// const verifyToken = require("../middleware/verifyToken.js");
// const verifyRole = require("../middleware/verifyRole.js");
// const adminRoutes = express.Router();
// //
// //Admin Dashboard
// adminRoutes.post(
//   "/verifyUser",
//   verifyToken,
//   verifyRole("admin"),
//   adminDashboard
// );
// // //adminRoutes.post(
// //   "/verifyUser",
// //   [verifyToken, verifyRole("admin")],
// //   adminDashboard
// // );
// //
// module.exports = adminRoutes;
const express = require("express");
const { adminDashboard } = require("../controllers/admin/adminPanel.js");
const verifyToken = require("../middleware/verifyToken.js");
const verifyRole = require("../middleware/verifyRole.js");

const adminRoutes = express.Router();

// Admin Dashboard
adminRoutes.post(
  "/verifyUser",
  verifyToken,
  verifyRole("admin"),
  adminDashboard
);

// Admin-specific Route Example
adminRoutes.get(
  "/admin",
  verifyToken,
  verifyRole("admin"), // Pass the required role
  (req, res) => {
    res.status(200).json({ message: "Welcome, Admin!" });
  }
);

module.exports = adminRoutes;
