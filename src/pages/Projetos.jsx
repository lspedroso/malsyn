import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PROJETOS_DATA = [
  {
    id: 'vertice',
    titulo: 'RYSE',
    categoria: 'Websites Institucionais',
    segmento: 'Fotografia & Edição',
    destaque: 'Site Institucional Exclusivo',
    descricao: 'Portal corporativo com design sóbrio e tipografia refinada. Estruturado para transmitir autoridade jurídica imediata, com apresentação de áreas de atuação e agendamento direto.',
    tags: ['React', 'SEO Técnico', 'Código Próprio', 'Ultra Rápido'],
    corAcento: '#f4efe4',
    mockupType: 'institutional',
    whatsappMsg: 'Olá, Malsyn! Gostei do projeto estilo Vértice Advocacia e gostaria de um site semelhante para o meu escritório.'
  },
  {
    id: 'lumios',
    titulo: 'HUIÓS',
    categoria: 'Landing Pages',
    segmento: 'Inscrições',
    destaque: 'Landing Page de Alta Conversão',
    descricao: 'Plataforma digital desenvolvida para facilitar a gestão e organização de inscrições em retiros, proporcionando uma experiência simples, intuitiva e moderna para os participantes.',
    tags: ['Mobile-First', 'Conversão Ágil', 'API WhatsApp', 'Performance 100'],
    corAcento: '#f4efe4',
    mockupType: 'landing',
    whatsappMsg: 'Olá, Malsyn! Vi a landing page e quero uma página com inspiração na do HUIÓS.'
  },
];

const CATEGORIAS = ['Todos', 'Websites Institucionais', 'Landing Pages', 'Sistemas & Soluções'];

export default function Projetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const projetosFiltrados = categoriaAtiva === 'Todos'
    ? PROJETOS_DATA
    : PROJETOS_DATA.filter((p) => p.categoria === categoriaAtiva);

  const handleWhatsapp = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/5533988947342?text=${text}`, '_blank');
  };

  return (
    <main className="projetos-page">
      {/* Header / Hero da Vitrine */}
      <section className="projetos-hero">
        <div className="wrap">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Portfólio & Vitrine · Malsyn</span>
          </div>
          <h1>Projetos construídos com excelência técnica e visual</h1>
          <p>
            Cada projeto desenvolvido pela Malsyn nasce do zero: sem templates prontos, sem lentidão e com total foco nos objetivos do seu negócio.
          </p>
        </div>
      </section>

      {/* Seção Principal da Vitrine */}
      <section className="projetos-section">
        <div className="wrap">
          {/* Barra de Filtros */}
          <div className="projetos-filters-wrap">
            <div className="projetos-filters" role="tablist" aria-label="Filtrar projetos por categoria">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={categoriaAtiva === cat}
                  className={`filter-btn ${categoriaAtiva === cat ? 'active' : ''}`}
                  onClick={() => setCategoriaAtiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="projetos-grid">
            {projetosFiltrados.map((projeto) => (
              <article key={projeto.id} className="projeto-card">
                {/* Mockup / Visual do Projeto */}
                <div className="projeto-preview" aria-hidden="true">
                  <div className="mockup-window">
                    <div className="mockup-topbar">
                      <div className="mockup-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <span className="mockup-url">malsyn.tech/{projeto.id}</span>
                    </div>

                    <div className="mockup-canvas">
                      <div className="canvas-header-skeleton">
                        <div className="canvas-logo-mark"></div>
                        <div className="canvas-nav-lines">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>

                      <div className="canvas-hero-skeleton">
                        <div className="canvas-badge-skeleton"></div>
                        <div className="canvas-headline-skeleton"></div>
                        <div className="canvas-subline-skeleton"></div>
                        <div className="canvas-btn-skeleton"></div>
                      </div>

                      <div className="canvas-grid-skeleton">
                        <div className="skeleton-box"></div>
                        <div className="skeleton-box"></div>
                        <div className="skeleton-box"></div>
                      </div>
                    </div>
                  </div>

                  <div className="preview-overlay-tag">
                    <span className="overlay-dot"></span>
                    <span>100% Responsivo</span>
                  </div>
                </div>

                {/* Conteúdo Informativo do Card */}
                <div className="projeto-content">
                  <div className="projeto-meta">
                    <span className="projeto-category">{projeto.categoria}</span>
                    <span className="meta-separator">·</span>
                    <span className="projeto-segmento">{projeto.segmento}</span>
                  </div>

                  <h2 className="projeto-title">{projeto.titulo}</h2>
                  <p className="projeto-desc">{projeto.descricao}</p>

                  <div className="projeto-tags">
                    {projeto.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="projeto-footer-action">
                    <button
                      type="button"
                      className="btn-projeto-cta"
                      onClick={() => handleWhatsapp(projeto.whatsappMsg)}
                    >
                      Quero um projeto assim
                      <span className="arrow-sym">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato WhatsApp Estilizada na Vitrine */}
      <section className="projetos-whatsapp-section">
        <div className="wrap">
          <div className="whatsapp-cta-card projetos-whatsapp-card">
            {/* Efeito sutil de iluminação ambiente */}
            <div className="whatsapp-card-glow" aria-hidden="true"></div>

            <div className="whatsapp-card-content">
              <div className="whatsapp-badge">
                <span className="whatsapp-status-ping">
                  <span className="ping-dot"></span>
                  <span className="ping-ring"></span>
                </span>
                <span className="badge-text">ORÇAMENTO & CONSULTORIA DIRETA</span>
              </div>

              <h2 className="whatsapp-card-title">
                Sua empresa merece uma presença digital desse nível
              </h2>

              <p className="whatsapp-card-desc">
                Converse diretamente com quem constrói o código. Entendemos a proposta do seu negócio, alinhamos escopo e prazo, e estruturamos uma solução de alta performance pronta para gerar autoridade.
              </p>

              <div className="whatsapp-perks">
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Código sob medida & performance</span>
                </div>
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Estimativa e prazos transparentes</span>
                </div>
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Sem formulários ou intermediários</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-card-action">
              <a
                href="https://wa.me/5533988947342?text=Ol%C3%A1%2C%20Malsyn!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Falar no WhatsApp</span>
                <span className="btn-arrow">→</span>
              </a>

              <Link to="/planos" className="btn-whatsapp-secondary">
                Ver planos e valores →
              </Link>

              <div className="whatsapp-micro-note">
                <span className="micro-dot"></span>
                <span>Resposta ágil em horário comercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

