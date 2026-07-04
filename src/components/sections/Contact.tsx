import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { SectionWrapper } from '../layout/SectionWrapper';
import { CopyButton } from '../ui/CopyButton';
import { SectionHeading } from '../ui/SectionHeading';

const linkIcons: Record<string, typeof Mail> = {
  email: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
};

export function Contact() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper id="contact" className="section-alt">
      <SectionHeading
        locale={locale}
        badge={{ en: 'Hello', ar: 'مرحباً' }}
        title={portfolio.contact.title}
        subtitle={portfolio.contact.subtitle}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="premium-card relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] p-6 text-center sm:rounded-[2rem] sm:p-10 md:p-14"
      >
        <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-amber-100/50 blur-3xl" />

        <motion.div variants={fadeUp} className="relative mb-8 flex justify-center sm:mb-10">
          <CopyButton text="zshamaa20@gmail.com" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4"
        >
          {portfolio.contact.links.map((link) => {
            const Icon = linkIcons[link.id] ?? Mail;
            const isExternal = link.type === 'link';

            return (
              <motion.a
                key={link.id}
                variants={fadeUp}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-[#1E3A5F] hover:shadow-md"
              >
                <Icon size={16} />
                <span className="truncate">{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
