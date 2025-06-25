import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Carousel/HeroSection';
import TravelSection from './components/TravelSection/TravelSection';
import About from './components/About/About';
import DestinationGrid from './components/TravelSection/DestinationGrid';
import DestinationDetail from './components/TravelSection/DestinationDetail';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/main';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
         <Main />
        } />
        <Route path="/travel" element={<TravelSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<DestinationGrid />} />
        <Route path="/destination/:name" element={<DestinationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
