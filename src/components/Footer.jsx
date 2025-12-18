import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    const logo = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994422/norway_project/logo.png";
    return (
        <footer style={{ backgroundColor: '#020c1b', color: '#fff', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ fontSize: '1.5rem', fontFamily: '"Playfair Display", serif', fontWeight: 'bold', display: 'flex', alignItems: 'center', marginBottom: '20px', textDecoration: 'none', color: '#fff' }}>
                            <img src={logo} alt="NorwayTravel" style={{ height: '40px', marginRight: '10px' }} />
                            Norway<span style={{ color: '#d4af37' }}>TravelPremium</span>
                        </Link>
                        <p style={{ color: '#8892b0', marginBottom: '20px' }}>
                            Experience the breath-taking beauty of Norway with our premium travel packages. We curate the best experiences for you.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.facebook.com/share/1An9FwNNx4/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                <FaFacebook size={24} style={{ cursor: 'pointer' }} title="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/norway_travel_premium?igsh=MWsyc3Vma3d0czMxNw==" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                <FaInstagram size={24} style={{ cursor: 'pointer' }} title="Instagram" />
                            </a>
                            <a href="https://wa.me/96879080734" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                                <FaWhatsapp size={24} style={{ cursor: 'pointer' }} title="Whatsapp" />
                            </a>
                            <FaTwitter size={24} style={{ cursor: 'pointer', color: '#fff' }} title="Twitter" />
                            <Link to="/admin" style={{ color: '#fff' }}>
                                <FaUser size={24} style={{ cursor: 'pointer' }} title="Admin Login" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/destinations">Destinations</Link></li>
                            <li><Link to="/packages">Packages</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div> */}

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Address</h3>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>Near St.Mary's JIO Fuels Mylom Kottarakkara,Kollam, Kerala</p>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>+91 9895529892,+91 9656925280</p>
                        <p style={{ color: '#8892b0', marginBottom: '10px' }}>norwaytravellightkottarakkara@gmail.com</p>
                    </div>

                    {/* Newsletter */}
                    <div style={{ marginLeft: '10px' }}>
                        <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>Connect with us</h3>
                        {/* <p style={{ color: '#8892b0', marginBottom: '15px' }}>For Enquiries.</p> */}
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <a className="btn" style={{ border: 'none', width: '100%', textAlign: 'center' }} href="https://www.instagram.com/norway_travel_premium?igsh=MWsyc3Vma3d0czMxNw==">Contact Us</a>
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
