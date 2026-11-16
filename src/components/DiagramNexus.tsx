'use client';

import React, { useState } from 'react';
import { FileText, Cpu, CheckCircle2, Database, Monitor, Shield } from 'lucide-react';

interface NodeDetail {
  title: string;
  sub: string;
  latency: string;
  protocol: string;
  description: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  pdf: {
    title: 'Government Gazettes & PDFs',
    sub: 'Heterogeneous unstructured municipal PDFs',
    latency: 'Ingestion < 1s',
    protocol: 'Multipart HTTP / Webhook',
    description: 'Raw bidding documents, municipal gazettes and pharmaceutical procurement tables containing multi-page scanned text and tables.',
  },
  worker: {
    title: 'Async Python + Gemini OCR Worker',
    sub: 'Multimodal extraction & chunked parsing',
    latency: 'Async 3.8s - 6.2s',
    protocol: 'Celery / Redis / Gemini 1.5 API',
    description: 'Deconstructs PDF pages, feeds vision tokens into Gemini 1.5 with prompt schemas for high-density tabular price extractions.',
  },
  validator: {
    title: 'Schema Validation Engine',
    sub: 'Strict Pydantic / Zod verification',
    latency: '< 15ms deterministic',
    protocol: 'In-Memory Type Boundary',
    description: 'Enforces strict data schemas, validates unit prices against statutory ceilings, and flags abnormal price variances before database commit.',
  },
  db: {
    title: 'PostgreSQL Cluster (RLS)',
    sub: 'Row-Level Security multi-tenant isolation',
    latency: '< 8ms query time',
    protocol: 'TCP / Connection Pooling',
    description: 'Enforces cryptographic tenant context isolation in database layer. No cross-tenant data leaks, unified database migrations.',
  },
  client: {
    title: 'React / Next.js Client',
    sub: 'Optimistic UI & clerical live dashboard',
    latency: '< 50ms interaction',
    protocol: 'HTTPS / REST / React Query',
    description: 'Clerical operations interface tailored for rapid bid verification, price comparison tables, and batch approval workflows.',
  },
};

export function DiagramNexus() {
  const [activeNode, setActiveNode] = useState<string>('worker');

  const current = nodeDetails[activeNode] || nodeDetails.worker;

  return (
    <div className="w-full rounded-lg border border-[#27272A] bg-[#0E0E10] p-3 sm:p-5 font-mono text-xs">
      {/* Header bar of the interactive diagram */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[#A1A1AA] uppercase tracking-wider text-[10px] sm:text-[11px]">Pipeline Topology: Async Ingestion & OCR</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA]">
          <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Tenant Isolated (RLS)</span>
        </div>
      </div>

      {/* Interactive Node Flow (Desktop Horizontal / Mobile Vertical with Connectors) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
        {/* Node 1 */}
        <button
          type="button"
          onClick={() => setActiveNode('pdf')}
          className={`group flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'pdf'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-[#A1A1AA]">01. Source</span>
            <FileText className={`w-3.5 h-3.5 ${activeNode === 'pdf' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Gov PDFs</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Public bids & gazettes</span>
        </button>

        {/* Node 2 */}
        <button
          type="button"
          onClick={() => setActiveNode('worker')}
          className={`group flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'worker'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-cyan-400">02. Async OCR</span>
            <Cpu className={`w-3.5 h-3.5 ${activeNode === 'worker' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Python + Gemini</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Multimodal queue</span>
        </button>

        {/* Node 3 */}
        <button
          type="button"
          onClick={() => setActiveNode('validator')}
          className={`group flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'validator'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-[#A1A1AA]">03. Contract</span>
            <CheckCircle2 className={`w-3.5 h-3.5 ${activeNode === 'validator' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Schema Verify</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Pydantic / Zod rules</span>
        </button>

        {/* Node 4 */}
        <button
          type="button"
          onClick={() => setActiveNode('db')}
          className={`group flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'db'
              ? 'bg-[#18181B] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-emerald-400">04. Storage</span>
            <Database className={`w-3.5 h-3.5 ${activeNode === 'db' ? 'text-emerald-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">PostgreSQL (RLS)</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Tenant isolation</span>
        </button>

        {/* Node 5 */}
        <button
          type="button"
          onClick={() => setActiveNode('client')}
          className={`group flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'client'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-[#A1A1AA]">05. Client</span>
            <Monitor className={`w-3.5 h-3.5 ${activeNode === 'client' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">React / TS Client</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">High-density UI</span>
        </button>
      </div>

      {/* Detailed Node Inspector Box */}
      <div className="mt-3 sm:mt-4 rounded-lg border border-[#27272A] bg-[#141417] p-3 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#27272A]/70 pb-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-cyan-400 font-semibold">{current.title}</span>
            <span className="text-[10px] sm:text-[11px] text-[#A1A1AA]">({current.sub})</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]">
            <span className="text-[#A1A1AA]">Latency: <strong className="text-emerald-400">{current.latency}</strong></span>
            <span className="text-[#A1A1AA]">Protocol: <strong className="text-[#FAFAFA]">{current.protocol}</strong></span>
          </div>
        </div>
        <p className="text-[#D4D4D8] text-[11px] leading-relaxed">{current.description}</p>
      </div>
    </div>
  );
}
