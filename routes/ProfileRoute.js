const express = require("express");
const router = express.Router();
const profileController = require("../App/Controller/ProfileController");

router.get("/", profileController.renderProfile);

module.exports = router;