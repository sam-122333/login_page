//import packages
const express = require("express");
const Authenticate = require("../middleware/authenticate");

const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const { response } = require("express");

// router.get("/", (req, res) => {
//   res.send("server side running router js");
// });

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

//register page
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(402).json({ message: "Password doesn't match" });
    } else {
      // console.log("saving the data");
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      user.save();

      // console.log("data saved successfully");
      return res.status(201).json({ message: "access granted" });
    }
  } catch (err) {
    // console.log(err.message);
  }
});

//login page
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const userExist = await User.findOne({ email: email });
    // const token = await userExist.generateAuthToken();
    // console.log(token);

    if (userExist) {
      const isMatch = await bcrypt.compare(password, userExist.password);
      const token = await userExist.generateAuthToken();
      // console.log(token);
      // res.cookie("jwtToken", token, {
      //   expires: new Date(Date.now() + 20000),
      //   httpOnly: true,
      // });

      if (!isMatch) {
        res.status(401).json({ message: "invalid credential" });
      } else {
        res
          .cookie("jwtToken", token, {
            expires: new Date(Date.now() + 2000000000),
            httpOnly: true,
            secure: true,
          })
          .status(201)
          .json({ message: "login success" });
      }
    } else {
      res.status(402).json({ message: "invalid credential" });
    }
  } catch (error) {
    // console.log(error.message);
  }
});

//about page

router.get("/about", Authenticate, (req, res) => {
  // console.log("about page working");
  res.send(req.rootUser);
});

//contact page

router.post("/contact", Authenticate, async (req, res) => {
  // console.log("contact page working");
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    // console.log(req.userId);
    const userContact = await User.findOne({ _id: req.userId });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "message saved successfully" });
    } else {
      // console.log("page not working");
      res.status(404).json({ message: "page not working" });
    }
  } catch (error) {
    // console.log(error);
    res.status(402).send(error.message);
  }
});

// get data for home and contact page

router.get("/getdata", Authenticate, async (req, res) => {
  // console.log("fetching data");
  res.send(req.rootUser);
});

//logout page

router.get("/logout", (req, res) => {
  // console.log("logout page working");
  res.clearCookie("jwtToken");
  res.status(200).send("user logged out");
});

module.exports = router;
