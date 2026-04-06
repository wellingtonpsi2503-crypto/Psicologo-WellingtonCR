import React from 'react';
import { contentData } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function PillarsSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section 
      id="pilares" 
      ref={ref}
      className={`glass panel pillars-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="section-head center-head">
        <p className="eyebrow">Pilares</p>
        <h3 className="title-font section-title">
          Fundamentos da Logoterapia
        </h3>
        <p className="copy centered-copy">
          Três pilares sustentam a compreensão existencial do ser humano na Logoterapia, 
          orientando a prática clínica e a relação terapêutica.
        </p>
      </div>

      <div className="pillars-grid">
        {contentData.pillars.map((pillar, index) => (
          <article key={pillar.title} className="pillar-card">
            <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
            <h4 className="title-font pillar-title">{pillar.title}</h4>
            <p className="copy pillar-text">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
