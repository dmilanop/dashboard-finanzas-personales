const { body } = require('express-validator');

const userRules = [
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('lastname').notEmpty().withMessage('El apellido es requerido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

module.exports = {
    userRules,
};