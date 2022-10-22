const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainFunc.controller");

router.get("/", controller.root);

router.post("/search", controller.search);

module.exports = router;