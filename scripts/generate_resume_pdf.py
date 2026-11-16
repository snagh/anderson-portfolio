from playwright.sync_api import sync_playwright

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Anderson Martins — Resume</title>
<style>
  @page { size: A4; margin: 14mm 14mm 14mm 14mm; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #111827;
    background: #ffffff;
    line-height: 1.35;
    font-size: 9pt;
    margin: 0;
    padding: 0;
  }
  .header { border-bottom: 1.5pt solid #111827; padding-bottom: 6pt; margin-bottom: 8pt; }
  .name { font-size: 17pt; font-weight: 800; letter-spacing: -0.5pt; margin: 0 0 2pt 0; color: #111827; }
  .title { font-size: 10pt; font-weight: 700; color: #0284c7; margin: 0 0 4pt 0; text-transform: uppercase; letter-spacing: 0.5pt; }
  .contacts { font-size: 8pt; color: #4b5563; display: flex; flex-wrap: wrap; gap: 8pt; }
  .contacts a { color: #111827; text-decoration: none; font-weight: 600; }
  
  .section-title {
    font-size: 9pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8pt;
    color: #111827;
    border-bottom: 0.75pt solid #d1d5db;
    padding-bottom: 2pt;
    margin: 8pt 0 4pt 0;
  }
  
  .role-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1pt; }
  .role-title { font-weight: 700; color: #111827; font-size: 9pt; }
  .role-period { font-size: 8pt; color: #6b7280; font-family: monospace; }
  .role-company { font-size: 8pt; font-weight: 600; color: #0284c7; margin-bottom: 2pt; }
  .role-desc { font-size: 8pt; color: #374151; margin-bottom: 3pt; line-height: 1.3; }
  
  ul { margin: 0 0 5pt 0; padding-left: 13pt; }
  li { margin-bottom: 2pt; font-size: 8pt; color: #374151; }
  li strong { color: #111827; }
  
  .skills-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6pt; margin-top: 3pt; }
  .skill-box { background: #f9fafb; border: 0.5pt solid #e5e7eb; border-radius: 3pt; padding: 4pt 6pt; }
  .skill-box strong { display: block; font-size: 8pt; color: #111827; margin-bottom: 2pt; }
  .skill-box span { font-size: 7.5pt; color: #4b5563; line-height: 1.25; display: block; }
  
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10pt; }
  .edu-item { margin-bottom: 3pt; }
  .edu-deg { font-weight: 600; font-size: 8pt; color: #111827; }
  .edu-inst { font-size: 7.5pt; color: #6b7280; }
</style>
</head>
<body>

<div class="header">
  <h1 class="name">Anderson José Campos Martins (Anderson Martins)</h1>
  <div class="title">Senior Product Engineer & System Architect</div>
  <div class="contacts">
    <span>Palmas, TO, Brazil (UTC-3 • Full US/EU Overlap)</span>
    <span>•</span>
    <span><a href="mailto:andersonjose.pbs@gmail.com">andersonjose.pbs@gmail.com</a></span>
    <span>•</span>
    <span>+55 (63) 98130-1098</span>
    <span>•</span>
    <span><a href="https://andersonjose.dev.br">andersonjose.dev.br</a></span>
    <span>•</span>
    <span><a href="https://github.com/snagh">github.com/snagh</a></span>
    <span>•</span>
    <span><a href="https://linkedin.com/in/andersonsnagh">linkedin.com/in/andersonsnagh</a></span>
  </div>
</div>

<div class="section-title">Executive Summary</div>
<p class="role-desc">
  Senior Product Engineer & System Architect specializing in end-to-end B2B platforms, applied AI ingestion pipelines, and high-precision user interfaces. Brings 6+ years of rigorous operational domain experience in government healthcare logistics, public bidding, and statutory compliance before architecting production enterprise systems—directly translating operational and financial bottlenecks into deterministic, resilient software architectures. Fluent bilingual communication (C2 English, Native Portuguese).
</p>

<div class="section-title">Core Engineering Competencies</div>
<div class="skills-grid">
  <div class="skill-box">
    <strong>Architecture & Cloud</strong>
    <span>Distributed Systems, Multi-Tenant PostgreSQL (RLS), Docker, Linux, Hardened TLS 1.3 Reverse Proxy, GitHub Actions CI/CD, FinOps.</span>
  </div>
  <div class="skill-box">
    <strong>Backend & Applied AI</strong>
    <span>Python (FastAPI, Celery), Node.js, TypeScript, Google Gemini 1.5, Deterministic OCR Pipelines, Redis Task Queues, Pydantic & Zod.</span>
  </div>
  <div class="skill-box">
    <strong>Frontend & Design Engineering</strong>
    <span>React, Next.js (App Router), Tailwind CSS, Figma Design Systems, Sub-100ms UI Latency, Accessibility (WCAG 2.1 AA), Lighthouse 98+.</span>
  </div>
</div>

<div class="section-title">Production Experience</div>

<div style="margin-bottom: 5pt;">
  <div class="role-head">
    <span class="role-title">System Architect & Full-Stack Product Engineer</span>
    <span class="role-period">Nov 2025 – Present</span>
  </div>
  <div class="role-company">Grupo Apromédica • Healthcare Supply Chain & B2B SaaS</div>
  <div class="role-desc">
    Architected and shipped Nexus ERP and OPUS multi-tenant SaaS for pharmaceutical distribution across municipal and state hospitals.
  </div>
  <ul>
    <li><strong>Autonomous Ingestion & OCR:</strong> Built async Python + Gemini 1.5 pipeline extracting unstructured gazettes and public bids; reduced operational cycle by <strong>86% (45m &rarr; &lt;6m)</strong>, saving ~$4,000/mo in clerical overhead.</li>
    <li><strong>Multi-Tenant Architecture:</strong> Designed shared PostgreSQL with Row-Level Security (RLS), supporting 100+ entities with unified migrations and zero tenant cross-contamination.</li>
    <li><strong>Interface Engineering:</strong> Built high-density, accessible React/TS interface tailored for high-volume clerical data entry with sub-100ms client query response.</li>
    <li><strong>Infrastructure Modernization:</strong> Migrated legacy third-party no-code tools into containerized self-hosted Docker architectures with automated CI/CD and zero exposed DB ports, reducing monthly hosting overhead by 60%.</li>
  </ul>
</div>

<div style="margin-bottom: 5pt;">
  <div class="role-head">
    <span class="role-title">Operations & Systems Requirements Analyst</span>
    <span class="role-period">Oct 2019 – Nov 2025</span>
  </div>
  <div class="role-company">State Secretariat of Health (SES-TO) • Public Healthcare Logistics & Compliance</div>
  <div class="role-desc">
    Served 6 continuous years mapping public health procurement, pharmaceutical supply chain logistics, and administrative workflows.
  </div>
  <ul>
    <li><strong>Statutory Technical Mapping:</strong> Translated statutory procurement laws (Leis 8.666/93 & 14.133/21) into deterministic technical requirements for software squads and logistics teams.</li>
    <li><strong>Logistics Audit:</strong> Monitored statewide hospital distribution networks, diagnosing critical supply bottlenecks and delivery delays.</li>
    <li><strong>Cross-Functional Leadership:</strong> Mediated between medical clinical boards, civil service auditors, and IT development teams to establish reliable audit trails and zero data corruption.</li>
  </ul>
</div>

<div style="margin-bottom: 5pt;">
  <div class="role-head">
    <span class="role-title">Senior UI/UX & Brand Identity Designer</span>
    <span class="role-period">2018 – Present (Continuous)</span>
  </div>
  <div class="role-company">Independent Practice • Global Startups & Enterprise Tools</div>
  <ul>
    <li>Engineered end-to-end design systems in Figma translated directly into production Tailwind CSS tokens, eliminating developer handoff friction.</li>
  </ul>
</div>

<div class="section-title">Education & Credentials</div>
<div class="two-col">
  <div>
    <div class="edu-item">
      <div class="edu-deg">Postgraduate Specialization in IT Governance</div>
      <div class="edu-inst">Federal University of Tocantins (UFT) • In Progress</div>
    </div>
    <div class="edu-item">
      <div class="edu-deg">B.Sc. in Software Engineering</div>
      <div class="edu-inst">Anhanguera University • In Progress</div>
    </div>
    <div class="edu-item">
      <div class="edu-deg">A.A.S. in Systems Analysis & Development</div>
      <div class="edu-inst">Anhanguera University • Graduated Dec 2025</div>
    </div>
  </div>
  <div>
    <div class="edu-item">
      <div class="edu-deg">English Language Proficiency: C2 (Native / Bilingual)</div>
      <div class="edu-inst">EF SET / Full Professional & Technical Fluency</div>
    </div>
    <div class="edu-item">
      <div class="edu-deg">Portuguese: Native Speaker</div>
      <div class="edu-inst">Native Fluency</div>
    </div>
  </div>
</div>

</body>
</html>
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.set_content(html_content)
    page.pdf(
        path="D:/PROJETOS/portfolio-anderson/public/resume.pdf",
        format="A4",
        print_background=True,
        margin={"top": "0mm", "bottom": "0mm", "left": "0mm", "right": "0mm"}
    )
    browser.close()
    print("Generated D:/PROJETOS/portfolio-anderson/public/resume.pdf successfully!")
