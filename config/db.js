const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/video';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Additional database configurations
  })
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Database connection error:', error));
