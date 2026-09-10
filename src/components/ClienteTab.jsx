import React from 'react';
import { Link } from 'react-router-dom';

export default function ClienteTab() {
  return (
    <section className="cliente-tab">
      <div className="wrap">
        <div className="cliente-grid">
          <div className="cliente-panel sim">
            <span className="eyebrow2">Já é cliente?</span>
            <h3>Você já tem um projeto com a gente</h3>
            <p>
              Precisa de um ajuste, uma atualização ou tirar dúvidas? Fale diretamente com quem construiu o seu projeto.
            </p>
            <a
              href="https://wa.me/5533988947342?text=Ol%C3%A1%2C%20Malsyn!%20J%C3%A1%20sou%20cliente%20e%20gostaria%20de%20um%20suporte."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-panel"
            >
              Falar com o suporte →
            </a>
          </div>

          <div className="cliente-panel nao">
            <span className="eyebrow2">Ainda não é cliente?</span>
            <h3>Vamos colocar seu negócio no ar</h3>
            <p>
              Veja os planos disponíveis e escolha a estrutura que faz mais sentido para o momento da sua empresa.
            </p>
            <Link to="/planos" className="btn-panel">
              Ver planos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
