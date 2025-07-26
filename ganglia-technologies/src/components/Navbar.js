import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/log.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll behavior and blur effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for blur effect
      setIsScrolled(currentScrollY > 50);

      // Show navbar when at top of page (within 50px)
      if (currentScrollY <= 50) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close menu when scrolling
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle mouse movement to show navbar
  useEffect(() => {
    const handleMouseMove = () => {
      const now = Date.now();
      setLastMouseMove(now);
      
      // Show navbar on mouse movement if not at top of page
      if (window.scrollY > 50) {
        setIsVisible(true);
      }
    };

    // Hide navbar after 3 seconds of no mouse movement (only if not at top)
    const hideNavbarTimer = setInterval(() => {
      const now = Date.now();
      if (now - lastMouseMove > 3000 && window.scrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(hideNavbarTimer);
    };
  }, [lastMouseMove]);

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
    
    if (sectionId === 'careers') {
      // Navigate to careers page using React Router
      navigate('/careers');
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait a bit for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 300);
      } else {
        // If we're already on home page, just scroll
        scrollToSection(sectionId);
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const handleCareersClick = (e) => {
    e.preventDefault();
    navigate('/careers');
    setIsMobileMenuOpen(false);
  };

  // Updated function to handle About Us navigation (but route to our-story)
  const handleAboutUsClick = (e) => {
    e.preventDefault();
    navigate('/our-story'); // Keep the original route
    setIsMobileMenuOpen(false);
  };

  // Add function to handle Our Team navigation
  const handleOurTeamClick = (e) => {
    e.preventDefault();
    navigate('/our-team');
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false); // Close dropdown
  };

  const handleLogoClick = () => {
    // Navigate to home page
    navigate('/');
    
    // If already on home page, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleGetStartedClick = () => {
    // You can customize this to navigate to a specific page or section
    // For now, let's navigate to the contact page
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine navbar classes based on state
  const getNavbarClasses = () => {
    let classes = 'navbar';
    
    // Add visibility classes for both mobile and desktop
    classes += isVisible ? ' navbar-visible' : ' navbar-hidden';
    
    // Add blur classes only when scrolled (for all pages)
    if (isScrolled) {
      classes += ' navbar-blur-scrolled'; // Light blur when scrolled on any page
    }
    
    return classes;
  };

  return (
    <nav className={getNavbarClasses()}>
      <div className="logo">
        <img
          src={logo}
          alt="Ganglia Technologies Logo"
          className="logo-image"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Desktop Navigation */}
      <div className={`navbar-right ${isMobile ? 'navbar-desktop-hidden' : ''}`}>
        <ul className="nav-links">
          <li 
            className="dropdown-container"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <a 
              href="/our-story" 
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                navigate('/our-story');
              }}
            >
              About Us
              <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-section">
                <div className="dropdown-category">
                  <a href="/our-story" className="dropdown-item category-header" onClick={(e) => {
                    e.preventDefault();
                    navigate('/our-story');
                    setIsAboutDropdownOpen(false);
                  }}>Our Story</a>
                  <div className="dropdown-subsection">
                    <a href="/philosophy" className="dropdown-item">Philosophy</a>
                    <a href="/milestone" className="dropdown-item">Milestone</a>
                    <a href="/social-responsibility" className="dropdown-item">Social Responsibility</a>
                  </div>
                </div>
                <div className="dropdown-category">
                  <a 
                    href="/our-team" 
                    className="dropdown-item category-header" 
                    onClick={handleOurTeamClick}
                  >
                    Our Team
                  </a>
                  <div className="dropdown-subsection">
                    <a href="/leadership-team" className="dropdown-item highlighted">Leadership Team</a>
                    <a href="/management-team" className="dropdown-item highlighted">Management Team</a>
                    <a href="/intern-team" className="dropdown-item highlighted">Intern Team</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            className="dropdown-container"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <a href="#products" className="dropdown-trigger">
              Products
              <span className="dropdown-arrow">▼</span>
            </a>

            <div className={`dropdown-menu ${isProductsDropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-section">
                <div className="dropdown-category">
                  <a href="/health-tech" className="dropdown-item category-header">
                    Health Tech
                  </a>
                  <div className="dropdown-subsection">
                    <a href="/smart-video-laryngoscope" className="dropdown-item">
                      Smart Video Laryngoscope
                    </a>
                    <a href="/mobile-icu" className="dropdown-item">Mobile ICU</a>
                    <a href="/medical-thermal-imaging" className="dropdown-item">
                      Medical Thermal-Imaging System
                    </a>
                    <a href="/medical-drone" className="dropdown-item">Medical Drone</a>
                  </div>
                </div>

                <div className="dropdown-category">
                  <a href="/ai-powered-tools" className="dropdown-item category-header">
                    AI-Powered Tools
                  </a>
                  <div className="dropdown-subsection">
                    <a href="/tripmachaai" className="dropdown-item">
                      TripMachaAI – Short Trip Planner
                    </a>
                    <a href="/anushtaan" className="dropdown-item">
                      Anushtaan – Project Management Tool
                    </a>
                    <a href="/medical-logbook" className="dropdown-item">
                      Medical Logbook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            className="dropdown-container"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <a href="#services" className="dropdown-trigger">
              Services
              <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${isServicesDropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-section">
                <div className="dropdown-category">
                  <a href="/healthcare-tech" className="dropdown-item category-header">Our Products</a>
                  <div className="dropdown-subsection">
                    <a href="/medical-enterprise-software" className="dropdown-item">Healthcare Tech</a>
                    <a href="/consulting-custom-development" className="dropdown-item">Medical Enterprise Software</a>
                    <a href="/consulting-custom-development" className="dropdown-item">Consulting & Custom Development</a>
                    <a href="/consulting-custom-development" className="dropdown-item">AI Powered Applications</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <a 
              href="#research" 
              onClick={(e) => handleNavClick(e, 'research')}
            >
              Research
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              onClick={(e) => handleNavClick(e, 'blog')}
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="#careers" 
              onClick={handleCareersClick}
            >
              Careers
            </a>
          </li>
          <li>
            <a 
              href="#awards" 
              onClick={(e) => handleNavClick(e, 'awards')}
            >
              Awards & News
            </a>
          </li>
        </ul>
        <button 
          className="get-started-btn"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <>
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-links">
              <li
                className="dropdown-container"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <a href="#about" className="dropdown-trigger">
                  About Us
                  <span className="dropdown-arrow">▼</span>
                </a>
                <div className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}>
                  <div className="dropdown-section">
                    <a href="/our-story" className="dropdown-item" onClick={(e) => {
                      e.preventDefault();
                      navigate('/our-story');
                      setIsMobileMenuOpen(false);
                    }}>Our Story</a>
                    <a href="/philosophy" className="dropdown-item">Philosophy</a>
                    <a href="/milestone" className="dropdown-item">Milestone</a>
                    <a href="/social-responsibility" className="dropdown-item">Social Responsibility</a>
                  </div>
                  <div className="dropdown-section">
                    <a 
                      href="/our-team" 
                      className="dropdown-item highlighted" 
                      onClick={handleOurTeamClick}
                    >
                      Our Team
                    </a>
                    <a href="/leadership-team" className="dropdown-item highlighted">Leadership Team</a>
                    <a href="/management-team" className="dropdown-item highlighted">Management Team</a>
                    <a href="/intern-team" className="dropdown-item highlighted">Intern Team</a>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, 'products')}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#research" 
                  onClick={(e) => handleNavClick(e, 'research')}
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => handleNavClick(e, 'blog')}
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  onClick={handleCareersClick}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#awards" 
                  onClick={(e) => handleNavClick(e, 'awards')}
                >
                  Awards & News
                </a>
              </li>
              <li>
                <button 
                  className="get-started-btn mobile-get-started" 
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
