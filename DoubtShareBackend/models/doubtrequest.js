// models/doubtRequest.js
const mongoose = require('mongoose');

const doubtRequestSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  assignedTutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
  },
}, { timestamps: true });

const DoubtRequest = mongoose.model('DoubtRequest', doubtRequestSchema);

module.exports = DoubtRequest;
