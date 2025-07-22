import React, { useEffect, useRef } from 'react';
import '../styles/Services.css';

// Import all images from src/assets
import healthImage from '../assets/health.png';
import medicalImage from '../assets/medical.png';
import consultingImage from '../assets/consulting.png';
import aiImage from '../assets/ai.png';

const services = [
  {
    title: 'Healthcare Tech',
    description: 'Smart medical devices, telemedicine platforms and patient data management',
    image: healthImage
  },
  {
    title: 'Medical Enterprise Software',
    description: 'Scalable Business Solutions tailored to client needs',
    image: medicalImage
  },
  {
    title: 'Consulting & Custom Dev',
    description: 'AI Strategy & Automation for Business Growth.',
    image: consultingImage
  },
  {
    title: 'AI Powered Applications',
    description: 'Intelligent automation, Machine Learning and NLP models',
    image: aiImage
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    const handleScroll = () => {
      if (!section || cards.length === 0) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Improved scroll progress calculation
      const sectionCenter = rect.top + sectionHeight / 2;
      const viewportCenter = windowHeight / 2;
      
      // Calculate distance from section center to viewport center
      const distance = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + sectionHeight / 2;
      
      // Progress: 0 when section center aligns with viewport center, 1 when furthest
      let scrollProgress = Math.min(distance / maxDistance, 1);
      
      // Invert so cards are fully formed when section is in center
      scrollProgress = 1 - scrollProgress;
      
      // Apply a smoother easing function
      const easeOutQuart = (t) => {
        return 1 - Math.pow(1 - t, 4);
      };

      const easedProgress = easeOutQuart(scrollProgress);

      cards.forEach((card, index) => {
        if (!card) return;
        
        // Reduced starting distances for smoother animation
        let startX, startY;
        
        switch(index) {
          case 0: // Top-left
            startX = -60;
            startY = -60;
            break;
          case 1: // Top-right
            startX = 60;
            startY = -60;
            break;
          case 2: // Bottom-left
            startX = -60;
            startY = 60;
            break;
          case 3: // Bottom-right
            startX = 60;
            startY = 60;
            break;
          default:
            startX = 0;
            startY = 0;
        }

        // Calculate current position with smoother interpolation
        const currentX = startX * (1 - easedProgress);
        const currentY = startY * (1 - easedProgress);
        const currentScale = 0.6 + (0.4 * easedProgress); // Scale from 0.6 to 1
        const currentOpacity = 0.3 + (0.7 * easedProgress); // Opacity from 0.3 to 1
        const currentRotation = (1 - easedProgress) * (index % 2 === 0 ? -8 : 8); // Reduced rotation

        // Apply transforms with smoother transitions
        requestAnimationFrame(() => {
          card.style.transform = `translate(${currentX}vw, ${currentY}vh) scale(${currentScale}) rotate(${currentRotation}deg)`;
          card.style.opacity = currentOpacity;
        });
      });
    };

    // Use requestAnimationFrame for smoother animations
    let rafId;
    const smoothHandleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener('scroll', smoothHandleScroll, { passive: true });
    window.addEventListener('resize', smoothHandleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', smoothHandleScroll);
      window.removeEventListener('resize', smoothHandleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-bg" />
      <div className="services-container">
        <h2 className="services-heading">Services We Provide</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`service-card scroll-responsive-card ${idx < 2 ? 'top-row' : 'bottom-row'} ${idx % 2 === 1 ? 'reverse' : ''}`}
            >
              <img src={service.image} alt={service.title} className="service-img" />
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;