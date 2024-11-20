const User = require("../../models/userModels.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
async function loginup(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does not exist" });
    }
    const ispassword = await bcrypt.compare(password, user.password);
    if (!ispassword) {
      return res.status(403).json({ message: "password not matched" });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.secret_key,
      { expiresIn: "5d" }
    );
    return res.status(200).json({ message: "user can access token", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { loginup };
