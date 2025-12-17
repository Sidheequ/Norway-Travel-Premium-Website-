import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import GoogleReviews from '../components/GoogleReviews';
import HomeGallery from '../components/HomeGallery';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <div className="container section-padding text-center">
                {/* Future sections (About snippet, Featured Packages) will go here */}
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Your Adventure Begins Here</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)' }}>
                    We offer bespoke travel experiences to the heart of Scandinavia.
                </p>
            </div>

            <div className="trips-section">
                <h3 className="trips-heading">Stuff your bag with wonder, unpack narratives woven from distant adventures.</h3>
                <div className="container-trips">
                    <div className="trip-card">
                        <h5>Adventure Trips</h5>
                        <p>Chase unforgettable thrills in India’s most breathtaking destinations.</p>
                        <Link to="/packages" >
                        <button className='btn-outline'>View Packages</button></Link>
                    </div>
                    <div className="trip-card">
                        <h5>Cultural Trips</h5>
                        <p>Immerse yourself in India’s timeless traditions and vibrant heritage.</p>
                        <Link to="/packages" >
                        <button className='btn-outline'>View Packages</button></Link>
                    </div>
                    <div className="trip-card">
                        <h5>Luxury Packages</h5>
                        <p>Indulge in seamless comfort with handpicked luxury escapes.</p>
                        <Link to="/packages" >
                        <button className='btn-outline'>View Packages</button></Link>
                    </div>
                </div>
            </div>

            <GoogleReviews />

            <HomeGallery />

        </motion.div>
    );
};

export default Home;
