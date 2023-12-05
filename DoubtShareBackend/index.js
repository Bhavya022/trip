const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const { connection } = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log('Server started, MongoDB connected');
});
