const User = require("../../models/userModels.js");

async function addUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const saveUser = await new User({
      name,
      email,
      password,
    });
    await saveUser.save();
    console.log(saveUser);
    return res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addUser };
