import React, { useState } from 'react';
import './GoogleReviews.css';
import { FaStar, FaGoogle, FaPlus, FaTimes } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import axios from 'axios';
import CryptoJS from 'crypto-js';

// Cloudinary Configuration
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;

// Initial Mock Data (7 reviews)
const INITIAL_REVIEWS = [
    {
        id: 101,
        name: 'Alna',
        date: '2 weeks ago',
        rating: 5,
        text: 'It was an amazing trip and wonderful experience overall. The guides were professional and the scenery was breathtaking.',
        avatar: 'A',
        bg: '#0056b3'
    },
    {
        id: 102,
        name: 'Abhinav Chachu',
        date: '2 weeks ago',
        rating: 5,
        text: 'What a trip given by gd7.... Most enjoyable joyful movement 💜. Highly recommended for anyone looking for a premium experience.',
        avatar: 'AC',
        bg: '#2e7d32'
    },
    {
        id: 103,
        name: 'Sarah Jenkins',
        date: '1 month ago',
        rating: 5,
        text: 'Truly a magical experience. Norway in winter is something else! The logistics were handled perfectly.',
        avatar: 'S',
        bg: '#c62828'
    },
    {
        id: 104,
        name: 'Rahul K.',
        date: '1 month ago',
        rating: 4,
        text: 'Great service and friendly staff. The hotels were top notch. A bit cold, but that is Norway!',
        avatar: 'R',
        bg: '#f9a825'
    },
    {
        id: 105,
        name: 'Emily Davis',
        date: '2 months ago',
        rating: 5,
        text: 'Unforgettable northern lights tour. The team went above and beyond to make sure we saw them.',
        avatar: 'E',
        bg: '#6a1b9a'
    },
    {
        id: 106,
        name: 'Mohammed Ali',
        date: '3 months ago',
        rating: 5,
        text: 'Luxury travel at its finest. Every detail was taken care of. Will definitely book again.',
        avatar: 'M',
        bg: '#0277bd'
    },
    {
        id: 107,
        name: 'Priya S.',
        date: '3 months ago',
        rating: 5,
        text: 'Best travel agency I have used. Very personalized service and great value for money.',
        avatar: 'P',
        bg: '#ef6c00'
    }
];

const GoogleReviews = () => {
    const [reviews, setReviews] = useState(INITIAL_REVIEWS);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 5,
        review: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (rating) => {
        setFormData(prev => ({ ...prev, rating }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check size (20MB = 20 * 1024 * 1024 bytes)
            if (file.size > 20 * 1024 * 1024) {
                alert('File size exceeds 20MB');
                return;
            }
            // For now, simple URL.createObjectURL for preview using local file
            // In production, upload to Cloudinary here
            setFormData(prev => ({ ...prev, image: file, imagePreview: URL.createObjectURL(file) }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add new review to top of list
        const newReview = {
            id: Date.now(),
            name: formData.name,
            date: 'Just now',
            rating: formData.rating,
            text: formData.review,
            avatar: formData.name.charAt(0).toUpperCase(),
            bg: '#4caf50', // New reviews get green bg
            image: formData.imagePreview // Store preview URL for now
        };

        setReviews([newReview, ...reviews]);

        // Reset and Close
        setFormData({ name: '', email: '', rating: 5, review: '', image: null });
        setIsModalOpen(false);
        alert('Review submitted! (Image upload pending Cloudinary integration)');
    };

    return (
        <section className="google-reviews-section">
            <div className="container">
                <div className="reviews-header">
                    <h2>See Why People Love Us</h2>
                </div>

                <div className="reviews-carousel">
                    {/* 1. Add Review Card */}
                    <div className="review-card-base add-review-card" onClick={() => setIsModalOpen(true)}>
                        <div className="add-btn"><FaPlus /></div>
                        <h4 style={{ color: '#000000ff' }}>SHARE YOUR EXPERIENCE</h4>
                    </div>

                    {/* 2. Summary Card */}
                    <div className="review-card-base summary-card">
                        <div className="summary-icon"><MdVerified /></div>
                        <h3 style={{ color: '#000000ff' }}>Review Summary</h3>
                        <p>5.0 Based on {150 + reviews.length} reviews</p>
                        <div className="rating-stars">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                    </div>

                    {/* 3. User Review Cards */}
                    {reviews.map(review => (
                        <div className="review-card-base user-review-card" key={review.id}>
                            <div className="review-header">
                                <div className="review-avatar" style={{ backgroundColor: review.bg }}>
                                    {review.avatar}
                                </div>
                                <div className="reviewer-info">
                                    <h4>{review.name}</h4>
                                    <span>{review.date}</span>
                                </div>
                                <FaGoogle className="google-icon" style={{ color: '#4285F4' }} />
                            </div>
                            <div className="rating-stars" style={{ fontSize: '1rem', marginTop: 0, marginBottom: '10px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} color={i < review.rating ? "#fbc02d" : "#e0e0e0"} />
                                ))}
                            </div>
                            <p className="review-text">{review.text}</p>
                            {review.image && (
                                <img src={review.image} alt="User upload" style={{ width: '100%', height: '100px', objectFit: 'cover', marginTop: '10px', borderRadius: '8px' }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
                        <h3>Share Your Experience</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Rating</label>
                                <div className="star-rating-input">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <FaStar
                                            key={star}
                                            className={`star ${star <= formData.rating ? 'active' : ''}`}
                                            onClick={() => handleRatingChange(star)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Review</label>
                                <textarea
                                    name="review"
                                    className="form-control"
                                    required
                                    value={formData.review}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Upload Image (Max 20MB)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="form-control"
                                />
                                {formData.imagePreview && (
                                    <img src={formData.imagePreview} alt="Preview" className="file-preview" />
                                )}
                            </div>
                            <button
                                type="submit"
                                className="submit-btn"
                                style={{ backgroundColor: isUploading ? '#888' : '#d4af37' }}
                                disabled={isUploading}
                            >
                                {isUploading ? 'Uploading...' : 'Submit Review'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GoogleReviews;
