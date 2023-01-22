const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

//database
require("./DB/connection");
// const User = require("./models/userSchema");

// linked the routes in app.js
app.use(require("./routes/auth"));

// middleware

const middleware = (req, res, next) => {
  next();
};
app.get("/", middleware, (req, res) => {
  res.send("home side running");
});
app.get("/about", middleware, (req, res) => {
  res.send("about side running");
});
app.get("/contact", (req, res) => {
  res.send("contact side running");
});
app.get("/signin", (req, res) => {
  res.send("signin side running");
});
app.get("/signup", (req, res) => {
  res.send("signup side running");
});

app.listen(4000, "localhost", () => {
  console.log("server listen on port 4000");
});
