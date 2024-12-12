const jwt = require("jsonwebtoken");
const User = require("../models/userModels.js");
const dotenv = require("dotenv");
dotenv.config();
function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: " token not found" });
    }

    // verifyToken
    const decoded = jwt.verify(token, process.env.secret_key);
    const user = User.findById(decoded.id);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = verifyToken;
