const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    bg: {
        type: String,
        default: "#4caf50",
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
