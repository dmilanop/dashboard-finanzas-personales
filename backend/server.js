require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Primera prueba de servidor backend con nodemon');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor en puerto ${PORT}`)
});