import { useEffect, useRef, useState } from 'react';

/**
 * Hook para observar quando um elemento entra no viewport
 * Útil para lazy loading e animações on-scroll
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      
      // Uma vez que intersecta, marca como verdadeiro permanentemente
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
}

/**
 * Hook simplificado para animações reveal
 */
export function useRevealOnScroll() {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px',
  });

  return { ref, isVisible: hasIntersected };
}
