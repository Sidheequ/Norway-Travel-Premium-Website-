import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';

const Card = ({ image, title, location, price, duration, rating, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem' }}>{title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#d4af37' }}>
                        <FaStar /> <span style={{ marginLeft: '5px' }}>{rating}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: '#8892b0', marginBottom: '5px', fontSize: '0.9rem' }}>
                    <FaMapMarkerAlt style={{ marginRight: '5px' }} /> {location}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', color: '#8892b0', marginBottom: '15px', fontSize: '0.9rem' }}>
                    <FaClock style={{ marginRight: '5px' }} /> {duration}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>${price}</span>
                    <button className="btn" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Details</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
