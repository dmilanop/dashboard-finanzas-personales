require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/UserSchema');
const Transaction = require('./models/TransactionSchema');

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());

// Ruta GET de prueba
app.get('/', (req, res) => {
    res.send('Primera prueba de servidor backend con nodemon');
});

// Ruta POST para crear un nuevo usuario 
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser);

    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo guardar el producto",
            error: error.message
        });
    }
});

// Ruta POST para crear una nueva transacción
app.post('/api/transactions', async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();

        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo guardar la transacción",
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor en puerto ${PORT}`)
});