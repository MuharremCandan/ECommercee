const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_name: {
        type: String,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    product_size: {
        type: String,
        required: true
    },
    product_graphic: {
        type: String,
        required: true
    },
    product_processor: {
        type: String,
        required: true
    },
    product_ram: {
        type: String,
        required: true
    },
    product_quantity: {
        type: Number,
        required: true
    },
    product_rating: {
        type: Number,
        required: true
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_images:{
        type: String,
        required: false,
    },
    product_category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

},
    { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Product', productSchema);


