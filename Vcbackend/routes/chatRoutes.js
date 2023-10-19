const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Send a chat message
router.post('/send', chatController.sendMessage);

// Get messages in a specific room
router.get('/room/:roomId/messages', chatController.getMessagesInRoom);

module.exports = router;
