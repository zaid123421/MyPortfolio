import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper id="about" className="section-alt">
      <SectionHeading
        locale={locale}
        badge={portfolio.about.title}
        title={{
          en: 'Software Engineer & Student Leader',
          ar: 'مهندس برمجيات وقائد طلابي',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="premium-card card-shine relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12"
      >
        <div className="pointer-events-none absolute -end-8 -top-8 h-32 w-32 rounded-full bg-indigo-100/60 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 -start-8 h-32 w-32 rounded-full bg-amber-100/60 blur-2xl" />

        <Quote
          size={40}
          className="mb-6 text-indigo-200 sm:mb-8"
          aria-hidden
        />
        <p className="relative text-base leading-[1.85] text-slate-600 sm:text-lg md:text-xl">
          {t(portfolio.about.summary, locale)}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
