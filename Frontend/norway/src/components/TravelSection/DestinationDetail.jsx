import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const destinations = [
  { name: 'Goa', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', description: 'Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.' },
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
    <div style={{maxWidth:700,margin:'40px auto',background:'#222',borderRadius:20,padding:32,color:'#fff',boxShadow:'0 4px 24px rgba(0,0,0,0.18)'}}>
      <button onClick={() => navigate(-1)} style={{marginBottom:20,background:'#6366F1',color:'#fff',border:'none',padding:'8px 18px',borderRadius:8,cursor:'pointer'}}>Back</button>
      <img src={dest.image} alt={dest.name} style={{width:'100%',borderRadius:16,marginBottom:24}} />
      <h1 style={{fontSize:'2.2rem',marginBottom:12}}>{dest.name}</h1>
      <p style={{fontSize:'1.15rem'}}>{dest.description}</p>
    </div>
  );
}

export default DestinationDetail; 