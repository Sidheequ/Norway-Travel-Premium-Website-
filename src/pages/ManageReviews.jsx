import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/admin');
        }
    }, [user, navigate]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
                const res = await axios.get(`${API_URL}/api/reviews`);
                setReviews(res.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
            }
        };
        fetchReviews();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
                await axios.delete(`${API_URL}/api/reviews/${id}`, {
                    headers: { 'Authorization': `Bearer ${user?.token}` } // If token is required
                });
                setReviews(reviews.filter(review => review._id !== id));
            } catch (err) {
                console.error("Error deleting review:", err);
                alert("Failed to delete review. Make sure you are authorized.");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1 style={{ color: '#d4af37' }}>Manage <span className="text-white">Reviews</span></h1>
                    <button className="btn" onClick={() => navigate('/admin/dashboard')}>Back to Dashboard</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {reviews.map(review => (
                        <div key={review._id} className="glass-card" style={{ padding: '20px', position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                <div>
                                    <h3 style={{ margin: 0, color: '#fff' }}>{review.name}</h3>
                                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>{review.email}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#fbc02d', fontWeight: 'bold' }}>
                                    ★ {review.rating}
                                </div>
                            </div>
                            <p style={{ color: '#ddd', fontSize: '0.9rem', marginBottom: '15px' }}>{review.review}</p>
                            {review.image && (
                                <img src={review.image} alt="Review" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px', marginBottom: '15px' }} />
                            )}
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="btn"
                                    style={{ backgroundColor: '#ff4444', padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    {reviews.length === 0 && (
                        <p style={{ color: '#aaa', gridColumn: '1 / -1', textAlign: 'center', marginTop: '50px' }}>No reviews found.</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ManageReviews;
