const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // Add other room-related fields as needed
});

module.exports = mongoose.model('Room', roomSchema);
