import React, { useState } from 'react';
import { contentData } from '../config/siteConfig';
import { useAnalytics } from '../hooks/useAnalytics';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);
  const { trackEvent } = useAnalytics();
  const { ref, isVisible } = useRevealOnScroll();

  const handleFaqClick = (index, question) => {
    const isOpening = openFaq !== index;
    setOpenFaq(isOpening ? index : -1);
    
    if (isOpening) {
      trackEvent('faq_interaction', { 
        question: question,
        action: 'open' 
      });
    }
  };

  return (
    <section 
      id="faq" 
      ref={ref}
      className={`glass panel faq-panel ${isVisible ? 'reveal' : ''}`}
    >
      <div className="section-head center-head">
        <p className="eyebrow">Perguntas frequentes</p>
        <h3 className="title-font section-title">
          Informações centrais para o primeiro contato
        </h3>
        <p className="copy centered-copy">
          Uma área mais organizada para responder às dúvidas mais comuns com clareza, 
          serenidade e boa leitura.
        </p>
      </div>

      <div className="faq-layout">
        <aside className="faq-aside">
          {contentData.faqHighlights.map((item) => (
            <div key={item} className="faq-aside-card">
              {item}
            </div>
          ))}
        </aside>

        <div className="faq-list">
          {contentData.faqs.map((item, index) => {
            const open = openFaq === index;
            return (
              <article key={item.q} className={`faq-item ${open ? 'active' : ''}`}>
                <button 
                  type="button" 
                  className="faq-button" 
                  onClick={() => handleFaqClick(index, item.q)}
                  aria-expanded={open}
                >
                  <span className="title-font faq-question">{item.q}</span>
                  <ChevronIcon open={open} />
                </button>
                {open && <p className="copy faq-answer">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg 
      className={`faq-chevron ${open ? 'open' : ''}`}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}
