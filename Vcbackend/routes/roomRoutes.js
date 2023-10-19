const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Create a new room
router.post('/create', roomController.createRoom);

// Get a list of available rooms
router.get('/list', roomController.getRooms);

module.exports = router;
