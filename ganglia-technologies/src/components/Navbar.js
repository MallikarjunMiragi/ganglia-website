import React from 'react';
import logo from '../assets/log.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Ganglia Technologies Logo"
          className="logo-image"
        />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#products">Products</a></li>
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