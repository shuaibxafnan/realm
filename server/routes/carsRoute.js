const router = require('express').Router();
const CarModel = require("../models/car");

router.get('/', (req, res) => {
    CarModel.find({})
        .then((cars) => res.json(cars))
        .catch((err) => res.json(err))
})

router.get('/randomCars', (req, res) => {
    CarModel.aggregate([
        { $sample: { size: 7 } }
    ])
        .then((cars) => res.json(cars))
        .catch((err) => res.json(err))
})

router.get('/brand/:brand/:id', (req, res) => {
    const brand = req.params.brand;
    const id = req.params.id;

    CarModel.find({
        $or: [
            { _id: id },
            { brand: brand }
        ]
    })
        .then((cars) => {
            const sortedCars = cars.sort((a, b) => {
                if (a._id.toString() === id) {
                    return -1;
                } else if (b._id.toString() === id) {
                    return 1;
                } else {
                    return 0;
                }
            });

            res.json(sortedCars);
        })
        .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    CarModel.findById({ _id: id })
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
})

router.get('/brand/:brand', (req, res) => {
    const brand = req.params.brand;
    CarModel.find({ brand: brand })
        .then((cars) => res.json(cars))
        .catch((err) => res.json(err))
});

router.get('/category/:category', (req, res) => {
    const selectedCategory = req.params.category;
    CarModel.find({ category: { $in: [selectedCategory] } })
        .then((cars) => res.json(cars))
        .catch((err) => res.json(err))
});




module.exports = router;