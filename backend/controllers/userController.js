const User = require('../models/UserSchema');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {
        next(error);
    };
};

const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(201).json({
            ok: true,
            mensaje: "Usuario creado exitosamente",
            user: savedUser
        });

    } catch (error) {
        next(error);
    };
};

module.exports = {
    getUsers,
    createUser
};