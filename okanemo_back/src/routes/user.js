const express = require('express');
const Route = express.Router();
const { roleChanged, getAllUsers, dataChanged } = require('../controller/user');
const { dataCheck, roleCheck } = require('../middleware/user');

Route.put('/changerole', roleCheck, roleChanged);
Route.put('/changedata', dataCheck, dataChanged);
Route.get('/allUser', getAllUsers);

module.exports = Route;
