import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/gallery');
                setGallery(res.data);
            } catch (err) {
                console.error("Error fetching gallery:", err);
            }
        };
        fetchGallery();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '15px' }}>Photo <span className="text-gold">Gallery</span></h1>
                    <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
                        A glimpse into the breathtaking beauty that awaits you in Norway.
                    </p>
                </div>

                <div style={{ columns: '3 300px', columnGap: '20px' }}>
                    {gallery.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '20px', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <img src={item.imageUrl} alt={item.title || `Gallery ${index}`} style={{ width: '100%', display: 'block', borderRadius: '10px', transition: 'transform 0.3s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            {/* Optional: Show title on hover or below */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Gallery;
