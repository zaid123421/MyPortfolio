import { useEffect, useState } from 'react';
import { useLenisInstance } from '../context/ScrollContext';

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenisInstance();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);

    update();

    if (lenis) {
      lenis.on('scroll', update);
      return () => lenis.off('scroll', update);
    }

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold, lenis]);

  return scrolled;
}
