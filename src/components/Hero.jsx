import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="container" style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Undulating Ribbon Backgrounds */}
      <div className="wave-bg">
        <svg viewBox="0 0 1000 1000" style={{ position: 'absolute', width: '150%', height: '150%', top: '-25%', left: '-25%', animation: 'float 20s infinite linear' }}>
          <defs>
            <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--accent-teal)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ribbon2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-magenta)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--accent-orange)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--accent-magenta)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,500 C200,300 400,700 600,500 C800,300 1000,700 1000,500 L1000,1000 L0,1000 Z" fill="url(#ribbon1)" style={{ transform: 'scale(1.2) rotate(45deg)', transformOrigin: 'center' }}>
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
              M0,500 C200,300 400,700 600,500 C800,300 1000,700 1000,500 L1000,1000 L0,1000 Z;
              M0,500 C200,700 400,300 600,500 C800,700 1000,300 1000,500 L1000,1000 L0,1000 Z;
              M0,500 C200,300 400,700 600,500 C800,300 1000,700 1000,500 L1000,1000 L0,1000 Z
            " />
          </path>
          <path d="M1000,500 C800,700 600,300 400,500 C200,700 0,300 0,500 L0,0 L1000,0 Z" fill="url(#ribbon2)" style={{ transform: 'scale(1.2) rotate(-30deg)', transformOrigin: 'center', opacity: 0.6 }}>
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
              M1000,500 C800,700 600,300 400,500 C200,700 0,300 0,500 L0,0 L1000,0 Z;
              M1000,500 C800,300 600,700 400,500 C200,300 0,700 0,500 L0,0 L1000,0 Z;
              M1000,500 C800,700 600,300 400,500 C200,700 0,300 0,500 L0,0 L1000,0 Z
            " />
          </path>
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '100px 0 40px 0' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: 800, 
          lineHeight: 1.1, 
          marginBottom: '20px',
          textShadow: '0 0 30px rgba(0,210,255,0.3)'
        }}>
          GONZALO FERRER<br />
          <span style={{ 
            background: 'var(--multicolor-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>Full Stack Developer.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '750px', marginBottom: '40px', lineHeight: 1.6 }}>
          Specialized in high-concurrency system architectures using Java (Spring Boot) and React.js. 
          Transforming complex problems into scalable solutions.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#projects" className="btn glass highlight-btn" style={{ 
            padding: '12px 30px', 
            fontSize: '1.1rem', 
            color: 'white',
            border: '1px solid var(--accent-teal)',
            background: 'rgba(0, 255, 162, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 255, 162, 0.1)'
          }}>View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
