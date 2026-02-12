import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Uber",
      role: "Full Stack Developer",
      period: "2024 – 2025",
      description: [
        "Developed real-time logistics applications (Java/React) for high-concurrency ride-hailing systems.",
        "Optimized GIS SQL queries and Spring Boot APIs, significantly reducing latency in live tracking.",
        "Scaled microservices infrastructure to handle peak traffic and implemented dynamic pricing logic."
      ]
    },
    {
      company: "Mercado Libre",
      role: "Backend Developer",
      period: "2020 – 2023",
      description: [
        "Engineered logistics systems processing 1M+ shipments using Java and SQL.",
        "Designed low-latency microservices and database schemas for real-time inventory management.",
        "Automated core business processes through complex Stored Procedures and Triggers."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Professional <span style={{ color: 'var(--accent-secondary)' }}>Timeline</span></h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass" style={{ padding: '25px 35px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '3px' }}>{exp.company}</h3>
                <h4 style={{ 
                  background: 'var(--multicolor-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700, 
                  fontSize: '1rem' 
                }}>{exp.role}</h4>
              </div>
              <span className="glass" style={{ padding: '6px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>{exp.period}</span>
            </div>
            <ul style={{ paddingLeft: '20px' }}>
              {exp.description.map((item, i) => (
                <li key={i} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '6px', fontSize: '0.95rem', listStyleType: 'circle' }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
