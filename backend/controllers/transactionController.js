const Transaction = require('../models/TransactionSchema');

const getTransactions = async (req, res) => {
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
};

const createTransaction = async (req, res) => {
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
};

module.exports = {
    getTransactions,
    createTransaction
};