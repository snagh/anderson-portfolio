'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeaderProps {
  onOpenResume?: () => void;
}

export function Header({ onOpenResume }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27272A]/80 bg-[#09090B]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Anderson Martins Portfolio Home"
          onClick={closeMenu}
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
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#27272A] bg-[#111113] hover:border-[#3F3F46] text-xs font-mono transition-all text-[#A1A1AA] hover:text-[#FAFAFA] cursor-pointer min-h-[36px]"
            aria-label={`Switch language to ${lang === 'en' ? 'Portuguese' : 'English'}`}
            title={lang === 'en' ? 'Mudar para Português' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className={lang === 'en' ? 'text-[#FAFAFA] font-bold' : 'text-[#71717A]'}>
              EN
            </span>
            <span className="text-[#3F3F46]">/</span>
            <span className={lang === 'pt' ? 'text-[#FAFAFA] font-bold' : 'text-[#71717A]'}>
              PT
            </span>
          </button>

          {/* Resume PDF Direct Link (Desktop) */}
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
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-300 hover:text-emerald-200 text-xs font-mono transition-all cursor-pointer min-h-[36px]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resumePdf}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#27272A] bg-[#111113] text-[#A1A1AA] hover:text-[#FAFAFA] cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay / Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-[#09090B]/95 backdrop-blur-xl border-b border-[#27272A] flex flex-col justify-between p-5 z-50 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] px-2 mb-1">
              {lang === 'en' ? 'Navigation' : 'Navegação'}
            </span>
            <Link
              href="#architecture"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg border border-[#27272A] bg-[#111113] text-sm font-medium text-[#FAFAFA] active:bg-[#18181B]"
            >
              <span>{t.nav.architecture}</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
            <Link
              href="#experience"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg border border-[#27272A] bg-[#111113] text-sm font-medium text-[#FAFAFA] active:bg-[#18181B]"
            >
              <span>{t.nav.experience}</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
            <Link
              href="#stack"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg border border-[#27272A] bg-[#111113] text-sm font-medium text-[#FAFAFA] active:bg-[#18181B]"
            >
              <span>{t.nav.stack}</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg border border-[#27272A] bg-[#111113] text-sm font-medium text-[#FAFAFA] active:bg-[#18181B]"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-4 border-t border-[#27272A] flex flex-col gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                closeMenu();
                if (onOpenResume) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500 text-black font-semibold text-sm active:bg-emerald-400 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{t.nav.resumePdf}</span>
            </a>

            <div className="flex items-center justify-between px-2 pt-1 text-[11px] font-mono text-[#71717A]">
              <span>Palmas, TO • UTC-3</span>
              <span className="text-emerald-400">English C2</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
