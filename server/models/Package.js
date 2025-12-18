const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['One Day', 'Two Day', 'Three Day', 'Four Day', 'Five Day']
    },
    title: {
        type: String, // e.g. "ONE DAY PACKAGES" (Optional if category covers it)
        required: false
    },
    items: [{
        type: String, // e.g. "Wagamon - Idukki"
        required: true
    }],
    image: {
        type: String, // URL from Cloudinary
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Package', PackageSchema);
