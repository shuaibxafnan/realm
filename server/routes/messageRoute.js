const router = require("express").Router();
const MessageModel = require('../models/message');

router.post("/sendMessage", (req,res) => {
    MessageModel.create(req.body)
    .then((messages) => res.json(messages))
    .catch((err) => res.json(err))
})

module.exports = router;