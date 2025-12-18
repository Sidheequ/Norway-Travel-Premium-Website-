import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ManagePackages = () => {
    const { user } = useContext(AuthContext);
    const [packages, setPackages] = useState([]);
    const [formData, setFormData] = useState({
        category: 'One Day',
        title: '',
        items: '',
        image: ''
    });
    const [editingId, setEditingId] = useState(null);

    // Fetch Packages
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/packages');
                setPackages(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPackages();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemsArray = formData.items.split(',').map(item => item.trim()); // Simple comma separation
        const payload = { ...formData, items: itemsArray };

        try {
            if (editingId) {
                // Update
                const res = await axios.put(`http://localhost:5000/api/packages/${editingId}`, payload, {
                    headers: { token: `Bearer ${user.accessToken}` } // If we add auth middleware later
                });
                setPackages(packages.map(pkg => pkg._id === editingId ? res.data : pkg));
                setEditingId(null);
            } else {
                // Create
                const res = await axios.post('http://localhost:5000/api/packages', payload);
                setPackages([...packages, res.data]);
            }
            setFormData({ category: 'One Day', title: '', items: '', image: '' });
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = (pkg) => {
        setEditingId(pkg._id);
        setFormData({
            category: pkg.category,
            title: pkg.title || '',
            items: pkg.items.join(', '),
            image: pkg.image
        });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/packages/${id}`);
            setPackages(packages.filter(pkg => pkg._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}
        >
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1 style={{ color: '#d4af37' }}>Manage Packages</h1>
                    <Link to="/admin/dashboard" className="btn">Back to Dashboard</Link>
                </div>

                {/* Form */}
                <div className="glass-card" style={{ marginBottom: '50px' }}>
                    <h3>{editingId ? "Edit Package" : "Add New Package"}</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                        <select name="category" value={formData.category} onChange={handleChange} style={{ padding: '10px' }}>
                            <option value="One Day">One Day</option>
                            <option value="Two Day">Two Day</option>
                            <option value="Three Day">Three Day</option>
                            <option value="Four Day">Four Day</option>
                            <option value="Five Day">Five Day</option>
                        </select>
                        <input type="text" name="title" placeholder="Title (e.g., ONE DAY PACKAGES)" value={formData.title} onChange={handleChange} style={{ padding: '10px' }} />
                        <textarea name="items" placeholder="Items (comma separated, e.g., location1, location2)" value={formData.items} onChange={handleChange} style={{ padding: '10px', minHeight: '100px' }} required />
                        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} style={{ padding: '10px' }} required />
                        <button type="submit" className="btn">{editingId ? "Update" : "Add"}</button>
                    </form>
                </div>

                {/* List */}
                <div style={{ display: 'grid', gap: '20px' }}>
                    {packages.map(pkg => (
                        <div key={pkg._id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h4 style={{ color: '#d4af37' }}>{pkg.category}: {pkg.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{pkg.items.length} items</p>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => handleEdit(pkg)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Edit</button>
                                <button onClick={() => handleDelete(pkg._id)} style={{ padding: '5px 10px', cursor: 'pointer', background: 'red', color: 'white', border: 'none' }}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ManagePackages;
