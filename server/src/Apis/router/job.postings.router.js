const router = require("express").Router();
const controller = require("../controller/job.postings.controller");

router.post("/create", controller.create);
router.get("/get", controller.get);
router.get("/get/:id", controller.get_using_id);
router.get("/get/:fk", controller.get_using_fk);
router.patch("/patch/:id", controller.patch);

// router.get("/delete/:id")

module.exports = router;