const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  // Add other message-related fields as needed
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
