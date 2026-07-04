import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="relative flex h-9 w-[4.5rem] items-center rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute h-7 w-[calc(50%-2px)] rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#6366F1]"
        style={{ insetInlineStart: locale === 'en' ? '4px' : 'calc(50% + 0px)' }}
      />
      <span
        className={`relative z-10 flex-1 text-center text-xs font-semibold transition ${
          locale === 'en' ? 'text-white' : 'text-slate-500'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-xs font-semibold transition ${
          locale === 'ar' ? 'text-white' : 'text-slate-500'
        }`}
      >
        ع
      </span>
    </button>
  );
}
