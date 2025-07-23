import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CareersPage from './components/CareersPage';
import './styles/App.css'; // Make sure this path is correct for your new App.css

// Create a HomePage component that contains all your main page content
const HomePage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="background-image"></div>
        <ParticleBackground />
        
        <div className="content-overlay">
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
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;