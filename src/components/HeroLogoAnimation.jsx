import React, { useState, useRef } from 'react';

export default function HeroLogoAnimation() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="hero-logo-pure-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Halo de luz ambiente sutil no fundo */}
      <div className="pure-m-ambient-glow" aria-hidden="true"></div>

      {/* Apenas a Letra M animada com levitação e tilt 3D */}
      <div
        className={`pure-m-wrapper ${isHovered ? 'hovered' : ''}`}
        style={{
          transform: isHovered
            ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.05)`
            : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
        }}
      >
        <svg
          className="pure-m-svg"
          viewBox="70 65 260 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Letra M oficial da Malsyn animada"
        >
          <defs>
            {/* Filtro de neon intenso para o acento vermelho */}
            <filter id="pureMNeonGlow" x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur stdDeviation="6" result="glow1" />
              <feGaussianBlur stdDeviation="16" result="glow2" />
              <feMerge>
                <feMergeNode in="glow2" />
                <feMergeNode in="glow1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Brilho suave para os traçados off-white */}
            <filter id="pureMWhiteGlow" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="3.5" result="softBlur" />
              <feMerge>
                <feMergeNode in="softBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradiente refinado de alta fidelidade para o M */}
            <linearGradient id="pureMGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#F4EFE4" stopOpacity="1" />
              <stop offset="100%" stopColor="#ded9cc" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Símbolo M oficial da Malsyn com fundo 100% transparente */}
          <g className="pure-m-group">
            {/* Haste esquerda + início da diagonal (off-white) */}
            <path
              className="pure-m-stroke-left"
              d="M110,305 L110,95 L155,162.5"
              fill="none"
              stroke="url(#pureMGradient)"
              strokeWidth="50"
              strokeLinecap="butt"
              filter="url(#pureMWhiteGlow)"
            />

            {/* Acento Malsyn: cápsula vermelha com ponta arredondada e pulso neon */}
            <path
              className="pure-m-accent-pill"
              d="M155,162.5 L168.5,182.75"
              fill="none"
              stroke="#E4362A"
              strokeWidth="50"
              strokeLinecap="round"
              filter="url(#pureMNeonGlow)"
            />

            {/* Resto da diagonal + pico direito + haste vertical direita (off-white) */}
            <path
              className="pure-m-stroke-right"
              d="M168.5,182.75 L200,230 L290,95 L290,305"
              fill="none"
              stroke="url(#pureMGradient)"
              strokeWidth="50"
              strokeLinecap="butt"
              filter="url(#pureMWhiteGlow)"
            />

            {/* Anéis de radar expandindo a partir do ponto vermelho */}
            <circle
              className="pure-m-radar-ring"
              cx="252"
              cy="145"
              r="13"
              fill="none"
              stroke="#E4362A"
            />
            <circle
              className="pure-m-radar-ring-2"
              cx="252"
              cy="145"
              r="13"
              fill="none"
              stroke="#E4362A"
            />

            {/* Ponto vermelho Malsyn oficial com pulso de luz */}
            <circle
              className="pure-m-red-dot"
              cx="252"
              cy="145"
              r="13"
              fill="#E4362A"
              filter="url(#pureMNeonGlow)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
