import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationGrid.css';

const destinations = [
  { name: 'Goa', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  { name: 'Karnataka', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Tamilnadu', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kerala', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80' },
  { name: 'Andhra Pradesh', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Telangana', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Puducherry', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80' },
  { name: 'Lakshadweep', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
];

function DestinationGrid() {
  const navigate = useNavigate();
  return (
    <div className="destination-grid-section">
      <h2 className="destination-title">South India Destinations</h2>
      <div className="destination-grid">
        {destinations.map((dest, idx) => (
          <div
            className="destination-card"
            key={dest.name}
            onClick={() => navigate(`/destination/${dest.name.toLowerCase().replace(/ /g, '-')}`)}
          >
            <div
              className="destination-card-bg"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="destination-overlay">
                <span className="destination-name">{dest.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationGrid; 