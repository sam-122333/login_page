const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

//database
require("./DB/connection");
// const User = require("./models/userSchema");

app.use(express.json());

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

app.listen(PORT, "localhost", () => {
  console.log(`server listen on port ${PORT}`);
});
