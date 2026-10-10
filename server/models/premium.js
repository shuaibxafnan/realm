const mongoose = require('mongoose');

const PremiumSchema = new mongoose.Schema({
    model: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: String,
    },
    category: {
        type: Array,
    },
    topspeed: {
        type: String
    },
    photo: {
        type: String,
        default: "",
    },
    altPhotoOne: {
        type: String,
        default: "",
    },
    altPhotoTwo: {
        type: String,
        default: "",
    },
    altPhotoThree: {
        type: String,
        default: "",
    },
    engine: {
        type: String
    },
    fuel: {
        type: String
    },
    abs: {
        type: String
    },
    transmission: {
        type: String
    },
    lsd: {
        type: String
    },
    other: {
        type: String
    }
})

module.exports = mongoose.model("premiums", PremiumSchema);