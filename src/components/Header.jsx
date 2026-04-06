import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useAnalytics } from '../hooks/useAnalytics';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
      trackEvent('navigation_click', { section: id });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-container header-inner">
        <button
          type="button"
          className="logo-link"
          onClick={() => scrollToSection('hero')}
          aria-label="Ir para o início"
        >
          <img 
            src={siteConfig.assets.logo} 
            alt="Logo Francisco Wellington CR" 
            className="header-logo"
          />
          <span className="header-name">{siteConfig.professional.name}</span>
        </button>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navegação"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {siteConfig.navigation.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="nav-link"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
