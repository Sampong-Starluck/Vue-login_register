const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { collection: 'users' });

module.exports = mongoose.model('users', userSchema);