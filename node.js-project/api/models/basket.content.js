const mongoose = require('mongoose');

const basketContentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_id: {
        type: String,
        required: true
    },
    basket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket',
        required: true
    },
    basket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('BasketContent', basketContentSchema);