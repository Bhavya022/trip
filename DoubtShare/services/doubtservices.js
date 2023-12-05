// doubtService.js
const DoubtRequest = require('../models/doubtRequest');

const DoubtService = {};

DoubtService.createDoubtRequest = async (userId, subject, question) => {
  // Logic to create a doubt request in the database
  const doubtRequest = await DoubtRequest.create({ userId, subject, question });
  return doubtRequest;
};

module.exports = DoubtService;
