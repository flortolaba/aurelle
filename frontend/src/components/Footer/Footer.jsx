import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="sub-heading">STAY CONNECTED</span>
        <h2>Be part of AURELLE.</h2>
        <p>Suscribite a nuestro boletín para recibir actualizaciones de nuevas colecciones y beneficios exclusivos.</p>
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Ingresá tu correo electrónico" required />
          <button type="submit">UNIRSE</button>
        </form>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AURELLE STUDIO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;