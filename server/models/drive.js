const mongoose = require("mongoose")

const DriveSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    phoneAlt: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("drives", DriveSchema)