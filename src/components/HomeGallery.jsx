import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeGallery.css';
import axios from 'axios';

const HomeGallery = () => {
    const navigate = useNavigate();
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const res = await axios.get(`${API_URL}/api/gallery`);
                setGallery(res.data);
            } catch (err) {
                console.error("Error fetching home gallery:", err);
            }
        };
        fetchGallery();
    }, []);

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
                    {gallery.length > 0 ? gallery.slice(0, 4).map((item, index) => (
                        <div className="gallery-item" key={item._id || index}>
                            <img src={item.imageUrl} alt={item.title || `Travel Moment ${index + 1}`} />
                        </div>
                    )) : (
                        <p style={{ color: 'white' }}>Loading Gallery...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
