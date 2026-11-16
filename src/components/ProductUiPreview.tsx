'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronRight, Zap } from 'lucide-react';

export interface UIPreviewItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  caption: string;
  latencyNote: string;
}

interface ProductUiPreviewProps {
  items: UIPreviewItem[];
  caseId: string;
}

export function ProductUiPreview({ items, caseId }: ProductUiPreviewProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const activeItem = items[activeTab] || items[0];

  return (
    <div className="w-full rounded-lg border border-[#27272A] bg-[#0E0E10] overflow-hidden font-mono text-xs">
      {/* Top Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A] px-3.5 py-2.5 bg-[#141417]">
        {/* Window controls & Title */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#A1A1AA] font-mono tracking-tight truncate max-w-[180px] sm:max-w-none">
            {caseId === 'case-01' ? 'nexus.internal.app / production-view' : 'kyodai.hud / overlay-runtime'}
          </span>
        </div>

        {/* Latency and Engineering Badge */}
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 shrink-0">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>{activeItem.latencyNote}</span>
        </div>
      </div>

      {/* Sub-Tabs for multiple screens (Smooth Touch Scroll on Mobile) */}
      {items.length > 1 && (
        <div className="flex items-center gap-1.5 border-b border-[#27272A] px-2.5 py-2 bg-[#0A0A0C] overflow-x-auto scrollbar-none">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[32px] ${
                activeTab === idx
                  ? 'bg-[#1C1C20] text-cyan-300 border border-cyan-500/30'
                  : 'text-[#71717A] hover:text-[#FAFAFA]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}

      {/* Visual Image Container with Lightbox Trigger */}
      <div className="relative group bg-[#09090B] overflow-hidden">
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-zoom-in overflow-hidden"
        >
          <Image
            src={activeItem.src}
            alt={activeItem.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 900px"
            priority={caseId === 'case-01' && activeTab === 0}
          />
          {/* Mobile and Desktop hover indicator */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-black/80 border border-[#27272A] text-[11px] font-mono text-[#FAFAFA] flex items-center gap-1.5 shadow-xl backdrop-blur-xs">
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect fullscreen</span>
            </span>
          </div>
        </div>
      </div>

      {/* Interface Engineering Caption Bar */}
      <div className="border-t border-[#27272A] p-3 sm:px-4 sm:py-2.5 bg-[#111113] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
        <div className="leading-relaxed">
          <strong className="text-[#FAFAFA] font-semibold">{activeItem.title}: </strong>
          <span className="text-[#A1A1AA]">{activeItem.caption}</span>
        </div>
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0 cursor-pointer self-start sm:self-auto py-1"
        >
          <span>Fullscreen</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Fullscreen Lightbox Modal (Mobile Adaptive) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full h-full sm:h-auto sm:max-w-6xl sm:max-h-[95vh] sm:rounded-xl border border-[#27272A] bg-[#111113] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-[#27272A] px-4 py-3 bg-[#18181B] shrink-0">
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="text-xs font-semibold text-[#FAFAFA] truncate">{activeItem.title}</span>
                <span className="text-xs text-[#71717A] hidden sm:inline">•</span>
                <span className="text-[11px] text-cyan-400 font-mono hidden sm:inline">{activeItem.latencyNote}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                aria-label="Close fullscreen inspection"
              >
                <X className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative flex-1 overflow-auto p-2 bg-[#09090B] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-full max-w-full object-contain rounded"
              />
            </div>

            {/* Lightbox Footer Caption */}
            <div className="border-t border-[#27272A] p-3 sm:px-4 sm:py-2.5 bg-[#141417] text-xs text-[#A1A1AA] shrink-0">
              {activeItem.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
