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

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px',
                    width: '100%',
                    alignItems: 'start'
                }}>
                    {/* Map Section */}
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
                        <iframe
                            title="Kottarakkara Map"
                            src="https://maps.google.com/maps?q=St.Mary's%20JIO%20BP%20Mylom%20Jn%20Kottarakkara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Contact Info */}
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaPhone style={{ marginRight: '15px', color: '#d4af37' }} />
                            <span>+91 9895529892, +91 9556925280</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaEnvelope style={{ marginRight: '15px', color: '#d4af37' }} /> norwaytravellightkottarakkara@gmail.com
                        </div>
                        <div style={{ display: 'flex', alignItems: 'start', marginBottom: '20px', color: '#e6f1ff' }}>
                            <FaMapMarkerAlt style={{ marginRight: '15px', color: '#d4af37', marginTop: '5px' }} />
                            <span>Near St.Mary's JIO BP Mylom Jn Kottarakkara, Kollam, Kerala</span>
                        </div>

                        <h3 style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem' }}>Office Hours</h3>
                        <p style={{ color: '#8892b0' }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p style={{ color: '#8892b0' }}>Sat - Sun: Closed</p>

                        <a href="https://wa.me/919895529892" className="btn" style={{ marginTop: '20px', display: 'inline-block', textAlign: 'center' }}>Send Message</a>
                    </div>
                </div>

                {/* Contact Form */}
                {/* <div className="glass-card">
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
                            </form>
                            </div> */}

            </div>
        </motion.div>
    );
};

export default Contact;
