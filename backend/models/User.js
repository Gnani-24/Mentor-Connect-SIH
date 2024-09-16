const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['mentor', 'mentee'],
    required: true,
  },
  calendlyLink: {
    type: String,
    required: function () {
      return this.role === 'mentor'; // Only required for mentors
    },
  },
});

module.exports = mongoose.model('User', userSchema);
