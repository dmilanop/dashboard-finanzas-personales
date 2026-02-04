const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    description: String,
    userId: Number,
    amount: Number,
    currency: String,
    type: String,
    category: String,
    date: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Transaction', TransactionSchema);