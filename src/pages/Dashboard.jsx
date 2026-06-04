import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Dashboard = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [pendingCount, setPendingCount] = useState(0);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/admin");
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const res = await axios.get(`${API_URL}/api/reviews?all=true`);
                const pending = res.data.filter(review => !review.isApproved);
                setPendingCount(pending.length);
            } catch (err) {
                console.error("Error fetching reviews for dashboard:", err);
            }
        };
        fetchReviews();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h1>Welcome, <span className="text-gold">{user?.username}</span></h1>
                    <button onClick={handleLogout} className="btn" style={{ backgroundColor: '#ff4444' }}>Logout</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {/* Packages Management Card */}
                    <div className="glass-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/admin/packages')}>
                        <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Packages</h2>
                        <p>Manage tour packages, add new ones, or update existing details.</p>
                        <Link to="/admin/packages" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Manage Packages</Link>
                    </div>

                    {/* Gallery Management Card */}
                    <div className="glass-card" style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/admin/gallery')}>
                        <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Gallery</h2>
                        <p>Add or remove images from the home gallery.</p>
                        <Link to="/admin/gallery" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Manage Gallery</Link>
                    </div>

                    {/* Reviews Management Card */}
                    <div className="glass-card" style={{ textAlign: 'center', cursor: 'pointer', position: 'relative' }} onClick={() => navigate('/admin/reviews')}>
                        {pendingCount > 0 && (
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                backgroundColor: '#ff4444',
                                color: '#fff',
                                borderRadius: '50%',
                                width: '28px',
                                height: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                boxShadow: '0 0 10px rgba(255, 68, 68, 0.5)'
                            }}>
                                {pendingCount}
                            </div>
                        )}
                        <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Reviews</h2>
                        <p>View, manage, and remove user reviews.</p>
                        {pendingCount > 0 ? (
                            <p style={{ color: '#ff4444', fontWeight: '600', marginTop: '10px', fontSize: '0.9rem' }}>⚠️ {pendingCount} reviews pending approval!</p>
                        ) : (
                            <p style={{ color: '#10B981', fontWeight: '600', marginTop: '10px', fontSize: '0.9rem' }}>✓ All reviews approved</p>
                        )}
                        <Link to="/admin/reviews" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Manage Reviews</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
