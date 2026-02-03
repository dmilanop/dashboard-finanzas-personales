const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main () {
//     await mongoose.connect(process.env.MONGO_URI);
// }

// module.exports = main;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB conectado exitosamente');
    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
        process.exit(1)
    }
};

module.exports = connectDB;