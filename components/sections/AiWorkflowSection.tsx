'use client';

import React from 'react';
import GradientEditorial from '@/components/ui/GradientEditorial';
import {
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';

const AI_PILLARS = [
  {
    title: 'Exploration & Scaffolding',
    description:
      'Rapid prototyping and drafting module scaffolding to benchmark architectural trade-offs and API contracts before finalizing production implementations.',
    icon: HiOutlineSparkles,
    color: '#a855f7',
  },
  {
    title: 'Refactoring & Clean Code',
    description:
      'Identifying code smells, optimizing algorithmic complexity, enforcing strict type definitions, and standardizing modular folder boundaries.',
    icon: HiOutlineCommandLine,
    color: '#818cf8',
  },
  {
    title: 'Defensive Debugging',
    description:
      'Stress-testing asynchronous edge cases, simulating faulty API payloads, resolving race conditions, and generating comprehensive test fixtures.',
    icon: HiOutlineCpuChip,
    color: '#06b6d4',
  },
  {
    title: 'Human-Driven Decisions',
    description:
      'System architecture, normalized database schemas, security perimeters, and final production code ownership remain 100% human-verified.',
    icon: HiOutlineShieldCheck,
    color: '#10b981',
  },
];

const AI_TOOLING = [
  'Claude Code',
  'Google Antigravity',
  'GitHub Copilot',
  'Cursor',
  'ChatGPT',
  'Bolt',
  'Lovable',
  'OpenRouter',
];

export default function AiWorkflowSection() {
  return (
    <section
      id="ai-philosophy"
      aria-label="AI Development Workflow"
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto space-y-10 sm:space-y-12 border-t border-border-subtle/80"
    >
      {/* Editorial Header (Open Canvas) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            <span>AI DEVELOPMENT PHILOSOPHY // 03</span>
          </div>
          <h2 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-[1.08]">
            An <GradientEditorial>accelerator</GradientEditorial>, <br className="hidden sm:block" />
            not a substitute.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-sans leading-relaxed">
            I leverage modern AI development tooling to eliminate repetitive friction, stress-test
            edge cases, and accelerate velocity—while keeping systems architecture, schema
            boundaries, and engineering rigor strictly human-directed.
          </p>
        </div>

        {/* Core Principle Callout (Liquid Glass Surface with Purple Accent Border) */}
        <blockquote className="p-4 min-[380px]:p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-surface-card/90 backdrop-blur-xl border border-purple-500/10 dark:border-white/10 border-l-4 border-l-purple-600 dark:border-l-purple-500 text-xs sm:text-sm lg:text-base font-serif italic text-foreground max-w-full sm:max-w-md self-start lg:self-end leading-relaxed shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)]">
          &ldquo;AI accelerates development, but architecture, engineering judgment, validation, and
          ownership remain human-driven.&rdquo;
        </blockquote>
      </div>

      {/* 4 Pillars Grid (Open, Editorial Columns with Subtle Depth) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 sm:pt-4">
        {AI_PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-4 min-[380px]:p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-surface-card/85 backdrop-blur-xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 hover:-translate-y-1 shadow-[0_10px_35px_rgba(80,60,120,0.05),0_2px_8px_rgba(80,60,120,0.03)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.08),0_4px_12px_rgba(80,60,120,0.04)] transition-all duration-200 space-y-3"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: pillar.color }} />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold font-mono text-foreground uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* AI Tooling Ecosystem Strip */}
      <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono">
        <span className="text-subtle-foreground uppercase tracking-wider text-[11px] font-semibold shrink-0">
          Verified Tooling Stack:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {AI_TOOLING.map((tool) => (
            <span
              key={tool}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/80 dark:bg-white/[0.04] border border-purple-500/10 dark:border-white/10 text-foreground/80 hover:text-foreground hover:border-purple-500/40 shadow-2xs transition-all hover:-translate-y-0.5 text-xs"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
