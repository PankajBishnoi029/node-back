const User = require("../../models/userModels");

async function searchUser(req, res) {
  try {
    const { name, email } = req.query;
    const nameRegex = new RegExp(name, "i");
    const emailRegex = new RegExp(email, "i");
    const query = { name: nameRegex, email: emailRegex };

    const finalUser = await User.find(query);
    if (!finalUser) {
      return res.status(400).json({ message: "no user found" });
    }
    return res
      .status(200)
      .json({ message: "user searched successfully", finalUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { searchUser };
