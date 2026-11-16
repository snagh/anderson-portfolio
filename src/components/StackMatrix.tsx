'use client';

import React from 'react';
import { Cpu, Server, Code2, GraduationCap, Languages, Terminal, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function StackMatrix() {
  const { t } = useLanguage();

  const domainIcons: Record<string, React.ReactNode> = {
    cyan: <Server className="w-4 h-4 text-cyan-400 shrink-0" />,
    emerald: <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />,
    neutral: <Code2 className="w-4 h-4 text-[#FAFAFA] shrink-0" />,
  };

  return (
    <section id="stack" className="py-14 sm:py-20 border-b border-[#27272A]/70 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.stackSection.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] mb-3 sm:mb-4">
            {t.stackSection.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
            {t.stackSection.subtitle}
          </p>
        </div>

        {/* Stack Groups (1 Column on Mobile, 3 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {t.stackSection.groups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#27272A] bg-[#111113] p-4 sm:p-6 flex flex-col justify-between hover:border-[#3F3F46] transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  {domainIcons[group.accent]}
                  <h3 className="text-sm sm:text-base font-bold text-[#FAFAFA]">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-[#A1A1AA] mb-4 sm:mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[11px] sm:text-xs font-mono text-[#D4D4D8] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Domain Seal */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#27272A]/70 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#71717A]">
                <span>Senior Proficiency</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Credentials Grid */}
        <div className="rounded-xl border border-[#27272A] bg-[#111113] p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                {t.stackSection.education.tag}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-[#FAFAFA]">
                {t.stackSection.education.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Degree list */}
            <div className="space-y-3 sm:space-y-4">
              {t.stackSection.education.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-lg border border-[#27272A] bg-[#141417] flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 mb-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-[#FAFAFA]">
                      {item.degree}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 self-start sm:self-auto border ${
                        item.status === 'Completed' || item.status === 'Concluído'
                          ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-400'
                          : 'border-cyan-500/30 bg-cyan-950/20 text-cyan-400'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A1A1AA]">
                    {item.institution} • {item.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages & Professional Proficiency */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  Language Proficiency (Global Communication)
                </span>
                {t.stackSection.education.languages.map((l, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-lg border border-[#27272A] bg-[#141417]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-[#FAFAFA]">
                        {l.language}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-400">
                        {l.level}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#A1A1AA]">{l.score}</p>
                  </div>
                ))}
              </div>

              {/* Timezone alignment note */}
              <div className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-[11px] sm:text-xs font-mono text-cyan-300 leading-relaxed">
                <strong>Timezone Alignment:</strong> Brasília Time (UTC-3), allowing 4–6 hours of direct daily synchronous overlap with US East/West and Central Europe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
