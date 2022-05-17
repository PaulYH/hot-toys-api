const mongoose = require('mongoose');

const hotToySchema = new mongoose.Schema({
    _id: {
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
    subBrand: {
        type: String
    },
    revealYear: {
        type: Number
    },
    releaseYear: {
        type: Number,
        required: true
    },
    skuDefault: {
        type: Number,
    },
    skuSecondary: {
        type: Number
    },
    msrp: {
        type: Number
    }

});

module.exports = mongoose.model('HotToy', hotToySchema);