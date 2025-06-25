import React from 'react';
import './TravelSection.css';

const travelPlaces = [
  {
    title: "Taj Mahal",
    subtitle: "Agra, Uttar Pradesh",
    img: "https://wallpaperaccess.com/full/1894584.jpg",
    description: "A UNESCO World Heritage Site and one of the New Seven Wonders of the World, the Taj Mahal is an ivory-white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal"
  },
  {
    title: "Jaipur - The Pink City",
    subtitle: "Jaipur, Rajasthan",
    img: "https://www.travelstart.co.za/blog/wp-content/uploads/2019/08/Jaipur-47.jpg",
    description: "Known for its distinct pink-hued buildings, Jaipur is famous for its rich history, palaces, forts, and vibrant bazaars. The city forms part of the Golden Triangle tourist circuit.",
    link: "https://en.wikipedia.org/wiki/Jaipur"
  },
  {
    title: "Varanasi - The Spiritual Capital",
    subtitle: "Varanasi, Uttar Pradesh",
    img: "https://as2.ftcdn.net/v2/jpg/04/08/25/05/1000_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
    description: "One of the world's oldest continually inhabited cities, Varanasi is revered for its ghats, temples, and the sacred Ganges River, drawing pilgrims and travelers alike.",
    link: "https://en.wikipedia.org/wiki/Varanasi"
  },
  {
    title: "Goa Beaches",
    subtitle: "Goa",
    img: "https://voiceofadventure.com/wp-content/uploads/2022/06/60d0813807aff-Baga_Beach_In_Goa.jpg",
    description: "Goa is renowned for its stunning beaches, vibrant nightlife, Portuguese heritage, and laid-back atmosphere, making it a top destination for both domestic and international tourists.",
    link: "https://en.wikipedia.org/wiki/Goa"
  },
  {
    title: "Kerala Backwaters",
    subtitle: "Alleppey, Kerala",
    img: "https://wallpaperaccess.com/full/5180722.jpg",
    description: "The tranquil backwaters of Kerala, with their network of canals, rivers, and lakes, offer a unique experience aboard traditional houseboats amidst lush greenery.",
    link: "https://en.wikipedia.org/wiki/Backwaters_of_Kerala"
  },
  {
    title: "Gateway of India",
    subtitle: "Mumbai, Maharashtra",
    img: "https://wallpaperaccess.com/full/1180395.jpg",
    description: "An iconic monument overlooking the Arabian Sea, the Gateway of India is a symbol of Mumbai and a popular gathering spot for locals and tourists alike.",
    link: "https://en.wikipedia.org/wiki/Gateway_of_India"
  }
];

function TravelPlacesIndia() {
  return (
    <section className="travel-section">
      <div className="travel-container">
        <div className="travel-header">
          <div className="header-title">
            <h1>"Collect memories, not things."</h1>
            <div className="underline"></div>
          </div>
          <p className="header-description">
            "Travel isn't always pretty. It isn't always comfortable. But it opens your mind, makes you richer in ways you never imagined."
            — Anthony Bourdain
          </p>
        </div>
        <div className="travel-grid">
          {travelPlaces.map((item, index) => (
            <div className="travel-card" key={index}>
              <div className="card-content">
                <img className="card-image" src={item.img} alt={item.title} />
                <h3 className="card-subtitle">{item.subtitle}</h3>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">
                  {item.description}
                </p>
                {item.link && (
                  <a className="card-link" href={item.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelPlacesIndia; 