const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");

/* GET All Movies. */
router.get('/', movieController.getAllMovies);

/* Add a movie */
router.post('/', movieController.addMovie);

module.exports = router;
