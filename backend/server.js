const express = require('express');
const main = require('./config/db');
const app = express();
const port = 3000;

main();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Primera prueba de servidor backend con nodemon');
});

app.listen(port, () => {
    console.log(`🚀 Servidor en puerto ${port}`)
});