const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  actors: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  review: {
    type: String,
    required: true,
    trim: true
  },
  imagesUrl: {
    type: String,
    required: true,
    trim: true
  },
  trailersUrl: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
