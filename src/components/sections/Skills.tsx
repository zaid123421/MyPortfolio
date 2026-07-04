import { motion } from 'framer-motion';
import { Brain, MessageCircle, Target, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { staggerContainer } from '../../lib/animations';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillTag } from '../ui/SkillTag';

const softIcons = [MessageCircle, Users, Brain, Target];

export function Skills() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper id="skills" className="section-alt">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Expertise', ar: 'الكفاءات' }}
        title={portfolio.skills.title}
      />

      <div className="mb-10 overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-r from-white/80 via-indigo-50/50 to-white/80 py-4 shadow-inner sm:mb-12">
        <div className="marquee-track flex w-max gap-3 px-4 sm:gap-4">
          {[...portfolio.skills.marquee, ...portfolio.skills.marquee].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="whitespace-nowrap rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm sm:px-5 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="premium-card rounded-3xl p-6 sm:p-8">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#1E3A5F] sm:mb-6 sm:text-xl">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#1E3A5F] to-[#6366F1]" />
            {t(portfolio.skills.technicalTitle, locale)}
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {portfolio.skills.technical.map((skill, i) => (
              <motion.li
                key={skill.en}
                initial={{ opacity: 0, x: locale === 'ar' ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 rounded-xl bg-slate-50/80 px-3 py-2.5 text-sm leading-relaxed text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />
                {t(skill, locale)}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="premium-card rounded-3xl p-6 sm:p-8">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#1E3A5F] sm:mb-6 sm:text-xl">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#F59E0B] to-orange-500" />
            {t(portfolio.skills.softTitle, locale)}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {portfolio.skills.soft.map((skill, i) => {
              const Icon = softIcons[i] ?? Target;
              return (
                <motion.div
                  key={skill.en}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/80 p-3.5 transition hover:border-indigo-200 hover:shadow-md sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#6366F1] text-white shadow-md">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 sm:text-sm">{t(skill, locale)}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3"
      >
        {portfolio.skills.marquee.map((skill, i) => (
          <SkillTag key={skill} label={skill} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
