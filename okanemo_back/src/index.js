const express = require('express');
const Route = express.Router();

const auth = require('./routes/auth');
const user = require('./routes/user');

Route.use('/auth', auth);
Route.use('/user', user);

module.exports = Route;
