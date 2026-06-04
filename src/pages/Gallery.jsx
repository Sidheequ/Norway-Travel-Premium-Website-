import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Loader from '../components/Loader';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const res = await axios.get(`${API_URL}/api/gallery`);
                setGallery(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching gallery:", err);
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    if (loading) {
        return <Loader />;
    }

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const goToPrevious = (e) => {
        e.stopPropagation(); // prevent modal click from triggering close
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) =>
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    };

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
                            style={{ marginBottom: '20px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }}
                            onClick={() => openLightbox(index)}
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

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {isLightboxOpen && gallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999
                        }}
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '30px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                zIndex: 10000
                            }}
                        >
                            <FaTimes />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={goToPrevious}
                            style={{
                                position: 'absolute',
                                left: '5%',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '3rem',
                                cursor: 'pointer',
                                zIndex: 10000,
                                padding: '20px'
                            }}
                        >
                            <FaChevronLeft />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={currentImageIndex} // forces re-render/animation on index change
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={gallery[currentImageIndex].imageUrl}
                            alt={`Gallery ${currentImageIndex}`}
                            style={{
                                maxHeight: '90vh',
                                maxWidth: '80vw',
                                objectFit: 'contain',
                                borderRadius: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                        />

                        {/* Next Button */}
                        <button
                            onClick={goToNext}
                            style={{
                                position: 'absolute',
                                right: '5%',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '3rem',
                                cursor: 'pointer',
                                zIndex: 10000,
                                padding: '20px'
                            }}
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
