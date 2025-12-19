import React from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from '../components/ChromaGrid';
import '../pages/About.css';
const About = () => {
    // Team Member Images
    const img1 = "https://res.cloudinary.com/dclejmil5/image/upload/v1766030455/shibu1_t6yfwv.jpg"; // Shibu
    const img2 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994456/norway_project/renju.png"; // Renju
    const img3 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994477/norway_project/subin.png"; // Subin
    const img4 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994474/norway_project/sojan.png"; // Sojan
    const img5 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994433/norway_project/me.jpg";   // Sidheequ
    const img6 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994369/norway_project/amalnandu.png";
    const img7 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994467/norway_project/sarath.png";
    const img8 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994464/norway_project/sangeeth.png";
    const img9 = "https://res.cloudinary.com/dclejmil5/image/upload/v1766026804/norway_project/akash.jpg";
    const img10 = "https://res.cloudinary.com/dclejmil5/image/upload/v1766031897/aneesh_yepthk.jpg";
    const img11 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994443/norway_project/nandhu.png";
    const img12 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994460/norway_project/renju1.png";
    const img13 = "https://res.cloudinary.com/dclejmil5/image/upload/v1766031898/jibin_waemxd.jpg";
    const img14 = "https://res.cloudinary.com/dclejmil5/image/upload/v1766032319/sudhi_etcgqb.png";
    const img15 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994470/norway_project/shibin.png";
    const img16 = "https://res.cloudinary.com/dclejmil5/image/upload/v1765994374/norway_project/aswin.png";
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
                        We are passionate tour operators providing luxury and premium travel experiences.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '50px', marginBottom: '50px' }}>
                    <h2 className="text-center" style={{ marginBottom: '30px', color: '#fff' }}>Our Story</h2>
                    <p style={{ fontSize: '1.1rem', color: '#e6f1ff', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        Founded in 2023, Norway Travel Premium started with a simple mission: to offer travelers a way to experience grand destinations without compromising on comfort and style. Our team of local experts curates every itinerary to ensure it meets our high standards of excellence.
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
                    <h1 className="text-center" style={{ marginBottom: '30px', marginTop: '60px', color: '#fff' }}>Our Team</h1>

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
