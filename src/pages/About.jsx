import React from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from '../components/ChromaGrid';
import '../pages/About.css';
import { IMAGES } from '../data/imageUrls';

const img1 = IMAGES['shibu.jpeg'];
const img2 = IMAGES['renju.png'];
const img3 = IMAGES['subin.png'];
const img4 = IMAGES['sojan.png'];
const img5 = IMAGES['me.jpg'];
const img6 = IMAGES['amalnandu.png'];
const img7 = IMAGES['sarath.png'];
const img8 = IMAGES['sangeeth.png'];
const img9 = IMAGES['akash.jpeg'];
const img10 = IMAGES['aneesh.jpeg'];
const img11 = IMAGES['nandhu.png'];
const img12 = IMAGES['renju1.png'];
const img13 = IMAGES['jibin1.jpg']
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
                    <div style={{ position: 'relative', marginBottom: '30px' }}>
                        <ChromaGrid
                            items={[
                                { title: "Shibu Thankachan", subtitle: "Owner", image: img1, gradient: "linear-gradient(145deg, #d4af37, #000)", style: { width: "100%", height: "100%" } },
                                { title: "Renju", subtitle: "Owner", image: img2, gradient: "linear-gradient(145deg, #d4af37, #000)" }
                            ]}
                            columns={2}
                            radius={200}
                        />
                    </div>

                    {/* Section 2: 3 Cards */}
                    <div style={{ position: 'relative', marginBottom: '10px' }}>
                        <ChromaGrid
                            items={[
                                { title: "Subin", subtitle: "Operations Manager", image: img3, gradient: "linear-gradient(145deg, #4F46E5, #000)" },
                                { title: "Sojan", subtitle: "Finance Lead", image: img4, gradient: "linear-gradient(145deg, #10B981, #000)" },
                                { title: "Sidheequ J", subtitle: "Marketing Head", image: img5, gradient: "linear-gradient(145deg, #F59E0B, #000)" }
                            ]}
                            columns={3}
                            radius={250}
                        />
                    </div>

                    {/* Section 3: Rest Cards - 3 Columns */}
                    <div style={{ position: 'relative' }}>
                        <ChromaGrid
                            items={[
                                { title: "Aswin G Nair", subtitle: "Senior Guide", image: img16, gradient: "linear-gradient(145deg, #EF4444, #000)" },
                                { title: "Shibin", subtitle: "Guide", image: img15, gradient: "linear-gradient(145deg, #8B5CF6, #000)" },
                                { title: "Renju", subtitle: "Logistics", image: img12, gradient: "linear-gradient(145deg, #06B6D4, #000)" },
                                { title: "Jibin R", subtitle: "Coordinator", image: img13, gradient: "linear-gradient(145deg, #EC4899, #000)" },
                                { title: "Sudheesh", subtitle: "Driver", image: img14, gradient: "linear-gradient(145deg, #6366F1, #000)" },
                                { title: "Aneesh", subtitle: "Co-Driver", image: img10, gradient: "linear-gradient(145deg, #14B8A6, #000)" },
                                { title: "Nandhu", subtitle: "Media Wing", image: img11, gradient: "linear-gradient(145deg, #F97316, #000)" },
                                { title: "Akash", subtitle: "Media Wing", image: img9, gradient: "linear-gradient(145deg, #84CC16, #000)" },
                                { title: "Amal Nandu", subtitle: "Staff", image: img6, gradient: "linear-gradient(145deg, #3B82F6, #000)" },
                                { title: "Sangeth", subtitle: "Staff", image: img8, gradient: "linear-gradient(145deg, #A855F7, #000)" },
                                { title: "Sarath", subtitle: "Staff", image: img7, gradient: "linear-gradient(145deg, #EC4899, #000)" }
                            ]}
                            columns={3}
                            rows={4}
                            radius={300}
                        />
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
