const express = require('express');
const router = express.Router();
const HotToy = require('../models/hotToy');

//Routes
router.get('/', async (req, res) => {
    try {
        const hotToys = await HotToy.find();
        res.json(hotToys);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getHotToy, (req, res) => {
    res.json(res.hotToy);
});

router.post('/', async (req, res) => { //creates a new database entry
    const hotToy = new HotToy({
        _id: req.body._id,
        name: req.body.name,
        brand: req.body.brand,
        releaseYear: req.body.releaseYear
    })

    try {
        const newHotToy = await hotToy.save();
        res.status(201).json(newHotToy);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getHotToy, async (req, res) => {
    if (req.body.name != null) {
        res.hotToy.name = req.body.name;
    }
    if (req.body.brand != null) {
        res.hotToy.brand = req.body.brand;
    }
    if (req.body.subBrand != null) {
        res.hotToy.subBrand = req.body.subBrand;
    }
    if (req.body.revealYear != null) {
        res.hotToy.revealYear = req.body.revealYear;
    }
    if (req.body.releaseYear != null) {
        res.hotToy.releaseYear = req.body.releaseYear;
    }
    if (req.body.skuDefault != null) {
        res.hotToy.skuDefault = req.body.skuDefault;
    }
    if (req.body.skuSecondary != null) {
        res.hotToy.skuSecondary = req.body.skuSecondary;
    }
    if (req.body.msrp != null) {
        res.hotToy.msrp = req.body.msrp;
    }

    try {
        const updatedHotToy = await res.hotToy.save();
        res.json(updatedHotToy);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getHotToy, async (req, res) => {
    try {
        await res.hotToy.remove();
        res.json({ message: "Deleted Hot Toy" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getHotToy(req, res, next) { //middleware
    let hotToy;
    try {
        hotToy = await HotToy.findById(req.params.id);
        if (hotToy == null) {
            return res.status(404).json({ message: "Cannot find Hot Toy" });
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.hotToy = hotToy;
    next();
}

module.exports = router;