import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/animations';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={`section-padding scroll-mt-[6.875rem] ${className}`}
    >
      <div className="container-main">{children}</div>
    </motion.section>
  );
}
