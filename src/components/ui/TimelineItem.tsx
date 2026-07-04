import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { ExperienceItem } from '../../data/portfolio';
import { t } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';

interface TimelineItemProps {
  item: ExperienceItem;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  const { locale } = useLanguage();

  return (
    <motion.div variants={fadeUp} className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6 sm:pb-12">
      {!isLast && (
        <div className="absolute start-[15px] top-10 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-indigo-300 to-transparent sm:block sm:start-[19px]" />
      )}

      <div className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 bg-white shadow-md sm:flex">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#6366F1]"
        >
          <Briefcase size={12} className="text-white" />
        </motion.div>
      </div>

      <div className="premium-card flex-1 rounded-2xl p-5 sm:p-6">
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
          <h3 className="text-base font-bold text-[#1E3A5F] sm:text-lg">{t(item.role, locale)}</h3>
          <span className="hidden text-sm text-slate-400 sm:inline">@</span>
          <span className="text-sm font-semibold text-indigo-600">{item.company}</span>
        </div>
        <p className="mb-4 font-mono text-xs text-[#F59E0B]">{t(item.period, locale)}</p>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2.5"
        >
          {item.highlights.map((h) => (
            <motion.li
              key={h.en}
              variants={fadeUp}
              className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              {t(h, locale)}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
