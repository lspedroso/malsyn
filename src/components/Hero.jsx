import React from 'react';
import { Link } from 'react-router-dom';
import HeroLogoAnimation from './HeroLogoAnimation';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Tecnologia que move & experiências que conectam</span>
          </div>

          <h1 className="hero-title">
            Seu negócio merece uma presença digital <span className="text-gradient">à altura.</span>
          </h1>

          <p className="hero-tagline">
            Desenvolvemos experiências digitais modernas, estratégicas e personalizadas para conectar empresas e pessoas.
          </p>

          <div className="hero-cta">
            <Link to="/projetos" className="btn-primary">
              Conheça nossos projetos
              <span className="btn-arrow">→</span>
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-val">IDEIA</span>
              <span className="metric-label">Entendemos o que você precisa</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-val">DESIGN</span>
              <span className="metric-label">Transformamos em uma experiência</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-val">CÓDIGO</span>
              <span className="metric-label">Damos vida ao projeto</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <HeroLogoAnimation />
        </div>
      </div>
    </section>
  );
}

