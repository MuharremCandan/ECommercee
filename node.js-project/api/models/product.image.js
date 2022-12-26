const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    image_path: {
        type: String,
        require: true ,
    }
},
    { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Image', imageSchema);