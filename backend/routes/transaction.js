const express = require('express');
const router = express.Router();
const Transaction = require('../models/TransactionSchema');

// Obtener todas las transacciones
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();

        res.status(200).json({
            ok: true,
            message: "Transacciones obtenidas exitosamente",
            transactions
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Fallo al obtener las transacciones, error del servidor",
            error: error.message
        });
    };
});

// Crear una nueva transacción
router.post('/new-transaction', async (req, res) => {
    const newTransaction = new Transaction(req.body);

    try {
        const savedTransaction = await newTransaction.save();

        res.status(201).json({
            ok: true,
            message: "Transacción creada existosamente",
            transaction: savedTransaction
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "No se pudo crear la transacción, llenar todos los campos",
            error: error.message
        });
    };
});

module.exports = router;