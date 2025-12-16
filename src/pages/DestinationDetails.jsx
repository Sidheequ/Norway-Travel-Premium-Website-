import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { destinationsData } from '../data/destinationsData'; // Adjust path if needed
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = destinationsData.find(d => d.id === parseInt(id));

    if (!destination) {
        return <div className="text-center" style={{ paddingTop: '150px', color: 'white' }}>Destination not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100vh',
                paddingTop: '100px',
                paddingBottom: '50px',
                color: '#fff'
            }}
        >
            <div className="container">
                <Link to="/destinations" style={{ display: 'inline-flex', alignItems: 'center', color: '#d4af37', marginBottom: '30px', fontWeight: '600' }}>
                    <FaArrowLeft style={{ marginRight: '10px' }} /> Back to Destinations
                </Link>

                <div style={{ background: 'rgba(17, 34, 64, 0.8)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <img
                                src={destination.image}
                                alt={destination.title}
                                style={{ width: '100%', borderRadius: '15px', height: '400px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                            />

                            <div style={{ marginTop: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', borderBottom: '2px solid #d4af37', display: 'inline-block', paddingBottom: '10px' }}>
                                    Top Tourist Places
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {destination.places.map((place, index) => (
                                        <li key={index} style={{
                                            padding: '15px 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            fontSize: '1.1rem'
                                        }}>
                                            <FaMapMarkerAlt style={{ color: '#d4af37', marginRight: '15px', minWidth: '16px', marginTop: '5px' }} />
                                            <span>{place}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#d4af37' }}>{destination.title}</h1>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e6f1ff', marginBottom: '30px' }}>
                                {destination.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DestinationDetails;
