import { motion } from 'framer-motion';
import { Calendar, Heart, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';

const icons = [Users, Heart, Calendar];

export function Volunteer() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper id="volunteer" className="section-alt">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Community', ar: 'المجتمع' }}
        title={portfolio.volunteer.title}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {portfolio.volunteer.items.map((item, i) => {
          const Icon = icons[i] ?? Heart;
          return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card-shine premium-card flex flex-col rounded-3xl p-5 sm:p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-[#F59E0B] shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="mb-1 text-base font-bold text-[#1E3A5F] sm:text-lg">{t(item.role, locale)}</h3>
              <p className="mb-2 text-sm font-medium leading-snug text-indigo-600">
                {t(item.organization, locale)}
              </p>
              <p className="mb-4 font-mono text-xs text-slate-400">{t(item.period, locale)}</p>
              <ul className="mt-auto space-y-2">
                {item.highlights.map((h) => (
                  <li key={h.en} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                    {t(h, locale)}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
