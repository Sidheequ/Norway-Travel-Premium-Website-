import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeGallery.css';
import { IMAGES } from '../data/imageUrls';

// Use Cloudinary Images
const img1 = IMAGES['4.jpeg'];
const img2 = IMAGES['5.jpeg'];
const img3 = IMAGES['6.jpeg'];
const img4 = IMAGES['7.JPG'];

const HomeGallery = () => {
    const navigate = useNavigate();

    return (
        <section className="home-gallery-section">
            <div className="gallery-container">
                <div className="gallery-text-content">
                    <h2>Gallery</h2>
                    <p>
                        Explore stunning moments from our incredible travel adventures across India.
                        Witness the joy, the landscapes, and the unforgettable memories we create together.
                    </p>
                    <button className="gallery-btn" onClick={() => navigate('/gallery')}>
                        See Our Gallery
                    </button>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src={img4} alt="Travel Moment 1" />
                    </div>
                    <div className="gallery-item">
                        <img src={img2} alt="Travel Moment 2" />
                    </div>
                    <div className="gallery-item">
                        <img src={img3} alt="Travel Moment 3" />
                    </div>
                    <div className="gallery-item">
                        <img src={img1} alt="Travel Moment 4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
