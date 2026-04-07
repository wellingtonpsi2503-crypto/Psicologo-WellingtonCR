import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { useRevealOnScroll } from '../hooks/useIntersectionObserver';

export function LogoInterval({ text = 'Sentido, presença e direção' }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className={`logo-interval ${isVisible ? 'reveal' : ''}`}
      aria-label="Assinatura visual da marca"
    >
      <div className="logo-interval-shell">
        <img
          src={siteConfig.assets.logo}
          alt=""
          aria-hidden="true"
          className="logo-interval-image"
        />
      </div>
      <div className="interval-line" />
      <p className="interval-text">{text}</p>
    </section>
  );
}
