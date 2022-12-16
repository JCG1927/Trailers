const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movieSchema = new mongoose.Schema({
  title: { type: String},
  date: { type: String},
  director: { type: String },
  actors: { type: String },
  review: { type: String },
  imageUrl: { type: String },
  trailerUrl: { type: String }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie