import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

interface SkillTagProps {
  label: string;
  index: number;
}

export function SkillTag({ label, index }: SkillTagProps) {
  return (
    <motion.span
      variants={fadeUp}
      custom={index}
      className="inline-flex items-center rounded-xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-[#1E3A5F] hover:shadow-md"
    >
      {label}
    </motion.span>
  );
}
