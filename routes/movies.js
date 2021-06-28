const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movieController");

/* GET All Movies. */
router.get('/', movieController.getAllMovies);

/* GET limited Movies. */
router.get('/paged', movieController.getMoviesPaged);

/* Add a movie */
router.post('/new', movieController.addMovie);

module.exports = router;
