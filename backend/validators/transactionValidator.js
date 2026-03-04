const { body } = require('express-validator');

const transactionRules = [
    body('description').notEmpty().withMessage('La descripción es requerida'),
    body('amount').notEmpty().isNumeric().withMessage('El monto debe ser un número').custom(value => value > 0).withMessage('El monto debe ser mayor a cero'),
    body('currency').notEmpty().isIn(['USD', 'EUR', 'BS', 'USDT']).withMessage('La moneda debe ser USD, EUR, BS o USDT'),
    body('type').notEmpty().isIn(['Ingreso', 'Egreso']).withMessage('El tipo debe ser Ingreso o Egreso'),
    body('category').notEmpty().isIn(['Sueldo', 'Comida', 'Transporte', 'Salud', 'Entretenimiento', 'Otros']).withMessage('La categoría debe ser Sueldo, Comida, Transporte, Salud, Entretenimiento u Otros'),
    body('date').optional().isISO8601().withMessage('La fecha debe ser una fecha válida'),
    body('user').notEmpty().isMongoId().withMessage('El usuario debe ser un ID válido'),
];

module.exports = {
    transactionRules,
};