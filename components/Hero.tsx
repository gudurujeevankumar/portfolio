'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import GradientEditorial from '@/components/ui/GradientEditorial';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiVercel,
} from 'react-icons/si';
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiCheck } from 'react-icons/fi';

const HERO_CORE_TOOLS = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
];

// =========================================================================
// PORTRAIT CONFIGURATION: Directly manipulate size, scale, and position here!
// Changes apply instantly in the browser. You can use direct numbers (in pixels)
// =========================================================================
export const PORTRAIT_CONFIG = {
  // Dimensions in pixels (or CSS strings like '480px' / '100%'):
  // Matches the reference design (prominent, high-presence portrait):
  width: 480 as number | string,
  height: 530 as number | string,

  // Scale multiplier:
  // 1.0 = normal (100%), 1.1 = +10% larger, 1.2 = +20% larger, 0.9 = -10% smaller
  scale: 1.0,

  // Pixel positioning offsets:
  // offsetX: positive moves right (+px), negative moves left (-px)
  // offsetY: positive moves down (+px), negative moves up (-px)
  offsetX: 0,
  offsetY: 0,

  // Visual effects
  dropShadow: 'drop-shadow-[0_16px_36px_rgba(124,58,237,0.16)] dark:drop-shadow-[0_20px_48px_rgba(168,85,247,0.28)]',
  fadeMask: '[mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]',
};

export default function Hero() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      aria-label="Introduction & Personal Brand"
      className="relative w-full pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto flex flex-col justify-between min-h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Background Ambient Atmospheric Gradients (Soft Atmospheric Behind Portrait & Stage) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-80 dark:opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 45%, rgba(124,58,237,0.10), transparent 45%), radial-gradient(circle at 80% 55%, rgba(6,182,212,0.07), transparent 40%)`,
          }}
        />
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/[0.035] dark:bg-purple-600/14 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[450px] bg-blue-600/[0.025] dark:bg-cyan-500/12 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-25 dark:opacity-20" />
      </div>

      {/* ========================================================================= */}
      {/* MAIN OPEN HERO STAGE (NO BOUNDING CARD, NO HEAVY SHADOWS, FULL BREATHING) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center flex-1">
        {/* ----------------------------------------------------------------------- */}
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & PROFESSIONAL POSITIONING            */}
        {/* ----------------------------------------------------------------------- */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 z-10 w-full">
          {/* Eyebrow Status Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shadow-[0_0_6px_#a855f7] shrink-0" />
              <span className="hidden min-[480px]:inline">BENGALURU, INDIA // SOFTWARE ENGINEER / FULL-STACK</span>
              <span className="min-[480px]:hidden">BENGALURU, IN // FULL-STACK ENGINEER</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 dark:bg-emerald-950/40 text-[10px] min-[360px]:text-[11px] font-mono text-emerald-800 dark:text-emerald-300 shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
              <span>AVAILABLE FOR FULL-TIME ROLES</span>
            </div>
          </div>

          {/* Grand Display Typography with Fluid Scaling */}
          <div className="space-y-2 max-w-full">
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-foreground font-sans leading-[1.04] break-words">
              Guduru Jeevan Kumar
            </h1>
            <p className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-[34px] leading-snug font-normal text-foreground/90">
              <span>Building software from </span>
              <GradientEditorial>idea to deployment.</GradientEditorial>
            </p>
          </div>

          {/* Core Positioning Narrative */}
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
            Early-career Software Engineer and Full-Stack Developer building robust applications
            across frontend interfaces, APIs, databases, and production deployment.
          </p>

          {/* Open Metrics Strip (Clean, Unboxed, Editorial Statistics with Subtle Dividers) */}
          <div className="grid grid-cols-3 gap-2 min-[380px]:gap-4 sm:gap-6 py-4 sm:py-5 border-y border-border-subtle w-full max-w-xl divide-x divide-border-subtle">
            <div className="pr-2 min-[380px]:pr-4">
              <div className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-sans text-foreground tracking-tight">
                6
              </div>
              <div className="text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mt-1.5 break-words">
                Teams Coordinated
              </div>
            </div>
            <div className="px-2 min-[380px]:px-4 sm:px-6">
              <div className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-sans text-foreground tracking-tight">
                36
              </div>
              <div className="text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mt-1.5 break-words">
                Developers
              </div>
            </div>
            <div className="pl-2 min-[380px]:pl-4 sm:pl-6">
              <div className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-sans text-foreground tracking-tight">
                10+
              </div>
              <div className="text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mt-1.5 break-words">
                Projects Built
              </div>
            </div>
          </div>

          {/* Primary Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
            <Link
              href="/work"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all w-full min-[480px]:w-auto min-h-[44px] text-center"
            >
              <span>View My Work</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={profile.resume.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all w-full min-[480px]:w-auto min-h-[44px] text-center"
            >
              <span>Download Resume</span>
              <FiArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-3 hover:-translate-y-0.5 w-full min-[480px]:w-auto min-h-[44px] text-center"
            >
              <span>Let&apos;s Connect</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Social Icons with WCAG 44px+ touch target */}
            <div className="flex items-center justify-center gap-2 pt-1 min-[480px]:pt-0 min-[480px]:ml-auto sm:ml-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-surface/70 hover:bg-white dark:hover:bg-surface hover:border-purple-500/30 text-muted-foreground hover:text-foreground transition-all shadow-2xs hover:-translate-y-0.5"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-surface/70 hover:bg-white dark:hover:bg-surface hover:border-purple-500/30 text-muted-foreground hover:text-foreground transition-all shadow-2xs hover:-translate-y-0.5"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy Email"
                className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/70 dark:bg-surface/70 hover:bg-white dark:hover:bg-surface hover:border-purple-500/30 text-muted-foreground hover:text-foreground transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
                title={copiedEmail ? 'Email Copied!' : 'Copy Email'}
              >
                {copiedEmail ? (
                  <FiCheck className="w-4 h-4 text-emerald-500" />
                ) : (
                  <FiMail className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* RIGHT COLUMN: PORTRAIT CANVAS (NO CARD BOX, INTEGRATED INTO PAGE)       */}
        {/* ----------------------------------------------------------------------- */}
        <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end min-h-[360px] sm:min-h-[460px] lg:min-h-[530px] overflow-hidden sm:overflow-visible">
          {/* Atmospheric Backlight & Concentric Orbit Guides (Clipped to prevent mobile overflow) */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
            aria-hidden="true"
          >
            <div className="w-[280px] h-[280px] min-[400px]:w-[340px] min-[400px]:h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-purple-500/15 dark:border-purple-500/20 animate-[spin_80s_linear_infinite]" />
            <div className="absolute w-[220px] h-[220px] min-[400px]:w-[270px] min-[400px]:h-[270px] sm:w-[340px] sm:h-[340px] rounded-full border border-cyan-500/10 dark:border-cyan-500/15" />
            <div className="absolute w-[300px] h-[300px] min-[400px]:w-[360px] min-[400px]:h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-black/5 dark:border-white/5" />
            {/* Luminous Halo Behind Portrait */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600/10 dark:from-purple-600/25 to-blue-500/8 dark:to-cyan-500/15 blur-3xl" />
          </div>

          {/* Handwritten / Editorial Annotation */}
          <div className="absolute top-2 right-4 text-right hidden sm:block pointer-events-none select-none z-20">
            <span className="font-serif italic text-purple-600 dark:text-purple-300 text-xs sm:text-sm block leading-tight">
              Turning ideas into
            </span>
            <span className="font-serif italic text-purple-600 dark:text-purple-300 text-xs sm:text-sm flex items-center justify-end gap-1">
              real-world applications <span className="text-base">⤷</span>
            </span>
          </div>

          {/* Jeevan Kumar's Authentic Profile Cutout (Responsive Dimensions) */}
          <div
            className="relative flex items-end justify-center w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-[360px] min-[400px]:h-[420px] sm:h-[480px] lg:h-[530px]"
            style={{
              transform: `translate(${PORTRAIT_CONFIG.offsetX}px, ${PORTRAIT_CONFIG.offsetY}px) scale(${PORTRAIT_CONFIG.scale})`,
              transformOrigin: 'bottom center',
            }}
          >
            <Image
              src="/profile-portrait-cutout.png"
              alt="Guduru Jeevan Kumar — Software Engineer"
              width={540}
              height={600}
              priority
              className={`w-full h-auto max-h-full object-contain object-bottom select-none ${PORTRAIT_CONFIG.dropShadow} ${PORTRAIT_CONFIG.fadeMask}`}
            />

            {/* Subtle Floating Engineering Labels Around Portrait (Liquid Glass Capsules) */}
            <div className="absolute top-[18%] -left-1 sm:-left-6 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-surface-elevated/80 border border-purple-500/25 text-[10px] sm:text-[11px] font-mono font-medium text-purple-900 dark:text-purple-200 shadow-[0_4px_12px_rgba(20,15,40,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md flex items-center gap-1.5 animate-pulse pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
              <span>Frontend</span>
            </div>

            <div className="absolute top-[26%] -right-1 sm:-right-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-surface-elevated/80 border border-cyan-500/25 text-[10px] sm:text-[11px] font-mono font-medium text-cyan-900 dark:text-cyan-200 shadow-[0_4px_12px_rgba(20,15,40,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>Backend</span>
            </div>

            <div className="absolute bottom-[36%] -left-2 sm:-left-8 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-surface-elevated/80 border border-emerald-500/25 text-[10px] sm:text-[11px] font-mono font-medium text-emerald-900 dark:text-emerald-200 shadow-[0_4px_12px_rgba(20,15,40,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span>Problem Solving</span>
            </div>

            <div className="absolute bottom-[20%] -right-1 sm:-right-6 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 dark:bg-surface-elevated/80 border border-purple-500/25 text-[10px] sm:text-[11px] font-mono font-medium text-purple-900 dark:text-purple-200 shadow-[0_4px_12px_rgba(20,15,40,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md flex items-center gap-1.5 pointer-events-none z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
              <span>Scalable Systems</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUPPORTING FOOTER STRIP: OPEN METADATA & CORE ECOSYSTEM BAR                */}
      {/* ========================================================================= */}
      <div className="pt-6 mt-6 sm:pt-8 sm:mt-8 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        {/* Left: Location & Availability Context */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-foreground font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
            Bengaluru, India
          </span>
          <span>•</span>
          <span>Time-Zone Agnostic</span>
          <span>•</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open to Remote &amp; Full-Time</span>
        </div>

        {/* Right: Core Tech Field Ribbon */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-subtle-foreground uppercase tracking-wider text-[10px] font-semibold">
            Core Stack:
          </span>
          {HERO_CORE_TOOLS.map((t) => {
            const Icon = t.icon;
            return (
              <span
                key={t.name}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 hover:text-foreground hover:border-purple-500/40 shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <Icon className="w-3 h-3 shrink-0" style={{ color: t.color }} />
                <span className="text-[11px]">{t.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
