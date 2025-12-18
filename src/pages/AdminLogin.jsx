import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            // Check if we are in dev (localhost) or prod
            const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
            const res = await axios.post(`${API_URL}/api/auth/login`, credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/admin/dashboard");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data || "Login failed" });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}
        >
            <div className="glass-card" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#d4af37' }}>Admin Login</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }}
                    />
                </div>
                {error && <span style={{ color: 'red', display: 'block', marginBottom: '10px', textAlign: 'center' }}>{error.message || "Invalid credentials"}</span>}
                <button
                    onClick={handleClick}
                    disabled={loading}
                    className="btn"
                    style={{ width: '100%' }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </motion.div>
    );
};

export default AdminLogin;
