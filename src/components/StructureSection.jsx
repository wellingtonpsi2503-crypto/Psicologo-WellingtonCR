import React from 'react';
import { contentData } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function StructureSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section 
      id="estrutura" 
      ref={ref}
      className={`glass panel structure-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="section-head">
        <p className="eyebrow">Estrutura</p>
        <h3 className="title-font section-title left-title">
          Como funciona o acompanhamento
        </h3>
        <p className="copy section-copy">
          O processo terapêutico se organiza em etapas claras, favorecendo confiança, 
          organização e continuidade no trabalho clínico.
        </p>
      </div>

      <div className="structure-grid">
        {contentData.structureSteps.map((step) => (
          <article key={step.number} className="structure-card">
            <span className="structure-number">{step.number}</span>
            <h4 className="title-font structure-title">{step.title}</h4>
            <p className="copy">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
