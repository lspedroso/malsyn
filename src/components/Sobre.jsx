import React from 'react';

export default function Sobre() {
  const etapas = [
    {
      num: '01',
      titulo: 'Design Exclusivo',
      resumo: 'Identidade e autoridade',
      desc: 'Projetamos uma interface única e sob medida para a sua marca, transmitindo autoridade e credibilidade imediata.',
    },
    {
      num: '02',
      titulo: 'Código Próprio & Rápido',
      resumo: 'Tecnologia moderna',
      desc: 'Desenvolvemos com código leve, limpo e estruturado. Seu site carrega instantaneamente e fica preparado para o Google.',
    },
    {
      num: '03',
      titulo: 'Publicação & Suporte Direto',
      resumo: 'Sem intermediários',
      desc: 'Cuidamos de tudo até o site estar 100% no ar. Você fala diretamente com quem planejou e construiu o seu projeto.',
    },
  ];

  return (
    <section className="sobre" id="sobre">
      <div className="wrap">
        <div className="sobre-header">
          <div className="sobre-badge">
            <span className="eyebrow">Sobre Nós · O Que Fazemos</span>
          </div>
          <h2 className="sobre-title">
            Criamos sites profissionais para colocar o seu negócio no ar.
          </h2>
          <div className="sobre-text">
            <p>
              A <strong>Malsyn</strong> é uma empresa focada em desenvolvimento de sites modernos e soluções digitais sob medida. Nós não usamos templates engessados nem construtores genéricos: cada projeto é pensado e desenvolvido para atender às necessidades reais do seu negócio.
            </p>
            <p>
              O nosso compromisso é direto: entregar uma presença online rápida, elegante e estratégica, construída para passar confiança aos seus clientes e conectar sua empresa a novas oportunidades.
            </p>
          </div>
        </div>

        <div className="pilares-grid">
          {etapas.map((e) => (
            <div className="pilar-card" key={e.num}>
              <div className="pilar-top">
                <span className="pilar-num">{e.num}</span>
                <span className="pilar-tag">{e.resumo}</span>
              </div>
              <h3 className="pilar-title">{e.titulo}</h3>
              <p className="pilar-desc">{e.desc}</p>
              <div className="pilar-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
