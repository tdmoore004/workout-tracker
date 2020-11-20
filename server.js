// Require in necessary npm packages.
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");

// Requiring in the api and html routes.
const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

// Setting up PORT.
const PORT = process.env.PORT || 3000;

// Setting up express to be used.
const app = express();

// Setting up morgan.
app.use(logger("dev"));

// Setting up middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connecting to mongo database.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Utilizing the routes from both html and api route files.
app.use("/api/workouts", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
