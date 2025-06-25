import React from 'react';
import './Aboout.css';

function About() {
    return (
        <section className="testimonial-section">
            <div className="testimonial-container">
                <div className="testimonial-inner">

                    <div className="testimonial-content-wrapper">
                        <div className="profile-column">
                            <div className="profile-icon">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="profile-icon-svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="profile-text">
                                <h2 className="profile-name">NORWAY TRAVEL LIGHT</h2>
                                <div className="profile-divider"></div>
                                <p className="profile-bio">
                                    KOTTARAKKARA,KOLLAM
                                </p>
                            </div>
                        </div>
                        <div className="testimonial-text-column">
                            <p className="testimonial-paragraph">
                                Norway Travel Light, established in 2023 and based in Kottarakkara, Kollam, is a trusted travel service provider dedicated to offering seamless and memorable travel experiences across South India. With a strong operational presence in Kerala, Karnataka, Tamil Nadu, Goa, and Hyderabad, we specialize in curated tour packages, transport solutions, and personalized travel services for individuals, families, and groups. Our fleet of well-maintained cabs and buses, combined with experienced drivers and local guides, ensures that every journey is safe, comfortable, and enjoyable. Whether it’s the serene backwaters of Kerala, the vibrant culture of Tamil Nadu, the scenic beauty of Karnataka, the beaches of Goa, or the historic charm of Hyderabad, we bring each destination to life with care and expertise. At Norway Travel Light, our mission is to provide reliable, affordable, and customer-friendly travel solutions backed by 24/7 support and local insights. Join us in exploring the heart of South India — travel light, travel right with Norway Travel Light.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
