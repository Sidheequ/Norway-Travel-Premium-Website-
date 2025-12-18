import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/admin");
    };

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
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
