import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { staggerContainer } from '../../lib/animations';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';

export function Experience() {
  const { locale } = useLanguage();
  const items = portfolio.experience.items;

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Career', ar: 'المسار' }}
        title={portfolio.experience.title}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        {items.map((item, i) => (
          <TimelineItem key={item.id} item={item} isLast={i === items.length - 1} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
