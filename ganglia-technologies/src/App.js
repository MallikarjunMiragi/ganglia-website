import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ParticleBackground from './components/ParticleBackground';
import SupporterBand from './components/SupporterBand';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <div className="background-image"></div>
        <ParticleBackground />
        
        <div className="content-overlay">
          <Navbar />
          <HeroSection />
        </div>
        
        <SupporterBand />
      </div>
    </div>
  );
}

export default App;