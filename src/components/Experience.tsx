'use client';

import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-14 sm:py-20 border-b border-[#27272A]/70 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experienceSection.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] mb-3 sm:mb-4">
            {t.experienceSection.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
            {t.experienceSection.subtitle}
          </p>
        </div>

        {/* Vertical Timeline (Responsive padding & marker positioning) */}
        <div className="relative pl-5 sm:pl-8 border-l border-[#27272A] space-y-10 sm:space-y-12 ml-2 sm:ml-3">
          {t.experienceSection.roles.map((role, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker perfectly centered on border-l */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 bg-[#09090B] flex items-center justify-center transition-transform group-hover:scale-125 ${
                  role.current
                    ? 'border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : 'border-[#3F3F46]'
                }`}
              >
                {role.current && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
              </div>

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-xl font-bold text-[#FAFAFA]">
                    {role.title}
                  </h3>
                  {role.current && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30 bg-emerald-950/20 text-emerald-300">
                      Current Role
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#A1A1AA]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{role.period}</span>
                </div>
              </div>

              {/* Company & Domain */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-cyan-400 mb-3">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Building className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
                  <span>{role.company}</span>
                </div>
                <span className="text-[#3F3F46] hidden sm:inline">•</span>
                <span className="text-[#A1A1AA] text-[11px] sm:text-xs">{role.domain}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-4 max-w-3xl">
                {role.description}
              </p>

              {/* Key Deliverables Bullet Points */}
              <div className="space-y-2 mb-4 bg-[#111113] p-3 sm:p-4 rounded-lg border border-[#27272A]">
                {role.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technology Stack Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
                {role.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[#141417] text-[#FAFAFA] border border-[#27272A] hover:border-[#3F3F46] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
