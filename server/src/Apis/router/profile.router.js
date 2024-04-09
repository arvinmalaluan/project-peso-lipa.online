const router = require("express").Router();
const controller = require("../controller/profile.controller");

router.post("/create", controller.createProfile);

module.exports = router;
