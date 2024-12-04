const User = require("../../models/userModels.js");

async function oneUser(req, res, next) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({ message: "users is not found" });
    }
    return res.status(200).json({ message: "users is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { oneUser };
