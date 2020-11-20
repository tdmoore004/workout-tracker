// Require in express and express router
const express = require("express");
const router = express.Router();

// Require in the workout schema.
const db = require("../models");

// Route for getting all workout data.
router.get("/", (req, res) => {
	db.Workout.find({}).then(dbWorkout => {
		res.json(dbWorkout);
	}).catch(err => {
		res.json(err);
	});
});

// Route for posting new workout
router.post("/", ({ body }, res) => {
	db.Workout.create(body).then((dbWorkout => {
		res.json(dbWorkout);
	})).catch(err => {
		res.json(err);
	});
});

// Route for updating workout
router.put("/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: req.params.id },
		{
			$inc: { totalDuration: req.body.duration },
			$push: { exercises: req.body }
		},
		{ new: true }).then(dbWorkout => {
			res.json(dbWorkout);
		}).catch(err => {
			res.json(err);
		});
});

// Route for getting workouts based on specific range.
router.get("/range", (req, res) => {
	db.Workout.find({})
		.then(dbWorkout => {
			res.json(dbWorkout);
		}).catch(err => {
			res.json(err);
		});
});

module.exports = router;