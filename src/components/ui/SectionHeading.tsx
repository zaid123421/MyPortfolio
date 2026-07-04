import type { LocalizedText, Locale } from '../../data/portfolio';
import { t } from '../../data/portfolio';

interface SectionHeadingProps {
  badge: LocalizedText;
  title: LocalizedText;
  subtitle?: LocalizedText;
  locale: Locale;
  align?: 'center' | 'start';
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  locale,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center' : 'text-start'}`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100/80 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" aria-hidden />
        {t(badge, locale)}
      </span>
      <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1E3A5F] sm:text-3xl md:text-4xl lg:text-[2.75rem]">
        {t(title, locale)}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-slate-600 sm:text-lg ${
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {t(subtitle, locale)}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#1E3A5F] via-[#6366F1] to-[#F59E0B] ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
