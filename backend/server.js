require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const user = require('./routes/user');
const transaction = require('./routes/transaction');
const myLogger = require('./middlewares/myLoggerMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();
const PORT = process.env.PORT || 4000;

// Conección a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(myLogger);

// Ruta Users
app.use('/api/users', user);


// Ruta Transactions
app.use('/api/transactions', transaction);

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Servidor en puerto ${PORT}`)
});