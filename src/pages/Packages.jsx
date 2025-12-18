import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Card from '../components/Card';
import axios from 'axios';

const img1 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994413/norway_project/karnataka.jpg";

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/packages');
                setPackages(res.data);
            } catch (err) {
                console.error("Error fetching packages:", err);
            }
        };
        fetchPackages();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '15px' }}>Exclusive <span className="text-gold">Packages</span></h1>
                    <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
                        Indulge in luxury, comfort, and unforgettable moments with our Premium Class tour package. Enjoy top-tier travel and hospitality with enhanced amenities and curated services.
                    </p>
                </div>

                {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {packagesData.map((pkg, index) => (
                        <Card key={pkg.id} {...pkg} delay={index * 0.1} />
                    ))}
                </div> */}

                <div className="plandetails" style={{ marginBottom: '60px', textAlign: "center" }}>
                    <h1 style={{ marginBottom: '20px', color: '#d4af37' }}>PLAN DETAILS</h1>
                    <h3 style={{ marginBottom: '40px', color: '#fff' }}>PREMIUM CLASS</h3>

                    {packages.sort((a, b) => {
                        const order = { 'One Day': 1, 'Two Day': 2, 'Three Day': 3, 'Four Day': 4, 'Five Day': 5 };
                        return (order[a.category] || 99) - (order[b.category] || 99);
                    }).map((pkg) => (
                        <div key={pkg._id} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px',
                            alignItems: 'center',
                            textAlign: 'left',
                            marginTop: '80px'
                        }}>
                            {/* Left Side: Image */}
                            <div>
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    style={{
                                        width: '80%',
                                        height: '250px',
                                        borderRadius: '15px 125px 24px 145px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Right Side: Text */}
                            <div style={{ color: '#e6f1ff' }}>
                                <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem', textTransform: 'uppercase' }}>{pkg.title || `${pkg.category} PACKAGES`}</h2>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                    {pkg.items.map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hotels">
                    <h1 style={{ marginBottom: '20px', color: '#ffffffff', fontSize: '2rem', textAlign: 'center' }}>ACCOMODATIONS</h1>
                    <p style={{ color: '#ffffffff', fontSize: '1rem', textAlign: 'center', marginBottom: '20px' }}>Our accommodations offer a perfect blend of comfort and style, making every guest feel right at home. Each room is thoughtfully designed with modern amenities, ensuring a relaxing stay for everyone. </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginTop: '80px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img1}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
                                    height: '250px',
                                    borderRadius: '70px 255px 70px 155px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            {/* <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>FIVE DAY PACKAGES</h2> */}
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.5rem', lineHeight: '2', fontWeight: 'bold', color: '#e6f1ff' }}>
                                <li>• LUXURY HOTELS / RESORTS</li>
                                <li>•PRIVATE PROPERTY</li>
                                <li>•24hrs ROOM SERVICES</li>
                                <li>•SEPARATE ROOMS FOR MALE & FEMALE FACULTIES.</li>
                                <li>•POOL / NON - POOL PROPERTIES.</li>
                                <li>•3-4 SHARING ROOMS.</li>
                                <li>•AC / NON- AC ROOMS.</li>


                            </ul>
                        </div>
                    </div>
                    <p style={{ color: '#e6f1ff', textAlign: 'center', marginTop: '5px' }}>Take the tour experience to another level with our collection of luxury suites. The spacious living room is a medley of class and comfort, fashioned to offer stately living, as a burst of omnipresent green smiles at you through expansive windows.</p>
                    <Link to="/contact">
                        <button className="btn" style={{ backgroundColor: '#d4af37', color: '#fff', padding: '20px 40px', borderRadius: '10px', border: 'none', cursor: 'pointer', marginTop: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', alignSelf: 'center', justifySelf: 'center', marginLeft: 'auto', marginRight: 'auto' }}>Book Now</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Packages;
