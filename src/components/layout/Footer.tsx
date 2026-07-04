import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';

export function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-white/70 py-8 backdrop-blur-md sm:py-10">
      <div className="container-main flex flex-col items-center gap-4 px-2 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl text-sm leading-relaxed text-slate-500"
        >
          {t(portfolio.footer.tagline, locale)}
        </motion.p>
        <p className="font-mono text-xs text-slate-400">
          © {year} {portfolio.name}. {t(portfolio.footer.rights, locale)}
        </p>
      </div>
    </footer>
  );
}
