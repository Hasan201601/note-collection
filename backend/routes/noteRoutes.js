const express = require("express");
const router = express.Router();
const { getNotes } = require("../controllers/notesControllers");

router.route("/").get(getNotes);

module.exports = router;
