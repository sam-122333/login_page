const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");


router.get("/", (req, res) => {
  res.send("server side running router js");
});

//promise approach

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(400).json({ message: "Please fill all fields" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       console.log(userExist);

//       if (userExist) {
//         return res.status(400).json({ message: "Email already exists" });
//       }
//       const user = new User({
//         name, email, phone, work, password, cpassword
//       })
//       user.save().then(() => {
//         return res.status(403).json({ message: "access granted" });
//       }).catch((err) => {
//         res.status(500).json({ message: err.message });

//       })
//     }).catch((err) => { console.log(err) })
// });

//async approach

router.post("/register", async (req, res) => {

  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({
      name, email, phone, work, password, cpassword
    })
    user.save()
    return res.status(201).json({ message: "access granted" });

  } catch (err) {
    console.log(err.message)
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) { return res.status(400).json({ message: "Please fill all fields" }); }
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      res.status(400).json({ message: "login error" })
    } else {
      res.json({ message: "login success" })
    }

  } catch (error) {
    console.log(error.message)
  }

});

module.exports = router;
