const express = require('express');
const router = express.Router();
const { userRules } = require('../validators/userValidator');
const validate = require('../middlewares/validateMiddleware');
const getUsers = require('../controllers/userController').getUsers;
const createUser = require('../controllers/userController').createUser;

// Obtener todos los usuarios
router.get('/', getUsers);

// Crear un nuevo usuario
router.post('/signup', userRules, validate, createUser);

module.exports = router;