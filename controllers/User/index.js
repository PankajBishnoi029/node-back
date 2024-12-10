const { addUser } = require("./addUserController");
const { oneUser } = require("./getUserController");
const { allUsers } = require("./getAllUserController");
const { deleteUser } = require("./deleteUserController");
const { updateUser } = require("./updateUserController");

module.exports = { addUser, oneUser, allUsers, deleteUser, updateUser };
