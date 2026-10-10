const router = require("express").Router()
const AddressModel = require("../models/address")

router.post("/addAddress", (req, res) => {
    AddressModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router