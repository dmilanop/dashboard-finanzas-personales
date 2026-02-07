const express = require('express');
const router = express.Router();
const getTransactions = require('../controllers/transactionController').getTransactions;
const createTransaction = require('../controllers/transactionController').createTransaction;

// Obtener todas las transacciones
router.get('/', getTransactions);

// Crear una nueva transacción
router.post('/new-transaction', createTransaction);

module.exports = router;