import React, { useEffect, useState } from 'react';
import '../styles/OurTeam.css';

const OurTeam = () => {
  const [foundingTeam, setFoundingTeam] = useState([]);
  const [managementTeam, setManagementTeam] = useState([]);
  const [internTeam, setInternTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to dynamically import images
  const importImage = async (imagePath) => {
    try {
      const image = await import(`../assets/${imagePath}`);
      return image.default;
    } catch (err) {
      console.error(`Error loading image: ${imagePath}`, err);
      return null;
    }
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/teamData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const teamData = await response.json();
        
        // Process images for each team
        const processTeamImages = async (team) => {
          return Promise.all(
            team.map(async (member) => {
              const imageSrc = await importImage(member.image);
              return { ...member, imageSrc };
            })
          );
        };

        const [foundingWithImages, managementWithImages, internWithImages] = await Promise.all([
          processTeamImages(teamData.foundingTeam),
          processTeamImages(teamData.managementTeam),
          processTeamImages(teamData.internTeam)
        ]);

        setFoundingTeam(foundingWithImages);
        setManagementTeam(managementWithImages);
        setInternTeam(internWithImages);
        setLoading(false);
      } catch (err) {
        setError('Failed to load team data');
        setLoading(false);
        console.error('Error fetching team data:', err);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [loading]);

  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const TeamMember = ({ member, isIntern = false }) => (
    <div className={`team-member ${isIntern ? 'intern-member' : ''}`}>
      <div className={`member-photo ${isIntern ? 'intern-photo' : ''}`}>
        <img src={member.imageSrc || member.image} alt={member.alt} />
        <div className="linkedin-icon">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
    </div>
  );

  if (loading) {
    return <div className="loading">Loading team data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1>Our Team</h1>
          <div className="hero-content">
            <p>
              <strong>Innovation is driven by visionaries:</strong> Founders with engineering and
              medical excellence, AI pioneers, global collaborators. Our culture is bold ideas,
              openness, and relentless execution. We champion diversity because the best
              breakthroughs thrive at intersections of different perspectives and experiences.
            </p>
          </div>
          <h2 className="section-subtitle">Meet the Minds Behind Ganglia</h2>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="team-title">Founding Team</h2>
          <div className="contact-form animate-on-scroll">
            <div className="info animate-on-scroll">
              <div className="team-grid">
                {foundingTeam.map((member) => (
                  <TeamMember key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section management-section">
        <div className="container">
          <h2 className="team-title">Management Team</h2>
          <div className="contact-form animate-on-scroll">
            <div className="info animate-on-scroll">
              <div className="management-grid">
                {managementTeam.map((member) => (
                  <TeamMember key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section intern-section">
        <div className="container">
          <h2 className="team-title">Intern Team</h2>
          <div className="contact-form animate-on-scroll">
            <div className="info animate-on-scroll">
              <div className="intern-grid">
                {internTeam.map((member) => (
                  <TeamMember key={member.id} member={member} isIntern={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
