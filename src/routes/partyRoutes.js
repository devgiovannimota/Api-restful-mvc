const express = require("express");
const router = express.Router();
const partyController = require("../controllers/partyController");

router.post("/parties", partyController.create);
router.get("/parties/:id", partyController.getById);
router.delete("/parties/:id", partyController.delete);

module.exports = router;
