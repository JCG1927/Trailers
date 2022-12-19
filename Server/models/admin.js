const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9]+$/
  },
  password: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Admin', adminSchema);
