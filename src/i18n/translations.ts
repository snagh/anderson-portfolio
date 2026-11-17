export type Language = 'en' | 'pt';

export interface UIPreviewData {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  caption: string;
  latencyNote: string;
}

export interface Translations {
  nav: {
    architecture: string;
    experience: string;
    stack: string;
    contact: string;
    resumePdf: string;
  };
  hero: {
    statusBadge: string;
    headline: string;
    subheadline: string;
    exploreCta: string;
    githubLabel: string;
    behanceLabel: string;
    copyEmail: string;
    copied: string;
  };
  casesSection: {
    tag: string;
    title: string;
    subtitle: string;
    tabs: {
      flow: string;
      uiPreview: string;
    };
    labels: {
      context: string;
      flow: string;
      tradeoffs: string;
      impact: string;
      systemSpecs: string;
      liveHover: string;
      uiCaption: string;
    };
    cases: Array<{
      id: string;
      badge: string;
      title: string;
      role: string;
      summary: string;
      context: string;
      tradeoff: string;
      metrics: Array<{
        value: string;
        label: string;
        highlight?: boolean;
      }>;
      specs: Array<{
        key: string;
        value: string;
      }>;
      uiPreviews?: UIPreviewData[];
    }>;
  };
  experienceSection: {
    tag: string;
    title: string;
    subtitle: string;
    roles: Array<{
      period: string;
      current?: boolean;
      title: string;
      company: string;
      domain: string;
      description: string;
      highlights: string[];
      technologies: string[];
    }>;
  };
  stackSection: {
    tag: string;
    title: string;
    subtitle: string;
    groups: Array<{
      category: string;
      accent: 'emerald' | 'cyan' | 'neutral';
      description: string;
      skills: Array<{
        name: string;
        note?: string;
      }>;
    }>;
    education: {
      tag: string;
      title: string;
      items: Array<{
        degree: string;
        institution: string;
        period: string;
        status: string;
      }>;
      languages: Array<{
        language: string;
        level: string;
        score: string;
      }>;
    };
  };
  resumeModal: {
    title: string;
    subtitle: string;
    printAction: string;
    downloadDirectAction: string;
    closeAction: string;
    downloadNotice: string;
  };
  footer: {
    readyToTalk: string;
    ctaHeadline: string;
    ctaSubheadline: string;
    copyEmail: string;
    copied: string;
    techNote: string;
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      architecture: 'Architecture',
      experience: 'Experience',
      stack: 'Stack & Governance',
      contact: 'Contact',
      resumePdf: 'Resume PDF',
    },
    hero: {
      statusBadge: 'Available for Remote Senior Product / System Architect Roles • UTC-3 (Full US/EU Overlap) • C2 English',
      headline: 'Senior Product Engineer & System Architect',
      subheadline:
        'Architecting end-to-end B2B platforms, applied AI pipelines, and high-precision interfaces. 6+ years of boots-on-the-ground public health procurement and logistics operations translated directly into resilient software architecture.',
      exploreCta: 'Explore Case Studies',
      githubLabel: 'GitHub',
      behanceLabel: 'Behance',
      copyEmail: 'Copy Email',
      copied: 'Copied to clipboard!',
    },
    casesSection: {
      tag: 'System Design & Applied Engineering',
      title: 'Architectural Case Studies',
      subtitle:
        'Production systems engineered for resilience, cost predictability, and zero-downtime operations under mission-critical domain constraints.',
      tabs: {
        flow: 'Architecture Flow',
        uiPreview: 'Product UI Preview',
      },
      labels: {
        context: 'Operational Bottleneck',
        flow: 'System Architecture Flow',
        tradeoffs: 'Key Architecture Decisions (ADRs)',
        impact: 'Production Impact',
        systemSpecs: 'System Specs',
        liveHover: 'Interactive pipeline topology (click nodes to inspect payload specifications)',
        uiCaption: 'High-density interface engineered for sub-100ms interaction latency and high data throughput.',
      },
      cases: [
        {
          id: 'case-01',
          badge: 'B2B Multi-Tenant Platform',
          title: 'Case 01 — Nexus ERP & OPUS Multi-Tenant SaaS',
          role: 'Lead Architect & Full-Stack Product Engineer',
          summary:
            'Autonomous ingestion and OCR extraction engine processing heterogeneous municipal gazettes and healthcare bids with deterministic schema validation and multi-tenant isolation.',
          context:
            'Processing heterogeneous, multi-page public procurement gazettes previously demanded 45+ minutes of manual human inspection per document. The volume of bids across municipal portals created extreme backlogs, high error rates in pharmaceutical price mapping, and prohibitive cloud costs if raw documents were fed naively into commercial multimodal models.',
          tradeoff:
            'Engineered a shared PostgreSQL cluster with strict Row-Level Security (RLS) instead of isolated databases per tenant. This eliminated baseline AWS RDS overhead, simplified atomic schema migrations across 100+ entities, and consolidated backups. Paired with asynchronous Celery/Redis workers to ensure Gemini LLM extraction latency (4-8s) never blocks the synchronous React/TypeScript user interface.',
          metrics: [
            {
              value: '-86%',
              label: 'Operational Cycle (45m → <6m)',
              highlight: true,
            },
            {
              value: '~$4,000/mo',
              label: 'Cost Savings vs Isolated DBs & Manual Labor',
              highlight: true,
            },
            {
              value: '99.7%',
              label: 'Schema Validation Precision',
            },
            {
              value: '100% RLS',
              label: 'Multi-Tenant Data Isolation Enforcement',
            },
          ],
          specs: [
            { key: 'Stack', value: 'Python (FastAPI), React, Next.js, PostgreSQL (RLS), Gemini 1.5 Pro' },
            { key: 'Throughput', value: 'Thousands of daily gazette pages ingested asynchronously' },
            { key: 'Security', value: 'Cryptographic tenant session context, RBAC & audit trails' },
          ],
          uiPreviews: [
            {
              id: 'nexus-dash',
              title: 'Executive Operational Dashboard',
              subtitle: 'Real-time sales velocity, regional distributions & order status feeds',
              src: '/projects/nexus/dashboard.webp',
              caption: 'Aggregated real-time metrics showing R$ 4.2M+ in managed bids, execution stages, and regional distribution curves with sub-100ms client filtering.',
              latencyNote: '< 100ms Client Query Interaction',
            },
            {
              id: 'nexus-ocr',
              title: 'Structured Document Ingestion & OCR',
              subtitle: 'Gemini 1.5 extraction verified against statutory procurement price ceilings',
              src: '/projects/nexus/ocr-pipeline.webp',
              caption: 'Multi-page procurement gazette ingestion with automatic pharmaceutical item identification, CATMAT code reconciliation, and deterministic price verification.',
              latencyNote: 'Async Pipeline: 4.2s per 4-page gazette',
            },
            {
              id: 'nexus-matrix',
              title: 'Analytical Contracts & Atas Matrix',
              subtitle: 'Multi-entity balance tracking, reservation locks & price commitments',
              src: '/projects/nexus/contracts-matrix.webp',
              caption: 'High-density administrative matrix displaying contract balances, item quotas, delivery history, and automated exhaustion alerts.',
              latencyNote: 'Instant Virtualized Client Rendering',
            },
          ],
        },
        {
          id: 'case-02',
          badge: 'Applied AI & Real-Time Telemetry',
          title: 'Case 02 — KYODAI Real-Time Voice AI Coach',
          role: 'AI Systems Architect & Design Engineer',
          summary:
            'Sub-second real-time multimodal decision coach for high-stakes competitive esports, orchestrating deterministic local telemetry filters and sentence-streamed speech synthesis.',
          context:
            'Competitive esports telemetry streams at 10-30 state updates per second. Sending entire raw game states to large language models caused 3-5 second round-trip delays, rendering tactical advice obsolete before audio was heard. Conversely, pure rule-based bots lacked strategic contextual reasoning.',
          tradeoff:
            'Split processing into a decoupled two-layer pipeline: an ultra-light local deterministic Python worker evaluates micro-triggers (health thresholds, cooldowns, threat radius) in <300ms, while streaming compact JSON state deltas to the LLM only on macro inflection points. The audio pipeline leverages sentence-by-sentence streaming TTS to start voice playback before the full response completion.',
          metrics: [
            {
              value: '<300ms',
              label: 'Critical Tactical Trigger Response',
              highlight: true,
            },
            {
              value: '<1s',
              label: 'End-to-End Voice Synthesized Latency',
              highlight: true,
            },
            {
              value: '-78%',
              label: 'Token Overhead via Differential JSON Deltas',
            },
            {
              value: '0ms UI Jitter',
              label: 'Independent Audio & Telemetry Threads',
            },
          ],
          specs: [
            { key: 'Telemetry Stream', value: 'WebSocket / Local UDP Socket (30 Hz raw ingestion)' },
            { key: 'LLM Orchestration', value: 'Structured JSON output streaming with schema guarantees' },
            { key: 'Audio Pipeline', value: 'Chunked PCM audio buffer with pre-warmed speech synthesis' },
          ],
          uiPreviews: [
            {
              id: 'kyodai-hud',
              title: 'Adaptive In-Game Tactical HUD',
              subtitle: 'Zero-distraction visual overlay synced with sub-second audio cues',
              src: '/projects/kyodai/hud-preview.webp',
              caption: 'Real-time tactical companion displaying situational awareness indicators, cooldown delta tracking, and streamed tactical directives directly inside gameplay.',
              latencyNote: '< 300ms Overlay Render / < 1s Audio Cue',
            },
          ],
        },
        {
          id: 'case-03',
          badge: 'DevOps & Cloud Governance',
          title: 'Case 03 — Cloud Infrastructure & CI/CD Migration (AproStock / RosaBoard)',
          role: 'Infrastructure & DevOps Architect',
          summary:
            'Zero-trust migration from fragmented per-seat no-code platforms to an automated, containerized self-hosted architecture with automated test gates and hardened reverse proxies.',
          context:
            'Operations were tethered to fragmented no-code and per-seat SaaS tooling, inflating monthly subscriptions to hundreds of dollars per user while locking critical hospital logistics data behind proprietary silos with zero automated integration testing or audit logging.',
          tradeoff:
            'Replaced expensive per-seat hosted SaaS with declarative Docker Compose environments behind a single hardened reverse proxy (Traefik/Nginx) with automatic TLS certificate lifecycle and isolated private Docker subnets. Direct database ports (5432) were removed from the public network, eliminating attack surface and replacing costly idle cloud load balancers with resilient host-level reverse proxying.',
          metrics: [
            {
              value: '-60%',
              label: 'Recurring Monthly Infrastructure Cost',
              highlight: true,
            },
            {
              value: '<3m',
              label: 'Automated CI/CD PR Build & Rollout',
              highlight: true,
            },
            {
              value: '0 Exposed',
              label: 'Public Database Ports (100% Private Subnet)',
            },
            {
              value: '100%',
              label: 'Automated Daily Encrypted DB Backups',
            },
          ],
          specs: [
            { key: 'Container Engine', value: 'Docker Compose with declarative multi-stage builds' },
            { key: 'CI/CD Pipeline', value: 'GitHub Actions: Lint, Jest/Pytest, Trivy Container Scan' },
            { key: 'Network Hardening', value: 'TLS 1.3, Let’s Encrypt auto-renewal, private bridge net' },
          ],
        },
      ],
    },
    experienceSection: {
      tag: 'Career & Operational Leadership',
      title: 'Experience & Domain Track Record',
      subtitle:
        'A rare hybrid of 6+ years of institutional public health operational domain knowledge combined with senior-level software architecture and design engineering.',
      roles: [
        {
          period: 'Nov 2025 – Present',
          current: true,
          title: 'System Architect & Full-Stack Product Engineer',
          company: 'Grupo Apromédica',
          domain: 'Healthcare Supply Chain & B2B SaaS',
          description:
            'Spearheading architecture and full-lifecycle engineering of the Nexus ERP ecosystem, OPUS multi-tenant SaaS, and cloud infrastructure modernization for healthcare distributor operations.',
          highlights: [
            'Architected automated procurement intelligence pipeline combining Gemini 1.5 Pro and deterministic schemas to digest municipal medical bids.',
            'Engineered multi-tenant PostgreSQL with Row-Level Security, serving distinct corporate entities with unified database maintenance.',
            'Designed and built high-density design system in React, Next.js, and Tailwind CSS tailored for intensive daily clerical data entry.',
            'Cut monthly third-party software licensing by replacing third-party no-code tools with bespoke, containerized internal platforms.',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL (RLS)', 'Docker', 'Gemini API', 'Tailwind CSS'],
        },
        {
          period: 'Oct 2019 – Nov 2025',
          title: 'Operations & Systems Requirements Analyst',
          company: 'State Secretariat of Health (SES-TO)',
          domain: 'Government Healthcare Logistics & Compliance',
          description:
            'Served 6 continuous years mapping complex institutional workflows, government procurement processes, pharmaceutical supply chains, and statutory compliance protocols.',
          highlights: [
            'Translated intricate public bidding laws (Lei 8.666/93 & 14.133/21) into concrete technical specifications for software developers and logistics teams.',
            'Monitored and audited critical statewide pharmaceutical logistics pipelines, optimizing distribution across regional hospital centers.',
            'Bridged the communication divide between medical clinicians, civil service stakeholders, and technical development squads.',
            'Developed rigorous domain understanding of institutional bottlenecks, audit trails, and data reliability prerequisites in high-consequence environments.',
          ],
          technologies: ['Systems Analysis', 'Process Mapping (BPMN)', 'Public Procurement Law', 'Requirements Engineering', 'Logistics Audit'],
        },
        {
          period: '2018 – Present (Continuous)',
          title: 'Senior UI/UX & Brand Identity Designer',
          company: 'Independent Practice (Global)',
          domain: 'Design Systems & Product Engineering',
          description:
            'Delivering precision design systems, corporate visual identities, and interactive prototypes for tech startups, enterprise products, and digital agencies.',
          highlights: [
            'Created comprehensive Figma design systems with strict token governance, accessible contrast ratios, and component composition.',
            'Applied Adobe Creative Suite (Illustrator, Photoshop) and Figma to bridge the gap between aesthetic branding and technical web performance.',
            'Eliminated handoff friction between design and frontend engineering by translating Figma tokens directly into Tailwind CSS presets.',
          ],
          technologies: ['Figma', 'Design Systems', 'Design Tokens', 'Adobe Illustrator', 'Adobe Photoshop', 'UI/UX Architecture'],
        },
      ],
    },
    stackSection: {
      tag: 'Technical Capabilities',
      title: 'Technical Stack & Governance Matrix',
      subtitle:
        'Pragmatic, battle-tested technologies selected for long-term maintainability, strict typing, and high operational velocity.',
      groups: [
        {
          category: 'Architecture, Cloud & DevOps',
          accent: 'cyan',
          description: 'Resilient multi-tenant infrastructure, container governance, and automated CI/CD rollouts.',
          skills: [
            { name: 'Distributed Systems' },
            { name: 'Multi-Tenancy (PostgreSQL RLS)' },
            { name: 'Docker & Docker Compose' },
            { name: 'Linux / Debian Server Admin' },
            { name: 'Reverse Proxy & TLS (Nginx/Traefik)' },
            { name: 'CI/CD (GitHub Actions)' },
            { name: 'Observability & Logging' },
            { name: 'FinOps & Infrastructure Cost Optimization' },
          ],
        },
        {
          category: 'Backend & Applied AI',
          accent: 'emerald',
          description: 'Type-safe APIs, asynchronous task workers, and deterministic AI extraction pipelines.',
          skills: [
            { name: 'Python (FastAPI, Celery)' },
            { name: 'Node.js & TypeScript' },
            { name: 'PostgreSQL & pgvector' },
            { name: 'Supabase' },
            { name: 'REST APIs & WebSockets' },
            { name: 'Async Task Queues (Redis)' },
            { name: 'Google Gemini API' },
            { name: 'Deterministic OCR & JSON Pipelines' },
            { name: 'Pydantic & Zod Schema Validation' },
          ],
        },
        {
          category: 'Frontend & Design Engineering',
          accent: 'neutral',
          description: 'High-density B2B interfaces, accessible design systems, and sub-100ms client interactions.',
          skills: [
            { name: 'React (Server & Client Components)' },
            { name: 'Next.js (App Router)' },
            { name: 'TypeScript (Strict)' },
            { name: 'Tailwind CSS v4' },
            { name: 'Design Systems & Tokens' },
            { name: 'Figma to Production Code' },
            { name: 'Web Accessibility (WCAG 2.1 AA)' },
            { name: 'Lighthouse Performance Optimization' },
          ],
        },
      ],
      education: {
        tag: 'Academic Foundation',
        title: 'Education & Professional Credentials',
        items: [
          {
            degree: 'Postgraduate Specialization in IT Governance',
            institution: 'Federal University of Tocantins (UFT)',
            period: 'Ongoing',
            status: 'In Progress',
          },
          {
            degree: 'B.Sc. in Software Engineering',
            institution: 'Anhanguera University',
            period: 'Ongoing',
            status: 'In Progress',
          },
          {
            degree: 'A.A.S. in Systems Analysis & Development',
            institution: 'Anhanguera University',
            period: 'Graduated Dec 2025',
            status: 'Completed',
          },
        ],
        languages: [
          {
            language: 'English',
            level: 'Proficient / Bilingual',
            score: 'C2 Native/Bilingual Proficiency (EF SET / Professional Fluency)',
          },
          {
            language: 'Portuguese',
            level: 'Native',
            score: 'Native Speaker',
          },
        ],
      },
    },
    resumeModal: {
      title: 'Curriculum Vitae — Anderson Martins',
      subtitle: 'Senior Product Engineer & System Architect | andersonjose.dev.br',
      printAction: 'Print / Save as PDF',
      downloadDirectAction: 'Download PDF Directly',
      closeAction: 'Close Preview',
      downloadNotice: 'Use Ctrl+P or the button above to export this cleanly formatted document as a standard PDF.',
    },
    footer: {
      readyToTalk: 'Available for Global Senior & Architect Roles',
      ctaHeadline: 'Let’s build mission-critical software that scales cleanly.',
      ctaSubheadline:
        'Open to US/EU remote senior engineering, staff roles, and architectural consulting. Fast responses via email or LinkedIn.',
      copyEmail: 'Copy Email',
      copied: 'Email copied!',
      techNote: 'Engineered with Next.js 16 (App Router), TypeScript (Strict), and Tailwind CSS. Hosted with zero runtime overhead.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
  pt: {
    nav: {
      architecture: 'Arquitetura',
      experience: 'Experiência',
      stack: 'Stack & Governança',
      contact: 'Contato',
      resumePdf: 'Currículo PDF',
    },
    hero: {
      statusBadge: 'Disponível para Posições Senior Product / System Architect Remotas • UTC-3 (Overlap Integral EUA/EU) • Inglês C2',
      headline: 'Senior Product Engineer & System Architect',
      subheadline:
        'Arquiteto de plataformas B2B de ponta a ponta, pipelines de IA aplicada e interfaces de alta precisão. 6+ anos de vivência real nos bastidores de compras públicas e logística hospitalar (SES-TO) traduzidos diretamente em arquitetura de software mensurável.',
      exploreCta: 'Explorar Estudos de Caso',
      githubLabel: 'GitHub',
      behanceLabel: 'Behance',
      copyEmail: 'Copiar E-mail',
      copied: 'E-mail copiado!',
    },
    casesSection: {
      tag: 'Design de Sistemas & Engenharia Aplicada',
      title: 'Estudos de Caso de Arquitetura',
      subtitle:
        'Sistemas em produção projetados para alta resiliência, previsibilidade de custo e zero downtime sob restrições de domínios corporativos rigorosos.',
      tabs: {
        flow: 'Fluxo da Arquitetura',
        uiPreview: 'Preview da Interface (UI)',
      },
      labels: {
        context: 'Gargalo Operacional',
        flow: 'Fluxo da Arquitetura do Sistema',
        tradeoffs: 'Decisões e Trade-offs Chave (ADRs)',
        impact: 'Impacto em Produção',
        systemSpecs: 'Especificações Técnicas',
        liveHover: 'Topologia interativa da esteira (clique nos nós para inspecionar contratos de dados)',
        uiCaption: 'Interface de alta densidade projetada para latência de interação <100ms e alto fluxo de dados.',
      },
      cases: [
        {
          id: 'case-01',
          badge: 'Plataforma SaaS Multi-Tenant',
          title: 'Case 01 — Nexus ERP & OPUS Multi-Tenant SaaS',
          role: 'Arquiteto Líder & Engenheiro de Produto Full-Stack',
          summary:
            'Motor autônomo de ingestão e OCR para diários oficiais municipais e licitações de saúde pública com validação determinística de esquemas e isolamento multi-inquilino.',
          context:
            'O processamento de diários oficiais governamentais heterogêneos exigia mais de 45 minutos de inspeção humana por edital. A volumetria massiva gerava gargalos severos de prazos, riscos de erro em cotações de medicamentos e custos de nuvem exorbitantes se documentos brutos fossem enviados ingenuamente a modelos multimodais comerciais.',
          tradeoff:
            'Implementação de cluster PostgreSQL compartilhado com Row-Level Security (RLS) estrito em vez de bancos isolados por tenant. Isso reduziu drasticamente o custo fixo de instâncias RDS na nuvem, simplificou migrações de esquema entre mais de 100 entidades e unificou backups. Combinado com workers assíncronos (Celery/Redis) para que a latência do LLM Gemini (4-8s) nunca bloqueie a interface React/TypeScript do usuário.',
          metrics: [
            {
              value: '-86%',
              label: 'Ciclo Operacional (45 min → <6 min)',
              highlight: true,
            },
            {
              value: '~$4.000/mês',
              label: 'Economia vs Bancos Isolados e Mão de Obra Manual',
              highlight: true,
            },
            {
              value: '99,7%',
              label: 'Precisão na Validação de Esquema',
            },
            {
              value: '100% RLS',
              label: 'Isolamento Criptográfico e de Dados Multi-Tenant',
            },
          ],
          specs: [
            { key: 'Stack', value: 'Python (FastAPI), React, Next.js, PostgreSQL (RLS), Gemini 1.5 Pro' },
            { key: 'Vazão', value: 'Milhares de páginas de diários oficiais processadas assincronamente' },
            { key: 'Segurança', value: 'Contexto de sessão de tenant criptografado, RBAC e trilhas de auditoria' },
          ],
          uiPreviews: [
            {
              id: 'nexus-dash',
              title: 'Dashboard Operacional Executivo',
              subtitle: 'Velocidade de vendas, curvas de distribuição regional e feeds em tempo real',
              src: '/projects/nexus/dashboard.webp',
              caption: 'Métricas agregadas em tempo real com mais de R$ 4,2M em editais gerenciados, fases de entrega e curvas regionais com filtragem cliente <100ms.',
              latencyNote: '< 100ms Interação de Consulta no Cliente',
            },
            {
              id: 'nexus-ocr',
              title: 'Ingestão Estruturada de Documentos & OCR',
              subtitle: 'Extração via Gemini 1.5 confrontada com preços teto da ata de registro',
              src: '/projects/nexus/ocr-pipeline.webp',
              caption: 'Ingestão de editais municipais com reconhecimento de medicamentos, conciliação de código CATMAT e checagem determinística de preços teto.',
              latencyNote: 'Pipeline Assíncrono: 4,2s por edital de 4 páginas',
            },
            {
              id: 'nexus-matrix',
              title: 'Matriz Analítica de Contratos & Atas',
              subtitle: 'Controle de saldo multi-entidade, travas de reserva e compromissos',
              src: '/projects/nexus/contracts-matrix.webp',
              caption: 'Matriz administrativa de alta densidade exibindo saldos contratuais, cotas por item, histórico de entregas e alertas de exaustão.',
              latencyNote: 'Renderização Virtualizada Instantânea',
            },
          ],
        },
        {
          id: 'case-02',
          badge: 'IA Aplicada & Telemetria em Tempo Real',
          title: 'Case 02 — KYODAI Real-Time Voice AI Coach',
          role: 'Arquiteto de Sistemas de IA & Engenheiro de Design',
          summary:
            'Coach de decisão multimodal em tempo real com resposta sub-segundo para esports de alta competição, orquestrando filtros locais determinísticos e síntese de voz frase a frase.',
          context:
            'A telemetria de jogos competitivos gera entre 10 e 30 atualizações de estado por segundo. Enviar o estado bruto do jogo inteiro para LLMs comerciais resultava em 3 a 5 segundos de latência total, tornando qualquer instrução tática obsoleta antes de ser ouvida. Por outro lado, bots baseados puramente em regras fixas careciam de raciocínio contextual estratégico.',
          tradeoff:
            'Divisão do processamento em pipeline de duas camadas: um worker local ultra-leve em Python avalia gatilhos táticos urgentes em <300ms, enquanto deltas compactos de estado em JSON são transmitidos ao LLM apenas em pontos de inflexão macro. O pipeline de áudio utiliza TTS por streaming frase a frase para iniciar a reprodução da voz antes da conclusão integral da resposta.',
          metrics: [
            {
              value: '<300ms',
              label: 'Resposta a Gatilhos Críticos Locais',
              highlight: true,
            },
            {
              value: '<1s',
              label: 'Latência Ponta a Ponta de Voz Sintetizada',
              highlight: true,
            },
            {
              value: '-78%',
              label: 'Redução de Consumo de Tokens via JSON Diferencial',
            },
            {
              value: '0ms Jitter UI',
              label: 'Threads Independentes de Áudio e Telemetria',
            },
          ],
          specs: [
            { key: 'Telemetria', value: 'WebSocket / Socket UDP Local (30 Hz ingestão contínua)' },
            { key: 'Orquestração LLM', value: 'Streaming de JSON estruturado com garantia estrita de esquema' },
            { key: 'Pipeline de Áudio', value: 'Buffer PCM em pedaços com síntese pré-aquecida' },
          ],
          uiPreviews: [
            {
              id: 'kyodai-hud',
              title: 'HUD Tática Adaptativa no Jogo',
              subtitle: 'Overlay visual sem distrações sincronizado com comandos de voz sub-segundo',
              src: '/projects/kyodai/hud-preview.webp',
              caption: 'Companheiro tático em tempo real exibindo consciência situacional, deltas de recarga e comandos táticos sintetizados diretamente na gameplay.',
              latencyNote: '< 300ms Render Overlay / < 1s Comando de Voz',
            },
          ],
        },
        {
          id: 'case-03',
          badge: 'DevOps & Governança de Nuvem',
          title: 'Case 03 — Migração de Infraestrutura & CI/CD (AproStock / RosaBoard)',
          role: 'Arquiteto de Infraestrutura & DevOps',
          summary:
            'Migração com abordagem zero-trust de plataformas no-code com cobrança por assento para arquitetura declarativa conteinerizada e autogerenciada, com testes automatizados e proxy reverso blindado.',
          context:
            'As operações estavam presas a soluções SaaS no-code cobradas por usuário, inflando licenças mensais em centenas de dólares por operador e trancando dados hospitalares essenciais em silos proprietários, sem testes automatizados ou auditoria confiável.',
          tradeoff:
            'Substituição do SaaS legado por ambientes declarativos com Docker Compose protegidos por um proxy reverso blindado (Nginx/Traefik) com ciclo de vida automatizado de certificados TLS e sub-redes Docker privadas. As portas de banco de dados (5432) foram 100% isoladas da rede pública, eliminando a superfície de ataque externa e substituindo load balancers de nuvem ociosos e caros por proxy reverso local de alta eficiência.',
          metrics: [
            {
              value: '-60%',
              label: 'Custo Recorrente de Infraestrutura Mensal',
              highlight: true,
            },
            {
              value: '<3 min',
              label: 'Build e Deploy Automatizado via CI/CD em PRs',
              highlight: true,
            },
            {
              value: '0 Expostas',
              label: 'Portas de Banco na Internet Pública (100% Sub-rede Privada)',
            },
            {
              value: '100%',
              label: 'Backups Diários Criptografados de Banco',
            },
          ],
          specs: [
            { key: 'Conteinerização', value: 'Docker Compose com builds multi-stage otimizados' },
            { key: 'Pipeline CI/CD', value: 'GitHub Actions: Lint, Jest/Pytest, Análise de Vulnerabilidades Trivy' },
            { key: 'Blindagem de Rede', value: 'TLS 1.3, renovação Let’s Encrypt, rede bridge privada' },
          ],
        },
      ],
    },
    experienceSection: {
      tag: 'Trajetória & Liderança Operacional',
      title: 'Experiência & Histórico de Domínio',
      subtitle:
        'Uma combinação rara de 6+ anos de vivência operacional real em saúde pública com arquitetura de software sênior e engenharia de design.',
      roles: [
        {
          period: 'Nov 2025 – Presente',
          current: true,
          title: 'System Architect & Full-Stack Product Engineer',
          company: 'Grupo Apromédica',
          domain: 'Cadeia de Suprimentos Hospitalar & SaaS B2B',
          description:
            'Liderando a arquitetura e a engenharia de ciclo completo do ecossistema Nexus ERP, SaaS multi-inquilino OPUS e modernização de infraestrutura em nuvem para distribuidora de medicamentos.',
          highlights: [
            'Projetou o pipeline de inteligência licitatória integrando Gemini 1.5 Pro e esquemas determinísticos para digerir editais médicos municipais.',
            'Arquitetou banco PostgreSQL multi-tenant com Row-Level Security, atendendo diferentes empresas com manutenção centralizada e baixo custo.',
            'Criou e implementou design system de alta densidade em React, Next.js e Tailwind CSS para uso clerical diário intensivo.',
            'Reduziu custos de licenças ao substituir ferramentas externas por plataformas internas conteinerizadas e feitas sob medida.',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL (RLS)', 'Docker', 'Gemini API', 'Tailwind CSS'],
        },
        {
          period: 'Out 2019 – Nov 2025',
          title: 'Analista de Operações & Requisitos de Sistemas',
          company: 'Secretaria de Estado da Saúde (SES-TO)',
          domain: 'Logística de Saúde Pública & Governança/Compliance',
          description:
            'Atuação contínua por 6 anos mapeando fluxos institucionais complexos, contratações públicas, cadeia de suprimentos farmacêuticos e auditoria de conformidade.',
          highlights: [
            'Traduziu legislações licitatórias complexas (Leis 8.666/93 e 14.133/21) em especificações técnicas para equipes de desenvolvimento e logística.',
            'Monitorou e auditou fluxos de distribuição de medicamentos em nível estadual, otimizando o abastecimento dos polos hospitalares regionais.',
            'Atuou como ponte estratégica entre corpo médico, gestores públicos e esquadrões de tecnologia da informação.',
            'Consolidou profundo conhecimento prático sobre auditoria, rastreabilidade e integridade de dados em ambientes institucionais de alta consequência.',
          ],
          technologies: ['Análise de Sistemas', 'Mapeamento de Processos (BPMN)', 'Direito Administrativo e Licitações', 'Engenharia de Requisitos', 'Auditoria Logística'],
        },
        {
          period: '2018 – Presente (Contínuo)',
          title: 'Designer UI/UX & Identidade Visual Sênior',
          company: 'Atuação Independente (Global)',
          domain: 'Design Systems & Engenharia de Produto',
          description:
            'Desenvolvimento de design systems de alta precisão, identidades visuais corporativas e protótipos de alta fidelidade para startups de tecnologia e produtos corporativos.',
          highlights: [
            'Desenvolveu design systems completos no Figma com governança de tokens, contrastes acessíveis e composição modular.',
            'Integrou Adobe Creative Suite (Illustrator, Photoshop) com Figma para alinhar excelência estética e máxima performance no frontend.',
            'Eliminou atritos de handoff entre design e engenharia mapeando tokens do Figma diretamente para classes e variáveis do Tailwind CSS.',
          ],
          technologies: ['Figma', 'Design Systems', 'Design Tokens', 'Adobe Illustrator', 'Adobe Photoshop', 'Arquitetura UI/UX'],
        },
      ],
    },
    stackSection: {
      tag: 'Competências Técnicas',
      title: 'Stack Tecnológica & Matriz de Governança',
      subtitle:
        'Tecnologias pragmáticas e consolidadas, selecionadas para manutenibilidade no longo prazo, tipagem estrita e alta velocidade operacional.',
      groups: [
        {
          category: 'Arquitetura, Cloud & DevOps',
          accent: 'cyan',
          description: 'Infraestrutura multi-tenant resiliente, governança de contêineres e esteiras de CI/CD automatizadas.',
          skills: [
            { name: 'Sistemas Distribuídos' },
            { name: 'Multi-Tenancy (PostgreSQL RLS)' },
            { name: 'Docker & Docker Compose' },
            { name: 'Administração Linux / Debian' },
            { name: 'Proxy Reverso & TLS (Nginx/Traefik)' },
            { name: 'CI/CD (GitHub Actions)' },
            { name: 'Observabilidade & Trilha de Logs' },
            { name: 'FinOps & Otimização de Custos de Cloud' },
          ],
        },
        {
          category: 'Backend & IA Aplicada',
          accent: 'emerald',
          description: 'APIs fortemente tipadas, workers de processamento assíncrono e pipelines determinísticos de extração.',
          skills: [
            { name: 'Python (FastAPI, Celery)' },
            { name: 'Node.js & TypeScript' },
            { name: 'PostgreSQL & pgvector' },
            { name: 'Supabase' },
            { name: 'APIs REST & WebSockets' },
            { name: 'Filas Assíncronas (Redis)' },
            { name: 'Google Gemini API' },
            { name: 'Pipelines Determinísticos OCR & JSON' },
            { name: 'Validação de Esquemas Pydantic & Zod' },
          ],
        },
        {
          category: 'Frontend & Design Engineering',
          accent: 'neutral',
          description: 'Interfaces B2B de alta densidade de informação, design systems acessíveis e interação sub-100ms.',
          skills: [
            { name: 'React (Server & Client Components)' },
            { name: 'Next.js (App Router)' },
            { name: 'TypeScript (Strict)' },
            { name: 'Tailwind CSS v4' },
            { name: 'Design Systems & Tokens' },
            { name: 'Do Figma para Código de Produção' },
            { name: 'Acessibilidade Web (WCAG 2.1 AA)' },
            { name: 'Otimização Lighthouse (98+ Performance)' },
          ],
        },
      ],
      education: {
        tag: 'Fundamentação Acadêmica',
        title: 'Formação Acadêmica & Credenciais',
        items: [
          {
            degree: 'Pós-Graduação / Especialização em Governança de TI',
            institution: 'Universidade Federal do Tocantins (UFT)',
            period: 'Em andamento',
            status: 'Cursando',
          },
          {
            degree: 'Bacharelado em Engenharia de Software',
            institution: 'Universidade Anhanguera',
            period: 'Em andamento',
            status: 'Cursando',
          },
          {
            degree: 'Graduação Tecnológica em Análise e Desenvolvimento de Sistemas',
            institution: 'Universidade Anhanguera',
            period: 'Concluído Dez 2025',
            status: 'Concluído',
          },
        ],
        languages: [
          {
            language: 'Inglês',
            level: 'Fluente / Bilíngue',
            score: 'C2 Proficiência Nativa/Bilíngue (EF SET / Fluência Profissional)',
          },
          {
            language: 'Português',
            level: 'Nativo',
            score: 'Língua Materna',
          },
        ],
      },
    },
    resumeModal: {
      title: 'Curriculum Vitae — Anderson Martins',
      subtitle: 'Senior Product Engineer & System Architect | andersonjose.dev.br',
      printAction: 'Imprimir / Salvar em PDF',
      downloadDirectAction: 'Baixar PDF Diretamente',
      closeAction: 'Fechar Visualização',
      downloadNotice: 'Use Ctrl+P ou o botão acima para salvar ou imprimir este currículo em PDF limpo e formatado.',
    },
    footer: {
      readyToTalk: 'Disponível para Oportunidades Sênior & Arquitetura',
      ctaHeadline: 'Vamos construir sistemas robustos e produtos preparados para alta escala.',
      ctaSubheadline:
        'Aberto a oportunidades remotas globais (EUA, Europa e Brasil), liderança técnica e consultoria de arquitetura de software.',
      copyEmail: 'Copiar E-mail',
      copied: 'E-mail copiado!',
      techNote: 'Desenvolvido com Next.js 16 (App Router), TypeScript (Strict) e Tailwind CSS. Hospedado com zero overhead de runtime.',
      rights: 'Todos os direitos reservados.',
      backToTop: 'Voltar ao topo',
    },
  },
};
