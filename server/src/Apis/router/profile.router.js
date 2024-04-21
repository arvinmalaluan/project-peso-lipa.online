const router = require("express").Router();
const controller = require("../controller/profile.controller");

router.post("/create", controller.create);
router.get("/get/:id", controller.get);
router.get("/get_id/:id", controller.get_id);
router.get("/all", controller.get_all);
router.patch("/patch/:id", controller.update);

module.exports = router;
