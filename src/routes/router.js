const serviceController = require("../controllers/serviceController");

const express = require("express");
const router = express.Router();
router.post("/", serviceController.create);

module.exports = router;
