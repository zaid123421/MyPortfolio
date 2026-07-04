import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolio, t } from '../../data/portfolio';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const { locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        onClick={handleCopy}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-[#1E3A5F] shadow-sm transition hover:border-indigo-200 hover:shadow-md"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2 text-emerald-600"
            >
              <Check size={16} />
              {t(portfolio.contact.copySuccess, locale)}
            </motion.span>
          ) : (
            <motion.span key="copy" className="flex items-center gap-2">
              <Copy size={16} />
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
