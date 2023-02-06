// const jwt = require("jsonwebtoken");
// const User = require("../models/userSchema");

// const Authenticate = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwtToken;
//     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//     const rootUser = await User.findById({
//       _id: verifyToken.id,
//       "tokens.token": token,
//     });
//     if (!rootUser) {
//       res.status(404).send({ message: "user not found" });
//       console.log("next not work");
//     }
//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;
//     console.log("next work");
//     next();
//   } catch (err) {
//     console.log(req.cookies.jwtToken, "hello");
//     res.status(401).send({ message: err.message });
//     console.log(err.message, "hoo");
//   }
// };

// module.exports = Authenticate;
