const router = require('express').Router();
const PremiumModel = require('../models/premium');

router.get('/', (req, res) => {
    PremiumModel.find({})
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
});

router.get('/randomCars', (req, res) => {
    PremiumModel.aggregate([
        { $sample: { size: 3 } }
    ])
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    PremiumModel.findById({ _id: id })
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
})

module.exports = router;

