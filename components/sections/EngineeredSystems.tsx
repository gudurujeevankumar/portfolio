'use client';

import React from 'react';
import Link from 'next/link';
import GradientEditorial from '@/components/ui/GradientEditorial';
import ECUTelemetry from '@/components/ECUTelemetry';
import { FiArrowRight } from 'react-icons/fi';
import {
  SiPython,
  SiMysql,
  SiJavascript,
  SiCss,
  SiGit,
  SiReact,
  SiSqlite,
  SiVercel,
  SiDjango,
} from 'react-icons/si';

export default function EngineeredSystems() {
  return (
    <section
      id="selected-work"
      aria-label="Engineered Systems & Production Code"
      className="relative w-full py-20 sm:py-28 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto space-y-12 sm:space-y-16 border-t border-border-subtle/80"
    >
      {/* Editorial Section Header (Open Canvas, Not Inside Any Card) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            <span>SELECTED WORK HIGHLIGHTS // 01</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-[1.08]">
            Engineered Systems &amp; <br className="hidden sm:inline" />
            <GradientEditorial>Production Code</GradientEditorial>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
            A small preview of the systems I&apos;ve designed, developed, and deployed. Exploring
            real-world problems through code, data and scalable architecture.
          </p>
        </div>

        <Link
          href="/work"
          className="btn-secondary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all self-start md:self-end hover:-translate-y-0.5 group min-h-[44px]"
        >
          <span>Explore All Projects</span>
          <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* =================================================================== */}
      {/* 1. PRIMARY FEATURED WORK: FUEL CONSUMPTION & ECU TELEMETRY (LARGE) */}
      {/* =================================================================== */}
      <div className="rounded-3xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 bg-white/85 dark:bg-surface-card/90 backdrop-blur-xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.09),0_4px_12px_rgba(80,60,120,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group card-tint-lavender">
        {/* Subtle Ambient Glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 w-96 h-96 bg-purple-600/[0.05] dark:bg-purple-600/16 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/25 shadow-2xs">
                Flagship Case Study
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-muted-foreground shadow-2xs">
                Python Application
              </span>
              <span className="text-xs font-mono text-muted-foreground ml-auto">2025</span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-sans group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Fuel Consumption Prediction &amp; ECU Telemetry
              </h3>
              <p className="text-sm font-mono text-purple-600 dark:text-purple-300 font-medium">
                Vehicle Sensor Telemetry &amp; Analytics Dashboard
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
              Automotive telemetry analytics system predicting vehicle fuel consumption rates from
              OBD-II sensor feeds (RPM, speed, throttle) using machine learning models, optimized for
              fleet fuel efficiency.
            </p>

            {/* Subtle Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/90 shadow-2xs">
                <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/90 shadow-2xs">
                <SiMysql className="w-3.5 h-3.5 text-[#4479A1]" /> MySQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/90 shadow-2xs">
                <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/90 shadow-2xs">
                <SiCss className="w-3.5 h-3.5 text-[#1572B6]" /> CSS3
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/90 shadow-2xs">
                <SiGit className="w-3.5 h-3.5 text-[#F05032]" /> Git
              </span>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-subtle">
              <Link
                href="/work/ecu-fuel-prediction"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all active:scale-[0.98] w-full min-[480px]:w-auto min-h-[44px]"
              >
                <span>View Case Study</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://fuel-consumption-prediction-and-driving.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-0.5"
              >
                <span>Live System ↗</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column: Interactive ECU Telemetry Simulator Console */}
          <div className="lg:col-span-5">
            <ECUTelemetry />
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. SECONDARY SYSTEMS (3-COLUMN RESPONSIVE GRID)                     */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Project 2: AP EAPCET College Predictor */}
        <div className="rounded-2xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 bg-white/80 dark:bg-surface-card/85 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(80,60,120,0.05),0_2px_8px_rgba(80,60,120,0.03)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.08),0_4px_12px_rgba(80,60,120,0.04)] hover:-translate-y-1 flex flex-col justify-between group transition-all duration-200 card-tint-cyan">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/20 shadow-2xs">
                Full-Stack Application
              </span>
              <span className="text-xs font-mono text-muted-foreground">2024</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                AP EAPCET College Predictor
              </h3>
              <p className="text-xs font-mono text-purple-600 dark:text-purple-300 font-medium">
                State Engineering Counseling Allotment Simulator
              </p>
            </div>

            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Counseling allotment predictor evaluating rank percentiles against multi-year cutoff
              matrices for 200+ engineering institutes across Andhra Pradesh.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> React.js
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> Python
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiCss className="w-3.5 h-3.5 text-[#1572B6]" /> CSS3
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiVercel className="w-3.5 h-3.5 text-black dark:text-white" /> Vercel
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
            <span className="text-xs font-mono text-subtle-foreground">
              Multi-Year Rank Matrix
            </span>
            <Link
              href="/work/ap-eapcet-predictor"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              <span>View Case Study</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project 3: AP ICET College Predictor */}
        <div className="rounded-2xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 bg-white/80 dark:bg-surface-card/85 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(80,60,120,0.05),0_2px_8px_rgba(80,60,120,0.03)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.08),0_4px_12px_rgba(80,60,120,0.04)] hover:-translate-y-1 flex flex-col justify-between group transition-all duration-200 card-tint-blue">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/20 shadow-2xs">
                Full-Stack Application
              </span>
              <span className="text-xs font-mono text-muted-foreground">2024</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                AP ICET College Predictor
              </h3>
              <p className="text-xs font-mono text-purple-600 dark:text-purple-300 font-medium">
                MBA &amp; MCA Counseling Allotment Tool
              </p>
            </div>

            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Interactive postgraduate college predictor for AP ICET with real-time rank analysis,
              category trend filtering, and statewide admission benchmarking.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> React.js
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> Python
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiVercel className="w-3.5 h-3.5 text-black dark:text-white" /> Vercel
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
            <span className="text-xs font-mono text-subtle-foreground">
              AU &amp; SVU Quota Modeling
            </span>
            <Link
              href="/work/ap-icet-predictor"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              <span>View Case Study</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project 4: Vid Vault */}
        <div className="md:col-span-2 lg:col-span-1 rounded-2xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 bg-white/80 dark:bg-surface-card/85 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(80,60,120,0.05),0_2px_8px_rgba(80,60,120,0.03)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.08),0_4px_12px_rgba(80,60,120,0.04)] hover:-translate-y-1 flex flex-col justify-between group transition-all duration-200 card-tint-lavender">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/20 shadow-2xs">
                Django Full Stack
              </span>
              <span className="text-xs font-mono text-muted-foreground">2024</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Vid Vault
              </h3>
              <p className="text-xs font-mono text-purple-600 dark:text-purple-300 font-medium">
                Video Hosting &amp; Streaming Platform
              </p>
            </div>

            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Full-stack video hosting platform with user authentication, direct media upload processing,
              streaming playback player, and creator profile feeds.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> Python
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiDjango className="w-3.5 h-3.5 text-[#092E20] dark:text-[#44B78B]" /> Django
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiSqlite className="w-3.5 h-3.5 text-[#003B57] dark:text-[#5BA7D1]" /> SQLite
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white/75 dark:bg-surface/80 border border-black/[0.05] dark:border-white/[0.08] text-foreground/80 shadow-2xs">
                <SiGit className="w-3.5 h-3.5 text-[#F05032]" /> Git
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
            <span className="text-xs font-mono text-subtle-foreground">
              Media Pipelines &amp; Auth
            </span>
            <Link
              href="/work/vid-vault"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              <span>View Case Study</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
