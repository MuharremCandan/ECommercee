const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userType: {
        type: mongoose.Schema.Types.String,
        default: "user"
    },
    name: {
        type: String,
        require: true,
        unique: false,
    },
    surname: {
        type: String,
        require: true,
        unique: false,
    },
    phone: {
        type: String,
        require: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true,
        unique: false,
    }
}, { timestamps: { createdAt: 'created_at' } }

);

module.exports = mongoose.model('User', userSchema);