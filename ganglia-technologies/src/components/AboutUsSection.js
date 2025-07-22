import React from 'react';
import '../styles/AboutUsSection.css';

import gifting from '../assets/gifting1.jpeg';
import gifting1 from '../assets/gifting.png';
import boardroom from '../assets/boardroom.jpeg';

const AboutUsSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
         
          <div className="image-collage">
            <div className="image-wrapper top-image">
              <img src={gifting} alt="Award ceremony" />
            </div>
            <div className="image-wrapper bottom-left">
              <img src={gifting1} alt="Business meeting" />
            </div>
            <div className="image-wrapper bottom-right">
              <img src={boardroom} alt="Team discussion" />
            </div>
          </div>
        </div>

        <div className="about-right">
          <h2 className="about-title">About Ganglia</h2>
          <p className="about-description">
            We are dedicated to making <span className="highlight">advanced healthcare</span> and technology solutions both <span className="highlight">innovative</span> and <span className="highlight">affordable</span> by leveraging AI and engineering.
          </p>
          <button className="know-more-btn">Know More</button>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;