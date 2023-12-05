// models/tutor.js
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  classGrade: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    default: [],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  // Add other fields specific to the Tutor model
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
