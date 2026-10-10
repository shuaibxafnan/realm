const router = require('express').Router();
const BlogModel = require("../models/blog");

router.get('/', (req,res) => {
    BlogModel.find({})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    BlogModel.findById({ _id: id})
        .then(blogs => res.json(blogs))
        .catch(err => res.json(err))
})

module.exports = router;