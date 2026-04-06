import React from 'react';
import { contentData } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function ApproachPage() {
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
            Abordagem e Pilares
          </h1>
          <p className="copy page-subtitle">
            Página dedicada à Logoterapia e à Psicologia Existencial, com apresentação da 
            abordagem, pilares centrais e referências de aprofundamento.
          </p>
        </div>
      </header>

      {/* Sobre a abordagem */}
      <section ref={ref} className={`glass panel ${isVisible ? 'reveal' : ''}`}>
        <div className="site-container">
          <h2 className="title-font section-title">Logoterapia e Análise Existencial</h2>
          
          <div className="approach-content">
            <p className="copy section-copy">
              A Logoterapia é uma abordagem psicoterapêutica fundada por Viktor Frankl, 
              psiquiatra e neurologista austríaco sobrevivente dos campos de concentração 
              nazistas. Baseada na premissa de que a busca por sentido é a motivação primária 
              do ser humano, a Logoterapia se distingue por sua compreensão do homem como 
              ser livre, responsável e capaz de transcender condições adversas.
            </p>
            <p className="copy section-copy">
              Diferentemente de outras escolas que enfatizam o prazer ou o poder como forças 
              motivadoras principais, a Logoterapia reconhece a vontade de sentido como o que 
              mobiliza a existência humana. Essa perspectiva não nega o sofrimento, mas o situa 
              como parte da condição humana que pode ser enfrentada com dignidade e propósito.
            </p>
            <p className="copy section-copy">
              A clínica existencial orientada pela Logoterapia não se limita ao alívio sintomático, 
              mas visa favorecer o autoconhecimento, o amadurecimento pessoal e a construção de 
              caminhos mais conscientes e responsáveis diante da vida. O trabalho terapêutico se 
              sustenta em escuta atenta, presença clínica e respeito profundo pela singularidade 
              de cada percurso existencial.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="glass panel">
        <div className="site-container">
          <h2 className="title-font section-title center-title">
            Os Três Pilares da Logoterapia
          </h2>
          <p className="copy centered-copy section-copy">
            A abordagem logoterapêutica se sustenta em três pilares filosóficos fundamentais 
            que orientam tanto a compreensão do ser humano quanto a prática clínica.
          </p>
          
          <div className="pillars-grid">
            {contentData.pillars.map((pillar, index) => (
              <article key={pillar.title} className="pillar-card">
                <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="title-font pillar-title">{pillar.title}</h3>
                <p className="copy pillar-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mais sobre a prática */}
      <section className="glass panel">
        <div className="site-container">
          <h2 className="title-font section-title">A Prática Clínica</h2>
          
          <div className="approach-content">
            <p className="copy section-copy">
              Na prática clínica, a Logoterapia se manifesta através de uma escuta que busca 
              compreender não apenas os sintomas, mas o contexto existencial em que a pessoa 
              se encontra. O terapeuta não se coloca como detentor de respostas, mas como 
              facilitador do processo de descoberta de sentido que cada pessoa pode encontrar 
              em sua própria existência.
            </p>
            <p className="copy section-copy">
              O processo terapêutico envolve o reconhecimento das liberdades e das 
              responsabilidades que cada um tem diante de sua história, suas circunstâncias 
              e suas escolhas. Mesmo em situações de sofrimento inevitável, a Logoterapia 
              auxilia a pessoa a encontrar formas dignas e significativas de se posicionar.
            </p>
            <p className="copy section-copy">
              A relação terapêutica se baseia no encontro genuíno entre duas pessoas, onde 
              o respeito, a autenticidade e o compromisso ético são fundamentais. O objetivo 
              não é adaptar a pessoa a padrões externos, mas auxiliá-la a desenvolver sua 
              capacidade de autodeterminação e de responsabilidade existencial.
            </p>
          </div>
        </div>
      </section>

      {/* Referências */}
      <section className="glass panel">
        <div className="site-container">
          <h2 className="title-font section-title">Referências para Aprofundamento</h2>
          
          <div className="references-list">
            <article className="reference-item">
              <h4 className="title-font">Viktor E. Frankl - Em Busca de Sentido</h4>
              <p className="copy">
                Obra fundamental que apresenta a experiência de Frankl nos campos de concentração 
                e os fundamentos da Logoterapia.
              </p>
            </article>
            
            <article className="reference-item">
              <h4 className="title-font">Viktor E. Frankl - A Vontade de Sentido</h4>
              <p className="copy">
                Aprofundamento teórico e prático da Logoterapia, com discussões sobre a aplicação 
                clínica da abordagem.
              </p>
            </article>
            
            <article className="reference-item">
              <h4 className="title-font">Elisabeth Lukas - Logoterapia: A Força Desafiadora do Espírito</h4>
              <p className="copy">
                Apresentação didática da Logoterapia com exemplos práticos e orientações para a 
                aplicação clínica.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <div className="site-container">
          <p className="copy centered-copy">
            Para mais informações sobre a abordagem ou para agendar um atendimento, 
            entre em contato através dos canais disponíveis no site.
          </p>
          <a href="/" className="btn btn-primary">Voltar para o início</a>
        </div>
      </footer>
    </div>
  );
}
