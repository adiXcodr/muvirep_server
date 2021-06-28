const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema([
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        movie: {
            type: String,
            required: true,
        }
    }
]);

module.exports = Movie = mongoose.model("movie", MovieSchema);
