import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import LogoLoop, { LogoItem } from '@/components/ui/LogoLoop';
import GradientEditorial from '@/components/ui/GradientEditorial';
import {
  skillsMatrixData,
  approvedAiTools,
  aiWorkflowSteps,
  engineeringFlowStages,
  ecosystemSummarySkills,
} from '@/data/skills';
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiGreensock,
  SiDjango,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiJira,
  SiFigma,
  SiVercel,
  SiRender,
  SiNetlify,
  SiAnthropic,
  SiGithubcopilot,
  SiCursor,
  SiOpenrouter,
} from 'react-icons/si';
import { TbSql, TbBrandOpenai } from 'react-icons/tb';
import {
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineCloudArrowUp,
  HiOutlineArrowLongRight,
  HiOutlineArrowDown,
  HiOutlineSparkles,
  HiOutlineCheck,
  HiOutlineBolt,
  HiOutlineHeart,
  HiOutlineCube,
  HiOutlineArrowsRightLeft,
  HiOutlineArrowPath,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquares2X2,
  HiOutlineBugAnt,
  HiOutlineLightBulb,
  HiOutlineCpuChip,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const LIFECYCLE_STAGE_META = [
  {
    icon: HiOutlineLightBulb,
    tint: 'card-tint-lavender',
    accent: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: HiOutlineCube,
    tint: 'card-tint-cyan',
    accent: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: HiOutlineDocumentText,
    tint: 'card-tint-blue',
    accent: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: HiOutlineCodeBracket,
    tint: 'card-tint-lavender',
    accent: 'text-accent',
    badgeBg: 'bg-accent/10 border-accent/25',
  },
  {
    icon: HiOutlineShieldCheck,
    tint: 'card-tint-mint',
    accent: 'text-teal-600 dark:text-teal-400',
    badgeBg: 'bg-teal-500/10 border-teal-500/20',
  },
  {
    icon: HiOutlineRocketLaunch,
    tint: 'card-tint-lavender',
    accent: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-500/10 border-purple-500/20',
  },
];

export const metadata: Metadata = {
  title: 'Skills & Engineering Matrix — Guduru Jeevan Kumar',
  description:
    'The confirmed technical skills, engineering concepts, AI development workflow, and full-stack pipeline of Guduru Jeevan Kumar.',
};

/**
 * Returns the matching authentic brand icon and color accent for a skill
 */
function getSkillIcon(name: string) {
  switch (name) {
    // 01 — Languages
    case 'Python':
      return <SiPython className="text-[#3776AB]" />;
    case 'JavaScript':
      return <SiJavascript className="text-[#F7DF1E]" />;
    case 'SQL':
      return <TbSql className="text-cyan-400" />;

    // 02 — Frontend Engineering
    case 'HTML5':
      return <SiHtml5 className="text-[#E34F26]" />;
    case 'CSS3':
      return <SiCss className="text-[#1572B6]" />;
    case 'Bootstrap':
      return <SiBootstrap className="text-[#7952B3]" />;
    case 'React.js':
    case 'React Native':
      return <SiReact className="text-[#61DAFB]" />;
    case 'GSAP':
      return <SiGreensock className="text-[#88CE02]" />;

    // 03 — Backend Engineering
    case 'Django':
      return <SiDjango className="text-[#092E20] dark:text-[#44B78B]" />;

    // 04 — Databases
    case 'MySQL':
      return <SiMysql className="text-[#4479A1]" />;
    case 'SQLite':
      return <SiSqlite className="text-[#003B57] dark:text-[#5BA7D1]" />;

    // 05 — Tools & Collaboration
    case 'Git':
      return <SiGit className="text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="text-foreground" />;
    case 'Jira':
      return <SiJira className="text-[#0052CC]" />;
    case 'Figma':
      return <SiFigma className="text-[#F24E1E]" />;

    // 06 — Deployment
    case 'Render':
      return <SiRender className="text-[#46E3B7]" />;
    case 'Vercel':
      return <SiVercel className="text-foreground" />;
    case 'Netlify':
      return <SiNetlify className="text-[#00C7B7]" />;

    default:
      return null;
  }
}

/**
 * Returns matching icon for approved AI development tools
 */
function getAiToolIcon(tool: string) {
  switch (tool) {
    case 'ChatGPT':
      return <TbBrandOpenai className="w-4 h-4 text-emerald-500" />;
    case 'Claude Code':
      return <SiAnthropic className="w-4 h-4 text-amber-500" />;
    case 'GitHub Copilot':
      return <SiGithubcopilot className="w-4 h-4 text-purple-400" />;
    case 'Google Antigravity':
      return <HiOutlineSparkles className="w-4 h-4 text-cyan-400" />;
    case 'Bolt':
      return <HiOutlineBolt className="w-4 h-4 text-amber-400" />;
    case 'Lovable':
      return <HiOutlineHeart className="w-4 h-4 text-rose-400" />;
    case 'Cursor':
      return <SiCursor className="w-4 h-4 text-indigo-400" />;
    case 'OpenRouter':
      return <SiOpenrouter className="w-4 h-4 text-emerald-400" />;
    default:
      return <HiOutlineSparkles className="w-4 h-4 text-accent" />;
  }
}

/**
 * Returns the category architectural icon for the 8 matrix cards
 */
function getCategoryIcon(id: string) {
  switch (id) {
    case 'languages':
      return <HiOutlineCodeBracket className="w-5 h-5 text-accent" />;
    case 'frontend':
      return <HiOutlineComputerDesktop className="w-5 h-5 text-purple-400" />;
    case 'backend':
      return <HiOutlineServerStack className="w-5 h-5 text-emerald-400" />;
    case 'databases':
      return <HiOutlineCircleStack className="w-5 h-5 text-cyan-400" />;
    case 'tools':
      return <HiOutlineWrenchScrewdriver className="w-5 h-5 text-amber-400" />;
    case 'deployment':
      return <HiOutlineCloudArrowUp className="w-5 h-5 text-sky-400" />;
    case 'ai_tools':
      return <HiOutlineSparkles className="w-5 h-5 text-accent" />;
    case 'practices':
      return <HiOutlineCube className="w-5 h-5 text-indigo-400" />;
    default:
      return <HiOutlineCodeBracket className="w-5 h-5 text-accent" />;
  }
}

/**
 * Returns the pipeline stage icon
 */
function getPipelineIcon(step: string) {
  switch (step) {
    case '01':
      return <HiOutlineComputerDesktop className="w-5 h-5 text-purple-400" />;
    case '02':
      return <HiOutlineServerStack className="w-5 h-5 text-emerald-400" />;
    case '03':
      return <HiOutlineCircleStack className="w-5 h-5 text-cyan-400" />;
    case '04':
      return <HiOutlineCloudArrowUp className="w-5 h-5 text-sky-400" />;
    default:
      return <HiOutlineCodeBracket className="w-5 h-5 text-accent" />;
  }
}

/**
 * Returns matching icon for compact engineering concepts & practices chips
 */
function getConceptChipIcon(name: string) {
  switch (name) {
    case 'Data Structures':
      return <HiOutlineCircleStack className="w-3.5 h-3.5 text-accent" />;
    case 'Algorithms':
      return <HiOutlineCpuChip className="w-3.5 h-3.5 text-cyan-400" />;
    case 'OOP':
      return <HiOutlineCube className="w-3.5 h-3.5 text-amber-400" />;
    case 'REST APIs':
      return <HiOutlineArrowsRightLeft className="w-3.5 h-3.5 text-emerald-400" />;
    case 'Database Design':
      return <HiOutlineCircleStack className="w-3.5 h-3.5 text-blue-400" />;
    case 'Problem Solving':
      return <HiOutlineLightBulb className="w-3.5 h-3.5 text-yellow-400" />;
    case 'Debugging':
      return <HiOutlineBugAnt className="w-3.5 h-3.5 text-rose-400" />;
    case 'Git & Version Control':
      return <SiGit className="w-3.5 h-3.5 text-[#F05032]" />;
    case 'Responsive Design':
      return <HiOutlineDevicePhoneMobile className="w-3.5 h-3.5 text-teal-400" />;
    case 'Component-Based Development':
      return <HiOutlineSquares2X2 className="w-3.5 h-3.5 text-indigo-400" />;
    case 'API Integration':
      return <HiOutlineArrowPath className="w-3.5 h-3.5 text-sky-400" />;
    case 'Deployment':
      return <HiOutlineCloudArrowUp className="w-3.5 h-3.5 text-purple-400" />;
    default:
      return <HiOutlineCheck className="w-3.5 h-3.5 text-accent" />;
  }
}

export default function SkillsPage() {
  // Map curated ecosystem summary skills to LogoLoop items
  const ecosystemLogos: LogoItem[] = ecosystemSummarySkills.map((tech) => ({
    node: getSkillIcon(tech),
    title: tech,
  }));

  return (
    <main className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full space-y-16 sm:space-y-24">
      {/* ==================================================================== */}
      {/* PAGE HEADER & HERO                                                   */}
      {/* ==================================================================== */}
      <section className="flex flex-col items-start text-left max-w-3xl space-y-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>TECHNICAL CAPABILITIES // SKILLS</span>
        </div>

        {/* Main Page Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.08]">
          Technical Toolkit &amp; <br className="hidden sm:inline" />
          <GradientEditorial>Engineering Matrix</GradientEditorial>
        </h1>

        {/* Concise Introduction answering what technologies Jeevan knows & uses */}
        <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">
          A focused, transparent overview of the technologies, runtime concepts, and development workflows I actively use to design, build, test, and ship software.
        </p>
      </section>

      {/* ==================================================================== */}
      {/* CORE TECHNOLOGIES & ECOSYSTEM (HORIZONTAL STRIP)                     */}
      {/* ==================================================================== */}
      <section className="w-full space-y-3 pt-2 pb-2">
        <div className="flex items-center justify-between pb-1">
          <div className="text-[11px] font-mono uppercase tracking-widest text-subtle-foreground font-semibold flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>CORE TECHNOLOGIES &amp; ECOSYSTEM</span>
          </div>
          <span className="text-[11px] font-mono text-subtle-foreground hidden sm:inline-block">
            {ecosystemSummarySkills.length} Approved Technologies
          </span>
        </div>

        {/* Subtle LogoLoop strip */}
        <div className="p-2 sm:p-3 rounded-2xl border border-border-subtle bg-surface-sunken/40 backdrop-blur-xs">
          <LogoLoop
            logos={ecosystemLogos}
            speed={24}
            direction="left"
            logoHeight={44}
            gap={36}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--background)"
            ariaLabel="Core technologies and ecosystem strip"
          />
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 01 — TECHNICAL TOOLKIT & ENGINEERING MATRIX (8 CATEGORIES)   */}
      {/* ==================================================================== */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-border-subtle">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              SECTION 01 // TECHNICAL CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-sans">
              Technical Toolkit &amp; <GradientEditorial>Engineering Matrix</GradientEditorial>
            </h2>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            8 Categories • Confirmed Stack &amp; Practices
          </span>
        </div>

        {/* Responsive 2-Column Matrix Grid (8 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {skillsMatrixData.map((category) => {
            const isFrontend = category.id === 'frontend';
            const isCompactChips = category.isCompactChips || category.skills.length === 0;

            return (
              <SpotlightCard
                key={category.id}
                className="p-6 sm:p-8 space-y-6 flex flex-col justify-between group transition-all duration-300"
                spotlightColor="var(--spotlight-color)"
              >
                <div className="space-y-5">
                  {/* Card Header: Icon + Title + Index / Badge */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-border-subtle">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-surface-elevated border border-border-subtle shadow-2xs flex items-center justify-center">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-accent font-medium block tracking-wider">
                          {category.index}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-surface border border-border-subtle text-subtle-foreground uppercase tracking-widest whitespace-nowrap">
                      {category.badge}
                    </span>
                  </div>

                  {/* Concise Category Description */}
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {category.description}
                  </p>

                  {/* Technology Content: Compact Chips OR Structured Role Tiles */}
                  {isCompactChips ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.chips?.map((chip) => (
                        <div
                          key={chip}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 hover:bg-white/95 dark:hover:bg-white/[0.08] text-xs font-mono font-medium text-foreground transition-all duration-200 shadow-2xs hover:shadow-xs group/chip"
                        >
                          <span className="text-sm flex-shrink-0 flex items-center justify-center">
                            {category.id === 'ai_tools'
                              ? getAiToolIcon(chip)
                              : getConceptChipIcon(chip)}
                          </span>
                          <span>{chip}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`grid gap-2.5 pt-1 ${
                        isFrontend || category.skills.length >= 3
                          ? 'grid-cols-1 sm:grid-cols-2'
                          : 'grid-cols-1'
                      }`}
                    >
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 hover:border-purple-500/30 hover:bg-white/95 dark:hover:bg-white/[0.08] transition-all duration-200 group/tile shadow-2xs hover:shadow-xs flex items-start gap-3"
                        >
                          <div className="rounded-lg bg-white/90 dark:bg-surface-elevated/90 flex-shrink-0 flex items-center justify-center border border-purple-500/10 dark:border-white/10 group-hover/tile:border-purple-500/30 transition-colors text-xl p-1.5">
                            {getSkillIcon(skill.name)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="font-mono font-semibold text-xs sm:text-sm text-foreground truncate">
                                {skill.name}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover/tile:bg-accent flex-shrink-0" />
                            </div>
                            <p className="text-subtle-foreground font-sans leading-snug mt-0.5 text-[11px]">
                              {skill.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Footprint */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-subtle-foreground">
                  <span>Stack Tier: {category.title}</span>
                  <span>
                    {isCompactChips
                      ? `${category.chips?.length || 0} ${
                          category.id === 'ai_tools' ? 'Productivity Tools' : 'Engineering Concepts'
                        }`
                      : `${category.skills.length} ${
                          category.skills.length === 1 ? 'Technology' : 'Technologies'
                        }`}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 02 — AI DEVELOPMENT WORKFLOW (EXCLUSIVE TO SKILLS PAGE)       */}
      {/* ==================================================================== */}
      <section className="space-y-8">
        <SpotlightCard
          className="p-6 sm:p-10 lg:p-12 space-y-8 border-accent/25"
          spotlightColor="var(--spotlight-color)"
        >
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>SECTION 02 // WORKFLOW ACCELERATION</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans leading-[1.15]">
              AI Development Workflow: <br className="hidden sm:inline" />
              <GradientEditorial>An Accelerator, Not a Substitute</GradientEditorial>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
              I use AI development tools as productivity accelerators. They help me explore solutions, generate initial ideas, understand unfamiliar problems, debug, document, and reduce repetitive work. I remain responsible for understanding the implementation, reviewing the output, writing and refining the code, testing it, and making the final engineering decisions.
            </p>
          </div>

          {/* Approved AI Tools Pill Bar */}
          <div className="p-4 rounded-xl bg-surface border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-mono text-subtle-foreground font-medium">
              Confirmed AI Development Tools I Use:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {approvedAiTools.map((tool) => (
                <div
                  key={tool}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-subtle text-xs font-mono text-foreground font-medium shadow-2xs"
                >
                  {getAiToolIcon(tool)}
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Workflow Sequential Ribbon: PLAN → GENERATE → REVIEW → CODE & POLISH → TEST → SHIP */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-subtle-foreground font-semibold flex items-center justify-between">
              <span>DEVELOPMENT ACCELERATION LIFECYCLE</span>
              <span className="text-[10px] lowercase text-subtle-foreground hidden sm:inline">idea → production progression</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs font-mono">
              {aiWorkflowSteps.map((step, idx) => {
                const stageMeta = LIFECYCLE_STAGE_META[idx] || LIFECYCLE_STAGE_META[0];
                const IconComponent = stageMeta.icon;
                const isCodeAndPolish = step.phase === 'CODE & POLISH';

                return (
                  <div
                    key={step.phase}
                    className={`p-2 sm:p-2.5 rounded-xl border flex items-center justify-between gap-1.5 font-semibold transition-all backdrop-blur-md ${
                      isCodeAndPolish
                        ? 'bg-white/95 dark:bg-surface-elevated/95 border-accent/40 shadow-xs ring-1 ring-accent/20 text-foreground'
                        : 'bg-white/70 dark:bg-white/[0.04] border-purple-500/10 dark:border-white/10 text-foreground/80 hover:border-purple-500/25'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${stageMeta.badgeBg} ${stageMeta.accent} text-xs`}>
                        <IconComponent className="w-3 h-3" />
                      </span>
                      <span className={`truncate text-[11px] ${isCodeAndPolish ? 'text-accent font-bold' : ''}`}>
                        {step.phase}
                      </span>
                    </div>
                    {idx < aiWorkflowSteps.length - 1 && (
                      <span className="text-subtle-foreground/60 text-xs hidden lg:inline">→</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6 Structured Workflow Cards — Soft Pastel Glass System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-2">
            {aiWorkflowSteps.map((workflow, idx) => {
              const isCodeAndPolish = workflow.phase === 'CODE & POLISH';
              const stageMeta = LIFECYCLE_STAGE_META[idx] || LIFECYCLE_STAGE_META[0];
              const IconComponent = stageMeta.icon;

              return (
                <div
                  key={workflow.step}
                  className={`p-6 sm:p-7 rounded-2xl border space-y-4 flex flex-col justify-between backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 ${stageMeta.tint} ${
                    isCodeAndPolish
                      ? 'bg-white/90 dark:bg-surface-card/95 border-accent/40 shadow-[0_16px_42px_rgba(124,58,237,0.12),0_4px_12px_rgba(124,58,237,0.06)] ring-1 ring-accent/25'
                      : 'bg-white/80 dark:bg-surface-card/85 border-purple-500/10 dark:border-white/10 shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)] hover:shadow-[0_16px_42px_rgba(80,60,120,0.09),0_4px_12px_rgba(80,60,120,0.05)] hover:border-purple-500/25'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Stage Number Pill + Phase Tag + Frosted Top-Right Icon Badge */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className={`inline-block px-2.5 py-0.5 rounded-md font-mono font-bold text-xs ${stageMeta.badgeBg} ${stageMeta.accent}`}>
                          {workflow.step}
                        </span>
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold text-subtle-foreground">
                          {workflow.phase}
                        </div>
                      </div>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs border ${stageMeta.badgeBg} ${stageMeta.accent} text-base`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground font-sans tracking-tight">
                      {workflow.title}
                    </h3>

                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                      {workflow.description}
                    </p>

                    <ul className="space-y-2.5 pt-3 border-t border-purple-500/8 dark:border-white/8">
                      {workflow.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="text-xs text-muted-foreground font-sans leading-relaxed flex items-start gap-2.5"
                        >
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${stageMeta.badgeBg} ${stageMeta.accent}`}>
                            <HiOutlineCheck className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-purple-500/8 dark:border-white/8 text-[10px] font-mono text-subtle-foreground flex items-center justify-between">
                    <span>Stage {workflow.step} of 06</span>
                    <span>{isCodeAndPolish ? 'Human Ownership' : workflow.phase}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prominent Philosophy Statement */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>AI PHILOSOPHY // CORE POSITION</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground font-sans leading-snug">
              AI can accelerate development.{' '}
              <br className="hidden sm:inline" />
              <GradientEditorial>It cannot replace engineering judgment.</GradientEditorial>
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
              I can build without AI. I use AI to move faster, explore better solutions, learn more effectively, and reduce repetitive work. I remain responsible for the architecture, code, debugging, testing, and final result.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-subtle-foreground">
              <span className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border-subtle">
                • Can build without AI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border-subtle">
                • Zero blind acceptance
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border-subtle">
                • Human validation &amp; refinement
              </span>
              <span className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border-subtle">
                • Complete production ownership
              </span>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 03 — FULL-STACK PIPELINE: "FROM INTERFACE TO DEPLOYMENT"      */}
      {/* ==================================================================== */}
      <section className="space-y-8">
        <div className="flex flex-col items-start text-left max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>SECTION 03 // FULL-STACK PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
            From Interface to <GradientEditorial>Deployment</GradientEditorial>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
            How my confirmed technologies connect into an actual application workflow from client UI down to database persistence and cloud release.
          </p>
        </div>

        {/* 4-Stage Connected Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {engineeringFlowStages.map((stage, idx) => (
            <SpotlightCard
              key={stage.step}
              className="p-5 sm:p-6 space-y-4 flex flex-col justify-between border-border-subtle hover:border-accent/30 transition-all duration-200 relative group"
              spotlightColor="var(--spotlight-color)"
            >
              <div className="space-y-3">
                {/* Step indicator & phase */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold border border-accent/20">
                    STAGE {stage.step}
                  </span>
                  <span className="text-[10px] text-subtle-foreground uppercase tracking-wider">
                    {stage.phase}
                  </span>
                </div>

                {/* Stage Title & Icon */}
                <div className="flex items-center gap-2.5 pt-1">
                  <div className="p-2 rounded-lg bg-surface border border-border-subtle flex-shrink-0">
                    {getPipelineIcon(stage.step)}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">
                    {stage.title}
                  </h3>
                </div>

                {/* Role / Description */}
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {stage.description}
                </p>

                {/* Technology chips utilized in this stage */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground mb-1.5">
                    CONFIRMED STACK:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono text-foreground bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs"
                      >
                        <span className="text-xs">{getSkillIcon(skill)}</span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting arrow indicator for sequential flow */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-subtle-foreground">
                <span>{stage.role}</span>
                {idx < engineeringFlowStages.length - 1 && (
                  <HiOutlineArrowLongRight className="w-4 h-4 text-accent hidden lg:inline-block" />
                )}
                {idx < engineeringFlowStages.length - 1 && (
                  <HiOutlineArrowDown className="w-4 h-4 text-accent lg:hidden" />
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* BOTTOM NAVIGATION                                                    */}
      {/* ==================================================================== */}
      <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>View Projects Built With This Stack</span>
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:underline group"
        >
          <span>Read My Personal Development Story</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </footer>
    </main>
  );
}
