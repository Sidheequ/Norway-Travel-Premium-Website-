import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero-image.jpg';
import '../index.css';

const Hero = () => {
    return (
        <div className="hero-container" style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', zIndex: 1, padding: '0 20px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: '#fff',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: '"Playfair Display", serif'
                }}>
                    EXPLORE <span style={{ color: '#d4af37' }}>NORWAY</span>
                </h1>
                <p style={{
                    color: '#e6f1ff',
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                    marginBottom: '40px',
                    maxWidth: '800px',
                    margin: '0 auto 40px',
                    fontFamily: '"Montserrat", sans-serif'
                }}>
                    Experience the majesty of the Travel and the magic of the Norway.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button className="btn">Book Now</button>
                    <button className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Watch Video</button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
