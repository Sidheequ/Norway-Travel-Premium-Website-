import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import '../pages/About.css';
import { IMAGES } from '../data/imageUrls';

const img1 = IMAGES['1.JPG'];
const img2 = IMAGES['renju.png'];
const img3 = IMAGES['subin.png'];
const img4 = IMAGES['sojan.png'];
const img5 = IMAGES['me.jpg'];
const img6 = IMAGES['amalnandu.png'];
const img7 = IMAGES['sarath.png'];
const img8 = IMAGES['sangeeth.png'];
const img9 = IMAGES['1.JPG'];
const img10 = IMAGES['1.JPG'];
const img11 = IMAGES['nandhu.png'];
const img12 = IMAGES['renju1.png'];
const img13 = IMAGES['jibin.png']
const img14 = IMAGES['sudhi.png'];
const img15 = IMAGES['shibin.png'];
const img16 = IMAGES['aswin.png'];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '15px' }}>About <span className="text-gold">Us</span></h1>
                    <p style={{ color: '#8892b0', maxWidth: '600px', margin: '0 auto' }}>
                        We are passionate about showing you the real Norway.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '50px', marginBottom: '50px' }}>
                    <h2 className="text-center" style={{ marginBottom: '30px', color: '#fff' }}>Our Story</h2>
                    <p style={{ fontSize: '1.1rem', color: '#e6f1ff', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        Founded in 2023, Norway Travel Premium started with a simple mission: to offer discerning travelers a way to experience the raw grandeur of Norway without compromising on comfort and style. We believe that the best way to see the northern lights is from a cozy glass igloo, and the best way to explore the fjords is on a private yacht. Our team of local experts curates every itinerary to ensure it meets our high standards of luxury and authenticity.
                    </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
                    <div className="text-center">
                        <h2 style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '10px' }}>2</h2>
                        <p style={{ color: '#8892b0' }}>Years Of Experience</p>
                    </div>
                    <div className="text-center">
                        <h2 style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '10px' }}>500+</h2>
                        <p style={{ color: '#8892b0' }}>Happy Travelers</p>
                    </div>
                    <div className="text-center">
                        <h2 style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '10px' }}>50+</h2>
                        <p style={{ color: '#8892b0' }}>Premium Partners</p>
                    </div>
                </div>

                <div className="team">
                    <h1 className="text-center" style={{ marginBottom: '30px', color: '#fff' }}>Our Team</h1>

                    {/* Section 1: 2 Cards */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginBottom: '30px' }}>
                        {[
                            { name: "Shibu Thankachan", role: "Owner", image: img1 },
                            { name: "Renju", role: "Owner", image: img2 }
                        ].map((member, index) => (
                            <TeamCard key={`s1-${index}`} name={member.name} role={member.role} image={member.image} />
                        ))}
                    </div>

                    {/* Section 2: 3 Cards */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginBottom: '30px' }}>
                        {[
                            { name: "Subin", role: "Operations Manager", image: img3 },
                            { name: "Sojan", role: "Finance Lead", image: img4 },
                            { name: "Sidheequ J", role: "Marketing Head", image: img5 }
                        ].map((member, index) => (
                            <TeamCard key={`s2-${index}`} name={member.name} role={member.role} image={member.image} />
                        ))}
                    </div>

                    {/* Section 3: 7 Cards */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                        {[
                            { name: "Aswin G Nair", role: "Senior Guide", image: img16 },
                            { name: "Shibin", role: "Guide", image: img15 },
                            { name: "Renju", role: "Logistics", image: img12 },
                            { name: "Jibin R", role: "Coordinator", image: img13 },
                            { name: "Sudheesh", role: "Driver", image: img14 },
                            { name: "Aneesh", role: "Co-Driver", image: img10 },
                            { name: "Nandhu", role: "Media Wing", image: img11 },
                            { name: "Akash", role: "Media Wing", image: img9 },
                            { name: "Amal Nandu", role: "Staff", image: img6 },
                            { name: "Sangeth", role: "Staff", image: img8 },
                            { name: "Sarath", role: "Staff", image: img7 },

                        ].map((member, index) => (
                            <TeamCard key={`s3-${index}`} name={member.name} role={member.role} image={member.image} />
                        ))}
                    </div>
                </div>

                <div className="vision-mission-container" style={{
                    backgroundColor: '#d99a25',
                    padding: '70px 20px',
                    marginTop: '80px',
                    borderRadius: '20px',
                    color: '#111'
                }}>
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="col-md-6" style={{ flex: '1 1 300px', padding: '0 30px', marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>Our mission</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#222' }}>
                                We provide travel related solutions to individual & corporate customers.
                            </p>
                        </div>
                        <div className="col-md-6" style={{ flex: '1 1 300px', padding: '0 30px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>Our vision</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#222' }}>
                                Norway Travel Premium is a one-stop travel solutions provider which aims to continuously grow across borders, in products and services, and always putting the customer's delight at first place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
