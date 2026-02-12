import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>About <span style={{ color: 'var(--accent-primary)' }}>Me</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '10px', lineHeight: 1.8 }}>
              Full Stack Developer & System Architect specialized in Java (Spring Boot) and React.js.
              I have over 4 years of experience building high-concurrency solutions for e-commerce and logistics sectors.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '20px', lineHeight: 1.8 }}>
              Passionate about SQL performance and scalable microservices. I have worked at industry leaders like Uber and Mercado Libre,
              optimizing critical processes and ensuring the stability of systems handling millions of shipments and transactions.
            </p>
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '2rem' }}>4+</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Years of Experience</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-secondary)', fontSize: '2rem' }}>1M+</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Shipments Processed</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '2rem' }}>B2</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>English Level</p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer className="container" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', textAlign: 'center' }}>
        <div style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Outfit', color: 'var(--text-primary)' }}>
          Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        <div style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '5px' }}>📧 <a href="mailto:gnzlferrer@gmail.com" style={{ color: 'var(--text-primary)' }}>gnzlferrer@gmail.com</a></p>
          <p>📞 <a href="tel:+540111522524050" style={{ color: 'var(--text-primary)' }}>+54 011 15 2252 4050</a></p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <a href="https://github.com/GFERRER1998" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '10px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/gonzalo-ferrer-1561b4392/" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '10px' }}>LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Gonzalo Ferrer. Buenos Aires, Argentina.</p>
      </footer>
    </div>
  );
}

export default App;
