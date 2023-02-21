// import modules and packages
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

//set up express
const app = express();

//setup config path
dotenv.config({ path: "./config.env" });

//setup database
require("./DB/connection");

//
app.use(express.json());

// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// let’s you use the cookieParser in your application
app.use(cookieParser());
app.use(helmet());

// linked the routes in app.js
app.use(require("./routes/auth"));

app.listen(process.env.PORT, "localhost", () => {
  console.log(`server listen on port 4000`);
});
