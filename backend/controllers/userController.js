const User = require('../models/UserSchema');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error al obtener los usuarios",
            error: error.message
        });
    };
};

const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(201).json({
            ok: true,
            mensaje: "Usuario creado exitosamente",
            user: savedUser
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            mensaje: "No se pudo crear el usuario, llenar todos los campos",
            error: error.message
        });
    };
};

module.exports = {
    getUsers,
    createUser
};