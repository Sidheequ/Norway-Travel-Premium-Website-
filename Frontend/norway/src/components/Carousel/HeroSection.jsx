import React from 'react';
import './HeroSection.css';
import i1  from '../../assets/1.jpg'
import i2 from '../../assets/2.jpg'
import i3 from '../../assets/3.jpg'


function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Celebrate Craftsmanship, Shop Handcrafted Treasures</h1>
            <p>Discover unique, artisan-made products crafted with passion, tradition, and care—bringing timeless beauty to your everyday life.</p>
            {/* <a href="#" className="shop-button">Shop Collection</a> */}
          </div>
          <div className="hero-images">
            <div className="image-grid single-row">
              <div className="image-box">
                <img src={i1} alt="Travel 1" />
              </div>
              <div className="image-box">
                <img src={i2} alt="Travel 2" />
              </div>
              <div className="image-box">
                <img src={i3} alt="Travel 3" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 