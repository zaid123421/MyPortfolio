import { AnimatePresence, motion } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useScrollTo } from '../../context/ScrollContext';
import { useLanguage } from '../../context/LanguageContext';
import { navItems, portfolio, t } from '../../data/portfolio';
import { useScrolled } from '../../hooks/useScrollSpy';
import { LanguageToggle } from '../ui/LanguageToggle';

export function Navbar() {
  const { locale } = useLanguage();
  const { activeSection, scrollToSection, scrollToTop } = useScrollTo();
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3 sm:py-4'
      }`}
    >
      <div className="container-main">
        <nav
          className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
            scrolled || mobileOpen
              ? 'glass-card border-slate-200/60 shadow-lg'
              : 'border-white/60 bg-white/70 shadow-md backdrop-blur-xl'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              scrollToTop();
            }}
            className="shrink-0 text-base font-bold tracking-tight text-[#1E3A5F] transition hover:text-indigo-600 sm:text-lg"
          >
            {portfolio.name.split(' ')[0]}
            <span className="text-[#F59E0B]">.</span>
          </button>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="relative px-2.5 py-2 text-sm font-medium text-slate-600 transition hover:text-[#1E3A5F] xl:px-3"
              >
                {t(item.label, locale)}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#1E3A5F] to-[#6366F1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <motion.a
              href="https://github.com/zaid123421"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-[#1E3A5F] sm:flex"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1E3A5F] shadow-sm lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 mt-2 lg:hidden"
            >
              <div className="glass-card rounded-2xl border border-slate-200/60 p-3 shadow-lg">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`rounded-xl px-3 py-3.5 text-sm font-medium transition active:scale-95 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-[#1E3A5F] to-[#6366F1] text-white shadow-md'
                          : 'bg-white/80 text-slate-700 hover:bg-indigo-50 hover:text-[#1E3A5F]'
                      }`}
                    >
                      {t(item.label, locale)}
                    </button>
                  ))}
                </div>
                <a
                  href="https://github.com/zaid123421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 sm:hidden"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
