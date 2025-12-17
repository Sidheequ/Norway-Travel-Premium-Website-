import React from 'react';
import { motion } from 'framer-motion';

import LightRays from './LightRays';
import '../index.css';
import {Link} from 'react-router-dom';  

const Hero = () => {
    return (
        <div className="hero-container" style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0a192f',
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* LightRays Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 1
            }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', zIndex: 1, padding: '0 20px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 4rem)',
                    color: '#fff',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    fontFamily: '"Playfair Display", serif'
                }}>
                    From First Step  <span style={{ color: '#d4af37' }}>To Final Sunset</span>
                </h1>
                <p style={{
                    color: '#e6f1ff',
                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                    marginBottom: '40px',
                    maxWidth: '800px',
                    margin: '0 auto 40px',
                    fontFamily: '"Montserrat", sans-serif'
                }}>
                    Your Story Starts Here.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link to="/contact" className="btn">Book Now</Link>
                    <Link to="/packages" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Packages</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
