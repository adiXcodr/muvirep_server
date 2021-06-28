const MovieSchema = require("../models/movieModel");
const { paginate } = require("../utils/globalHandlers");

const getAllMovies = async (req, res, next) => {
    try {
        let movies = await MovieSchema.find();
        console.log("Movies found?", movies);
        if (movies) {
            res.status(200).json({ "status": "success", "data": movies });
        }
        else {
            res.status(404).json({ "status": "failure", "data": [] });
        }
    }
    catch (err) {
        res.status(500).json({ "status": "failure", "data": JSON.stringify(err) });
    }
};

const getMoviesPaged = async (req, res, next) => {
    try {
        const {
            pageNumber,
            perPage
        } = req.query;
        let movies = await MovieSchema.find();
        if (movies) {
            movies = paginate(movies, pageNumber, perPage);
            res.status(200).json({ "status": "success", "data": movies });
        }
        else {
            res.status(404).json({ "status": "failure", "data": [] });
        }
    }
    catch (err) {
        res.status(500).json({ "status": "failure", "data": JSON.stringify(err) });
    }
};

const addMovie = async (req, res, next) => {
    try {
        const {
            name,
            year,
            language,
            thumbnail,
            movie
        } = req.body;
        MovieSchema.create({
            name,
            year,
            language,
            thumbnail,
            movie
        }, (err, doc) => {
            if (err) res.status(500).json({ "status": "failure", "data": JSON.stringify(err) });
            else {
                res.status(200).json({ "status": "success", "data": doc });
            }
        });
    }
    catch (err) {
        res.status(500).json({ "status": "failure", "data": JSON.stringify(err) });
    }
};

module.exports = {
    getAllMovies,
    getMoviesPaged,
    addMovie
};