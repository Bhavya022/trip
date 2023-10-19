const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

require('dotenv').config(); 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Connect to your database (e.g., MongoDB)
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Middleware
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use('/public', express.static('public')); // Serve static files (if needed)

// Define and use your routes
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const chatRoutes = require('./routes/chatRoutes');

app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/chat', chatRoutes);

// WebSocket (Socket.io) for real-time communication
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle real-time events here (e.g., video streaming, chat)

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
