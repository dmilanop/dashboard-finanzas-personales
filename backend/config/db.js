const mongoose = require('mongoose');
// const User = require('../models/UserSchema');

// main().catch(err => console.log(err));

// async function main () {
//     await mongoose.connect(process.env.MONGO_URI);
// }

// module.exports = main;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB conectado exitosamente');

        // Prueba de creación de un usuario
        
        // const newUser = new User({
        //     id: 1,
        //     name: 'Diego',
        //     lastname: 'Perez'
        // });

        // await newUser.save();
        // console.log("✅ Usuario de prueba guardado con éxito");

    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
        process.exit(1)
    }
};

module.exports = connectDB;