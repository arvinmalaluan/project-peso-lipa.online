const router = require("express").Router();
const controller = require("../controller/documents.controller");

router.get("/my/:profile_id", controller.get_mines);
router.get("/one/:id", controller.get_one_resume);
router.post("/r", controller.createResume);
router.post("/d", controller.createDocuments);
router.patch("/r/:id", controller.patchResume);
router.patch("/d/:id", controller.patchDocuments);
router.delete("/:id", controller.delete);

module.exports = router;
