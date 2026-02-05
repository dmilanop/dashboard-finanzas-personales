const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true, enum: ['USD', 'EUR', 'BS', 'USDT'] },
    type: { type: String, required: true, enum: ['Ingreso', 'Egreso'] },
    category: { type: String, required: true, enum: ['Sueldo', 'Comida', 'Transporte', 'Salud', 'Entretenimiento', 'Otros'] },
    date: { type: Date, default: Date.now},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Transaction', TransactionSchema);