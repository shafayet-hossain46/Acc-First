const express = require('express');
const usersControllers = require('../../Controllers/v1/users.controllers');
const router = express.Router();

router.route('/')
.get(usersControllers.getAllUsers);

module.exports = router;
