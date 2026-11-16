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
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] border border-[#3F3F46]" />
          </div>
          <span className="text-[11px] text-[#A1A1AA] font-mono tracking-tight">
            {caseId === 'case-01' ? 'nexus.internal.app / production-view' : 'kyodai.hud / overlay-runtime'}
          </span>
        </div>

        {/* Latency and Engineering Badge */}
        <div className="flex items-center gap-2 text-[10px] text-emerald-400">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>{activeItem.latencyNote}</span>
        </div>
      </div>

      {/* Sub-Tabs for multiple screens (e.g. Case 01) */}
      {items.length > 1 && (
        <div className="flex items-center gap-1 border-b border-[#27272A] px-3 py-1.5 bg-[#0A0A0C] overflow-x-auto">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
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
          className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden"
        >
          <Image
            src={activeItem.src}
            alt={activeItem.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority={caseId === 'case-01' && activeTab === 0}
          />
          {/* Subtle hover overlay pill */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-black/75 border border-[#27272A] text-xs font-mono text-[#FAFAFA] flex items-center gap-1.5 shadow-xl backdrop-blur-xs">
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click to inspect full resolution</span>
            </span>
          </div>
        </div>
      </div>

      {/* Interface Engineering Caption Bar */}
      <div className="border-t border-[#27272A] px-4 py-2.5 bg-[#111113] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
        <div>
          <span className="font-semibold text-[#FAFAFA]">{activeItem.title}: </span>
          <span className="text-[#A1A1AA]">{activeItem.caption}</span>
        </div>
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0 cursor-pointer self-start sm:self-auto"
        >
          <span>Inspect</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[95vh] rounded-xl border border-[#27272A] bg-[#111113] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-[#27272A] px-4 py-3 bg-[#18181B]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#FAFAFA]">{activeItem.title}</span>
                <span className="text-xs text-[#71717A]">•</span>
                <span className="text-xs text-cyan-400 font-mono">{activeItem.latencyNote}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1 rounded hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
                aria-label="Close fullscreen inspection"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="relative overflow-auto p-2 bg-[#09090B] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[82vh] w-auto object-contain rounded"
              />
            </div>

            {/* Lightbox Footer Caption */}
            <div className="border-t border-[#27272A] px-4 py-2.5 bg-[#141417] text-xs text-[#A1A1AA]">
              {activeItem.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
