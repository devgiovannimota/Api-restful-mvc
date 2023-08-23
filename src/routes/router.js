const express = require("express");
const router = express.Router();
const serviceRouter = require("./serviceRoutes");
const partyRouter = require("./partyRoutes");

router.use("/", serviceRouter);

router.use("/", partyRouter);

module.exports = router;
