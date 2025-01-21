// const User = require("../models/userModels.js");

// function verifyRole(role) {
//   return (req, res, next) => {
//     if (req.user && req.user.role === role) {
//       return next();
//     }
//     return res.status(403).json({ message: "unauthorised user" });
//   };
// }

// module.exports = verifyRole;

// // function verifyRole(role) {
// //   return (req, res, next) => {
// //     try {
// //       if (req.user && req.user.role === role) {
// //         return next();
// //       }
// //       return res.status(403).json({ message: "Unauthorized user" });
// //     } catch (error) {
// //       next(error);
// //     }
// //   };
// // }

// // module.exports = verifyRole;
const User = require("../models/userModels.js");

function verifyRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({ message: "unauthrosied users" });
  };
}

module.exports = verifyRole;
