import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

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
        </motion.div>
    );
};

export default Home;
