import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPlaneDeparture } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#020c1b', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <FaPlaneDeparture style={{ marginRight: '10px', color: '#d4af37' }} />
                            Norway<span style={{ color: '#d4af37' }}>TravelPremium</span>
                        </Link>
                        <p style={{ color: '#8892b0', marginBottom: '20px' }}>
                            Experience the breath-taking beauty of Norway with our premium travel packages. We curate the best experiences for you.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <FaFacebook size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                            <FaInstagram size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                            <FaTwitter size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                            <FaLinkedin size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/destinations">Destinations</Link></li>
                            <li><Link to="/packages">Packages</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Contact Us</h3>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>123 Fjord Avenue, Oslo, Norway</p>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>+47 123 456 789</p>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>info@norwaypremium.com</p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Newsletter</h3>
                        <p style={{ color: '#8892b0', marginBottom: '15px' }}>Subscribe for latest offers.</p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    background: '#112240',
                                    color: '#fff'
                                }}
                            />
                            <button className="btn" style={{ border: 'none', width: '100%' }}>Subscribe</button>
                        </form>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #112240', paddingTop: '20px', textAlign: 'center', color: '#8892b0', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Norway Travel Premium. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
