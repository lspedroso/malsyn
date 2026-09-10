import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PLANOS_DISPONIVEIS = [
  { id: 'Essencial', label: 'Essencial', desc: 'Landing Page / Site One-Page' },
  { id: 'Profissional', label: 'Profissional', desc: 'Até 5 páginas completas + SEO' },
  { id: 'Sob Medida', label: 'Sob Medida', desc: 'Projetos avançados & customizados' },
];

export default function Briefing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPlan = searchParams.get('plano') || 'Profissional';

  // Validação simples do plano inicial
  const validInitialPlan = PLANOS_DISPONIVEIS.some((p) => p.id.toLowerCase() === initialPlan.toLowerCase())
    ? PLANOS_DISPONIVEIS.find((p) => p.id.toLowerCase() === initialPlan.toLowerCase())?.id
    : 'Profissional';

  const [formData, setFormData] = useState({
    plano: validInitialPlan || 'Profissional',
    nome: '',
    email: '',
    empresa: '',
    instagram: '',
    tipoInstitucional: 'sim', // 'sim' ou 'nao'
    sobre: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handlePlanSelect = (planId) => {
    handleInputChange('plano', planId);
    setSearchParams({ plano: planId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe o seu nome.';
    }
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Informe o nome da sua empresa ou negócio.';
    }
    if (!formData.sobre.trim()) {
      newErrors.sobre = 'Escreva um resumo sobre a sua empresa e como imagina o site.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focar no primeiro campo com erro
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(`field-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    const tipoTexto = formData.tipoInstitucional === 'sim'
      ? 'Sim (Apresentação de serviços / autoridade institucional)'
      : 'Não (Comércio, catálogo, produto ou projeto específico)';

    const emailTexto = formData.email.trim() || 'Não informado';
    const instaTexto = formData.instagram.trim() || 'Não informado';

    const mensagemWhatsApp =
`*Novo Briefing de Projeto — Malsyn*

📋 *Plano Escolhido:* ${formData.plano}
👤 *Nome:* ${formData.nome.trim()}
📧 *E-mail:* ${emailTexto}
🏢 *Empresa:* ${formData.empresa.trim()}
📸 *Instagram/Rede:* ${instaTexto}
🏛️ *Empresa Institucional:* ${tipoTexto}

📝 *Sobre a empresa e visão do site:*
${formData.sobre.trim()}

---
_Enviado pelo formulário oficial da Malsyn_`;

    const url = `https://wa.me/5533988947342?text=${encodeURIComponent(mensagemWhatsApp)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="briefing-page">
      <section className="briefing-form-section">
        <div className="wrap">
          <div className="briefing-card">
            <form onSubmit={handleSubmit} noValidate className="briefing-form" autoComplete="off">
              
              {/* Seleção do Plano */}
              <div className="form-group-block">
                <label className="form-section-label">
                  <span className="step-num">1</span>
                  Plano Selecionado
                </label>
                <div className="plan-chips-grid">
                  {PLANOS_DISPONIVEIS.map((p) => {
                    const isSelected = formData.plano === p.id;
                    return (
                      <button
                        type="button"
                        key={p.id}
                        className={`plan-chip ${isSelected ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect(p.id)}
                      >
                        <div className="plan-chip-header">
                          <span className="plan-chip-name">{p.label}</span>
                          <span className="plan-chip-indicator"></span>
                        </div>
                        <span className="plan-chip-desc">{p.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Informações Pessoais e da Empresa */}
              <div className="form-group-block">
                <label className="form-section-label">
                  <span className="step-num">2</span>
                  Identificação & Contato
                </label>

                <div className="form-row-2col">
                  <div className={`form-field ${errors.nome ? 'has-error' : ''}`}>
                    <label htmlFor="field-nome">
                      Seu Nome <span className="field-required">*</span>
                    </label>
                    <input
                      id="field-nome"
                      name="nome_malsyn_lead"
                      type="text"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="words"
                      spellCheck="false"
                      placeholder="Ex: Ana Clara Lima"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                    />
                    {errors.nome && <span className="field-error-msg">{errors.nome}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="field-email">
                      E-mail Profissional
                    </label>
                    <input
                      id="field-email"
                      name="email_malsyn_lead"
                      type="text"
                      inputMode="email"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="none"
                      spellCheck="false"
                      placeholder="exemplo@suaempresa.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className={`form-field ${errors.empresa ? 'has-error' : ''}`}>
                    <label htmlFor="field-empresa">
                      Nome da Empresa / Projeto <span className="field-required">*</span>
                    </label>
                    <input
                      id="field-empresa"
                      name="empresa_malsyn_lead"
                      type="text"
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      placeholder="Ex: Vértice Engenharia"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                    />
                    {errors.empresa && <span className="field-error-msg">{errors.empresa}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="field-instagram">
                      Instagram ou Rede Social
                    </label>
                    <input
                      id="field-instagram"
                      name="instagram_malsyn_lead"
                      type="text"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="none"
                      spellCheck="false"
                      placeholder="Ex: @minhaempresa"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Segmento Institucional ou Não */}
              <div className="form-group-block">
                <label className="form-section-label">
                  <span className="step-num">3</span>
                  A sua empresa é institucional?
                </label>
                <p className="form-section-helper">
                  Isso nos ajuda a definir a arquitetura correta de páginas e conversão.
                </p>

                <div className="tipo-institucional-grid">
                  <label
                    className={`tipo-option-card ${formData.tipoInstitucional === 'sim' ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="tipoInstitucional"
                      value="sim"
                      checked={formData.tipoInstitucional === 'sim'}
                      onChange={() => handleInputChange('tipoInstitucional', 'sim')}
                    />
                    <div className="tipo-radio-indicator"></div>
                    <div className="tipo-option-text">
                      <strong>Sim, é uma empresa institucional</strong>
                      <span>Apresentação de serviços, autoridade corporativa, clínicas, consultorias, advocacia, etc.</span>
                    </div>
                  </label>

                  <label
                    className={`tipo-option-card ${formData.tipoInstitucional === 'nao' ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="tipoInstitucional"
                      value="nao"
                      checked={formData.tipoInstitucional === 'nao'}
                      onChange={() => handleInputChange('tipoInstitucional', 'nao')}
                    />
                    <div className="tipo-radio-indicator"></div>
                    <div className="tipo-option-text">
                      <strong>Não, é outro modelo de negócio</strong>
                      <span>Comércio, catálogo de produtos, infoproduto, eventos ou necessidade específica.</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Sobre a Empresa e Visão do Site */}
              <div className="form-group-block">
                <label className="form-section-label">
                  <span className="step-num">4</span>
                  Sobre a empresa e visão do site <span className="field-required">*</span>
                </label>
                <p className="form-section-helper">
                  Conte um pouco sobre a atuação da empresa e como você imagina o visual e as páginas do site.
                </p>

                <div className={`form-field ${errors.sobre ? 'has-error' : ''}`}>
                  <textarea
                    id="field-sobre"
                    name="sobre_malsyn_lead"
                    rows={5}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    placeholder="Ex: Somos um escritório de arquitetura com 8 anos de mercado. Queremos um site sofisticado e veloz, com uma página inicial impactante, galeria de projetos e botão de contato rápido via WhatsApp..."
                    value={formData.sobre}
                    onChange={(e) => handleInputChange('sobre', e.target.value)}
                  ></textarea>
                  {errors.sobre && <span className="field-error-msg">{errors.sobre}</span>}
                </div>
              </div>

              {/* Botão de Envio para o WhatsApp */}
              <div className="briefing-submit-wrap">
                <button type="submit" className="btn-briefing-submit">
                  <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Continuar e Enviar no WhatsApp</span>
                  <span className="btn-submit-arrow">→</span>
                </button>

                <div className="briefing-security-note">
                  <span className="security-lock">🔒</span>
                  <span>Você terá acesso a uma conversa direta e sem intermediários com o desenvolvedor do seu site.</span>
                </div>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
