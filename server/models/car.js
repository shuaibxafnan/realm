const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: false,
    },
    category: {
        type: Array,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    rentPrice: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        default: "",
        required: false,
    },
    mileage: {
        type: String,
        required: false,
    },
    abs: {
        type: String,
        required: false,
    },
    cylinder: {
        type: String,
        required: false,
    },
    fuel: {
        type: String,
        required: false,
    },
    topspeed: {
        type: String,
        required: false,
    },
    altPhoto: {
        type: String,
        required: false,
        default: ""
    }

}, { timestamps: true });

module.exports = mongoose.model("cars", CarSchema);