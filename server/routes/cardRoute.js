const router = require("express").Router();
const CardModel = require("../models/card");

router.post("/cardInsert", (req, res) => {
    CardModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

router.get("/orderDetails/:name/:model", (req, res) => {
    const model = req.params.model
    const name = req.params.name

    CardModel.find({
        $and: [
            { name: name },
            { model: model }
        ]
    })
        .sort({ createdAt: -1 })
        .limit(1)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router;