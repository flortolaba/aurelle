import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      {/* Banner Superior */}
      <div className="top-bar">
        <span>ENVÍOS A TODO EL PAÍS · NUEVA COLECCIÓN DISPONIBLE</span>
      </div>

      {/* Barra de Navegación Principal */}
      <nav className="main-nav">
        <ul className="nav-links">
          <li><a href="#coleccion">COLECCIÓN</a></li>
          <li><a href="#productos">PRODUCTOS</a></li>
          <li><a href="#nosotros">NOSOTROS</a></li>
        </ul>

        <div className="brand-logo">
          <h1>AURELLE</h1>
          <span className="subtitle">STUDIO</span>
        </div>

        <div className="nav-icons">
          <button aria-label="Buscar" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button aria-label="Bolsa de compras" className="icon-btn cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-count">0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;