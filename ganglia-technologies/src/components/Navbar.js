import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; // Import the CSS file
import logo from '../assets/log.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll behavior for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return;

      const currentScrollY = window.scrollY;

      // Show navbar when at top of page (within 50px)
      if (currentScrollY <= 50) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Keep navbar hidden when scrolling up (unless at top)
      // Remove the scroll up show behavior

      setLastScrollY(currentScrollY);
    };

    if (isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY, isMobile]);

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

  const handleLogoClick = () => {
    // Option 1: Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Option 2: If you have a home section with ID "home", uncomment this:
    // scrollToSection('home');

    // Option 3: If you want to reload the page, uncomment this:
    // window.location.reload();

    // Option 4: If you're using React Router, uncomment and import useNavigate:
    // const navigate = useNavigate();
    // navigate('/');
  };

  return (
    <nav 
      className={`navbar ${isMobile ? (isVisible ? 'navbar-visible' : 'navbar-hidden') : ''}`}
    >
      <div className="logo">
        <img
          src={logo}
          alt="Ganglia Technologies Logo"
          className="logo-image"
          onClick={handleLogoClick}
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