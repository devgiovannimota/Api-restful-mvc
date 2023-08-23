const serviceController = require("../controllers/serviceController");

const express = require("express");
const router = express.Router();

router.post("/", serviceController.create);
router.get("/", serviceController.getall);
router.get("/:id", serviceController.getById);
router.put("/:id", serviceController.update);
router.delete("/:id", serviceController.delete);

module.exports = router;
