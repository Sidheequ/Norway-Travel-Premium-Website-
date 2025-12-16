import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';



const Destinations = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '15px' }}>Explore <span className="text-gold">Norway</span></h1>
                    <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
                        Discover breathtaking tours and expeditions across incredible Norwegian destinations.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {destinationsData.map((dest) => (
                        <Link to={`/destinations/${dest.id}`} key={dest.id} style={{ textDecoration: 'none' }}>
                            <div style={{
                                position: 'relative',
                                height: '400px',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                            }}>
                                <img
                                    src={dest.image}
                                    alt={dest.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    className="dest-img"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <h2 style={{
                                        color: '#fff',
                                        fontSize: '2.5rem',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                        letterSpacing: '2px'
                                    }}>
                                        {dest.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <style jsx="true">{`
                .dest-img:hover {
                    transform: scale(1.1) !important;
                }
            `}</style>
        </motion.div>
    );
};

export default Destinations;
