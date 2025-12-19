import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// Final build fix for image URL resolution
import '../index.css';

const Navbar = () => {
    const logo = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994422/norway_project/logo.png";
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <nav className={scroll ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="NorwayTravel" className="navbar-logo-img" />
                        Norway<span style={{ color: '#d4af37' }}>TravelPremium</span>
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/packages" className='nav-links' onClick={closeMobileMenu}>Packages</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/destinations" className='nav-links' onClick={closeMobileMenu}>Destinations</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
