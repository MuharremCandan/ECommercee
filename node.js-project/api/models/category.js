const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category_name: { 
        type: String, 
        required: true 
    },

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Category', categorySchema);