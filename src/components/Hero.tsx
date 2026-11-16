'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, Copy, Check, ExternalLink, Terminal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, BehanceIcon } from './Icons';

export function Hero() {
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

  return (
    <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-[#27272A]/70 overflow-hidden bg-tech-grid">
      {/* Subtle radial ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/20 text-[11px] sm:text-xs font-mono text-emerald-400 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{t.hero.statusBadge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAFA] max-w-4xl leading-[1.1] mb-6">
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
          {t.hero.subheadline}
        </p>

        {/* CTAs and Links */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* Primary CTA */}
          <Link
            href="#architecture"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FAFAFA] hover:bg-[#E4E4E7] text-[#09090B] font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-cyan-500/10 cursor-pointer"
          >
            <span>{t.hero.exploreCta}</span>
            <ArrowDown className="w-4 h-4" />
          </Link>

          {/* GitHub Link */}
          <a
            href="https://github.com/snagh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#27272A] bg-[#111113] hover:border-[#3F3F46] hover:bg-[#18181B] text-xs sm:text-sm font-medium text-[#FAFAFA] transition-all cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-[#A1A1AA]" />
            <span>{t.hero.githubLabel}</span>
            <ExternalLink className="w-3 h-3 text-[#71717A]" />
          </a>

          {/* Behance Link */}
          <a
            href="https://www.behance.net/andersonmartins7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#27272A] bg-[#111113] hover:border-[#3F3F46] hover:bg-[#18181B] text-xs sm:text-sm font-medium text-[#FAFAFA] transition-all cursor-pointer"
          >
            <BehanceIcon className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.behanceLabel}</span>
            <ExternalLink className="w-3 h-3 text-[#71717A]" />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all text-xs sm:text-sm font-mono cursor-pointer ${
              copied
                ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300'
                : 'border-[#27272A] bg-[#111113] hover:border-[#3F3F46] text-[#A1A1AA] hover:text-[#FAFAFA]'
            }`}
            title="andersonjose.pbs@gmail.com"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">{t.hero.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.hero.copyEmail}</span>
              </>
            )}
          </button>
        </div>

        {/* Technical Domain Badges */}
        <div className="mt-12 pt-6 border-t border-[#27272A]/50 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-[#71717A]">
          <span className="text-[#A1A1AA] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Core Focus:
          </span>
          <span>Distributed B2B SaaS</span>
          <span>•</span>
          <span>Applied Multimodal AI</span>
          <span>•</span>
          <span>Zero-Trust Infrastructure</span>
          <span>•</span>
          <span>Healthcare Logistics</span>
        </div>
      </div>
    </section>
  );
}
