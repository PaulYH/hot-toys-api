const mongoose = require('mongoose');

const figureSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    revealYear: {
        type: Number
    },
    releaseYear: {
        type: Number
    },
    skuDefault: {
        type: Number,
        required: true
    },
    skuSecondary: {
        type: Number
    }

});

module.exports = mongoose.model('Figure', figureSchema);