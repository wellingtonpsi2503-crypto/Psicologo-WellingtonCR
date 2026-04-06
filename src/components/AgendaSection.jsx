import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { useAnalytics } from '../hooks/useAnalytics';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function AgendaSection() {
  const { ref, isVisible } = useRevealOnScroll();
  const { trackEvent } = useAnalytics();

  const handleAgendaClick = () => {
    trackEvent('agenda_click', { location: 'agenda_section' });
  };

  return (
    <section
      id="agenda"
      ref={ref}
      className={`glass panel agenda-preview-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="agenda-preview-header">
        <p className="eyebrow">Agenda online</p>
        <h3 className="title-font section-title center-title wide-center-title">
          Um acesso direto para visualizar horários disponíveis
        </h3>
        <p className="copy agenda-preview-copy">
          Para uma experiência mais fluida e acolhedora, o agendamento acontece em uma página própria,
          pensada para facilitar a escolha do seu horário.
        </p>
      </div>

      <div className="agenda-simple-shell">
        <div className="availability-inline agenda-availability">
          <div className="availability-inline-card">
            <span className="availability-inline-label">Disponibilidade</span>
            <strong className="availability-inline-value availability-inline-main">Segunda a sexta</strong>
          </div>
          <div className="availability-inline-card">
            <span className="availability-inline-label">Horário</span>
            <strong className="availability-inline-value availability-inline-main">14h às 22h</strong>
          </div>
          <div className="availability-inline-card">
            <span className="availability-inline-label">Formato</span>
            <strong className="availability-inline-value availability-inline-format">Online e presencial</strong>
          </div>
        </div>

        <p className="agenda-simple-note">
          Ao clicar no botão abaixo, você será direcionado para a página de agendamento.
        </p>

        <div className="agenda-simple-actions">
          <a
            href={siteConfig.agendaExternal}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            onClick={handleAgendaClick}
          >
            Abrir agenda online
          </a>
        </div>
      </div>
    </section>
  );
}
