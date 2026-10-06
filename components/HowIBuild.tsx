'use client';

import React from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import GradientEditorial from '@/components/ui/GradientEditorial';

interface ProcessStep {
  step: string;
  phase: string;
  summary: string;
  details: string;
  deliverables: string[];
  aiAssisted?: boolean;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'IDEA',
    summary: 'Understand the core problem & define clear objectives',
    details:
      'Distill ambiguous ideas into targeted problem statements. Identify target users, evaluate real-world utility, and define concrete technical success criteria before writing any code.',
    deliverables: ['Problem Statement', 'Success Criteria', 'Core User Persona'],
  },
  {
    step: '02',
    phase: 'DOCUMENTATION',
    summary: 'Research requirements, APIs, constraints & references',
    details:
      'Audit API contracts, third-party libraries, regulatory constraints, and architectural references. Benchmark design patterns and establish rigorous functional specifications.',
    deliverables: ['API Contracts', 'Technical Constraints', 'Architecture Specs'],
  },
  {
    step: '03',
    phase: 'ROUGH PLAN',
    summary: 'Deconstruct into features, modules & engineering milestones',
    details:
      'Break high-level vision into modular engineering phases. Define data schema relationships, route hierarchies, state boundaries, and deliverable sprint milestones.',
    deliverables: ['Milestone Breakdown', 'Schema Drafts', 'Sprint Priorities'],
  },
  {
    step: '04',
    phase: 'DESIGN',
    summary: 'Craft user flows, wireframes & high-fidelity UI/UX',
    details:
      'Map end-to-end user navigation flows in Figma. Establish design tokens, typography scales, accessibility contrasts, responsive component layouts, and tactile interactions.',
    deliverables: ['Figma Prototypes', 'Design System Tokens', 'Responsive Layouts'],
  },
  {
    step: '05',
    phase: 'RAPID PROTOTYPE',
    summary: 'Accelerate exploration & validate approaches with AI tooling',
    details:
      'Leverage AI development assistants to rapidly stress-test edge cases, prototype alternative UI concepts, and validate API integration patterns. AI accelerates initial velocity; architectural judgment and core decisions remain mine.',
    deliverables: ['Spike Prototypes', 'Architecture Validation', 'Feasibility Check'],
    aiAssisted: true,
  },
  {
    step: '06',
    phase: 'ENGINEERING',
    summary: 'Build module-by-module: Frontend → Backend → Database',
    details:
      'Implement structured software layers sequentially: component state architecture, robust REST API endpoints, normalized database schemas, secure session management, and build configs.',
    deliverables: ['Frontend Components', 'RESTful Services', 'Database Schemas'],
  },
  {
    step: '07',
    phase: 'TEST',
    summary: 'Manual verification + AI-assisted edge-case coverage',
    details:
      'Conduct rigorous cross-browser testing, viewport responsiveness audits, API stress cases, and authentication boundary checks. Validate real data payloads, error boundaries, and user flows.',
    deliverables: ['Cross-Device QA', 'Edge Case Audits', 'Payload Verification'],
    aiAssisted: true,
  },
  {
    step: '08',
    phase: 'DEPLOY',
    summary: 'Ship to production & verify live operational environments',
    details:
      'Configure automated CI/CD deployment pipelines (Vercel, Render). Verify environment variables, DNS records, HTTPS certs, performance bundles, and live uptime monitoring.',
    deliverables: ['Automated CI/CD', 'Production Verification', 'SSL & DNS Config'],
  },
];

const WORKFLOW_PIPELINE = [
  'IDEA',
  'DOCUMENT',
  'PLAN',
  'DESIGN',
  'PROTOTYPE',
  'BUILD',
  'TEST',
  'DEPLOY',
];

export default function HowIBuild() {
  return (
    <section
      id="process"
      aria-label="Development Process"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>ENGINEERING METHODOLOGY // 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          How I Build &amp; <br />
          <GradientEditorial>Ship Software</GradientEditorial>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          From initial idea to verified production deployment — a structured, iterative engineering approach that bridges conceptual design with resilient systems architecture.
        </p>
      </div>

      {/* Visual Workflow Pipeline Ribbon */}
      <div className="rounded-2xl border border-border bg-surface-card p-4 sm:p-6 shadow-[var(--card-shadow)] overflow-x-auto scrollbar-none">
        <div className="min-w-[700px] flex items-center justify-between gap-2 text-xs font-mono">
          {WORKFLOW_PIPELINE.map((stage, idx) => (
            <React.Fragment key={stage}>
              <div className="flex items-center gap-2 group cursor-default">
                <span className="w-6 h-6 rounded-full bg-surface-sunken border border-border-subtle flex items-center justify-center text-[10px] font-bold text-muted-foreground group-hover:text-accent group-hover:border-accent transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-semibold text-foreground tracking-wider text-[11px] group-hover:text-accent transition-colors">
                  {stage}
                </span>
              </div>
              {idx < WORKFLOW_PIPELINE.length - 1 && (
                <div className="flex-1 h-px bg-border-subtle mx-2 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-border" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 8-Step Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((item, idx) => {
          const tints = ['card-tint-lavender', 'card-tint-cyan', 'card-tint-blue', 'card-tint-mint'];
          const tint = tints[idx % tints.length];
          return (
            <SpotlightCard
              key={item.step}
              className={`p-6 sm:p-7 flex flex-col justify-between group ${tint}`}
              spotlightColor="var(--spotlight-color)"
            >
              <div className="space-y-4">
                {/* Step Badge & Indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                    {item.step} — {item.phase}
                  </span>
                  {item.aiAssisted && (
                    <span
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25"
                      title="AI leveraged as an exploration and productivity accelerator; architecture decisions remain human-engineered"
                    >
                      AI Accelerated
                    </span>
                  )}
                </div>

                {/* Title & Narrative */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground font-sans leading-snug">
                    {item.summary}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Deliverables Tags */}
              <div className="pt-5 mt-5 border-t border-purple-500/8 dark:border-white/8 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground block font-medium">
                  Core Deliverables
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono text-foreground/80 bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
