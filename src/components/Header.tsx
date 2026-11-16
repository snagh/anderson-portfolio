'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeaderProps {
  onOpenResume?: () => void;
}

export function Header({ onOpenResume }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27272A]/80 bg-[#09090B]/85 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Anderson Martins Portfolio Home"
        >
          <div className="h-7 w-7 rounded border border-[#27272A] bg-[#111113] flex items-center justify-center font-mono text-xs font-bold text-[#FAFAFA] group-hover:border-cyan-500/60 transition-colors">
            AM
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-tight text-[#FAFAFA] group-hover:text-cyan-400 transition-colors">
              Anderson Martins
            </span>
            <span className="text-[10px] font-mono text-[#71717A] leading-none">
              @snagh
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-[#A1A1AA]">
          <Link
            href="#architecture"
            className="hover:text-[#FAFAFA] transition-colors py-1 cursor-pointer"
          >
            {t.nav.architecture}
          </Link>
          <Link
            href="#experience"
            className="hover:text-[#FAFAFA] transition-colors py-1 cursor-pointer"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="#stack"
            className="hover:text-[#FAFAFA] transition-colors py-1 cursor-pointer"
          >
            {t.nav.stack}
          </Link>
        </nav>

        {/* Right Actions: Lang Switcher + Resume PDF */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#27272A] bg-[#111113] hover:border-[#3F3F46] text-xs font-mono transition-all text-[#A1A1AA] hover:text-[#FAFAFA] cursor-pointer"
            aria-label={`Switch language to ${lang === 'en' ? 'Portuguese' : 'English'}`}
            title={lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
          >
            <Globe className="w-3 h-3 text-cyan-400" />
            <span className={lang === 'en' ? 'text-[#FAFAFA] font-bold' : 'text-[#71717A]'}>
              EN
            </span>
            <span className="text-[#3F3F46]">/</span>
            <span className={lang === 'pt' ? 'text-[#FAFAFA] font-bold' : 'text-[#71717A]'}>
              PT
            </span>
          </button>

          {/* Resume PDF Direct Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenResume && !e.ctrlKey && !e.metaKey && e.button === 0) {
                e.preventDefault();
                onOpenResume();
              }
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono transition-all cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            <span>{t.nav.resumePdf}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-[#27272A] bg-[#111113] text-[#A1A1AA] hover:text-[#FAFAFA] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#27272A] bg-[#0E0E10] px-4 py-3 flex flex-col gap-2.5 text-xs">
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-[#A1A1AA] hover:text-[#FAFAFA]"
          >
            {t.nav.architecture}
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-[#A1A1AA] hover:text-[#FAFAFA]"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 text-[#A1A1AA] hover:text-[#FAFAFA]"
          >
            {t.nav.stack}
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (onOpenResume) {
                e.preventDefault();
                onOpenResume();
              }
            }}
            className="flex items-center gap-1.5 py-1.5 text-emerald-400 font-mono"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resumePdf}</span>
          </a>
        </div>
      )}
    </header>
  );
}
