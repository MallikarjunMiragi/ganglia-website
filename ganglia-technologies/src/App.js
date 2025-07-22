import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ParticleBackground from './components/ParticleBackground';
import SupporterBand from './components/SupporterBand';
import AboutUsSection from './components/AboutUsSection';
import ProductsSection from './components/ProductsSection';
import StatsStrip from './components/StatsStrip';
import './styles/App.css';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <div className="background-image"></div>
        <ParticleBackground />
        
        <div className="content-overlay">
          <Navbar />
          <HeroSection />
          <SupporterBand />
        </div>
      </div>
      
      <AboutUsSection />
      <ProductsSection />
      <StatsStrip />
      <Services />
    </div>
  );
}

export default App;