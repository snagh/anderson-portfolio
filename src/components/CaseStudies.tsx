'use client';

import React, { useState } from 'react';
import { Layers, Cpu, TrendingUp, AlertTriangle, Scale, Monitor } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { DiagramNexus } from './DiagramNexus';
import { DiagramKyodai } from './DiagramKyodai';
import { DiagramInfra } from './DiagramInfra';
import { ProductUiPreview } from './ProductUiPreview';

export function CaseStudies() {
  const { t } = useLanguage();
  const [activeVisualTab, setActiveVisualTab] = useState<Record<string, 'flow' | 'ui'>>({
    'case-01': 'flow',
    'case-02': 'flow',
    'case-03': 'flow',
  });

  const toggleTab = (caseId: string, tab: 'flow' | 'ui') => {
    setActiveVisualTab((prev) => ({ ...prev, [caseId]: tab }));
  };

  const getDiagramElement = (id: string) => {
    switch (id) {
      case 'case-01':
        return <DiagramNexus />;
      case 'case-02':
        return <DiagramKyodai />;
      case 'case-03':
        return <DiagramInfra />;
      default:
        return null;
    }
  };

  return (
    <section id="architecture" className="py-14 sm:py-20 border-b border-[#27272A]/70 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.casesSection.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAFAFA] mb-3 sm:mb-4">
            {t.casesSection.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
            {t.casesSection.subtitle}
          </p>
        </div>

        {/* Case Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {t.casesSection.cases.map((c, index) => {
            const hasUiPreview = c.uiPreviews && c.uiPreviews.length > 0;
            const currentTab = activeVisualTab[c.id] || 'flow';

            return (
              <article
                key={c.id}
                className="rounded-xl border border-[#27272A] bg-[#111113] p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-sm hover:border-[#3F3F46] transition-colors"
              >
                {/* Header Badge & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium border border-cyan-500/30 bg-cyan-950/20 text-cyan-300">
                      {c.badge}
                    </span>
                    <span className="text-xs font-mono text-[#71717A] hidden sm:inline">
                      • {c.role}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-[#71717A]">
                    ADR #{index + 1}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-lg sm:text-2xl font-bold text-[#FAFAFA] mb-2 sm:mb-3">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-6 sm:mb-8">
                  {c.summary}
                </p>

                {/* Visual Artifact Box (Architecture Flow vs Product UI Preview Switcher) */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    {/* View Switcher Tabs (Mobile: full width touch pills) */}
                    {hasUiPreview ? (
                      <div className="w-full sm:w-auto inline-flex items-center p-1 rounded-lg border border-[#27272A] bg-[#0A0A0C]">
                        <button
                          type="button"
                          onClick={() => toggleTab(c.id, 'flow')}
                          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer min-h-[36px] ${
                            currentTab === 'flow'
                              ? 'bg-[#18181B] text-[#FAFAFA] shadow-xs border border-[#27272A]'
                              : 'text-[#71717A] hover:text-[#FAFAFA]'
                          }`}
                        >
                          <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{t.casesSection.tabs.flow}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleTab(c.id, 'ui')}
                          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer min-h-[36px] ${
                            currentTab === 'ui'
                              ? 'bg-[#18181B] text-[#FAFAFA] shadow-xs border border-[#27272A]'
                              : 'text-[#71717A] hover:text-[#FAFAFA]'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{t.casesSection.tabs.uiPreview}</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        {t.casesSection.labels.flow}
                      </span>
                    )}

                    <span className="text-[11px] font-mono text-[#71717A] hidden md:inline">
                      {currentTab === 'flow'
                        ? t.casesSection.labels.liveHover
                        : t.casesSection.labels.uiCaption}
                    </span>
                  </div>

                  {/* Render Visual Artifact */}
                  {currentTab === 'flow' || !hasUiPreview ? (
                    getDiagramElement(c.id)
                  ) : (
                    <ProductUiPreview items={c.uiPreviews!} caseId={c.id} />
                  )}
                </div>

                {/* Operational Bottleneck & Trade-offs (ADRs) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                  {/* Context & Bottleneck */}
                  <div className="p-3.5 sm:p-4 rounded-lg border border-[#27272A] bg-[#141417]">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold mb-2">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.casesSection.labels.context}</span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {c.context}
                    </p>
                  </div>

                  {/* Key Trade-offs (ADRs) */}
                  <div className="p-3.5 sm:p-4 rounded-lg border border-[#27272A] bg-[#141417]">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-2">
                      <Scale className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.casesSection.labels.tradeoffs}</span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {c.tradeoff}
                    </p>
                  </div>
                </div>

                {/* Production Impact Metric Cards */}
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t.casesSection.labels.impact}
                  </span>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                    {c.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-3 sm:p-3.5 rounded-lg border text-left flex flex-col justify-between ${
                          metric.highlight
                            ? 'border-emerald-500/30 bg-emerald-950/15'
                            : 'border-[#27272A] bg-[#141417]'
                        }`}
                      >
                        <span
                          className={`text-lg sm:text-2xl font-bold font-mono tracking-tight mb-1 ${
                            metric.highlight ? 'text-emerald-400' : 'text-[#FAFAFA]'
                          }`}
                        >
                          {metric.value}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-[#A1A1AA] leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Specs Footer */}
                <div className="pt-4 border-t border-[#27272A]/70 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-2 gap-x-6 text-[11px] font-mono">
                  {c.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-baseline gap-1.5 text-[#A1A1AA]">
                      <span className="text-[#FAFAFA] font-medium shrink-0">{spec.key}:</span>
                      <span className="text-[#71717A] break-all">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
