import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../data/portfolio';
import { t } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { scaleIn } from '../../lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className = '' }: ProjectCardProps) {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={scaleIn}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.02 }}
      className={`card-shine group relative flex flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-5 shadow-lg transition-shadow hover:shadow-2xl sm:p-7 md:p-8 ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-80`}
      />
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
          <span className="rounded-full border border-indigo-100 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm sm:px-3 sm:text-xs">
            {t(project.tag, locale)}
          </span>
          <motion.span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 text-slate-400 shadow-sm transition group-hover:bg-[#1E3A5F] group-hover:text-white"
            whileHover={{ x: 2, y: -2 }}
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#1E3A5F] transition group-hover:gradient-text sm:mb-3 sm:text-2xl md:text-3xl">
          {project.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
          {t(project.description, locale)}
        </p>
      </div>
    </motion.a>
  );
}
