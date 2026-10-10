const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    cardnumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    orderType: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("cards", CardSchema)