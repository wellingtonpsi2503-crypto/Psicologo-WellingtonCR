import React from 'react';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function AboutSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section 
      id="sobre" 
      ref={ref}
      className={`glass panel about-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="section-head center-head">
        <p className="eyebrow">Sobre</p>
        <h3 className="title-font section-title">
          Uma escuta orientada por sentido e presença
        </h3>
      </div>

      <div className="about-content">
        <p className="copy section-copy">
          O atendimento clínico que ofereço se orienta pela Logoterapia e pela Análise Existencial, 
          abordagens fundadas por Viktor Frankl. Essa perspectiva compreende a pessoa humana como 
          ser de sentido, liberdade e responsabilidade, capaz de posicionar-se diante da vida mesmo 
          em meio a sofrimento, limitações e incertezas.
        </p>
        <p className="copy section-copy">
          A clínica existencial não busca apenas a redução de sintomas, mas favorece o 
          autoconhecimento, o amadurecimento e a construção de caminhos mais conscientes e 
          responsáveis. O trabalho se sustenta em escuta atenta, presença clínica e respeito 
          profundo pela singularidade de cada percurso existencial.
        </p>
        <p className="copy section-copy">
          Atendo crianças, adolescentes e adultos, tanto de forma presencial quanto online, 
          com compromisso ético, sigilo profissional e cuidado técnico em cada etapa do processo 
          terapêutico.
        </p>
      </div>
    </section>
  );
}
