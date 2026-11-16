'use client';

import React from 'react';
import { X, Printer, Download, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      {/* Container */}
      <div className="relative w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[92vh] flex flex-col sm:rounded-xl border border-[#27272A] bg-[#111113] shadow-2xl overflow-hidden text-sm">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between border-b border-[#27272A] px-3 sm:px-4 py-2.5 sm:py-3 bg-[#18181B] shrink-0">
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold truncate">
              CV (A4 Format)
            </span>
            <span className="text-xs text-[#71717A] hidden sm:inline">•</span>
            <span className="text-xs text-[#A1A1AA] hidden sm:inline">
              {lang === 'en' ? 'Click print to export clean PDF' : 'Clique em imprimir para salvar como PDF'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="/resume.pdf"
              download="Anderson_Martins_Resume.pdf"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded border border-[#27272A] bg-[#27272A] hover:bg-[#3F3F46] text-[#FAFAFA] font-semibold text-xs transition-colors cursor-pointer min-h-[36px]"
              title={t.resumeModal.downloadDirectAction}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.resumeModal.downloadDirectAction}</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors cursor-pointer min-h-[36px]"
              title={t.resumeModal.printAction}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.resumeModal.printAction}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="print-page flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 bg-[#0E0E10] text-[#FAFAFA] space-y-6">
          {/* Header */}
          <div className="border-b border-[#27272A] pb-5 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                  Anderson José Campos Martins (Anderson Martins)
                </h1>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                  Senior Product Engineer & System Architect
                </p>
                <p className="text-xs text-[#A1A1AA] mt-2 max-w-xl leading-relaxed">
                  {lang === 'en'
                    ? 'Architecting end-to-end B2B platforms, applied AI pipelines, and high-precision interfaces. 6+ years of operational domain expertise in mission-critical public healthcare procurement and logistics operations.'
                    : 'Arquiteto de plataformas B2B de ponta a ponta, pipelines de IA aplicada e interfaces de alta precisão. 6+ anos de vivência real nos bastidores de compras públicas e logística hospitalar (SES-TO).'}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-xs font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>andersonjose.dev.br</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="break-all sm:break-normal">andersonjose.pbs@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A1A1AA] shrink-0" />
                  <span>Palmas, TO, Brazil (UTC-3 • US/EU Overlap)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              {lang === 'en' ? 'Core Architecture & Technical Competencies' : 'Competências Chave de Arquitetura & Tecnologia'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-[#27272A] bg-[#141417]">
                <strong className="text-[#FAFAFA] block mb-1">Architecture & Cloud</strong>
                <span className="text-[#A1A1AA] leading-relaxed">
                  Distributed Systems, Multi-Tenant PostgreSQL (RLS), Docker, Hardened Reverse Proxy (TLS 1.3), GitHub Actions CI/CD, FinOps.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-[#27272A] bg-[#141417]">
                <strong className="text-[#FAFAFA] block mb-1">Backend & Applied AI</strong>
                <span className="text-[#A1A1AA] leading-relaxed">
                  Python (FastAPI, Celery), Node.js, TypeScript, Google Gemini 1.5, Deterministic OCR Schemas, Redis Queues.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-[#27272A] bg-[#141417]">
                <strong className="text-[#FAFAFA] block mb-1">Frontend & Design</strong>
                <span className="text-[#A1A1AA] leading-relaxed">
                  React, Next.js (App Router), Tailwind CSS v4, Figma Design Systems, WCAG 2.1 AA Accessibility, Sub-100ms UI.
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              {lang === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
            </h2>
            <div className="space-y-4">
              {t.experienceSection.roles.map((role, idx) => (
                <div key={idx} className="border-l-2 border-[#27272A] pl-3.5 sm:pl-4 py-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-sm text-[#FAFAFA]">{role.title}</span>
                    <span className="font-mono text-[11px] text-[#A1A1AA]">{role.period}</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    {role.company} • <span className="text-[#71717A]">{role.domain}</span>
                  </div>
                  <p className="text-xs text-[#D4D4D8] mb-2 leading-relaxed">{role.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#A1A1AA]">
                    {role.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="border-t border-[#27272A] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                {lang === 'en' ? 'Education' : 'Formação Acadêmica'}
              </h2>
              <div className="space-y-2 text-xs">
                {t.stackSection.education.items.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-[#FAFAFA]">{item.degree}</p>
                    <p className="text-[11px] text-[#A1A1AA] font-mono">{item.institution} ({item.period})</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                {lang === 'en' ? 'Languages & Credentials' : 'Idiomas & Credenciais'}
              </h2>
              <div className="space-y-2 text-xs">
                {t.stackSection.education.languages.map((l, idx) => (
                  <div key={idx} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-[#FAFAFA]">{l.language}</p>
                      <p className="text-[11px] text-[#A1A1AA]">{l.score}</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-emerald-400 border border-[#27272A] shrink-0 ml-2">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
