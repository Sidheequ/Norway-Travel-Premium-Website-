import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/1.JPG';
import img2 from '../assets/images/2.JPG';
import img3 from '../assets/images/3.JPG';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.JPG';
import img8 from '../assets/images/8.JPG';
import img9 from '../assets/images/9.JPG';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
];

const Gallery = () => {
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
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '20px', borderRadius: '10px', overflow: 'hidden' }}
                        >
                            <img src={src} alt={`Gallery ${index}`} style={{ width: '100%', display: 'block', borderRadius: '10px', transition: 'transform 0.3s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Gallery;
