import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Simulation)');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '15px' }}>Contact <span className="text-gold">Us</span></h1>
                    <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to plan your Norwegian adventure? Reach out to us today.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                    {/* Contact Info */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaPhone style={{ marginRight: '15px', color: '#d4af37' }} /> +47 123 456 789
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaEnvelope style={{ marginRight: '15px', color: '#d4af37' }} /> info@norwaypremium.com
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaMapMarkerAlt style={{ marginRight: '15px', color: '#d4af37' }} /> 123 Fjord Avenue, Oslo
                        </div>

                        <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem' }}>Office Hours</h3>
                        <p style={{ color: '#8892b0' }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p style={{ color: '#8892b0' }}>Sat - Sun: Closed</p>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card">
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '5px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '5px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '5px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff'
                                    }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
