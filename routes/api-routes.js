// Require in express and express router
const express = require("express");
const router = express.Router();

// Require in the workout schema.
const Workout = require("../models/workout");

// Route for getting all workout data.
router.get("/", (req, res) => {
	Workout.find({}).then(dbWorkout => {
		res.json(dbWorkout);
	}).catch(err => {
		res.json(err);
	});
});

// Route for posting new workout
router.post("/", ({ body }, res) => {
	Workout.create(body).then((dbWorkout => {
		res.json(dbWorkout);
	})).catch(err => {
		res.json(err);
	});
});

// Route for updating workout
router.put("/:id", (req, res) => {
	Workout.findByIdAndUpdate(
        req.params.id,
        {
			$inc: { totalDuration: req.body.duration },
			$push: {exercises: req.body}
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

// Route for getting workouts based on specific range.
router.get("/range", (req, res) => {
	Workout.find({})
		.then(dbWorkout => {
			res.json(dbWorkout);
		}).catch(err => {
			res.json(err);
		});
});

module.exports = router;