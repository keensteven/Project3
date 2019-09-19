//routes/api/
const router = require("express").Router();
const apiRoutes = require("./users");

router.use("/", apiRoutes);

module.exports = router;