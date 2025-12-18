const router = require('express').Router();
const Gallery = require('../models/Gallery');

// CREATE
router.post('/', async (req, res) => {
    try {
        const newGalleryItem = new Gallery(req.body);
        const savedGalleryItem = await newGalleryItem.save();
        res.status(200).json(savedGalleryItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const galleryItems = await Gallery.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(galleryItems);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.status(200).json("Image has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
