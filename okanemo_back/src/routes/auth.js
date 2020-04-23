const express = require('express');
const Route = express.Router();
const { userLogin } = require('../controller/auth');
// const { roleChanged, getAllUsers } = require('../controller/user');
// const { dataCheck } = require('../middleware/user');

Route.post('/login', userLogin);
// Route.put('/role', dataCheck, roleChanged);
// Route.get('/role', getAllUsers);

module.exports = Route;
