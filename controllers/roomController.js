const Room = require('../models/Room');
const User = require('../models/User') 
const roomController = {
    createRoom: async (req, res) => {
      try {
        const { name, participants } = req.body;
  
        // Convert usernames to ObjectId values
        const participantIds = await User.find({ username: { $in: participants } }, '_id');
  
        const room = new Room({ name, participants: participantIds });
        await room.save();
        res.status(201).json(room);
      } catch (error) { 
        console.log(error) 
        res.status(500).json({ error: 'Error creating room' });
      }
    },
  getRooms: async (req, res) => {
    try {
      const rooms = await Room.find().populate('participants', 'username');
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching rooms' });
    }
  },
};

module.exports = roomController;
