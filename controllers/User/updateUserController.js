const User = require("../../models/userModels.js");

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (!updateUser) {
      return res
        .status(400)
        .json({ message: "user is not updated successfully" });
    }
    return res.status(200).json({ message: "user is updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { updateUser };
