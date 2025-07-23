import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ParticleBackground from './components/ParticleBackground';
import SupporterBand from './components/SupporterBand';
import AboutUsSection from './components/AboutUsSection';
import ProductsSection from './components/ProductsSection';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';
import './styles/App.css'; // Make sure this path is correct for your new App.css

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
      <TeamSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}

export default App;