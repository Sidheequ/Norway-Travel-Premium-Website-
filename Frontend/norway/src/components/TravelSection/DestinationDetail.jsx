import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DestinationDetail.css';
import goa from '../../assets/goa.jpg';

const destinations = [
  { name: 'Goa', image: goa, description: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.' },
  { name: 'Karnataka', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', description: 'Karnataka is known for its rich history, palaces, and natural beauty.' },
  { name: 'Tamilnadu', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80', description: 'Tamil Nadu is renowned for its ancient temples, classical arts, and Dravidian culture.' },
  { name: 'Kerala', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80', description: 'Kerala is called "Gods Own Country" for its backwaters, greenery, and unique traditions.' },
  { name: 'Andhra Pradesh', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', description: 'Andhra Pradesh is known for its Tirupati temple, beaches, and spicy cuisine.' },
  { name: 'Telangana', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', description: 'Telangana is home to Hyderabad, Charminar, and a rich Deccan heritage.' },
  { name: 'Puducherry', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80', description: 'Puducherry is a former French colony with beautiful beaches and colonial architecture.' },
  { name: 'Lakshadweep', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', description: 'Lakshadweep is a tropical archipelago known for its coral reefs and clear waters.' },
];

function DestinationDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const dest = destinations.find(d => d.name.toLowerCase().replace(/ /g, '-') === name);
  if (!dest) return <div style={{color:'#fff',textAlign:'center'}}>Destination not found.</div>;
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            alt={dest.name}
            src={dest.image}
          />
        </div>
        <div className="hero-text-wrapper">
          {/* <button onClick={() => navigate(-1)} className="btn-primary" style={{marginBottom:20}}>Back</button> */}
          <h1 className="hero-title">{dest.name}</h1>
          <p className="hero-description">{dest.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail; 