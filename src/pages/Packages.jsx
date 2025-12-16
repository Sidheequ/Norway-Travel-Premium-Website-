import React from 'react';
import { motion } from 'framer-motion';
// import Card from '../components/Card';
import img1 from '../assets/images/karnataka.jpg';
import img2 from '../assets/images/delhi.jpg';
import img3 from '../assets/images/hydrabad.jpg';
import img4 from '../assets/images/munnar.jpg';
import img5 from '../assets/images/kerala.jpg';
// import img6 from '../assets/images/karnataka.jpg';

// const packagesData = [
//     {
//         id: 1,
//         title: "Northern Lights Safari",
//         location: "Tromsø",
//         duration: "5 Days",
//         price: 1200,
//         rating: 4.9,
//         image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         id: 2,
//         title: "Fjord Exploration",
//         location: "Bergen",
//         duration: "7 Days",
//         price: 1800,
//         rating: 4.8,
//         image: "https://images.unsplash.com/photo-1506701160836-249cb9647248?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         id: 3,
//         title: "Lofoten Islands Adventure",
//         location: "Lofoten",
//         duration: "6 Days",
//         price: 2100,
//         rating: 5.0,
//         image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         id: 4,
//         title: "Oslo City Break",
//         location: "Oslo",
//         duration: "3 Days",
//         price: 800,
//         rating: 4.7,
//         image: "https://images.unsplash.com/photo-1587593810167-a6b1cb7a5ad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         id: 5,
//         title: "Arctic Circle Tour",
//         location: "Svalbard",
//         duration: "8 Days",
//         price: 3500,
//         rating: 5.0,
//         image: "https://images.unsplash.com/photo-1518182170546-07fb612d1290?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         id: 6,
//         title: "Viking History Tour",
//         location: "Stavanger",
//         duration: "4 Days",
//         price: 950,
//         rating: 4.6,
//         image: "https://images.unsplash.com/photo-1507703350328-3e4fa835697d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//     }
// ];

import { Link } from 'react-router-dom';

const Packages = () => {
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img1}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
                                    borderRadius: '15px 125px 24px 145px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>ONE DAY PACKAGES</h2>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                <li>• Wagamon - Idukki</li>
                                <li>• Munnar</li>
                                <li>• Marine Drive – Fort Kochi – LuluMall</li>
                                <li>• Wonderla – Lulumall – Kochi Metro – Marine Drive</li>
                                <li>• Athirapally – Vazhachaal – Dream World / Silver Storm</li>
                                <li>• Trivandrum – Zoo – Museum – Veli Tourist Village – Planetarium - Kovalam / LuluMall</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginTop: '10px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img2}
                                alt="Premium Package"
                                style={{
                                    width: '80%', height:'25%',
                                    borderRadius: '15px 125px 24px 145px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>TWO DAY PACKAGES</h2>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                <li>• Wayanad - Kozhikode</li>
                                <li>•Trivandrum – Kanyakumari</li>
                                <li>• Wayanad - Wonderla - Lulumall/ Marrine Drive</li>
                                <li>• Munnar - Wonderla</li>
                                <li>• Ooty - Wayanad</li>
                                <li>• Munnar – Ramakkalmedu</li>
                                <li>• Kodaikanal – Cumbum - Theni</li>
                                <li>• Mysuru - Ooty</li>
                                <li>• Coorg - Chikmagalur</li>
                                <li>• Mysuru - Coorg</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginTop: '10px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img3}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
                                    borderRadius: '15px 125px 24px 145px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>THREE DAY PACKAGES</h2>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                <li>• Mysuru - Ooty - Wonderla</li>
                                <li>•Mysuru - Coorg - Chikmagalore</li>
                                <li>• Chikmanglore – Belur – Coorg</li>
                                <li>• Coorg - Belur - Malpe</li>
                                <li>•Mysuru - Coorg - Wayanad, Ooty - Wayanad - Wonderla</li>
                                <li>•Munnar - Wayanad - Ooty</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginTop: '10px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img4}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
                                    borderRadius: '15px 125px 24px 145px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>FOUR DAY PACKAGES</h2>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                <li>• Mysuru - Coorg - Bangalore - Wonderla</li>
                                <li>•Malpe - Chikmangalore - Belur - Coorg</li>
                                <li>• Malpe - Dandeli - Murudeswar - Gokarna</li>
                                <li>• Kodaikanal - Bangalore - Mysuru - Coorg</li>
                                <li>•Malpe - Shimoga - Chikmangalur - Coorg</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginTop: '10px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img5}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
                                    borderRadius: '15px 125px 24px 145px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div style={{ color: '#e6f1ff' }}>
                            <h2 style={{ marginBottom: '20px', color: '#d4af37', fontSize: '2rem' }}>FIVE DAY PACKAGES</h2>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '2' }}>
                                <li>• Malpe - Chikmangalore - Belur - Coorg - Wayanad</li>
                                <li>•Kodaikanal - Bangalore - Mysuru - Coorg - Wonderla</li>
                                <li>•Bangalore - Hyderabad - Ramoji Film City - Pondichery</li>
                                <li>•Mysuru - Coorg - Belur - Chikmagalur - Malpe</li>
                                <li>•Malpe - Goa - Dandeli – Coorg</li>

                            </ul>
                        </div>
                    </div>
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
                        marginTop: '10px'
                    }}>
                        {/* Left Side: Image */}
                        <div>
                            <img
                                src={img1}
                                alt="Premium Package"
                                style={{
                                    width: '80%',
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
