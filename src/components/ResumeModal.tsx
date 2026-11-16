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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-[#27272A] bg-[#111113] shadow-2xl overflow-hidden text-sm">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between border-b border-[#27272A] px-4 py-3 bg-[#18181B]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Curriculum Vitae (A4 Optimized)
            </span>
            <span className="text-xs text-[#71717A] hidden sm:inline">•</span>
            <span className="text-xs text-[#A1A1AA] hidden sm:inline">
              {lang === 'en' ? 'Click print to export clean PDF' : 'Clique em imprimir para salvar como PDF'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Anderson_Martins_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#27272A] bg-[#27272A] hover:bg-[#3F3F46] text-[#FAFAFA] font-semibold text-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resumeModal.downloadDirectAction}</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resumeModal.printAction}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="print-page overflow-y-auto p-6 sm:p-10 bg-[#0E0E10] text-[#FAFAFA] space-y-6">
          {/* Header */}
          <div className="border-b border-[#27272A] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                  Anderson José Campos Martins (Anderson Martins)
                </h1>
                <p className="text-sm font-mono text-cyan-400 mt-1">
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
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>andersonjose.dev.br</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>andrews.cs16@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
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
              <div className="p-3 rounded border border-[#27272A] bg-[#141417]">
                <strong className="text-[#FAFAFA] block mb-1">Architecture & Cloud</strong>
                <span className="text-[#A1A1AA] leading-relaxed">
                  Distributed Systems, Multi-Tenant PostgreSQL (RLS), Docker, Hardened Reverse Proxy (TLS 1.3), GitHub Actions CI/CD, FinOps.
                </span>
              </div>
              <div className="p-3 rounded border border-[#27272A] bg-[#141417]">
                <strong className="text-[#FAFAFA] block mb-1">Backend & Applied AI</strong>
                <span className="text-[#A1A1AA] leading-relaxed">
                  Python (FastAPI, Celery), Node.js, TypeScript, Google Gemini 1.5, Deterministic OCR Schemas, Redis Queues.
                </span>
              </div>
              <div className="p-3 rounded border border-[#27272A] bg-[#141417]">
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
                <div key={idx} className="border-l-2 border-[#27272A] pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
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
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-emerald-400 border border-[#27272A]">
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
