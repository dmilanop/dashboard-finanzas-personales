const express = require('express');
const router = express.Router();
const { transactionRules } = require('../validators/transactionValidator');
const validate = require('../middlewares/validateMiddleware');
const getTransactions = require('../controllers/transactionController').getTransactions;
const createTransaction = require('../controllers/transactionController').createTransaction;

// Obtener todas las transacciones
router.get('/', getTransactions);

// Crear una nueva transacción
router.post('/new-transaction', transactionRules, validate, createTransaction);

module.exports = router;