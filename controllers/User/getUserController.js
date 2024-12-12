const User = require("../../models/userModels.js");

async function oneUser(req, res, next) {
  try {
    const _id = req.params._id;
    const user = await User.findById(_id);
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
