const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    phoneAlt : {
        type: Number,
        required: false
    },
    pincode : {
        type: Number,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    country : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("addresses", AddressSchema)