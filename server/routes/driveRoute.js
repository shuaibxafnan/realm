const router = require("express").Router()
const DriveModel = require("../models/drive")

router.post('/bookDrive', (req, res) => {
    DriveModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

module.exports = router