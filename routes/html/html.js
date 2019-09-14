const router = require("express").Router();
const path = require("path");

router.get("/enroll", function (req, res) {
  // If the user already has an account send them to the members page
  if (!req.user) {
    res.redirect("/login");
  }
  //res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  //res.sendFile(path.join(__dirname, "../../client/src/index.js"));
  
});
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


module.exports = router;