import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  const { locale } = useLanguage();
  const { items } = portfolio.projects;
  const featured = items.filter((p) => p.featured);
  const regular = items.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Work', ar: 'أعمال' }}
        title={portfolio.projects.title}
        subtitle={portfolio.projects.subtitle}
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            className="md:col-span-1 lg:col-span-6 min-h-[220px] sm:min-h-[240px]"
          />
        ))}
        {regular.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + featured.length}
            className="md:col-span-1 lg:col-span-4 min-h-[200px] sm:min-h-[220px]"
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center font-mono text-xs text-slate-400"
      >
        {locale === 'ar' ? 'اضغط على أي مشروع للمعاينة المباشرة' : 'Click any project to view live demo'}
      </motion.p>
    </SectionWrapper>
  );
}
