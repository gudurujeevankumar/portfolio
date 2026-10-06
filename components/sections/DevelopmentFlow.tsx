'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SiReact,
  SiPython,
  SiDjango,
  SiJavascript,
  SiCss,
  SiMysql,
  SiSqlite,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiNetlify,
} from 'react-icons/si';
import {
  HiOutlineCodeBracket,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCubeTransparent,
  HiOutlineArrowPath,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import GradientEditorial from '@/components/ui/GradientEditorial';

function getToolIcon(tool: string) {
  const t = tool.toLowerCase();
  if (t.includes('react')) return <SiReact className="w-3 h-3 text-[#61DAFB] shrink-0" />;
  if (t.includes('django')) return <SiDjango className="w-3 h-3 text-[#092E20] dark:text-[#44B78B] shrink-0" />;
  if (t.includes('python')) return <SiPython className="w-3 h-3 text-[#3776AB] shrink-0" />;
  if (t.includes('javascript') || t === 'js') return <SiJavascript className="w-3 h-3 text-[#F7DF1E] shrink-0" />;
  if (t.includes('css')) return <SiCss className="w-3 h-3 text-[#1572B6] shrink-0" />;
  if (t.includes('mysql')) return <SiMysql className="w-3 h-3 text-[#4479A1] shrink-0" />;
  if (t.includes('sqlite')) return <SiSqlite className="w-3 h-3 text-[#003B57] dark:text-[#0082C8] shrink-0" />;
  if (t.includes('figma')) return <SiFigma className="w-3 h-3 text-[#F24E1E] shrink-0" />;
  if (t === 'git') return <SiGit className="w-3 h-3 text-[#F05032] shrink-0" />;
  if (t.includes('github')) return <SiGithub className="w-3 h-3 text-foreground shrink-0" />;
  if (t.includes('vercel')) return <SiVercel className="w-3 h-3 text-foreground shrink-0" />;
  if (t.includes('render')) return <SiRender className="w-3 h-3 text-[#46E3B7] shrink-0" />;
  if (t.includes('netlify')) return <SiNetlify className="w-3 h-3 text-[#00C7B7] shrink-0" />;
  if (t.includes('auth')) return <HiOutlineShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />;
  if (t.includes('api') || t.includes('rest')) return <HiOutlineCodeBracket className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('schema') || t.includes('spec') || t.includes('doc')) return <HiOutlineDocumentText className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('loop') || t.includes('iteration')) return <HiOutlineArrowPath className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('metric')) return <HiOutlineChartBar className="w-3 h-3 text-accent shrink-0" />;
  return <HiOutlineCubeTransparent className="w-3 h-3 text-accent shrink-0" />;
}

interface WorkflowStage {
  id: string;
  step: string;
  title: string;
  label: string;
  phase: string;
  shortSummary: string;
  overview: string;
  bullets: string[];
  inputContract: string;
  outputContract: string;
  tools: string[];
}

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'idea',
    step: '01',
    title: 'IDEA',
    label: 'Understand the Problem',
    phase: 'PHASE: DISCOVERY',
    shortSummary: 'Deconstruct requirements before writing code',
    overview:
      'Every robust system begins with radical clarity on the core problem. I analyze requirements, probe user pain points, define success metrics, and eliminate ambiguities before committing architectural effort.',
    bullets: [
      'Problem definition & scope boundary formulation',
      'Target user persona & core workflows',
      'Technical feasibility & constraint mapping',
      'Measurable business & performance criteria',
    ],
    inputContract: 'Raw User Friction & Unstructured Goals',
    outputContract: 'Functional Requirements & Success Bounds',
    tools: ['User Scenarios', 'Problem Scope', 'Constraint Matrix'],
  },
  {
    id: 'design',
    step: '02',
    title: 'DESIGN',
    label: 'Plan Architecture & UI',
    phase: 'PHASE: BLUEPRINT',
    shortSummary: 'System architecture, components & data models',
    overview:
      'Translating problem statements into structured technical plans. I map UI wireframes, create component state hierarchies, design relational database schemas, and define strict API contracts to prevent downstream rework.',
    bullets: [
      'Component tree & state boundary mapping',
      'Relational database schemas & normalizations',
      'RESTful API contracts & endpoint specifications',
      'Figma wireframes & responsive interaction tokens',
    ],
    inputContract: 'Functional Requirements Spec',
    outputContract: 'System Architecture & Schema Blueprints',
    tools: ['Figma', 'Schema DDL', 'REST Specs', 'Component Hierarchy'],
  },
  {
    id: 'build',
    step: '03',
    title: 'BUILD',
    label: 'Implement Clean Code',
    phase: 'PHASE: IMPLEMENTATION',
    shortSummary: 'Crafting responsive interfaces & backend services',
    overview:
      'Building module-by-module with clean, decoupled architecture. I focus on semantic HTML5, modern CSS3 styling, React.js state patterns, and robust Python/Django server logic with strict type and input validations.',
    bullets: [
      'Reusable, accessible React.js components',
      'Python & Django backend endpoints',
      'Semantic HTML5 & modern CSS3 layouts',
      'Defensive programming & deterministic handlers',
    ],
    inputContract: 'Architecture Blueprints & UI Specs',
    outputContract: 'Modular Frontend & Backend Source Code',
    tools: ['React.js', 'Python', 'Django', 'JavaScript', 'CSS3'],
  },
  {
    id: 'integrate',
    step: '04',
    title: 'INTEGRATE',
    label: 'Connect the System',
    phase: 'PHASE: INTEGRATION',
    shortSummary: 'Unifying client, APIs, and persistence layers',
    overview:
      'Connecting isolated software layers into a unified pipeline. I wire React frontends to Django REST endpoints, configure MySQL/SQLite database connections, implement session authentication, and synchronize state.',
    bullets: [
      'RESTful JSON endpoints & payload serialization',
      'MySQL & SQLite database query execution',
      'Token/session authentication & middleware guards',
      'Optimistic state updates & error boundaries',
    ],
    inputContract: 'Decoupled Modules & Services',
    outputContract: 'Unified End-to-End Operational Pipeline',
    tools: ['MySQL', 'SQLite', 'RESTful APIs', 'Auth Middleware'],
  },
  {
    id: 'test',
    step: '05',
    title: 'TEST',
    label: 'Validate & Optimize',
    phase: 'PHASE: VERIFICATION',
    shortSummary: 'Rigorous boundary checks & performance audits',
    overview:
      'Code is only done when verified under realistic stress. I audit responsive breakpoints, test boundary dates and edge cases, inspect network payloads, eliminate race conditions, and optimize execution bottlenecks.',
    bullets: [
      'Cross-viewport responsive testing (mobile to 4K)',
      'Edge-case payload validation & failure modes',
      'Network latency & database index optimization',
      'Code refactoring for readability and maintainability',
    ],
    inputContract: 'Integrated Candidate Application',
    outputContract: 'Stress-Tested, Validated Release Candidate',
    tools: ['Edge-Case Audits', 'Responsive QA', 'Performance Tuning'],
  },
  {
    id: 'deploy',
    step: '06',
    title: 'DEPLOY',
    label: 'Ship to Production',
    phase: 'PHASE: RELEASE',
    shortSummary: 'Production release with automated pipelines',
    overview:
      'Shipping reliable builds into production environments. I leverage Git branch discipline, GitHub code reviews, and automated CI/CD deployments to Vercel and Render with verified HTTPS certificates and monitoring.',
    bullets: [
      'Git trunk-based and feature branch workflows',
      'Automated builds on Vercel (Frontend) & Render (Backend)',
      'Custom DNS, HTTPS encryption & asset caching',
      'Health check monitoring & runtime sanity tests',
    ],
    inputContract: 'Validated Release Candidate',
    outputContract: 'Live Production URL & Operational Service',
    tools: ['Git', 'GitHub', 'Vercel', 'Render', 'Netlify'],
  },
  {
    id: 'iterate',
    step: '07',
    title: 'ITERATE',
    label: 'Continuous Evolution',
    phase: 'PHASE: EVOLUTION',
    shortSummary: 'Measure feedback and feed improvements into Idea',
    overview:
      'Deployment is not the end of the development journey. I monitor operational telemetry, gather user feedback, identify usability friction, and feed discoveries straight back into the next development cycle.',
    bullets: [
      'User interaction and performance telemetry analysis',
      'Bug prioritization & rapid patch iterations',
      'Incremental architecture refactoring',
      'Continuous feedback loop circling back to Idea',
    ],
    inputContract: 'Production Telemetry & User Insights',
    outputContract: 'Refined Insights Feeding Next Cycle (Idea)',
    tools: ['Feedback Loops', 'Metrics Analysis', 'Continuous Iteration'],
  },
];

export default function DevelopmentFlow() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through the 7 stages smoothly unless paused by user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 4200);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const activeStage = WORKFLOW_STAGES[activeStageIndex];

  const handleSelectStage = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveStageIndex(idx);
  };

  return (
    <section
      id="development-flow"
      aria-label="My Development Approach"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 sm:space-y-12"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-border-subtle">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>ENGINEERING APPROACH // WORKFLOW PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.15]">
            How I Build &amp; <br />
            <GradientEditorial>Ship Software</GradientEditorial>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
            Software engineering is fundamentally about disciplined problem-solving. This is the structured,
            continuous lifecycle I follow to take an idea from ambiguous requirements to verified, production-grade reality.
          </p>
        </div>

        {/* Live Cadence Pill & Auto-Cycle Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            title="Toggle automatic stage sequencer"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'
              }`}
            />
            <span>{isAutoPlaying ? 'CADENCE: RUNNING' : 'CADENCE: PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* DESKTOP PIPELINE: 7 CONNECTED NODES WITH ANIMATED CONDUIT (lg+)     */}
      {/* ==================================================================== */}
      <div className="hidden lg:block relative rounded-2xl border border-border bg-surface-card/80 p-6 sm:p-8 backdrop-blur-sm shadow-sm overflow-hidden">
        {/* Subtle background circuit grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

        {/* Top Connecting Pipeline Rail */}
        <div className="relative mb-8 px-4">
          {/* Base Connection Track */}
          <div className="absolute top-6 left-8 right-8 h-[2px] bg-border-subtle" />

          {/* Animated Traveling Particle Track */}
          <div className="absolute top-6 left-8 right-8 h-[2px] overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-transparent via-accent to-accent-cyan opacity-80 transition-all duration-700 ease-out"
              style={{
                width: `${((activeStageIndex + 1) / WORKFLOW_STAGES.length) * 100}%`,
              }}
            />
          </div>

          {/* 7 Stage Nodes */}
          <div className="relative grid grid-cols-7 gap-3">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPast = activeStageIndex > idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleSelectStage(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer transition-all focus:outline-none"
                >
                  {/* Circular Node Station */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-accent text-white shadow-md shadow-accent/25 scale-110 ring-4 ring-accent/20'
                        : isPast
                        ? 'bg-surface-elevated text-accent border border-accent/40 hover:border-accent'
                        : 'bg-surface-elevated text-muted-foreground border border-border-subtle hover:border-border hover:text-foreground'
                    }`}
                  >
                    <span>{stage.step}</span>

                    {/* Active pulse beacon */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-cyan animate-ping" />
                    )}
                  </div>

                  {/* Stage Titles */}
                  <div className="mt-3.5 space-y-0.5">
                    <span
                      className={`block font-mono text-xs font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'text-accent'
                          : isPast
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {stage.title}
                    </span>
                    <span className="block text-[11px] font-mono text-subtle-foreground truncate max-w-[120px]">
                      {stage.label}
                    </span>
                  </div>

                  {/* Directional Indicator (between nodes) */}
                  {idx < WORKFLOW_STAGES.length - 1 && (
                    <div className="absolute -right-2 top-4 text-[10px] font-mono text-subtle-foreground/50 pointer-events-none">
                      →
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Subtle Continuous Feedback Loop Wire (Iterate -> Idea) */}
          <div className="mt-6 pt-3 flex items-center justify-end text-[11px] font-mono text-subtle-foreground gap-2">
            <span className="inline-block w-2 h-2 rounded-full border border-dashed border-accent animate-spin" />
            <span className="tracking-wide">
              CONTINUOUS EVOLUTION: 07 ITERATE → FEEDS INTO 01 IDEA
            </span>
            <span className="text-accent">↺</span>
          </div>
        </div>

        {/* Detailed Active Stage Inspector Panel */}
        <div className="relative mt-6 pt-6 border-t border-border-subtle">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left Column: Stage Deep Dive */}
              <div className="lg:col-span-7 rounded-xl bg-surface-sunken p-6 border border-border-subtle space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-accent/15 text-accent uppercase border border-accent/20">
                      {activeStage.phase}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      STEP {activeStage.step} OF 07
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-foreground tracking-tight">
                    {activeStage.label}
                  </h3>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {activeStage.overview}
                  </p>
                </div>

                {/* Core Execution Checklist */}
                <div className="space-y-2 pt-2 border-t border-border-subtle/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground font-medium block">
                    Core Methodologies &amp; Practices
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStage.bullets.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-xs font-mono text-foreground/90"
                      >
                        <span className="text-accent shrink-0 mt-0.5">✓</span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical I/O Contract & Pipeline Artifacts */}
              <div className="lg:col-span-5 rounded-xl bg-surface-elevated p-6 border border-border-subtle space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase text-foreground tracking-wider">
                      STAGE I/O CONTRACT
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                      PASS CRITERIA MET
                    </span>
                  </div>

                  {/* Input Contract Box */}
                  <div className="p-3 rounded-lg bg-surface-card border border-border-subtle space-y-1">
                    <span className="text-[9px] font-mono text-subtle-foreground uppercase tracking-wider block">
                      INCOMING ARTIFACT (INPUT)
                    </span>
                    <p className="text-xs font-mono text-foreground font-medium">
                      {activeStage.inputContract}
                    </p>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1">
                    <span className="text-xs font-mono text-accent">↓ PROCESS ENGINE</span>
                  </div>

                  {/* Output Contract Box */}
                  <div className="p-3 rounded-lg bg-surface-card border border-accent/25 space-y-1 shadow-2xs">
                    <span className="text-[9px] font-mono text-accent uppercase tracking-wider block">
                      OUTGOING ARTIFACT (DELIVERABLE)
                    </span>
                    <p className="text-xs font-mono text-foreground font-medium">
                      {activeStage.outputContract}
                    </p>
                  </div>
                </div>

                {/* Primary Tools Applied */}
                <div className="space-y-2 pt-3 border-t border-border-subtle">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Tools &amp; Frameworks Leveraged
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-sunken border border-border-subtle text-foreground/80"
                      >
                        {getToolIcon(tool)}
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MOBILE PIPELINE: VERTICAL SYSTEM STEPPER (lg:hidden)                 */}
      {/* ==================================================================== */}
      <div className="lg:hidden space-y-4">
        {WORKFLOW_STAGES.map((stage, idx) => {
          const isActive = activeStageIndex === idx;

          return (
            <div
              key={stage.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isActive
                  ? 'border-accent bg-surface-card shadow-sm'
                  : 'border-border-subtle bg-surface-card/60'
              }`}
            >
              {/* Stepper Header Button */}
              <button
                type="button"
                onClick={() => handleSelectStage(idx)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-accent text-white shadow-xs'
                        : 'bg-surface-sunken text-muted-foreground border border-border-subtle'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-foreground">
                        {stage.title}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {`// ${stage.phase.replace('PHASE: ', '')}`}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-sans block mt-0.5">
                      {stage.label}
                    </span>
                  </div>
                </div>

                <span className="text-muted-foreground font-mono text-xs">
                  {isActive ? '▲' : '▼'}
                </span>
              </button>

              {/* Expanded Card Details */}
              {isActive && (
                <div className="px-4 pb-5 pt-1 space-y-4 border-t border-border-subtle/70 font-sans">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.overview}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground block">
                      Key Practices:
                    </span>
                    <ul className="space-y-1.5">
                      {stage.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs font-mono text-foreground/90"
                        >
                          <span className="text-accent mt-0.5">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground block">
                      Tools &amp; Frameworks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.tools.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono bg-surface border border-border-subtle text-foreground/80"
                        >
                          {getToolIcon(t)}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-sunken border border-border-subtle space-y-1 font-mono text-xs">
                    <div className="text-[10px] text-muted-foreground">OUTCOME:</div>
                    <div className="text-accent font-medium text-[11px]">
                      {stage.outputContract}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Mobile Return Loop Indicator */}
        <div className="p-3 rounded-xl border border-dashed border-border-subtle bg-surface-sunken text-center text-xs font-mono text-muted-foreground flex items-center justify-center gap-2">
          <span className="text-accent">↺</span>
          <span>Iterative Loop: 07 Iterate continuously feeds back into 01 Idea</span>
        </div>
      </div>
    </section>
  );
}
