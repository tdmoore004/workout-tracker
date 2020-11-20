// Require in path, express, and express router.
const path = require("path");
const express = require("express");
const router = express.Router();

// Route for main html page.
router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Route for stats page.
router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// router.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../public/html.html"));
// });

module.exports = router;