const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    lastname: String,
});

module.exports = mongoose.model('User', UserSchema);