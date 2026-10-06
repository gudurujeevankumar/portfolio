'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import BranchedMenu, { BranchedMenuItemParent } from '@/components/ui/BranchedMenu';
import ECUTelemetry from '@/components/ECUTelemetry';
import GradientEditorial from '@/components/ui/GradientEditorial';
import {
  SiPython,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiRender,
  SiGit,
  SiGithub,
  SiReact,
  SiDjango,
  SiSqlite,
  SiVercel,
  SiNetlify,
  SiGreensock,
  SiJira,
  SiFigma,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

function getTechIcon(name: string) {
  switch (name) {
    case 'Python':
      return <SiPython className="w-3 h-3 text-[#3776AB]" />;
    case 'JavaScript':
      return <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />;
    case 'SQL':
      return <TbSql className="w-3 h-3 text-cyan-400" />;
    case 'HTML5':
      return <SiHtml5 className="w-3 h-3 text-[#E34F26]" />;
    case 'CSS3':
    case 'CSS':
      return <SiCss className="w-3 h-3 text-[#1572B6]" />;
    case 'Bootstrap':
      return <SiBootstrap className="w-3 h-3 text-[#7952B3]" />;
    case 'React.js':
    case 'React Native':
    case 'React':
      return <SiReact className="w-3 h-3 text-[#61DAFB]" />;
    case 'GSAP':
      return <SiGreensock className="w-3 h-3 text-[#88CE02]" />;
    case 'Django':
      return <SiDjango className="w-3 h-3 text-[#092E20] dark:text-[#44B78B]" />;
    case 'MySQL':
      return <SiMysql className="w-3 h-3 text-[#4479A1]" />;
    case 'SQLite':
      return <SiSqlite className="w-3 h-3 text-[#003B57] dark:text-[#5BA7D1]" />;
    case 'Git':
      return <SiGit className="w-3 h-3 text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="w-3 h-3 text-black dark:text-white" />;
    case 'Jira':
      return <SiJira className="w-3 h-3 text-[#0052CC]" />;
    case 'Figma':
      return <SiFigma className="w-3 h-3 text-[#F24E1E]" />;
    case 'Render':
      return <SiRender className="w-3 h-3 text-[#46E3B7]" />;
    case 'Vercel':
      return <SiVercel className="w-3 h-3 text-black dark:text-white" />;
    case 'Netlify':
      return <SiNetlify className="w-3 h-3 text-[#00C7B7]" />;
    default:
      return null;
  }
}

export default function SelectedWork() {
  const { projects } = portfolioData;

  // Key projects lookup
  const ecuAnalytics = projects.find((p) => p.slug === 'ecu-fuel-prediction' || p.id === 'ecu-fuel-prediction');
  const eapcetPredictor = projects.find((p) => p.slug === 'ap-eapcet-predictor' || p.id === 'ap-eapcet-predictor');
  const icetPredictor = projects.find((p) => p.slug === 'ap-icet-predictor' || p.id === 'ap-icet-predictor');
  const vidVault = projects.find((p) => p.slug === 'vid-vault' || p.id === 'vid-vault');
  const skyscannerPicker = projects.find((p) => p.slug === 'skyscanner-travel-date-picker' || p.id === 'skyscanner-travel-date-picker');
  const djangoCrud = projects.find((p) => p.slug === 'django-crud-portal' || p.id === 'django-crud-portal');
  const taskManager = projects.find((p) => p.slug === 'task-manager' || p.id === 'task-manager');
  const productCatalog = projects.find((p) => p.slug === 'product-catalog' || p.id === 'product-catalog');
  const appleClone = projects.find((p) => p.slug === 'apple-web-clone' || p.id === 'apple-web-clone');
  const jioClone = projects.find((p) => p.slug === 'jio-cinema-clone' || p.id === 'jio-cinema-clone');

  // Interactive state for Skyscanner demo widget
  const [selectedDate, setSelectedDate] = useState<number>(14);

  // Interactive simulated rank for EAPCET widget
  const [simulatedRank, setSimulatedRank] = useState<number>(12500);

  // Active project ID tracked via IntersectionObserver for sticky BranchedMenu
  const [activeProjectId, setActiveProjectId] = useState<string>('project-ecu-fuel-prediction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Tree items mapping authentic portfolio projects into clean categories
  const projectTree: BranchedMenuItemParent[] = useMemo(
    () => [
      {
        label: 'Python Web Projects',
        children: [
          {
            value: 'project-ecu-fuel-prediction',
            label: 'ECU Fuel Analytics',
            badge: 'Python & MySQL',
          },
          {
            value: 'project-ap-eapcet-predictor',
            label: 'AP EAPCET Predictor',
            badge: 'React & Python',
          },
        ],
      },
      {
        label: 'Full Stack Projects',
        children: [
          {
            value: 'project-ap-icet-predictor',
            label: 'AP ICET Predictor',
            badge: 'React & Python',
          },
          {
            value: 'project-vid-vault',
            label: 'Video Streaming (Vid Vault)',
            badge: 'Django',
          },
          {
            value: 'project-django-crud-portal',
            label: 'Django CRUD Portal',
            badge: 'Django',
          },
          {
            value: 'project-task-manager',
            label: 'Task Manager Dashboard',
            badge: 'Django',
          },
        ],
      },
      {
        label: 'Frontend Projects',
        children: [
          {
            value: 'project-skyscanner-travel-date-picker',
            label: 'Skyscanner Date Picker',
            badge: 'React',
          },
          {
            value: 'project-product-catalog',
            label: 'React Product Catalog',
            badge: 'React',
          },
        ],
      },
      {
        label: 'Other Projects',
        children: [
          {
            value: 'project-apple-web-clone',
            label: 'Apple Website Clone',
            badge: 'HTML/CSS',
          },
          {
            value: 'project-jio-cinema-clone',
            label: 'Jio Cinema Clone',
            badge: 'HTML/CSS',
          },
        ],
      },
    ],
    []
  );

  // Active project title lookup for mobile dropdown button
  const activeProjectTitle = useMemo(() => {
    for (const group of projectTree) {
      const match = group.children.find((c) => c.value === activeProjectId);
      if (match) return match.label;
    }
    return 'Select Project';
  }, [projectTree, activeProjectId]);

  // Smooth scroll handler
  const handleSelectProject = (projectId: string) => {
    const targetId = projectId.startsWith('#') ? projectId.slice(1) : projectId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveProjectId(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  // IntersectionObserver to automatically detect active project card on scroll
  useEffect(() => {
    const cardElements = document.querySelectorAll('[data-project-card]');
    if (cardElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveProjectId(id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    cardElements.forEach((el) => observer.observe(el));

    return () => {
      cardElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="work"
      aria-label="Selected Projects"
      className="w-full max-w-7xl mx-auto px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 pt-4 sm:pt-6 pb-16"
    >
      {/* 2-Column Work Layout: Sticky IDE Project Explorer (Left) + Scrollable Project Content (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] gap-8 xl:gap-10 items-start relative">
        {/* ================================================================== */}
        {/* LEFT COLUMN: Sticky IDE Project Explorer (Desktop)                 */}
        {/* Behaves like VS Code / Antigravity Explorer: Fixed & Anchored      */}
        {/* ================================================================== */}
        <aside
          aria-label="Project Explorer Navigation"
          className="hidden lg:block sticky top-20 xl:top-24 h-[calc(100vh-5.5rem)] xl:h-[calc(100vh-6.5rem)] w-full self-start z-20"
        >
          <BranchedMenu
            items={projectTree}
            defaultOpen={[0, 1, 2, 3]}
            activeValue={activeProjectId}
            onSelect={handleSelectProject}
            title="PROJECT DIRECTORY"
            subtitle="EXPLORER"
            className="h-full flex flex-col shadow-xl shadow-black/5 dark:shadow-black/30 border-border"
          />
        </aside>

        {/* ================================================================== */}
        {/* RIGHT COLUMN: Project Content & Details (Scrolls Normally)         */}
        {/* ================================================================== */}
        <div className="min-w-0 space-y-10 sm:space-y-14">
          {/* Editorial Section Header */}
          <div className="flex flex-col items-start text-left max-w-3xl pb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>SELECTED SYSTEMS // 03</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
              Selected Work &amp; <br />
              <GradientEditorial>Engineered Systems</GradientEditorial>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
              Production-oriented applications built across web engineering, Python backend services, and interactive frontend interfaces.
            </p>
          </div>

          {/* Mobile Sticky Navigation Banner (compact, never covers project cards) */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border-subtle bg-surface-card font-mono text-xs text-foreground shadow-sm transition-colors hover:border-accent/40 min-h-[44px]"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground uppercase">Project Tree:</span>
                <span className="font-semibold text-accent truncate">{activeProjectTitle}</span>
              </div>
              <span className="text-muted-foreground font-mono text-xs ml-2">
                {isMobileMenuOpen ? '▲ Close' : '▼ Browse (11)'}
              </span>
            </button>

            {isMobileMenuOpen && (
              <div className="mt-2 rounded-xl border border-border-subtle bg-surface-elevated p-3 shadow-lg">
                <BranchedMenu
                  items={projectTree}
                  defaultOpen={[0, 1, 2, 3]}
                  activeValue={activeProjectId}
                  onSelect={handleSelectProject}
                  title="PROJECT DIRECTORY"
                  subtitle="TAP TO JUMP"
                />
              </div>
            )}
          </div>
          {/* ---------------------------------------------------------------- */}
          {/* GROUP 1: PYTHON WEB PROJECTS                                     */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                Python Web Projects
              </h3>
            </div>

            {/* 1. ECU Fuel Analytics */}
            {ecuAnalytics && (
              <div
                id="project-ecu-fuel-prediction"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                  borderColor="var(--color-border-accent)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/30 shadow-2xs">
                      Flagship Case Study
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle">
                      {ecuAnalytics.category}
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {ecuAnalytics.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {ecuAnalytics.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent font-mono font-medium">
                      {ecuAnalytics.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {ecuAnalytics.description}
                  </p>

                  {/* Problem vs Solution Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1.5 shadow-2xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block font-medium">
                        The Challenge
                      </span>
                      <p className="text-xs text-foreground/90 font-sans leading-relaxed">
                        {ecuAnalytics.caseStudy?.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-accent-subtle border border-accent/25 space-y-1.5 shadow-2xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent block font-medium">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-foreground/90 font-sans leading-relaxed">
                        {ecuAnalytics.caseStudy?.solution}
                      </p>
                    </div>
                  </div>

                  {/* Live Telemetry Simulator Console with Bug Fixed */}
                  <div className="pt-2">
                    <ECUTelemetry />
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {ecuAnalytics.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${ecuAnalytics.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 hover:bg-accent/25 text-accent border border-accent/30 font-medium text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] shadow-2xs"
                    >
                      <span>View Case Study</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    {ecuAnalytics.liveUrl && (
                      <a
                        href={ecuAnalytics.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        <span>Live Platform ↗</span>
                      </a>
                    )}
                    {ecuAnalytics.githubUrl && (
                      <a
                        href={ecuAnalytics.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-hover text-foreground font-medium text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]"
                      >
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {/* 2. AP EAPCET College Predictor */}
            {eapcetPredictor && (
              <div
                id="project-ap-eapcet-predictor"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color-cyan)"
                  borderColor="var(--color-accent-cyan)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/30 shadow-2xs">
                      Featured AI Tool
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle">
                      {eapcetPredictor.category}
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {eapcetPredictor.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {eapcetPredictor.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent-cyan font-mono font-medium">
                      {eapcetPredictor.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {eapcetPredictor.description}
                  </p>

                  {/* Cutoff Simulator Widget */}
                  <div className="rounded-xl border border-border bg-surface-sunken p-4 sm:p-5 space-y-3 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                      <span className="text-foreground font-semibold">Counseling Cutoff Simulator</span>
                      <span className="text-accent-cyan text-[11px]">Rank: {simulatedRank.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="500"
                      value={simulatedRank}
                      onChange={(e) => setSimulatedRank(Number(e.target.value))}
                      className="w-full accent-cyan-600 dark:accent-cyan-400 cursor-pointer h-1.5 bg-muted rounded-lg"
                      aria-label="Simulated Rank"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>Top 1,000</span>
                      <span>Rank 25,000</span>
                      <span>Rank 50,000</span>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-[11px]">
                      <span className="text-foreground font-medium">CREC — Computer Science &amp; Engineering</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Safe Allocation</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {eapcetPredictor.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${eapcetPredictor.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-cyan/15 hover:bg-accent-cyan/25 text-accent-cyan border border-accent-cyan/30 font-medium text-xs sm:text-sm transition-all duration-200"
                    >
                      <span>View Case Study</span>
                    </Link>
                    {eapcetPredictor.liveUrl && (
                      <a
                        href={eapcetPredictor.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span>Live Platform ↗</span>
                      </a>
                    )}
                    {eapcetPredictor.githubUrl && (
                      <a
                        href={eapcetPredictor.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-hover text-foreground font-medium text-xs sm:text-sm transition-all duration-200"
                      >
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* GROUP 2: FULL STACK PROJECTS                                     */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                Full Stack &amp; Backend Systems
              </h3>
            </div>

            {/* 3. AP ICET College Predictor */}
            {icetPredictor && (
              <div
                id="project-ap-icet-predictor"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/25 shadow-2xs">
                      Postgraduate Counseling
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {icetPredictor.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {icetPredictor.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent font-mono font-medium">
                      {icetPredictor.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {icetPredictor.description}
                  </p>

                  {/* Architecture & Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase block font-semibold">Specialized Tracks</span>
                      <span className="text-foreground">MBA &amp; MCA Postgrad Allotment Models</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface border border-border-subtle space-y-1">
                      <span className="text-[10px] text-muted-foreground uppercase block font-semibold">Quota Benchmarks</span>
                      <span className="text-foreground">AU &amp; SVU State University Matrices</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {icetPredictor.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${icetPredictor.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {icetPredictor.liveUrl && (
                      <a
                        href={icetPredictor.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Platform ↗</span>
                      </a>
                    )}
                    {icetPredictor.githubUrl && (
                      <a
                        href={icetPredictor.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}


            {/* 5. Video Streaming Platform (Vid Vault) */}
            {vidVault && (
              <div
                id="project-vid-vault"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      Django Video Platform
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25 font-medium">
                      Collaborative Project
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {vidVault.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {vidVault.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                      {vidVault.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {vidVault.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-surface border border-border-subtle text-xs font-mono text-muted-foreground leading-relaxed shadow-2xs">
                    <span className="text-foreground font-semibold">Attribution Note: </span>
                    Collaborative project with repository managed by collaborator. Personal contribution modules pending final verification.
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {vidVault.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${vidVault.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {vidVault.liveUrl && (
                      <a
                        href={vidVault.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Stream ↗</span>
                      </a>
                    )}
                    {vidVault.githubUrl && (
                      <a
                        href={vidVault.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>Collab Repo</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {/* 6. Django CRUD Portal */}
            {djangoCrud && (
              <div
                id="project-django-crud-portal"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      Administrative Portal
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {djangoCrud.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {djangoCrud.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent font-mono">
                      {djangoCrud.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {djangoCrud.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {djangoCrud.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${djangoCrud.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {djangoCrud.liveUrl && (
                      <a
                        href={djangoCrud.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Portal ↗</span>
                      </a>
                    )}
                    {djangoCrud.githubUrl && (
                      <a
                        href={djangoCrud.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {/* 7. Task Manager Dashboard */}
            {taskManager && (
              <div
                id="project-task-manager"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      Productivity Application
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {taskManager.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {taskManager.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent-cyan font-mono">
                      {taskManager.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {taskManager.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {taskManager.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${taskManager.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {taskManager.liveUrl && (
                      <a
                        href={taskManager.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Dashboard ↗</span>
                      </a>
                    )}
                    {taskManager.githubUrl && (
                      <a
                        href={taskManager.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* GROUP 3: FRONTEND PROJECTS                                       */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                Frontend &amp; UI Engineering
              </h3>
            </div>

            {/* 8. Skyscanner Travel Date Picker */}
            {skyscannerPicker && (
              <div
                id="project-skyscanner-travel-date-picker"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/25 shadow-2xs">
                      Component Engineering
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {skyscannerPicker.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {skyscannerPicker.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent-cyan font-mono font-medium">
                      Connected to Skyscanner Virtual Experience
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {skyscannerPicker.description}
                  </p>

                  {/* Interactive Mini Calendar Component Preview */}
                  <div className="p-4 rounded-xl bg-surface-sunken border border-border space-y-3 font-mono shadow-inner">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-border-subtle">
                      <span className="text-foreground font-semibold">Travel Date Range</span>
                      <span className="text-accent text-[11px]">Selected: Oct {selectedDate}, 2025</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-xs">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                        <span key={idx} className="text-subtle-foreground text-[10px] pb-1 font-medium">
                          {day}
                        </span>
                      ))}
                      {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((date) => (
                        <button
                          key={date}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`py-1 rounded text-[11px] transition-colors cursor-pointer ${
                            selectedDate === date
                              ? 'bg-accent text-accent-foreground font-bold shadow-xs'
                              : 'hover:bg-surface-hover text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skyscannerPicker.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${skyscannerPicker.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {skyscannerPicker.liveUrl && (
                      <a
                        href={skyscannerPicker.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Component ↗</span>
                      </a>
                    )}
                    {skyscannerPicker.githubUrl && (
                      <a
                        href={skyscannerPicker.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {/* 9. React Product Catalog */}
            {productCatalog && (
              <div
                id="project-product-catalog"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      React Frontend Explorer
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {productCatalog.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {productCatalog.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent font-mono">
                      {productCatalog.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {productCatalog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {productCatalog.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${productCatalog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {productCatalog.liveUrl && (
                      <a
                        href={productCatalog.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Catalog ↗</span>
                      </a>
                    )}
                    {productCatalog.githubUrl && (
                      <a
                        href={productCatalog.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* GROUP 4: OTHER PROJECTS (LEARNING / CLONES)                      */}
          {/* ---------------------------------------------------------------- */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 pb-3 border-b border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-subtle-foreground" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                Other Projects &amp; Layout Studies
              </h3>
            </div>

            {/* 10. Apple Website Clone */}
            {appleClone && (
              <div
                id="project-apple-web-clone"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      Layout &amp; Typography Study
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {appleClone.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {appleClone.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                      {appleClone.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {appleClone.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {appleClone.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${appleClone.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {appleClone.liveUrl && (
                      <a
                        href={appleClone.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Clone ↗</span>
                      </a>
                    )}
                    {appleClone.githubUrl && (
                      <a
                        href={appleClone.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}

            {/* 11. Jio Cinema Clone */}
            {jioClone && (
              <div
                id="project-jio-cinema-clone"
                data-project-card
                className="scroll-mt-28"
              >
                <SpotlightCard
                  className="p-6 sm:p-8 space-y-6 group"
                  spotlightColor="var(--spotlight-color)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle font-medium">
                      Foundational Journey Project
                    </span>
                    <span className="text-xs font-mono text-subtle-foreground ml-auto">
                      {jioClone.year}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
                      {jioClone.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                      {jioClone.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {jioClone.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {jioClone.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-surface border border-border-subtle"
                      >
                        <span className="flex-shrink-0">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    <Link
                      href={`/work/${jioClone.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline"
                    >
                      <span>Case Study →</span>
                    </Link>
                    {jioClone.liveUrl && (
                      <a
                        href={jioClone.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors ml-auto"
                      >
                        <span>Live Site ↗</span>
                      </a>
                    )}
                    {jioClone.githubUrl && (
                      <a
                        href={jioClone.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
