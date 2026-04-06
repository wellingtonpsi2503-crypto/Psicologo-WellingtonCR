import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Hook para inicializar e rastrear eventos com Google Analytics ou Plausible
 */
export function useAnalytics() {
  useEffect(() => {
    // Google Analytics
    if (siteConfig.analytics.gaId) {
      // Carrega o script do GA4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`;
      document.head.appendChild(script);

      // Inicializa o GA4
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', siteConfig.analytics.gaId, {
        anonymize_ip: true, // Anonimiza IP para LGPD
        cookie_flags: 'SameSite=None;Secure',
      });

      window.gtag = gtag;
    }

    // Plausible Analytics (alternativa focada em privacidade)
    if (siteConfig.analytics.plausibleDomain) {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = siteConfig.analytics.plausibleDomain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  }, []);

  // Função para rastrear eventos customizados
  const trackEvent = (eventName, eventParams = {}) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }

    // Plausible
    if (window.plausible) {
      window.plausible(eventName, { props: eventParams });
    }
  };

  // Função para rastrear pageview (útil para SPAs)
  const trackPageView = (path) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', siteConfig.analytics.gaId, {
        page_path: path,
      });
    }

    // Plausible rastreia automaticamente
  };

  return { trackEvent, trackPageView };
}

/**
 * Eventos pré-configurados para rastreamento
 */
export const analyticsEvents = {
  // Cliques em CTAs
  whatsappClick: () => ({
    event: 'contact_click',
    method: 'whatsapp',
  }),
  
  agendaClick: () => ({
    event: 'agenda_click',
    method: 'online',
  }),
  
  instagramClick: () => ({
    event: 'social_click',
    platform: 'instagram',
  }),

  // Interações com seções
  faqOpen: (question) => ({
    event: 'faq_interaction',
    question: question,
  }),

  sectionView: (sectionName) => ({
    event: 'section_view',
    section: sectionName,
  }),

  // Links externos
  externalLink: (url, label) => ({
    event: 'outbound_click',
    url: url,
    label: label,
  }),
};
