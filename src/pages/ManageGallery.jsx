import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ManageGallery = () => {
    const { user } = useContext(AuthContext);
    const [gallery, setGallery] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        description: ''
    });

    // Fetch Gallery
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/gallery');
                setGallery(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchGallery();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/gallery', formData);
            setGallery([res.data, ...gallery]);
            setFormData({ title: '', imageUrl: '', description: '' });
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/gallery/${id}`);
            setGallery(gallery.filter(item => item._id !== id));
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
                    <h1 style={{ color: '#d4af37' }}>Manage Gallery</h1>
                    <Link to="/admin/dashboard" className="btn">Back to Dashboard</Link>
                </div>

                {/* Form */}
                <div className="glass-card" style={{ marginBottom: '50px' }}>
                    <h3>Add New Image</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} style={{ padding: '10px' }} required />
                        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} style={{ padding: '10px' }} required />
                        <input type="text" name="description" placeholder="Description (Optional)" value={formData.description} onChange={handleChange} style={{ padding: '10px' }} />
                        <button type="submit" className="btn">Add Image</button>
                    </form>
                </div>

                {/* List */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {gallery.map(item => (
                        <div key={item._id} className="glass-card" style={{ padding: '10px', textAlign: 'center' }}>
                            <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                            <h4 style={{ margin: '10px 0', color: '#fff' }}>{item.title}</h4>
                            <button onClick={() => handleDelete(item._id)} style={{ padding: '5px 10px', cursor: 'pointer', background: 'red', color: 'white', border: 'none', width: '100%' }}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ManageGallery;
