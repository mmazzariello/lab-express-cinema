const express = require("express");
const router = express.Router();
const Movie = require("../models/Moviemodel");

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then((allTheMoviemodelFromDB) => {
    console.log("Retrieved movies from DB:", allTheMoviemodelFromDB);
    res.render("/movies", { movie1: allTheMoviemodelFromDB });
  })
  .catch((error) => {
    console.log("Error while getting the movies from the DB: ", error);
  });
});



  module.exports = router;