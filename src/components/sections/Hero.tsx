import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useScrollTo } from '../../context/ScrollContext';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function Hero() {
  const { locale, dir } = useLanguage();

  const { scrollToSection } = useScrollTo();

  const scrollToProjects = () => {
    scrollToSection('projects');
  };

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="container-main relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={`order-2 ${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-start`}
          >
            <motion.h1
              variants={fadeUp}
              className="mb-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1E3A5F] min-[420px]:text-5xl sm:text-6xl lg:text-7xl"
            >
              {portfolio.name.split(' ')[0]}
              <br />
              <span className="gradient-text">{portfolio.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 lg:max-w-xl"
            >
              {t(portfolio.title, locale)}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mb-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:gap-4"
            >
              {portfolio.stats.map((stat) => (
                <div
                  key={stat.label.en}
                  className="premium-card rounded-2xl px-4 py-4 text-center sm:px-5 sm:py-5 lg:text-start"
                >
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                    {t(stat.label, locale)}
                  </p>
                  <p className="text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                    {stat.textValue ? (
                      t(stat.textValue, locale)
                    ) : (
                      <>
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix ? t(stat.suffix, locale) : null}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start sm:gap-4"
            >
              <motion.button
                type="button"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1E3A5F] via-[#4f46e5] to-[#6366F1] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition hover:shadow-xl sm:w-auto"
              >
                {t(portfolio.cta.projects, locale)}
                <ArrowDown size={16} />
              </motion.button>
              <motion.a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#1E3A5F] shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:shadow-md sm:w-auto"
              >
                <Download size={16} />
                {t(portfolio.cta.cv, locale)}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`order-1 flex flex-col items-center ${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#1E3A5F]/30 via-[#6366F1]/25 to-[#F59E0B]/30 blur-2xl sm:-inset-4" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-gradient-to-br from-indigo-100 to-amber-50 p-1 shadow-2xl shadow-indigo-300/30 sm:rounded-[2rem] sm:border-4">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt={portfolio.name}
                    className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top sm:rounded-[1.6rem]"
                    loading="eager"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -end-2 -top-2 rounded-2xl border border-white bg-gradient-to-br from-[#F59E0B] to-orange-500 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg sm:-end-3 sm:-top-3 sm:px-4 sm:text-xs"
                >
                  DCPC
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative z-10 mx-auto mt-5 w-full max-w-[min(100%,320px)] px-2"
              >
                <p className="rounded-2xl border border-indigo-100/80 bg-white/95 px-4 py-2.5 text-center text-xs font-semibold leading-snug text-[#1E3A5F] shadow-lg backdrop-blur-sm sm:text-sm">
                  {t(portfolio.heroCaption, locale)}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
