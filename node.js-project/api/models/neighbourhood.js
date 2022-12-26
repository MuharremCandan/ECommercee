const mongoose = require('mongoose');

const neighbourhoodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    town_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Town',
        required: true
    },
    county_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'County',
        required: true
    },
    neighbourhood: {
        type: String,
        required: false
    }

}, { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Neighbourhood', neighbourhoodSchema);