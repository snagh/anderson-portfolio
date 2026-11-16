'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, BehanceIcon } from './Icons';

export function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('andersonjose.pbs@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-14 sm:pt-20 pb-12 bg-[#09090B] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Direct Contact Callout Box */}
        <div className="rounded-xl border border-[#27272A] bg-[#111113] p-5 sm:p-8 md:p-12 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5 sm:mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              {t.footer.readyToTalk}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA] mb-3 sm:mb-4">
              {t.footer.ctaHeadline}
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 sm:mb-8">
              {t.footer.ctaSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              {/* Primary Direct Email Button */}
              <a
                href="mailto:andersonjose.pbs@gmail.com"
                className="flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-sm min-h-[44px]"
              >
                <Mail className="w-4 h-4" />
                <span className="break-all sm:break-normal">andersonjose.pbs@gmail.com</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-lg border border-[#27272A] bg-[#18181B] hover:border-[#3F3F46] text-[#A1A1AA] hover:text-[#FAFAFA] text-xs sm:text-sm font-mono transition-all cursor-pointer min-h-[44px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{t.footer.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.footer.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Links, Technical Notes & Copyright */}
        <div className="border-t border-[#27272A]/70 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#71717A] text-[11px] sm:text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
            <span className="text-[#A1A1AA] font-medium">
              Anderson Martins • andersonjose.dev.br
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              © 2026 {t.footer.rights}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://github.com/snagh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5 font-mono py-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.behance.net/andersonmartins7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5 font-mono py-1"
            >
              <BehanceIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Behance</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FAFAFA] transition-colors font-mono cursor-pointer ml-1 py-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Technical Architecture Note */}
        <div className="mt-6 text-center text-[10px] sm:text-[11px] font-mono text-[#52525B] leading-relaxed">
          <p>{t.footer.techNote}</p>
        </div>
      </div>
    </footer>
  );
}
