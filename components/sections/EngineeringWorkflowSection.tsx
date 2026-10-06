'use client';

import React from 'react';
import GradientEditorial from '@/components/ui/GradientEditorial';
import {
  HiOutlineLightBulb,
  HiOutlineSquares2X2,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiRender,
  SiNetlify,
  SiPostman,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const WORKFLOW_STEPS = [
  {
    step: '01',
    id: 'IDEA',
    label: 'Understand the problem',
    icon: HiOutlineLightBulb,
    color: '#a855f7',
    description: 'Distill ambiguous concepts into target problem statements and concrete user success criteria.',
  },
  {
    step: '02',
    id: 'DESIGN',
    label: 'Plan architecture & specs',
    icon: HiOutlineSquares2X2,
    color: '#818cf8',
    description: 'Map component hierarchies, data schemas, API contracts, and responsive UI wireframes.',
  },
  {
    step: '03',
    id: 'BUILD',
    label: 'Write clean, scalable code',
    icon: HiOutlineCodeBracket,
    color: '#06b6d4',
    description: 'Implement modular frontend layers, performant backend endpoints, and normalized databases.',
  },
  {
    step: '04',
    id: 'TEST',
    label: 'Validate & optimize',
    icon: HiOutlineBeaker,
    color: '#ec4899',
    description: 'Verify edge cases, error boundaries, viewport responsiveness, and API stress loads.',
  },
  {
    step: '05',
    id: 'DEPLOY',
    label: 'Ship to production',
    icon: HiOutlineRocketLaunch,
    color: '#10b981',
    description: 'Deploy automated CI/CD pipelines to Vercel and Render with live uptime and DNS verification.',
  },
];

const TOOLSET_GROUPS = [
  {
    category: 'Languages & Core',
    tools: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: TbSql, color: '#00758F' },
    ],
  },
  {
    category: 'Frontend & Mobile',
    tools: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    category: 'Backend & Data',
    tools: [
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    category: 'Cloud & Tooling',
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export default function EngineeringWorkflowSection() {
  return (
    <section
      id="workflow"
      aria-label="Engineering Workflow & Core Technologies"
      className="relative w-full py-20 sm:py-28 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto space-y-16 border-t border-border-subtle/80"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            <span>ENGINEERING APPROACH // 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-[1.08]">
            How I <GradientEditorial>Build &amp; Ship</GradientEditorial> Software
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
            A structured, end-to-end approach from idea to production, focused on clean
            architecture, performance, and real-world impact.
          </p>
        </div>

        <div className="px-4 py-2 rounded-full border border-white/80 dark:border-white/10 bg-white/70 dark:bg-surface/80 text-xs font-serif italic text-purple-700 dark:text-purple-300 self-start md:self-end shadow-[0_2px_8px_rgba(20,15,40,0.03),inset_0_1px_0_rgba(255,255,255,0.9)]">
          &ldquo;From idea to verified production deployment.&rdquo;
        </div>
      </div>

      {/* 5-Step Flow Timeline (Fluid Responsive: 1 col mobile, 2-3 col tablet, 5 col desktop) */}
      <div className="relative pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-5 relative items-stretch">
          {WORKFLOW_STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-start sm:items-center text-left sm:text-center group p-4 sm:p-2 rounded-2xl sm:rounded-none bg-white/40 dark:bg-white/[0.02] sm:bg-transparent border border-black/[0.04] dark:border-white/[0.05] sm:border-none"
              >
                {/* Subtle Horizontal Timeline Line on Large Desktop */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-purple-500/35 via-cyan-500/35 to-emerald-500/35 dark:from-purple-500/40 dark:via-cyan-500/40 dark:to-emerald-500/40 -z-0"
                    aria-hidden="true"
                  />
                )}

                {/* Node Container with Ambient Back-Glow */}
                <div className="relative mb-3.5 group/node">
                  {/* Ambient Backlight Aura (glows softly in dark mode) */}
                  <div
                    className="absolute -inset-1.5 rounded-2xl opacity-25 dark:opacity-50 blur-lg transition-all duration-300 group-hover:opacity-85 group-hover:blur-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${step.color} 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Luminous Frosted Glass Node */}
                  <div
                    className="w-16 h-16 rounded-2xl bg-white/90 dark:bg-[#0A0C14]/90 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col items-center justify-center relative z-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 25%, ${step.color}20 0%, transparent 75%)`,
                      borderColor: `${step.color}45`,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      boxShadow: `0 8px 24px -4px ${step.color}25, inset 0 1px 1px 0 rgba(255, 255, 255, 0.16)`,
                    }}
                  >
                    {/* Glowing Icon */}
                    <IconComponent
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: step.color,
                        filter: `drop-shadow(0 0 8px ${step.color}90)`,
                      }}
                    />

                    {/* Step Number Micro-Chip */}
                    <span className="text-[10px] font-mono font-bold tracking-wider mt-1 px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/10 text-foreground/80 dark:text-white/90 transition-colors">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Headline & Short Narrative */}
                <span
                  className="text-xs font-bold font-mono tracking-wider uppercase transition-colors"
                  style={{ color: step.color }}
                >
                  {step.id}
                </span>
                <span className="text-sm font-semibold text-foreground font-sans mt-0.5">
                  {step.label}
                </span>
                <p className="text-xs text-muted-foreground font-sans mt-1.5 leading-relaxed block max-w-sm sm:max-w-[200px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* CORE TECHNOLOGIES & TOOLSET (TACTILE CATEGORIZED PANELS)             */}
      {/* =================================================================== */}
      <div className="pt-12 border-t border-border-subtle space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              ENGINEERING TOOLKIT &amp; ECOSYSTEM
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans">
              Core Technologies &amp; Tools
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-md">
            Languages, frameworks, databases, and deployment platforms I leverage to construct
            production software.
          </p>
        </div>

        {/* 4 Categorized Toolset Columns (Organized Logically) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLSET_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-[20px] bg-white/70 dark:bg-surface-card/60 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(20,15,40,0.02)] space-y-3.5 hover:border-purple-500/30 hover:shadow-card transition-all"
            >
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-subtle-foreground pb-2 border-b border-border-subtle">
                {group.category}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.tools.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] hover:border-purple-500/40 text-foreground/90 transition-all text-xs font-mono group cursor-default shadow-2xs hover:-translate-y-0.5"
                    >
                      <Icon
                        className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: t.color }}
                      />
                      <span>{t.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
