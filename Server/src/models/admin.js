const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
});
const Admin = mongoose.model('Admin', adminSchema);


module.exports = Admin