const { body } = require('express-validator');

const userRules = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('lastname').notEmpty().withMessage('El apellido es requerido'),
];

module.exports = {
    userRules,
};