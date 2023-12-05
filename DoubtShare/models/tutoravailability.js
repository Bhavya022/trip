// models/tutorAvailability.js
const mongoose = require('mongoose');

const tutorAvailabilitySchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    unique: true,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  lastPingTime: {
    type: Date,
    default: null,
  },
});

const TutorAvailability = mongoose.model('TutorAvailability', tutorAvailabilitySchema);

module.exports = TutorAvailability;
