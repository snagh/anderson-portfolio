'use client';

import React, { useState } from 'react';
import { Activity, Zap, Layers, Sparkles, Volume2, Timer } from 'lucide-react';

interface NodeDetail {
  title: string;
  sub: string;
  layer: string;
  latency: string;
  description: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  telemetry: {
    title: 'Live Telemetry Ingestion',
    sub: 'High-frequency 30 Hz game state socket',
    layer: 'Ingress Layer',
    latency: '< 5ms',
    description: 'Captures player coordinates, hero health, ability cooldown timers, and game clock over local UDP/WebSocket loops.',
  },
  filter: {
    title: 'Local Deterministic Filter',
    sub: 'Python rules engine for micro-tactics',
    layer: 'Fast Layer (Local)',
    latency: '< 20ms',
    description: 'Instant local evaluation of immediate hazards (e.g. low HP warnings, flanking detections). Dispatches critical sound cues without waiting for cloud LLMs.',
  },
  delta: {
    title: 'Compact JSON State Delta',
    sub: 'Differential payload serialization',
    layer: 'Compression Layer',
    latency: '< 10ms',
    description: 'Eliminates redundant static data. Only sends differential game changes and macro state inflections to minimize token spend by 78%.',
  },
  llm: {
    title: 'Fast LLM Token Streaming',
    sub: 'Strategic macro analysis with strict schema',
    layer: 'Reasoning Layer',
    latency: 'First token ~400ms',
    description: 'Receives compact JSON delta, evaluates high-level macro strategies (itemization, timing windows, rotation plans) and streams text tokens continuously.',
  },
  tts: {
    title: 'Sentence-by-Sentence TTS',
    sub: 'Incremental voice synthesis & audio queue',
    layer: 'Audio Pipeline',
    latency: '< 800ms to first earcon',
    description: 'Synthesizes each completed punctuation sentence in parallel chunks, playing audio before the LLM finishes generating the complete paragraph.',
  },
};

export function DiagramKyodai() {
  const [activeNode, setActiveNode] = useState<string>('filter');
  const current = nodeDetails[activeNode] || nodeDetails.filter;

  return (
    <div className="w-full rounded-lg border border-[#27272A] bg-[#0E0E10] p-4 sm:p-5 font-mono text-xs">
      {/* Header bar of the interactive diagram */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">Two-Layer Architecture: Fast Reflex & Deep Reasoning</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-emerald-400">
          <Timer className="w-3.5 h-3.5" />
          <span>Sub-300ms Critical Path</span>
        </div>
      </div>

      {/* Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
        <button
          type="button"
          onClick={() => setActiveNode('telemetry')}
          className={`flex flex-col items-start p-3 rounded border text-left transition-all ${
            activeNode === 'telemetry'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-[10px] text-[#A1A1AA]">01. Stream</span>
            <Activity className={`w-3.5 h-3.5 ${activeNode === 'telemetry' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-1">Live Telemetry</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">30 Hz Socket</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('filter')}
          className={`flex flex-col items-start p-3 rounded border text-left transition-all ${
            activeNode === 'filter'
              ? 'bg-[#18181B] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-[10px] text-emerald-400">02. Fast Path</span>
            <Zap className={`w-3.5 h-3.5 ${activeNode === 'filter' ? 'text-emerald-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-1">Local Filter</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">&lt; 300ms triggers</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('delta')}
          className={`flex flex-col items-start p-3 rounded border text-left transition-all ${
            activeNode === 'delta'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-[10px] text-[#A1A1AA]">03. Optimizer</span>
            <Layers className={`w-3.5 h-3.5 ${activeNode === 'delta' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-1">JSON Delta</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">-78% token load</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('llm')}
          className={`flex flex-col items-start p-3 rounded border text-left transition-all ${
            activeNode === 'llm'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-[10px] text-cyan-400">04. Strategy</span>
            <Sparkles className={`w-3.5 h-3.5 ${activeNode === 'llm' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-1">LLM Streaming</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Macro reasoning</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('tts')}
          className={`flex flex-col items-start p-3 rounded border text-left transition-all ${
            activeNode === 'tts'
              ? 'bg-[#18181B] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-[10px] text-[#A1A1AA]">05. Audio</span>
            <Volume2 className={`w-3.5 h-3.5 ${activeNode === 'tts' ? 'text-emerald-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-1">Chunked TTS</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">&lt; 1s voice start</span>
        </button>
      </div>

      {/* Inspector Details */}
      <div className="mt-4 rounded border border-[#27272A] bg-[#141417] p-3 text-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A]/70 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">{current.title}</span>
            <span className="text-[11px] text-[#A1A1AA]">({current.sub})</span>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span className="text-[#A1A1AA]">Layer: <strong className="text-[#FAFAFA]">{current.layer}</strong></span>
            <span className="text-[#A1A1AA]">Latency: <strong className="text-emerald-400">{current.latency}</strong></span>
          </div>
        </div>
        <p className="text-[#D4D4D8] text-[11px] leading-relaxed">{current.description}</p>
      </div>
    </div>
  );
}
