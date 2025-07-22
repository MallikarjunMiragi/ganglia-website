import React, { useEffect, useRef, useState } from 'react';
import '../styles/CertificationsSection.css';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Counter animation hook
  const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const hasStarted = useRef(false);

    useEffect(() => {
      if (!isVisible || hasStarted.current) return;

      hasStarted.current = true;
      let startTimestamp = null;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Use easeOut animation curve for smoother animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * (end - start) + start);
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]); // Only depend on isVisible for triggering animation

    return count;
  };

  const patentsCount = useCounter(17, 2000);
  const projectsCount = useCounter(15, 2200);
  const teamSizeCount = useCounter(50, 2500);

  const certifications = [
    {
      year: '2024',
      title: 'Certificate of Excellence in Product Design',
      id: 1
    },
    {
      year: '2024',
      title: 'Certificate of Appreciation - MAHE Research Day',
      id: 2
    },
    {
      year: '2024',
      title: 'Certificate of Appreciation - MAHE Research Day',
      id: 3
    }
  ];

  const stats = [
    {
      number: patentsCount,
      label: 'Patents Received',
      id: 1
    },
    {
      number: `${projectsCount}+`,
      label: 'Projects',
      id: 2
    },
    {
      number: `${teamSizeCount}+`,
      label: 'Team Size',
      id: 3
    }
  ];

  return (
    <section className="certifications-section" ref={sectionRef}>
      <div className="certifications-container">
        <h2 className="certifications-title">
          We are Proudly Certified By
        </h2>
        
        <p className="certifications-description">
          We are proud of our achievements in innovation and excellence. From securing patents to winning 
          industry awards, our work is making a real impact. Here are some of our key Certifications
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="certification-card"
              style={{
                animationDelay: isVisible ? `${index * 0.2}s` : '0s',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="certification-badge">
                {/* Placeholder for certification sticker image */}
                {/* <img src="/assets/certified-sticker.png" alt="Certified" /> */}
              </div>
              
              <div className="certification-year">
                {cert.year}
              </div>
              
              <p className="certification-text">
                {cert.title}
              </p>
            </div>
          ))}
        </div>

        {/* Updated class name to avoid conflicts */}
        <div className="certifications-stats-divider"></div>

        {/* Updated class name to avoid conflicts */}
        <div className="certifications-stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="certification-stat-item"
              style={{
                animationDelay: isVisible ? `${(index + 3) * 0.2}s` : '0s',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="certification-stat-number">
                {stat.number}
              </div>
              <div className="certification-stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;