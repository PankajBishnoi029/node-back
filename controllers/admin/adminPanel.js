const User = require("../../models/userModels.js");

async function adminDashboard() {
  try {
    const user = await User.find();
    if (!user || user.length === 0) {
      return res.status(400).json({ message: "users not found" });
    }
    res
      .status(200)
      .json({ message: "user is created successfully", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { adminDashboard };
