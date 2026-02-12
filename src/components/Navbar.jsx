import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1000px',
      padding: '12px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>
        Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
      </div>
      <ul style={{ display: 'flex', gap: '20px', fontWeight: 500, fontSize: '0.9rem' }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
