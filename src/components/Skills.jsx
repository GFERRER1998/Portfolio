import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      skills: ["Java (Spring Boot, Security)", "JavaScript", "React.js", "SQL"]
    },
    {
      title: "Architecture & DevOps",
      skills: ["Microservices", "RESTful APIs", "Clean Architecture", "Docker", "AWS", "CI/CD"]
    },
    {
      title: "Database & Performance",
      skills: ["SQL Query Optimization", "Stored Procedures", "Triggers", "DB Design"]
    },
    {
      title: "Specialized Tools",
      skills: ["Git", "GitHub", "Containerization", "GIS Systems", "Real-Time Tracking"]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Technical <span style={{ color: 'var(--accent-primary)' }}>Skills</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="glass" style={{ padding: '20px 25px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '15px', 
              background: 'var(--multicolor-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700 
            }}>{group.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.skills.map((skill) => (
                <span key={skill} className="glass" style={{ 
                  padding: '6px 14px', 
                  fontSize: '0.85rem', 
                  background: 'rgba(255, 255, 255, 0.02)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'var(--transition-smooth)',
                  fontWeight: 500
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
