import Lenis from 'lenis';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { navItems } from '../data/portfolio';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { NAVBAR_OFFSET } from '../lib/scrollConfig';

interface ScrollContextValue {
  activeSection: string;
  scrollToSection: (id: string) => void;
  scrollToTop: () => void;
  lenis: Lenis | null;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);
const NAV_IDS = navItems.map((item) => item.id);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisReady, setLenisReady] = useState<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState(NAV_IDS[0] ?? 'about');
  const programmaticLock = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  const lockProgrammatic = useCallback((durationMs = 1400) => {
    programmaticLock.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      programmaticLock.current = false;
    }, durationMs);
  }, []);

  useEffect(() => {
    if (reduced) {
      lenisRef.current = null;
      setLenisReady(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    setLenisReady(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenisReady(null);
    };
  }, [reduced]);

  // IntersectionObserver — updates active tab on manual scroll only
  useEffect(() => {
    const pickBestSection = () => {
      if (programmaticLock.current) return;

      let bestId = NAV_IDS[0] ?? 'about';
      let bestRatio = -1;

      for (const id of NAV_IDS) {
        const ratio = ratiosRef.current.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      if (bestRatio > 0) {
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        });
        pickBestSection();
      },
      {
        root: null,
        rootMargin: `-${NAVBAR_OFFSET}px 0px -45% 0px`,
        threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    );

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;

      // Set active tab immediately and lock observer during scroll
      setActiveSection(id);
      lockProgrammatic(1600);

      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -NAVBAR_OFFSET,
          duration: 1.1,
          onComplete: () => {
            setActiveSection(id);
            lockProgrammatic(400);
          },
        });
        return;
      }

      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => {
        setActiveSection(id);
        lockProgrammatic(400);
      }, 900);
    },
    [lockProgrammatic],
  );

  const scrollToTop = useCallback(() => {
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    programmaticLock.current = false;
    setActiveSection(NAV_IDS[0] ?? 'about');

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        scrollToSection,
        scrollToTop,
        lenis: lenisReady,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollTo() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScrollTo must be used within ScrollProvider');
  return ctx;
}

export function useLenisInstance() {
  const ctx = useContext(ScrollContext);
  return ctx?.lenis ?? null;
}

export function useActiveSection() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useActiveSection must be used within ScrollProvider');
  return ctx.activeSection;
}
