import React from 'react';
import logo from '../assets/log.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Ganglia Technologies Logo"
          className="logo-image"
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a 
              href="#story" 
              onClick={(e) => handleNavClick(e, 'story')}
            >
              Our Story
            </a>
          </li>
          <li>
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
            >
              Products
            </a>
          </li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#awards">Awards & News</a></li>
          <li><a href="#research">Research</a></li>
        </ul>
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;