import React, { useState, useRef } from 'react';

export default function HeroLogoAnimation() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage for spotlight
    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;
    setMousePos({ x: posX, y: posY });

    // 3D tilt calculation (-10 to +10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -9;
    const tiltY = ((x - centerX) / centerX) * 9;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="hero-logo-showcase-container">
      {/* Halo de luz ambiente no fundo */}
      <div className="logo-ambient-halo" aria-hidden="true"></div>
      <div className="logo-ambient-red-glow" aria-hidden="true"></div>

      {/* Card 3D interativo */}
      <div
        ref={cardRef}
        className={`hero-logo-card ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale(1.02)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
        }}
      >
        {/* Spotlight dinâmico que segue o cursor */}
        <div
          className="logo-card-spotlight"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(244, 239, 228, 0.12) 0%, rgba(228, 54, 42, 0.06) 35%, transparent 70%)`,
          }}
          aria-hidden="true"
        ></div>

        {/* Linha de reflexo / brilho passando periodicamente */}
        <div className="logo-sheen-beam" aria-hidden="true"></div>

        {/* Top HUD bar */}
        <div className="logo-card-hud top-hud">
          <span className="hud-label">MALSYN // CORE ID</span>
          <span className="hud-status">
            <span className="hud-status-dot"></span>
            <span className="hud-status-text">ACTIVE</span>
          </span>
        </div>

        {/* Corner Crosshairs */}
        <span className="crosshair top-left">+</span>
        <span className="crosshair top-right">+</span>
        <span className="crosshair bottom-left">+</span>
        <span className="crosshair bottom-right">+</span>

        {/* SVG do Logo Malsyn com animações de traçado e pulso */}
        <div className="logo-svg-wrapper">
          <svg
            className="malsyn-animated-logo"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo animado da Malsyn com traçados geométricos e pulso luminoso"
          >
            <defs>
              {/* Filtro de neon intenso para o acento vermelho */}
              <filter id="neonRedGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="7" result="glow1" />
                <feGaussianBlur stdDeviation="16" result="glow2" />
                <feMerge>
                  <feMergeNode in="glow2" />
                  <feMergeNode in="glow1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Brilho suave para o traçado off-white */}
              <filter id="softWhiteGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" result="softBlur" />
                <feMerge>
                  <feMergeNode in="softBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradiente de traçado luminoso dinâmico */}
              <linearGradient id="tracerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F4EFE4" stopOpacity="1" />
                <stop offset="100%" stopColor="#d4cebe" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Fundo do símbolo oficial */}
            <rect
              className="logo-base-rect"
              x="8"
              y="8"
              width="384"
              height="384"
              rx="84"
              fill="#141110"
              stroke="#2b2623"
              strokeWidth="4"
            />

            {/* Grade técnica interna discreta */}
            <g className="logo-grid-lines" opacity="0.18">
              <line x1="110" y1="40" x2="110" y2="360" stroke="#f4efe4" strokeDasharray="3 6" strokeWidth="1" />
              <line x1="290" y1="40" x2="290" y2="360" stroke="#f4efe4" strokeDasharray="3 6" strokeWidth="1" />
              <line x1="40" y1="230" x2="360" y2="230" stroke="#f4efe4" strokeDasharray="3 6" strokeWidth="1" />
            </g>

            {/* Símbolo "M" oficial */}
            <g className="logo-m-group">
              {/* Haste esquerda + início da diagonal (off-white) */}
              <path
                className="m-stroke m-stroke-left"
                d="M110,305 L110,95 L155,162.5"
                fill="none"
                stroke="url(#tracerGradient)"
                strokeWidth="48"
                strokeLinecap="butt"
                filter="url(#softWhiteGlow)"
              />

              {/* Acento Malsyn: cápsula vermelha com ponta arredondada e pulso neon */}
              <path
                className="m-stroke m-accent-pill"
                d="M155,162.5 L168.5,182.75"
                fill="none"
                stroke="#E4362A"
                strokeWidth="48"
                strokeLinecap="round"
                filter="url(#neonRedGlow)"
              />

              {/* Resto da diagonal + pico direito + haste vertical direita (off-white) */}
              <path
                className="m-stroke m-stroke-right"
                d="M168.5,182.75 L200,230 L290,95 L290,305"
                fill="none"
                stroke="url(#tracerGradient)"
                strokeWidth="48"
                strokeLinecap="butt"
                filter="url(#softWhiteGlow)"
              />

              {/* Onda de radar expandindo a partir do ponto vermelho */}
              <circle
                className="m-red-dot-ping-ring"
                cx="252"
                cy="145"
                r="14"
                fill="none"
                stroke="#E4362A"
              />

              {/* Ponto vermelho Malsyn oficial com pulso de luz */}
              <circle
                className="m-red-dot"
                cx="252"
                cy="145"
                r="14"
                fill="#E4362A"
                filter="url(#neonRedGlow)"
              />
            </g>
          </svg>
        </div>

        {/* Bottom HUD bar */}
        <div className="logo-card-hud bottom-hud">
          <span className="hud-coord">20°45'N · 43°56'W</span>
          <span className="hud-fps">DIGITAL ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
}
