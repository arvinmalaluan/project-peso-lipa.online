const router = require("express").Router();
const controller = require("../controller/applications.controller");

router.get("/my/:fk", controller.get_my);
router.get("/one/:id", controller.get_one);
router.post("/", controller.create);
router.patch("/:id", controller.update);

module.exports = router;
