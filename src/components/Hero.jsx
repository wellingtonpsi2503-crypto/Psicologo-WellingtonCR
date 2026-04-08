import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { useAnalytics } from '../hooks/useAnalytics';

export function Hero() {
  const { trackEvent } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackEvent('contact_click', { method: 'whatsapp', location: 'hero' });
  };

  const handleAgendaClick = () => {
    trackEvent('agenda_click', { location: 'hero' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="site-container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title-font hero-title">
              {siteConfig.professional.name}
            </h1>
            <p className="hero-subtitle">
              Logoterapia e clínica existencial
            </p>
            <p className="copy hero-description hero-description-justified">
              Olá, me chamo Wellington. 
              Acredito que acompanhar as pessoas na travessia de seus caminhos 
              vai muito além de guiá-las por uma estrada reta. A vida é feita de 
              curvas perigosas, adversidades e encruzilhadas que exigem presença, 
              ação e coragem. Por isso, minha escuta é guidada pela presença plena 
              e pela responsabilidade. No atendimento, procuro ir além do sintoma, 
              do diagnostico e do reducionismo, acolhendo o que há de mais essencial 
              no ser humano: sua história, sua subjetividade e sua singularidade.
  <span className="hero-description-break">
    Atendimento online e presencial para crianças, adolescentes e adultos.
  </span>
</p>

            <div className="hero-actions">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                onClick={handleWhatsAppClick}
              >
                Conversar pelo WhatsApp
              </a>
              <a
                href={siteConfig.agendaExternal}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                onClick={handleAgendaClick}
              >
                Ver agenda online
              </a>
            </div>
          </div>

          <div className="hero-image-shell">
            <img
              src={siteConfig.assets.portrait}
              alt={`Retrato de ${siteConfig.professional.name}`}
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span className="scroll-text">Role para explorar</span>
          <svg
            className="scroll-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
