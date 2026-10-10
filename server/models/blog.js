const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        unique: true,
    },
    username: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        default: "",
    },
    userimg: {
        type: String,
        default: "",
    },
    category: {
        type: String,
    },
    desc: {
        type: String,
        required: false,
    },
    story: {
        type: String,
        required: false,
    },
    read: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model("blogs", BlogSchema)