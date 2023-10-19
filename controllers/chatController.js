const ChatMessage = require('../models/ChatMessage');

const chatController = {
  sendMessage: async (req, res) => {
    try {
      const { room, sender, message } = req.body;
      const chatMessage = new ChatMessage({ room, sender, message });
      await chatMessage.save();
      res.status(201).json(chatMessage);
    } catch (error) {
      res.status(500).json({ error: 'Error sending message' });
    }
  },

  getMessagesInRoom: async (req, res) => {
    try {
      const { roomId } = req.params; 
      console.log(roomId)
      const messages = await ChatMessage.find({ _id: roomId }).populate('sender', 'username'); 
      console.log(messages)  
      const messageTexts = messages.map((message) => message.message);
      res.json(messageTexts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching messages' });
    }
  },
};

module.exports = chatController;
