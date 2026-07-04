import { motion } from 'framer-motion';

export function BlobBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="animate-blob absolute -start-20 -top-20 h-[min(500px,80vw)] w-[min(500px,80vw)] rounded-full bg-indigo-300/25 blur-3xl sm:-start-32 sm:-top-32"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="animate-blob-delayed absolute -end-16 top-1/4 h-[min(450px,70vw)] w-[min(450px,70vw)] rounded-full bg-amber-300/20 blur-3xl sm:-end-24"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="animate-blob absolute bottom-0 start-1/4 h-[min(400px,60vw)] w-[min(400px,60vw)] rounded-full bg-violet-300/20 blur-3xl sm:start-1/3"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
