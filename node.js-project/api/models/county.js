const mongoose = require('mongoose');

const countySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    county_name: {
        type: String,
        required: true
    },

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('County', countySchema);