import React from 'react';
import { Link } from 'react-router-dom';

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

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card-wrapper">
            <svg
              className="hero-art"
              viewBox="0 0 560 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Composição tecnológica minimalista representando engenharia digital e arquitetura de software"
            >
              <defs>
                <linearGradient id="heroWindowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1c1917" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0e0d0c" stopOpacity="0.98" />
                </linearGradient>
                <linearGradient id="accentLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e4362a" />
                  <stop offset="100%" stopColor="#ff6b47" />
                </linearGradient>
                <linearGradient id="creamLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c5bfb2" />
                </linearGradient>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Wireframe de fundo */}
              <rect
                x="45"
                y="55"
                width="380"
                height="280"
                rx="16"
                stroke="#2a2624"
                strokeWidth="1.4"
                transform="rotate(-5 45 55)"
              />

              {/* Janela de Software Dark */}
              <rect
                x="110"
                y="130"
                width="390"
                height="290"
                rx="14"
                fill="url(#heroWindowGrad)"
                stroke="#383330"
                strokeWidth="1.2"
                transform="rotate(2.5 110 130)"
              />

              {/* Controles da janela */}
              <circle cx="145" cy="165" r="4" fill="#f4efe4" opacity="0.6" />
              <circle cx="160" cy="165" r="4" fill="#f4efe4" opacity="0.3" />
              <circle cx="175" cy="165" r="4" fill="#f4efe4" opacity="0.15" />

              {/* Linha de status no topo da janela */}
              <line x1="205" y1="165" x2="330" y2="165" stroke="#383330" strokeWidth="2" strokeLinecap="round" />

              {/* Card flutuante de código & métricas */}
              <rect
                x="75"
                y="230"
                width="260"
                height="190"
                rx="12"
                fill="#141110"
                stroke="#423b37"
                strokeWidth="1.2"
                transform="rotate(-7 75 230)"
                filter="url(#softGlow)"
              />

              {/* Linhas de código minimalistas no card */}
              <line x1="100" y1="270" x2="270" y2="270" stroke="#f4efe4" strokeWidth="2.5" strokeLinecap="round" transform="rotate(-7 75 230)" />
              <line x1="100" y1="300" x2="220" y2="300" stroke="#8c8779" strokeWidth="2" strokeLinecap="round" transform="rotate(-7 75 230)" />
              <line x1="100" y1="330" x2="290" y2="330" stroke="url(#accentLineGrad)" strokeWidth="2" strokeLinecap="round" transform="rotate(-7 75 230)" />
              <line x1="100" y1="360" x2="190" y2="360" stroke="#5a554d" strokeWidth="1.8" strokeLinecap="round" transform="rotate(-7 75 230)" />

              {/* Mini Símbolo Oficial Malsyn no topo direito */}
              <g transform="translate(425, 95) scale(0.2)">
                <rect width="400" height="400" rx="88" fill="#141110" stroke="#3a3532" strokeWidth="8" />
                <path d="M110,305 L110,95 L155,162.5" stroke="#F4EFE4" strokeWidth="48" strokeLinecap="butt" />
                <path d="M155,162.5 L168.5,182.75" stroke="#E4362A" strokeWidth="48" strokeLinecap="round" />
                <path d="M168.5,182.75 L200,230 L290,95 L290,305" stroke="#F4EFE4" strokeWidth="48" strokeLinecap="butt" />
                <circle cx="252" cy="145" r="14" fill="#E4362A" />
              </g>

              {/* Grid de pontos de precisão matemática */}
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 7 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={60 + col * 26}
                    cy={420 + row * 20}
                    r="1.3"
                    fill="#453f3a"
                    opacity="0.8"
                  />
                ))
              )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
