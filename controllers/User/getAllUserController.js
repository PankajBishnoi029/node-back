const User = require("../../models/userModels.js");

async function allUsers(req, res) {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({ message: "no users is found" });
    }
    return res.status(200).json({ message: "users is found", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { allUsers };
