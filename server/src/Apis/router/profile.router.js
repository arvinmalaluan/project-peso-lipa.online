const router = require("express").Router();
const controller = require("../controller/profile.controller");

router.post("/create", controller.create);
router.get("/get/:id", controller.get);
router.patch("/patch/:id", controller.update);

module.exports = router;
