const express = require('express');
const router = express.Router();
const getUsers = require('../controllers/userController').getUsers;
const createUser = require('../controllers/userController').createUser;

// Obtener todos los usuarios
router.get('/', getUsers);

// Crear un nuevo usuario
router.post('/signup', createUser);

module.exports = router;