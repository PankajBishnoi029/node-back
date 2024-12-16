const User = require("../models/userModels.js");

function verifyRole(req, res, next) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({ message: "unauthorised user" });
  };
}

module.exports = verifyRole;
