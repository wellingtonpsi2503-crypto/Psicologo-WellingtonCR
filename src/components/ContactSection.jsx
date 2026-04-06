import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { useAnalytics } from '../hooks/useAnalytics';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function ContactSection() {
  const { trackEvent } = useAnalytics();
  const { ref, isVisible } = useRevealOnScroll();

  const handleWhatsAppClick = () => {
    trackEvent('contact_click', { method: 'whatsapp', location: 'contact' });
  };

  const handleAgendaClick = () => {
    trackEvent('agenda_click', { location: 'contact' });
  };

  return (
    <section 
      id="contato" 
      ref={ref}
      className={`glass panel contact-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="contact-centered">
        <p className="eyebrow">Contato</p>
        <h3 className="title-font section-title center-title">
          Um convite cuidadoso para começar
        </h3>
        <p className="copy centered-copy long-copy contact-centered-copy">
          Quando fizer sentido para você, estarei disponível para acolher esse primeiro passo 
          com atenção, clareza e presença clínica. Atendimento com base existencial, cuidado 
          ético e organização prática pensada para favorecer confiança desde o primeiro encontro.
        </p>

        <div className="contact-actions contact-actions-centered">
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
    </section>
  );
}
