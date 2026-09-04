import React from 'react';

const servicos = [
  {
    num: '01',
    title: 'Desenvolvimento de Sites',
    tag: 'Websites & Portais',
    text: 'Sites institucionais e plataformas corporativas desenvolvidos com código exclusivo, máxima velocidade, SEO técnico e total fidelidade à sua marca.',
  },
  {
    num: '02',
    title: 'Landing Pages',
    tag: 'Alta Conversão',
    text: 'Páginas estratégicas focadas em campanhas de tráfego, vendas diretas e geração de leads, construídas para converter visitantes em clientes reais.',
  },
  {
    num: '03',
    title: 'Soluções Digitais',
    tag: 'Sistemas & Automações',
    text: 'Tecnologia pensada para as necessidades do seu negócio. Desenvolvemos sistemas, ferramentas e integrações personalizadas para tornar processos mais simples, rápidos e eficientes.',
  },
  {
    num: '04',
    title: 'Experiências Digitais Personalizadas',
    tag: 'Sob Medida',
    text: 'Projetos exclusivos desenvolvidos do zero, sem templates engessados, com suporte técnico direto de quem construiu a sua solução.',
  },
];

export default function Principios() {
  return (
    <section className="principios" id="servicos">
      <div className="wrap">
        <div className="principios-head">
          <span className="eyebrow">O Que Fazemos · Soluções Digitais</span>
          <div className="principios-title-row">
            <h2 className="section-title">Serviços pensados para impulsionar sua presença online</h2>
            <p className="section-subtitle">
              Combinamos arquitetura moderna de software com interfaces de alta fidelidade para entregar valor tangível para o seu negócio.
            </p>
          </div>
        </div>

        <div className="principios-grid">
          {servicos.map((s) => (
            <div className="principio-card" key={s.num}>
              <div className="card-top">
                <span className="num">{s.num}</span>
                <span className="service-tag">{s.tag}</span>
              </div>
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="card-indicator">
                <span className="indicator-line"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
