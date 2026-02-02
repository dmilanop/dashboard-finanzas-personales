const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/dashboard-finanzas-personales';

main().catch(err => console.log(err));

async function main () {
    await mongoose.connect(dbURI);
}

module.exports = main;