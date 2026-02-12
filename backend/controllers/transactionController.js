const Transaction = require('../models/TransactionSchema');

const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        res.status(200).json({
            ok: true,
            message: "Transacciones obtenidas exitosamente",
            transactions
        });

    } catch (error) {
        next(error);
    };
};

const createTransaction = async (req, res, next) => {
    const newTransaction = new Transaction(req.body);

    try {
        const savedTransaction = await newTransaction.save();

        res.status(201).json({
            ok: true,
            message: "Transacción creada existosamente",
            transaction: savedTransaction
        });

    } catch (error) {
        next(error);
    };
};

module.exports = {
    getTransactions,
    createTransaction
};