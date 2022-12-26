const mongoose = require('mongoose');

const townSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    town_name: {
        type: String,
        required: true
    },
    county_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'County',
        required: true
    },

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Town', townSchema);