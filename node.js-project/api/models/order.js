const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    basket_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        ref: 'Basket',
        required: true
    },
    address_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Address',
        ref: 'Town',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentMethod: {
        type: String,
        default: "COD"
    },
    status: {
        type: mongoose.Schema.Types.String,
        default: 'pending'
    }
},
    {
        timestamps: { createdAt: 'created_at' }
    });

module.exports = mongoose.model('Order', orderSchema);