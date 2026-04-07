import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function ApproachHighlightSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="abordagem"
      ref={ref}
      className={`glass panel centered-panel approach-highlight-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="section-head center-head">
        <p className="eyebrow">Abordagem</p>
        <h3 className="title-font section-title center-title wide-center-title">
          Logoterapia: como funciona o atendimento?
        </h3>
      </div>

      <p className="copy centered-copy long-copy">
        O trabalho clínico orientado pela Logoterapia se volta à liberdade interior,
        à responsabilidade e à construção de sentido. Em vez de reduzir a pessoa ao sintoma,
        essa perspectiva considera sua história, seus valores e sua capacidade de resposta
        diante da realidade como elementos fundamentais do cuidado.
      </p>

      <p className="copy centered-copy long-copy approach-highlight-copy">
        Por isso, a página dedicada apresenta uma explicação mais ampla sobre os pilares da
        abordagem, a contribuição de Viktor Frankl e referências reais para quem deseja estudar
        a formulação teórica com mais profundidade.
      </p>

      <div className="trust-links">
        <a href={siteConfig.routes.approach} className="btn btn-secondary">
          Aprofundar abordagem
        </a>
      </div>
    </section>
  );
}
