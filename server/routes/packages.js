const router = require('express').Router();
const Package = require('../models/Package');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newPackage = new Package(req.body);
        const savedPackage = await newPackage.save();
        res.status(200).json(savedPackage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPackage);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Package.findByIdAndDelete(req.params.id);
        res.status(200).json("Package has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
