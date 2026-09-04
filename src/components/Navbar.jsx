import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === '/';
  const isSubPage = location.pathname === '/planos' || location.pathname === '/orcamento' || location.pathname === '/projetos';

  const handleContatoClick = (e) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById('contato');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  if (isSubPage) {
    return (
      <header className="navbar navbar-planos navbar-subpage">
        <div className="wrap navbar-inner navbar-inner-planos">
          <Link to="/" className="nav-back-link" aria-label="Voltar para a página principal">
            <span className="back-arrow">←</span>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <Link to="/" className="brand" onClick={handleHomeClick} aria-label="MALSYN">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon">
              <rect width="400" height="400" rx="88" fill="#141110" stroke="#2b2623" strokeWidth="12" />
              <path d="M110,305 L110,95 L155,162.5" stroke="#F4EFE4" strokeWidth="48" strokeLinecap="butt" />
              <path d="M155,162.5 L168.5,182.75" stroke="#E4362A" strokeWidth="48" strokeLinecap="round" />
              <path d="M168.5,182.75 L200,230 L290,95 L290,305" stroke="#F4EFE4" strokeWidth="48" strokeLinecap="butt" />
              <circle cx="252" cy="145" r="14" fill="#E4362A" />
            </svg>
          </span>
          <span className="brand-text">MALSYN</span>
        </Link>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          <Link
            to="/"
            className={isHome ? 'nav-link active' : 'nav-link'}
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <a
            href={isHome ? '#contato' : '/#contato'}
            className="nav-link"
            onClick={handleContatoClick}
          >
            Contato
          </a>
          <Link
            to="/planos"
            className={location.pathname === '/planos' ? 'nav-link active' : 'nav-link'}
            onClick={() => setOpen(false)}
          >
            Planos
          </Link>
        </nav>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
          type="button"
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>
    </header>
  );
}
