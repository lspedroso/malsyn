import React from 'react';
import { Link } from 'react-router-dom';

const planos = [
  {
    tag: 'Para começar',
    nome: 'Essencial',
    prefixo: 'A partir de',
    preco: '799',
    ciclo: 'pagamento único · valores alinhados via WhatsApp',
    desc: 'Ideal para profissionais e empresas que buscam estabelecer presença digital profissional de forma rápida e objetiva.',
    itens: [
      '1 página exclusiva (Landing Page / Site One-Page)',
      'Design moderno e 100% responsivo (mobile & desktop)',
      'Botão inteligente de WhatsApp e formulário de contato',
      'Configuração de domínio, hospedagem e publicação incluída',
      'Suporte técnico direto no pós-entrega',
    ],
    destaque: false,
    msg: 'Ol%C3%A1%2C%20Malsyn!%20Gostaria%20de%20fazer%20meu%20or%C3%A7amento%20a%20partir%20do%20Plano%20Essencial.',
  },
  {
    tag: 'Mais escolhido',
    nome: 'Profissional',
    prefixo: 'A partir de',
    preco: '1.499',
    ciclo: 'pagamento único · valores alinhados via WhatsApp',
    desc: 'Para empresas que necessitam de mais páginas institucionais, apresentação de múltiplos serviços e SEO para buscas no Google.',
    itens: [
      'Até 5 páginas institucionais completas',
      'Otimização técnica para mecanismos de busca (SEO)',
      'Integrações completas (WhatsApp, formulários e localização)',
      'Arquitetura veloz desenvolvida com código próprio',
      '30 dias de acompanhamento e suporte pós-publicação',
    ],
    destaque: true,
    msg: 'Ol%C3%A1%2C%20Malsyn!%20Gostaria%20de%20fazer%20meu%20or%C3%A7amento%20a%20partir%20do%20Plano%20Profissional.',
  },
  {
    tag: 'Soluções especiais',
    nome: 'Sob Medida',
    prefixo: 'Projeto personalizado',
    preco: 'Sob Consulta',
    precoTexto: 'Valores a serem discutidos pelo WhatsApp',
    ciclo: 'projeto flexível sob demanda',
    desc: 'Projetos avançados, portais, catálogos digitais ou ferramentas com funcionalidades específicas para o seu fluxo.',
    itens: [
      'Páginas e rotas conforme a necessidade do projeto',
      'Painel administrável ou módulos interativos sob medida',
      'Integrações com APIs e ferramentas externas',
      'Design de alta fidelidade e arquitetura escalável',
      'Suporte técnico dedicado e prioritário',
    ],
    destaque: false,
    msg: 'Ol%C3%A1%2C%20Malsyn!%20Tenho%20um%20projeto%20sob%20medida%20e%20gostaria%20de%20fazer%20meu%20or%C3%A7amento%20pelo%20WhatsApp.',
  },
];

export default function Planos() {
  const [selectedPlan, setSelectedPlan] = React.useState('Profissional');

  return (
    <div className="planos-page">
      <section className="orcamento-hero">
        <div className="wrap">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">PLANOS & VALORES</span>
          </div>
          <h1>Estruturas pensadas para o momento do seu negócio</h1>
          <p>
            Desenvolvimento profissional com código exclusivo, sem mensalidades escondidas e com acompanhamento direto. Escolha o plano que melhor atende à sua empresa.
          </p>

          <div className="orcamento-hero-callout">
            <span className="hero-callout-title">Venha fazer o seu orçamento conosco!</span>
            <span className="hero-callout-desc">Valores e escopos alinhados diretamente pelo WhatsApp.</span>
          </div>
        </div>
      </section>

      <section className="plans">
        <div className="wrap plans-grid">
          {planos.map((p) => {
            const isSelected = selectedPlan === p.nome;
            return (
              <div
                className={`plan-card ${isSelected ? 'selected' : ''}`}
                key={p.nome}
                onClick={() => setSelectedPlan(p.nome)}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPlan(p.nome);
                  }
                }}
              >
                <span className={`plan-tag ${isSelected ? 'selected-tag' : ''}`}>
                  {isSelected && p.destaque && <span className="featured-red-dot"></span>}
                  {p.tag}
                </span>
                <div className="plan-name">{p.nome}</div>
                <div className="plan-price">
                  <span className="price-prefix">{p.prefixo}</span>
                  {p.precoTexto ? (
                    <div className="price-value price-discuss-wrap">
                      <span className="price-discuss-text">{p.precoTexto}</span>
                    </div>
                  ) : (
                    <div className="price-value">
                      <sup>R$</sup>
                      <span className="price-number">{p.preco}</span>
                    </div>
                  )}
                  <span className="price-cycle">{p.ciclo}</span>
                  <div className="plan-callout-tag">
                    <span className="callout-spark">✦</span>
                    <span>Venha fazer o seu orçamento conosco!</span>
                  </div>
                </div>
                <p className="plan-desc">{p.desc}</p>
                <ul className="plan-list">
                  {p.itens.map((item) => (
                    <li key={item}>
                      <span className="check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5531999990000?text=${p.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`plan-cta ${isSelected ? 'plan-cta-featured' : ''}`}
                  onClick={() => setSelectedPlan(p.nome)}
                >
                  Quero esse plano →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção de Contato WhatsApp Estilizada */}
      <section className="planos-whatsapp-section">
        <div className="wrap">
          <div className="whatsapp-cta-card">
            {/* Efeito sutil de iluminação ambiente */}
            <div className="whatsapp-card-glow" aria-hidden="true"></div>

            <div className="whatsapp-card-content">
              <div className="whatsapp-badge">
                <span className="whatsapp-status-ping">
                  <span className="ping-dot"></span>
                  <span className="ping-ring"></span>
                </span>
                <span className="badge-text">CANAL DIRETO & CONSULTORIA</span>
              </div>

              <h2 className="whatsapp-card-title">
                Dúvidas sobre o plano ideal para a sua empresa?
              </h2>

              <p className="whatsapp-card-desc">
                Converse diretamente com quem desenvolve a sua solução. Analisamos o escopo, alinhamos prazos e indicamos a estrutura mais eficiente para o momento do seu negócio — sem formulários demorados ou intermediários.
              </p>

              <div className="whatsapp-perks">
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Atendimento técnico direto</span>
                </div>
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Alinhamento de escopo e prazo</span>
                </div>
                <div className="whatsapp-perk-item">
                  <span className="perk-check">✓</span>
                  <span>Proposta clara e transparente</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-card-action">
              <a
                href="https://wa.me/5531999990000?text=Ol%C3%A1%2C%20Malsyn!%20Gostaria%20de%20ajuda%20para%20escolher%20o%20melhor%20plano."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Chamar no WhatsApp</span>
                <span className="btn-arrow">→</span>
              </a>
              <div className="whatsapp-micro-note">
                <span className="micro-dot"></span>
                <span>Resposta ágil em horário comercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
