import React from 'react';
import { contentData, siteConfig } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

const pillarDetails = [
  {
    title: 'Liberdade da vontade',
    text: 'Mesmo sob limites, condicionamentos e sofrimento, a pessoa conserva a possibilidade de assumir uma atitude diante do que vive. Esse princípio sustenta uma clínica que reconhece a realidade concreta sem anular a dignidade de resposta do sujeito.',
  },
  {
    title: 'Vontade de sentido',
    text: 'A busca de sentido aparece como força orientadora da existência. Nessa perspectiva, a pessoa não se move apenas pela eliminação da dor, mas também pela necessidade de encontrar direção, valor e significado na própria vida.',
  },
  {
    title: 'Sentido da vida',
    text: 'O sentido não é tratado como ideia abstrata e distante, mas como possibilidade concreta, singular e situada. Ele pode ser percebido nas escolhas, nos vínculos, no trabalho, na criação, no amor e na atitude diante da dor.',
  },
];

const clinicalApplications = [
  {
    title: 'Valores e direção existencial',
    text: 'O acompanhamento pode favorecer o reencontro com aquilo que tem valor, peso e verdade para a pessoa, ajudando-a a reorganizar sua direção interna em períodos de dispersão, vazio ou sofrimento.',
  },
  {
    title: 'Responsabilidade e posicionamento',
    text: 'Mais do que oferecer respostas prontas, a abordagem convida ao amadurecimento do posicionamento pessoal, fortalecendo responsabilidade, consciência e decisão diante das circunstâncias concretas da vida.',
  },
  {
    title: 'Sofrimento, atitude e sentido',
    text: 'Quando determinadas situações não podem ser modificadas de imediato, o trabalho clínico também se volta ao modo como a pessoa se coloca diante delas, reconhecendo a possibilidade de atitude, elaboração e reconstrução de sentido.',
  },
];

export function ApproachPage() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div className="page-container dedicated-page">
      <header className="page-header glass">
        <div className="site-container">
          <a href={siteConfig.routes.home} className="back-link">
            ← Voltar para o início
          </a>
          <h1 className="title-font page-title">Abordagem e Pilares</h1>
          <p className="copy page-subtitle">
            Página dedicada à Logoterapia e à Psicologia Existencial, com apresentação mais ampla
            da abordagem, dos pilares centrais, da prática clínica e de referências reais para aprofundamento.
          </p>
        </div>
      </header>

      <section ref={ref} className={`glass panel ${isVisible ? 'reveal' : ''}`}>
        <div className="site-container">
          <div className="section-head center-head">
            <p className="eyebrow">Visão da abordagem</p>
            <h2 className="title-font section-title center-title wide-center-title">
              Logoterapia e Psicologia Existencial em uma página própria de aprofundamento
            </h2>
          </div>

          <div className="approach-content">
            <p className="copy section-copy centered-copy long-copy">
              A Logoterapia é uma abordagem psicoterapêutica fundada por Viktor Frankl,
              psiquiatra e neurologista austríaco. Seu horizonte compreende a pessoa humana
              como ser de liberdade, responsabilidade e abertura para o sentido, mesmo em meio
              a sofrimento, limites e condições adversas.
            </p>
            <p className="copy section-copy centered-copy long-copy">
              Diferentemente de modelos centrados apenas na redução do sintoma, essa perspectiva
              busca acolher a singularidade da existência, favorecendo direção interior,
              amadurecimento e reconhecimento do valor concreto da vida vivida.
            </p>
            <p className="copy section-copy centered-copy long-copy">
              Na prática clínica, isso se expressa em uma escuta que não reduz a pessoa ao que a aflige,
              mas considera sua história, seus vínculos, seus valores e sua possibilidade de resposta
              diante do real como elementos fundamentais do cuidado.
            </p>
          </div>
        </div>
      </section>

      <section className="glass panel">
        <div className="site-container">
          <div className="section-head center-head">
            <p className="eyebrow">Pilares centrais</p>
            <h2 className="title-font section-title center-title">Os três eixos mais conhecidos da Logoterapia</h2>
            <p className="copy centered-copy section-copy long-copy">
              Estes pilares ajudam a compreender por que a abordagem se volta não apenas ao alívio do sofrimento,
              mas também à reconstrução de sentido, à responsabilidade e à dignidade da resposta humana diante da realidade.
            </p>
          </div>

          <div className="references-grid detailed-pillars-grid">
            {pillarDetails.map((pillar) => (
              <article key={pillar.title} className="reference-card">
                <h3 className="title-font reference-title">{pillar.title}</h3>
                <p className="copy reference-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="glass panel">
        <div className="site-container">
          <div className="section-head center-head">
            <p className="eyebrow">A prática clínica</p>
            <h2 className="title-font section-title center-title">Como esses fundamentos podem aparecer no acompanhamento</h2>
          </div>

          <div className="references-grid detailed-pillars-grid">
            {clinicalApplications.map((item) => (
              <article key={item.title} className="reference-card">
                <h3 className="title-font reference-title">{item.title}</h3>
                <p className="copy reference-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="glass panel">
        <div className="site-container">
          <div className="section-head center-head">
            <p className="eyebrow">Referências de aprofundamento</p>
            <h2 className="title-font section-title center-title wide-center-title">
              Fontes introdutórias, institucionais e acadêmicas para quem deseja pesquisar mais a fundo
            </h2>
            <p className="copy centered-copy section-copy long-copy">
              Abaixo estão reunidas referências reais para estudo complementar sobre Viktor Frankl,
              Logoterapia e Análise Existencial.
            </p>
          </div>

          <div className="references-grid">
            {contentData.approachReferences.map((refItem) => (
              <article key={refItem.title} className="reference-card">
                <h3 className="title-font reference-title">{refItem.title}</h3>
                <p className="copy reference-text">{refItem.text}</p>
                <a
                  href={refItem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  {refItem.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="glass panel">
        <div className="site-container">
          <div className="section-head center-head">
            <p className="eyebrow">Leituras essenciais</p>
            <h2 className="title-font section-title center-title">Alguns títulos frequentemente associados à introdução da abordagem</h2>
          </div>

          <div className="references-list">
            <article className="reference-item">
              <h4 className="title-font">Viktor E. Frankl — Em Busca de Sentido</h4>
              <p className="copy">
                Obra fundamental para compreender a experiência de Frankl e alguns dos fundamentos existenciais
                que sustentam a formulação da Logoterapia.
              </p>
            </article>

            <article className="reference-item">
              <h4 className="title-font">Viktor E. Frankl — A Vontade de Sentido</h4>
              <p className="copy">
                Livro importante para aprofundar a compreensão teórica e clínica da abordagem,
                especialmente em sua formulação mais conceitual.
              </p>
            </article>

            <article className="reference-item">
              <h4 className="title-font">Elisabeth Lukas — Logoterapia: A Força Desafiadora do Espírito</h4>
              <p className="copy">
                Leitura didática e útil para quem deseja contato complementar com a tradição logoterapêutica.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <div className="site-container">
          <p className="copy centered-copy">
            Para mais informações sobre a abordagem ou para agendar um atendimento,
            entre em contato através dos canais disponíveis no site.
          </p>
          <a href={siteConfig.routes.home} className="btn btn-primary">Voltar para o início</a>
        </div>
      </footer>
    </div>
  );
}
