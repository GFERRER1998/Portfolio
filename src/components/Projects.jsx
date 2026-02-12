import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Tienda JAVAREACT",
      description: "Full-stack e-commerce platform developed with Java and React. Primary project featuring complete product and user management.",
      tags: ["Java", "Spring Boot", "React", "Full Stack"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      live: "http://35.193.146.253/items",
      code: "https://github.com/GFERRER1998/TiendaJAVAREACT/",
      credentials: {
        email: "admin@admin.com",
        pass: "admin"
      }
    },
    {
      title: "Supermarket Backend API",
      description: "REST API for stock management and retail operations using Clean Architecture. Full containerization with Docker for consistent deployment and horizontal scaling.",
      tags: ["Java", "Docker", "Clean Architecture", "REST API"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      code: "https://github.com/GFERRER1998/pruebasupermercado"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Featured <span style={{ color: 'var(--accent-primary)' }}>Projects</span></h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {projects.map((project, index) => (
          <div key={index} className="glass project-card" style={{
            overflow: 'hidden',
            transition: 'var(--transition-smooth)',
            position: 'relative',
            cursor: 'pointer'
          }}>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1.3rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '0.9rem' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="glass" style={{
                    padding: '6px 14px',
                    fontSize: '0.85rem',
                    borderRadius: '20px',
                    background: 'rgba(0, 210, 255, 0.03)',
                    border: '1px solid rgba(0, 210, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>{tag}</span>
                ))}
              </div>

              {project.credentials && (
                <div className="glass" style={{ padding: '12px', marginBottom: '15px', fontSize: '0.8rem', background: 'rgba(0, 210, 255, 0.03)', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
                  <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '3px' }}>Demo Access:</p>
                  <p style={{ color: 'var(--text-secondary)' }}>Email: <span style={{ color: 'var(--text-primary)' }}>{project.credentials.email}</span></p>
                  <p style={{ color: 'var(--text-secondary)' }}>Pass: <span style={{ color: 'var(--text-primary)' }}>{project.credentials.pass}</span></p>
                </div>
              )}

              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn glass highlight-btn" style={{ 
                    padding: '12px 25px', 
                    fontSize: '1rem', 
                    flex: 1, 
                    justifyContent: 'center',
                    color: 'white',
                    border: '1px solid var(--accent-cyan)',
                    background: 'rgba(0, 210, 255, 0.1)'
                  }}>Demo access</a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn glass highlight-btn" style={{ 
                    padding: '12px 25px', 
                    fontSize: '1rem', 
                    flex: 1, 
                    justifyContent: 'center', 
                    color: 'white',
                    border: '1px solid var(--accent-magenta)',
                    background: 'rgba(255, 0, 153, 0.1)'
                  }}>Code Repository</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
        }
        .project-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Projects;
