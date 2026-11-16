'use client';

import React, { useState } from 'react';
import { GitPullRequest, ShieldCheck, Box, Lock, Database, Server } from 'lucide-react';

interface NodeDetail {
  title: string;
  sub: string;
  security: string;
  role: string;
  description: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  git: {
    title: 'Git PR & Semantic Branching',
    sub: 'Trunk-based workflow with short-lived PRs',
    security: 'Branch Protection & GPG Signs',
    role: 'Version Control Source',
    description: 'All changes enter via verified pull requests with mandatory code reviews and signed commits.',
  },
  ci: {
    title: 'GitHub Actions Automated Gates',
    sub: 'Linting, unit/integration tests & Trivy scans',
    security: 'Secret Scanning & CVE Analysis',
    role: 'Validation Gate',
    description: 'Enforces 100% test pass rate, runs static analysis, audits dependencies for known vulnerabilities, and builds multi-stage Docker images.',
  },
  registry: {
    title: 'Secure Container Registry',
    sub: 'Versioned immutable container artifacts',
    security: 'Digest Pinning & Immutability',
    role: 'Artifact Storage',
    description: 'Stores lean, production-ready Alpine/Debian slim images with minimal attack surface.',
  },
  proxy: {
    title: 'Hardened Reverse Proxy (Traefik/Nginx)',
    sub: 'Edge TLS termination & rate limiting',
    security: 'TLS 1.3 + Automatic Let’s Encrypt',
    role: 'Public Gateway',
    description: 'Only ports 80/443 are exposed publicly. Handles HTTP-to-HTTPS redirects, SSL offloading, rate limiting, and forwards traffic into private networks.',
  },
  docker: {
    title: 'Private Docker Bridge Network',
    sub: 'Internal isolation & non-exposed PostgreSQL',
    security: '0 Exposed DB Ports (Internal Only)',
    role: 'Compute & Persistence',
    description: 'PostgreSQL runs on an internal Docker bridge network inaccessible from the internet. Inter-service traffic routes securely over Docker DNS aliases.',
  },
};

export function DiagramInfra() {
  const [activeNode, setActiveNode] = useState<string>('proxy');
  const current = nodeDetails[activeNode] || nodeDetails.proxy;

  return (
    <div className="w-full rounded-lg border border-[#27272A] bg-[#0E0E10] p-3 sm:p-5 font-mono text-xs">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#27272A] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[#A1A1AA] uppercase tracking-wider text-[10px] sm:text-[11px]">Zero-Trust Infrastructure: Private Subnets & Reverse Proxy</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <Lock className="w-3.5 h-3.5 shrink-0" />
          <span>PostgreSQL Port 5432 Isolated</span>
        </div>
      </div>

      {/* Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
        <button
          type="button"
          onClick={() => setActiveNode('git')}
          className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'git'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-[#A1A1AA]">01. Source</span>
            <GitPullRequest className={`w-3.5 h-3.5 ${activeNode === 'git' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Git PR</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Protected branch</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('ci')}
          className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'ci'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-cyan-400">02. Automated CI</span>
            <ShieldCheck className={`w-3.5 h-3.5 ${activeNode === 'ci' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">GH Actions</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Tests + CVE Scan</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('registry')}
          className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'registry'
              ? 'bg-[#18181B] border-cyan-500/70 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-[#A1A1AA]">03. Artifact</span>
            <Box className={`w-3.5 h-3.5 ${activeNode === 'registry' ? 'text-cyan-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Registry</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">Immutable image</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('proxy')}
          className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'proxy'
              ? 'bg-[#18181B] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-emerald-400">04. Hardened Edge</span>
            <Server className={`w-3.5 h-3.5 ${activeNode === 'proxy' ? 'text-emerald-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Reverse Proxy</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">TLS 1.3 Auto</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveNode('docker')}
          className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all cursor-pointer min-h-[48px] ${
            activeNode === 'docker'
              ? 'bg-[#18181B] border-emerald-500/70 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
              : 'bg-[#111113] border-[#27272A] hover:border-[#3F3F46]'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1 sm:mb-2">
            <span className="text-[10px] text-emerald-400">05. Private Net</span>
            <Database className={`w-3.5 h-3.5 ${activeNode === 'docker' ? 'text-emerald-400' : 'text-[#71717A]'}`} />
          </div>
          <span className="text-[11px] font-semibold text-[#FAFAFA] mb-0.5">Docker Private</span>
          <span className="text-[10px] text-[#A1A1AA] leading-tight">0 Public DB Ports</span>
        </button>
      </div>

      {/* Inspector Details */}
      <div className="mt-3 sm:mt-4 rounded-lg border border-[#27272A] bg-[#141417] p-3 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#27272A]/70 pb-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-cyan-400 font-semibold">{current.title}</span>
            <span className="text-[10px] sm:text-[11px] text-[#A1A1AA]">({current.sub})</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px]">
            <span className="text-[#A1A1AA]">Role: <strong className="text-[#FAFAFA]">{current.role}</strong></span>
            <span className="text-[#A1A1AA]">Security: <strong className="text-emerald-400">{current.security}</strong></span>
          </div>
        </div>
        <p className="text-[#D4D4D8] text-[11px] leading-relaxed">{current.description}</p>
      </div>
    </div>
  );
}
