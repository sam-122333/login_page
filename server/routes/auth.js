const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server side running router js");
});
module.exports = router;
