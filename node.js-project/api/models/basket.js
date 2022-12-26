const mongoose = require('mongoose');

const baskettSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Basket', baskettSchema);