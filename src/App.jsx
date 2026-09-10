import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Projetos from './pages/Projetos';
import Briefing from './pages/Briefing';
import './index.css';

const ROUTE_SEO = {
  '/': {
    title: 'Malsyn | Sites e Soluções Digitais',
    description: 'A Malsyn desenvolve sites e soluções digitais para empresas que querem fortalecer sua presença no digital.',
    canonical: 'https://malsyn.com/',
  },
  '/planos': {
    title: 'Planos & Valores | Malsyn',
    description: 'Conheça nossos planos e estruturas pensadas para o momento do seu negócio: Essencial, Profissional e Sob Medida.',
    canonical: 'https://malsyn.com/planos',
  },
  '/orcamento': {
    title: 'Orçamento de Sites e Soluções Digitais | Malsyn',
    description: 'Venha fazer o seu orçamento com a Malsyn. Valores e escopos alinhados diretamente para a sua necessidade.',
    canonical: 'https://malsyn.com/orcamento',
  },
  '/projetos': {
    title: 'Portfólio & Vitrine de Projetos | Malsyn',
    description: 'Projetos construídos com excelência técnica e visual. Sem templates prontos, sem lentidão e com total foco nos seus objetivos.',
    canonical: 'https://malsyn.com/projetos',
  },
  '/briefing': {
    title: 'Briefing do Projeto | Malsyn',
    description: 'Preencha os detalhes da sua empresa e do site desejado para iniciar seu projeto com a Malsyn.',
    canonical: 'https://malsyn.com/briefing',
  },
};

function RouteSEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch {
      // fallback
    }

    const seo = ROUTE_SEO[pathname] || ROUTE_SEO['/'];
    if (seo) {
      document.title = seo.title;

      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        descTag.setAttribute('content', seo.description);
      }

      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', seo.canonical);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', seo.canonical);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seo.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', seo.description);
      }
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app-container">
      <RouteSEOManager />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/orcamento" element={<Planos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/briefing" element={<Briefing />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

