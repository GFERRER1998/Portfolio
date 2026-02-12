import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="glass" style={{ padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Tienes un <span style={{ color: 'var(--accent-secondary)' }}>Proyecto</span> en mente?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
          Estoy disponible para trabajos freelance y colaboraciones interesantes.
        </p>
        <form style={{ display: 'grid', gap: '20px', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="Nombre" className="glass" style={{ padding: '15px', border: '1px solid var(--border-color)', color: 'white' }} />
            <input type="email" placeholder="Email" className="glass" style={{ padding: '15px', border: '1px solid var(--border-color)', color: 'white' }} />
          </div>
          <textarea placeholder="Mensaje" className="glass" rows="5" style={{ padding: '15px', border: '1px solid var(--border-color)', color: 'white', resize: 'none' }}></textarea>
          <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
