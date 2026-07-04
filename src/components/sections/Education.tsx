import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';

export function Education() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper id="education">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Background', ar: 'الخلفية' }}
        title={portfolio.education.title}
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="premium-card overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] text-white shadow-lg">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="font-mono text-sm text-[#F59E0B]">{t(portfolio.education.period, locale)}</p>
              <h3 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                {t(portfolio.education.degree, locale)}
              </h3>
            </div>
          </div>
          <p className="mb-4 text-lg font-semibold text-indigo-600">
            {t(portfolio.education.school, locale)}
          </p>
          <p className="mb-4 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-medium text-indigo-700">
            {t(portfolio.education.specialization, locale)}
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {t(portfolio.education.description, locale)}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="premium-card rounded-3xl p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Languages size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
              {t(portfolio.languages.title, locale)}
            </h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {portfolio.languages.items.map((lang, i) => (
              <motion.div
                key={lang.name.en}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50/80 to-white px-4 py-3.5 sm:px-5 sm:py-4"
              >
                <span className="font-semibold text-[#1E3A5F]">{t(lang.name, locale)}</span>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm sm:text-sm">
                  {t(lang.level, locale)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
