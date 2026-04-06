import React from 'react';
import { contentData, siteConfig } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function PrivacyPage() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div className="page-container">
      {/* Header da página */}
      <header className="page-header glass">
        <div className="site-container">
          <a href="/" className="back-link">
            ← Voltar para o início
          </a>
          <h1 className="title-font page-title">
            Ética, Sigilo, Privacidade e Proteção de Dados
          </h1>
          <p className="copy page-subtitle">
            Informações sobre sigilo profissional, atendimento on-line, privacidade e proteção 
            de dados no site de Francisco Wellington CR.
          </p>
        </div>
      </header>

      {/* Princípios */}
      <section ref={ref} className={`glass panel ${isVisible ? 'reveal' : ''}`}>
        <div className="site-container">
          <h2 className="title-font section-title">Princípios Fundamentais</h2>
          
          <div className="privacy-principles-grid">
            {contentData.privacyPrinciples.map((principle) => (
              <article key={principle.title} className="privacy-principle-card">
                <h3 className="title-font principle-title">{principle.title}</h3>
                <p className="copy">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seções detalhadas */}
      <section className="glass panel">
        <div className="site-container">
          <h2 className="title-font section-title">Informações Detalhadas</h2>
          
          <div className="privacy-sections">
            {contentData.privacySections.map((section) => (
              <article key={section.title} className="privacy-section">
                <h3 className="title-font privacy-section-title">{section.title}</h3>
                <p className="copy">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Referências oficiais */}
      <section className="glass panel">
        <div className="site-container">
          <h2 className="title-font section-title">Referências Oficiais</h2>
          
          <div className="references-grid">
            {contentData.officialReferences.map((ref) => (
              <article key={ref.title} className="reference-card">
                <h3 className="title-font reference-title">{ref.title}</h3>
                <p className="copy reference-text">{ref.text}</p>
                <a 
                  href={ref.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                >
                  {ref.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer simplificado */}
      <footer className="page-footer">
        <div className="site-container">
          <p className="copy">
            Para mais informações ou dúvidas sobre privacidade, entre em contato através dos 
            canais oficiais disponíveis no site.
          </p>
          <a href="/" className="btn btn-primary">Voltar para o início</a>
        </div>
      </footer>
    </div>
  );
}
