import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import GradientEditorial from '@/components/ui/GradientEditorial';
import AboutPortrait from '@/components/about/AboutPortrait';
import ExpandingPhilosophyCards from '@/components/about/ExpandingPhilosophyCards';
import ProjectPreview from '@/components/about/ProjectPreview';
import YouTubeSubscriberCount from '@/components/about/YouTubeSubscriberCount';
import YouTubeChannelCard from '@/components/about/YouTubeChannelCard';
import {
  engineeringPhilosophyPrinciples,
  personalJourneyMilestones,
  sihStatistics,
  sihExecutionSequence,
  jioCinemaProgressionSequence,
} from '@/data/about';
import {
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineArrowTrendingUp,
  HiOutlineTrophy,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineMicrophone,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineArrowsRightLeft,
  HiOutlineCpuChip,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCubeTransparent,
  HiOutlineCommandLine,
} from 'react-icons/hi2';
import {
  SiHtml5,
  SiNetlify,
  SiReact,
  SiMysql,
  SiJira,
  SiGit,
  SiYoutube,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About — Developer → Engineer → Problem Solver | Guduru Jeevan Kumar',
  description:
    'The personal engineering story, origin, leadership experiences, content creation journey, and development philosophy of Guduru Jeevan Kumar.',
};

/**
 * Returns icon for the 5 personal journey milestones
 */
function getMilestoneIcon(step: string) {
  switch (step) {
    case '01':
      return <HiOutlineCodeBracket className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    case '02':
      return <HiOutlineArrowTrendingUp className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
    case '03':
      return <HiOutlineBriefcase className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
    case '04':
      return <HiOutlineTrophy className="w-5 h-5 text-accent" />;
    case '05':
      return <HiOutlineSparkles className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    default:
      return <HiOutlineCodeBracket className="w-5 h-5 text-accent" />;
  }
}

/**
 * Returns matching icon for personal journey milestone tags
 */
function getMilestoneTagIcon(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes('html')) return <SiHtml5 className="w-3 h-3 text-[#E34F26] shrink-0" />;
  if (t.includes('netlify')) return <SiNetlify className="w-3 h-3 text-[#00C7B7] shrink-0" />;
  if (t.includes('component')) return <SiReact className="w-3 h-3 text-[#61DAFB] shrink-0" />;
  if (t.includes('mobile')) return <TbBrandReactNative className="w-3 h-3 text-[#61DAFB] shrink-0" />;
  if (t.includes('database')) return <SiMysql className="w-3 h-3 text-[#4479A1] shrink-0" />;
  if (t.includes('sprint') || t.includes('jira')) return <SiJira className="w-3 h-3 text-[#0052CC] shrink-0" />;
  if (t.includes('git') || t.includes('workflow')) return <SiGit className="w-3 h-3 text-[#F05032] shrink-0" />;
  if (t.includes('first web')) return <HiOutlineGlobeAlt className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('learn')) return <HiOutlineLightBulb className="w-3 h-3 text-amber-400 shrink-0" />;
  if (t.includes('frontend to backend')) return <HiOutlineArrowsRightLeft className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('full-stack') || t.includes('systems')) return <HiOutlineCpuChip className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('client')) return <HiOutlineClipboardDocumentCheck className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('500+')) return <HiOutlineUsers className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('3-member')) return <HiOutlineUserGroup className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('speaking') || t.includes('stage')) return <HiOutlineMicrophone className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('pressure')) return <HiOutlineShieldCheck className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('continuous')) return <HiOutlineArrowTrendingUp className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('ownership')) return <HiOutlineCubeTransparent className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('judgment')) return <HiOutlineCommandLine className="w-3 h-3 text-accent shrink-0" />;
  return <HiOutlineSparkles className="w-3 h-3 text-accent shrink-0" />;
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAF9F7] dark:bg-[#07080D] text-foreground transition-colors duration-300">
      {/* ==================================================================== */}
      {/* 01 & 02 — GLOBAL PAGE AMBIENT BLUSH BACKGROUND SYSTEM               */}
      {/* Light: Soft warm ivory base (#FAF9F7) + delicate pastel blushes      */}
      {/* Dark: Obsidian base (#07080D) + subtle violet/cyan/emerald auras      */}
      {/* ==================================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Light Mode Multi-layered Ambient Blush */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500"
          style={{
            backgroundImage: `
              radial-gradient(circle at 14% 8%, rgba(168, 85, 247, 0.055), transparent 36%),
              radial-gradient(circle at 86% 20%, rgba(6, 182, 212, 0.045), transparent 34%),
              radial-gradient(circle at 10% 42%, rgba(244, 114, 182, 0.035), transparent 35%),
              radial-gradient(circle at 90% 58%, rgba(59, 130, 246, 0.040), transparent 38%),
              radial-gradient(circle at 48% 76%, rgba(139, 92, 246, 0.038), transparent 36%),
              radial-gradient(circle at 82% 94%, rgba(20, 184, 166, 0.030), transparent 34%)
            `,
          }}
        />

        {/* Dark Mode Subtle Obsidian Aura */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `
              radial-gradient(circle at 18% 10%, rgba(168, 85, 247, 0.045), transparent 40%),
              radial-gradient(circle at 82% 22%, rgba(34, 211, 238, 0.035), transparent 38%),
              radial-gradient(circle at 12% 46%, rgba(99, 102, 241, 0.035), transparent 40%),
              radial-gradient(circle at 88% 60%, rgba(16, 185, 129, 0.025), transparent 38%),
              radial-gradient(circle at 50% 78%, rgba(139, 92, 246, 0.035), transparent 40%),
              radial-gradient(circle at 80% 92%, rgba(59, 130, 246, 0.030), transparent 36%)
            `,
          }}
        />

        {/* Subtle Architectural Texture Overlay */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30 mix-blend-overlay" />
      </div>

      <main className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto w-full space-y-20 sm:space-y-28">
        {/* ==================================================================== */}
        {/* 01 — PERSONAL STORY / HERO (DEVELOPER → ENGINEER → PROBLEM SOLVER)   */}
        {/* ==================================================================== */}
        <section id="hero" aria-label="Personal Story & Introduction" className="relative pt-4 sm:pt-8 pb-4">
          {/* Two-column hero: text left, portrait right.
               Desktop: minmax(0, 1.25fr) minmax(380px, 0.75fr) — text column can shrink.
               Tablet: two columns if space allows, otherwise stack.
               Mobile: single column stack. */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(380px,0.75fr)] gap-8 lg:gap-10 xl:gap-12 items-start">
            {/* Left Column: Heading & Editorial Identity */}
            <div className="flex flex-col items-start text-left space-y-6 min-w-0">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface-elevated/80 backdrop-blur-md text-xs font-mono tracking-widest text-accent uppercase shadow-2xs shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>ABOUT // PERSONAL STORY</span>
              </div>

              {/* Main Headline — allows natural wrapping.
                  Desktop: "Developer → Engineer →" on first line, "Problem Solver" on second or same line if space.
                  Tablet/Mobile: wraps naturally at word boundaries. */}
              <h1
                className="font-semibold tracking-tight text-foreground font-sans leading-[1.1]"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                }}
              >
                <span className="inline-block">Developer → Engineer →</span>{' '}
                <GradientEditorial className="inline-block">Problem Solver</GradientEditorial>
              </h1>

              {/* Supporting Intro Statement */}
              <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
                I am Guduru Jeevan Kumar, a Computer Science Engineering graduate on a journey through full-stack software development. I build software by learning through hands-on projects, with a strong focus on understanding systems end-to-end and solving real engineering problems.
              </p>

              {/* Metadata Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="about-card-surface inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl shadow-2xs text-xs font-mono text-foreground shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <HiOutlineMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-foreground">Bengaluru, India</span>
                    <span className="text-[10px] text-subtle-foreground uppercase tracking-wider font-mono">Based In</span>
                  </div>
                </div>

                <div className="about-card-surface inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl shadow-2xs text-xs font-mono text-foreground shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 dark:text-purple-400 flex-shrink-0">
                    <HiOutlineAcademicCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-foreground">CSE Graduate</span>
                    <span className="text-[10px] text-subtle-foreground uppercase tracking-wider font-mono">8.53 CGPA · CREC</span>
                  </div>
                </div>

                <div className="about-card-surface inline-flex items-center gap-3 px-3.5 py-2.5 rounded-xl shadow-2xs text-xs font-mono text-foreground shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 flex-shrink-0">
                    <HiOutlineBriefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-foreground">Open to Opportunities</span>
                    <span className="text-[10px] text-subtle-foreground uppercase tracking-wider font-mono">Software / Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Portrait — centred on mobile/tablet, right-aligned on desktop */}
            <div className="flex justify-center lg:justify-end w-full">
              <AboutPortrait />
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 02 — ORIGIN STORY — JIOCINEMA CLONE & ARTIFACT SHOWCASE              */}
        {/* ==================================================================== */}
        <section id="origin-story" aria-label="Origin Story: JioCinema Clone" className="space-y-6">
          <div className="flex flex-col items-start space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>ORIGIN STORY // 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
              Where It Started — <GradientEditorial>JioCinema Clone</GradientEditorial>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-2xl">
              My first major step into web development. When I started, I did not properly know HTML or CSS, but I chose to learn by building rather than waiting until I knew everything.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Authentic Narrative */}
            <SpotlightCard
              className="about-card-surface lg:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between"
              spotlightColor="var(--spotlight-color)"
            >
              <div className="space-y-4 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
                <p>
                  The JioCinema clone was one of my very first web development projects. When I started, <strong className="text-foreground font-semibold">I did not properly know HTML or CSS</strong>, and I genuinely did not know where to begin.
                </p>

                <p className="text-muted-foreground">
                  I watched a JioCinema React clone webinar by Let&apos;sUpgrade. Instead of copying their React implementation, I chose to build my own version from scratch using fundamental HTML and CSS so I could learn the building blocks directly.
                </p>

                <p className="text-muted-foreground">
                  While developing, I used ChatGPT as a learning guide to understand which HTML tags to use, how CSS styling properties worked, and how to troubleshoot errors. AI helped me explore and learn the concepts, but I learned by actually writing and structuring the code myself.
                </p>

                <p className="text-muted-foreground">
                  I struggled with CSS positioning, layout flow, and responsive screens. Those struggles became an essential part of my learning.
                </p>

                <p className="text-muted-foreground">
                  Importantly, <strong className="text-foreground font-semibold">I intentionally kept the old mistakes in the project</strong>. The reason is simple: <em className="text-foreground font-serif italic">&ldquo;I want to look back at this project and remember where I started.&rdquo;</em>
                </p>

                <p className="text-muted-foreground">
                  Deploying that clone using <strong className="text-accent font-mono font-medium">Netlify</strong> marked my first live release on the web. It proved that taking action and building through struggles teaches far more than waiting until you know everything.
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-subtle-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Technologies: HTML5 + CSS3
                </span>
                <span className="text-accent font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Deployed to: Netlify
                </span>
              </div>
            </SpotlightCard>

            {/* Right Column: Authentic Project Showcase Artifact */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <ProjectPreview
                title="JioCinema Media Portal Clone"
                liveUrl="https://jiocinemaclonebyjeevankmarguduru.netlify.app/"
                githubUrl="https://github.com/gudurujeevankumar/Jio-Cinema-Clone-Project.git"
                screenshotSrc="/projects/jiocinema-preview.png"
                technologies={['HTML5', 'CSS3', 'Netlify Deploy', 'Responsive Layout']}
              />
            </div>
          </div>

          {/* 4 Highlight Metric Cards in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="about-card-surface p-5 space-y-2.5 flex flex-col justify-between card-tint-lavender" spotlightColor="var(--spotlight-color)">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-accent text-lg">
                <HiOutlineCodeBracket className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-mono font-bold text-foreground">JioCinema</div>
                <div className="text-xs font-semibold text-foreground font-sans">First Web Project</div>
                <p className="text-[11px] text-muted-foreground font-sans leading-snug">
                  Built with HTML5 &amp; CSS3 with zero prior web development background.
                </p>
              </div>
              <div className="text-[10px] font-mono text-subtle-foreground pt-1 border-t border-purple-500/10 dark:border-white/10">
                First Milestone // 2022
              </div>
            </SpotlightCard>

            <SpotlightCard className="about-card-surface p-5 space-y-2.5 flex flex-col justify-between card-tint-cyan" spotlightColor="var(--spotlight-color)">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 text-lg">
                <HiOutlineBolt className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-mono font-bold text-foreground">Building</div>
                <div className="text-xs font-semibold text-foreground font-sans">Learning Method</div>
                <p className="text-[11px] text-muted-foreground font-sans leading-snug">
                  Hands-on struggle prioritized over endless passive tutorial consumption.
                </p>
              </div>
              <div className="text-[10px] font-mono text-subtle-foreground pt-1 border-t border-purple-500/10 dark:border-white/10">
                Action Precedes Mastery
              </div>
            </SpotlightCard>

            <SpotlightCard className="about-card-surface p-5 space-y-2.5 flex flex-col justify-between card-tint-blue" spotlightColor="var(--spotlight-color)">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 text-lg">
                <HiOutlineGlobeAlt className="w-5 h-5 text-indigo-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-mono font-bold text-foreground">Netlify</div>
                <div className="text-xs font-semibold text-foreground font-sans">First Live Release</div>
                <p className="text-[11px] text-muted-foreground font-sans leading-snug">
                  Pushing local code to the public web for the very first time.
                </p>
              </div>
              <div className="text-[10px] font-mono text-subtle-foreground pt-1 border-t border-purple-500/10 dark:border-white/10">
                Public Deployment
              </div>
            </SpotlightCard>

            <SpotlightCard className="about-card-surface p-5 space-y-2.5 flex flex-col justify-between card-tint-mint" spotlightColor="var(--spotlight-color)">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 text-lg">
                <HiOutlineArrowTrendingUp className="w-5 h-5 text-teal-500" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-mono font-bold text-foreground">Flaws Kept</div>
                <div className="text-xs font-semibold text-foreground font-sans">Proof of Growth</div>
                <p className="text-[11px] text-muted-foreground font-sans leading-snug">
                  Preserving early mistakes as a measurable reminder of where I started.
                </p>
              </div>
              <div className="text-[10px] font-mono text-subtle-foreground pt-1 border-t border-purple-500/10 dark:border-white/10">
                Honest Baseline
              </div>
            </SpotlightCard>
          </div>

          {/* Visual Sequence Ribbon */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-subtle-foreground font-semibold flex items-center justify-between">
              <span>ORIGIN PROGRESSION SEQUENCE</span>
              <span className="text-[10px] text-subtle-foreground hidden sm:inline">humble beginnings → real development</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono">
              {jioCinemaProgressionSequence.map((item, idx) => (
                <div
                  key={item.step}
                  className="about-card-surface p-3 rounded-xl space-y-1 shadow-2xs"
                >
                  <div className="text-[10px] text-accent font-bold">
                    {item.step} {'//'} {item.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-tight">
                    {item.desc}
                  </div>
                  {idx < jioCinemaProgressionSequence.length - 1 && (
                    <div className="text-subtle-foreground hidden lg:block text-xs mt-1">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 03 — LEADERSHIP & OWNERSHIP — SIH: FROM MOTIVATION TO EXECUTION     */}
        {/* ==================================================================== */}
        <section id="leadership" aria-label="Leadership & Ownership: Smart India Hackathon" className="space-y-6">
          <SpotlightCard
            className="about-card-surface p-6 sm:p-10 lg:p-12 space-y-8"
            spotlightColor="var(--spotlight-color)"
          >
            {/* Header */}
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface-elevated/80 backdrop-blur-md text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>LEADERSHIP &amp; OWNERSHIP // 03</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans leading-[1.15]">
                Leading Under Pressure — <br className="hidden sm:inline" />
                <GradientEditorial>SIH: From Motivation to Execution</GradientEditorial>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                Taking ownership of the Smart India Hackathon internal qualifier with a 3-member core team, interacting with 500+ students, and competing with my own team—under significant pressure.
              </p>
            </div>

            {/* Key Facts Strip (Scannable Metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sihStatistics.map((stat) => (
                <div
                  key={stat.label}
                  className="about-card-surface p-4 sm:p-5 rounded-xl text-center space-y-1.5 shadow-2xs"
                >
                  <div className={`text-2xl sm:text-3xl font-mono font-bold ${stat.accentColor || 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-sans leading-tight">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Narrative Story Grounded Strictly in Validated Facts */}
            <div className="space-y-4 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed border-t border-border-subtle pt-6">
              <p>
                I played a major leadership role in organizing the Smart India Hackathon (SIH) Internal Round at our college. We operated with a small core organizing team of just <strong className="text-foreground font-semibold">3 members</strong>. While faculty members provided high-level guidance, most of the operational execution was handled directly by me and my team.
              </p>

              <p className="text-muted-foreground">
                To build momentum and participation, I interacted directly with more than <strong className="text-foreground font-semibold">500 students</strong> across departments. I delivered presentations to both students and lecturers, explaining what SIH is, how the competition operates, and why participating in hackathons matters. Speaking with conviction on a large auditorium stage in my native Telugu was a transformative personal milestone.
              </p>

              <p className="text-muted-foreground">
                Through consistent motivation and hands-on guidance, <strong className="text-emerald-500 dark:text-emerald-400 font-mono font-semibold">20 student teams</strong> participated. Simultaneously, I also participated as an active member of my own <strong className="text-foreground font-semibold">6-member SIH team</strong>, balancing competitive problem solving with organizational duties.
              </p>

              <p className="text-muted-foreground">
                I coordinated multiple teams and responsibilities: working with the media and documentation team, guiding participant teams on preparation and presentation, and conducting practice sessions. During the live event, I managed the stage, sound and microphone systems, presentation flow, judges coordination, and overall event monitoring.
              </p>

              <p className="text-muted-foreground">
                I worked under significant pressure and pushed myself to my limits. The event was successfully completed—proving that ownership, team coordination, and clear communication deliver results even when circumstances are demanding.
              </p>
            </div>

            {/* Core Takeaway Callout */}
            <div className="border-l-2 border-accent bg-surface-elevated/65 backdrop-blur-md p-5 sm:p-6 rounded-r-2xl space-y-2 border border-y-border-subtle border-r-border-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>THE LEADERSHIP TAKEAWAY</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic text-foreground leading-snug">
                &ldquo;I took ownership of the execution with a small core team while faculty provided guidance. I learned to communicate under pressure, coordinate multiple responsibilities, and deliver a successful event.&rdquo;
              </p>
            </div>

            {/* Visual Sequence */}
            <div className="space-y-3 pt-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-subtle-foreground font-semibold">
                EXECUTION LIFECYCLE
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs font-mono">
                {sihExecutionSequence.map((item, idx) => (
                  <div
                    key={item.phase}
                    className="about-card-surface p-3 rounded-xl space-y-1 shadow-2xs"
                  >
                    <div className="text-accent font-bold text-xs">{item.phase}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{item.label}</div>
                    {idx < sihExecutionSequence.length - 1 && (
                      <div className="text-subtle-foreground hidden lg:block text-xs mt-1">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ==================================================================== */}
        {/* 04 — TEACHING & SHARING — YOUTUBE & COMMUNITY PROFILE                */}
        {/* ==================================================================== */}
        <section id="teaching-sharing" aria-label="Teaching & Sharing: YouTube Journey" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-border-subtle">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>TEACHING &amp; SHARING // 04</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
                I Learn. I Build. <GradientEditorial>I Share.</GradientEditorial>
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground self-start sm:self-auto">
              Content Creation &amp; Engineering Education
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
            I create video tutorials and educational content to help aspiring developers break into software engineering, learn fundamental web technologies, and build practical applications with confidence.
          </p>

          {/* YouTube Creator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Creator Philosophy & Channel Actions */}
            <SpotlightCard className="about-card-surface lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6" spotlightColor="var(--spotlight-color)">
              <div className="space-y-4 text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
                <p>
                  Technology education should be accessible, practical, and demystified. Through my YouTube channel, I document what I learn, explain technical concepts from first principles, and provide structured developer walkthroughs in Telugu and English.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  From complete beginner-friendly courses in HTML and CSS to React Native setup, developer tooling, Git workflows, and college guidance, my tutorials focus on real implementation over theoretical jargon.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Teaching is an integral part of my engineering journey: translating complex technical architectures into simple, actionable steps solidifies my own understanding while empowering fellow developers.
                </p>
              </div>

              {/* Creator Channel CTAs */}
              <div className="space-y-3.5 pt-4 border-t border-border-subtle">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://www.youtube.com/@JeevanKumarGuduru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-xs group"
                  >
                    <SiYoutube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Visit YouTube Channel</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.youtube.com/@JeevanKumarGuduru/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all inline-flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <FiPlay className="w-3.5 h-3.5 text-accent" />
                    <span>Watch Tutorials</span>
                  </a>
                </div>
                <YouTubeSubscriberCount />
              </div>
            </SpotlightCard>

            {/* Right Column: Real Content & Channel Showcase */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <YouTubeChannelCard />
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 05 — CORE PRINCIPLES — ENGINEERING PHILOSOPHY                        */}
        {/* ==================================================================== */}
        <section id="philosophy" aria-label="Core Principles: Engineering Philosophy" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-border-subtle">
            <div>
              <div className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                CORE PRINCIPLES // 05
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
                My Engineering <GradientEditorial>Philosophy</GradientEditorial>
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              5 Guiding Standards
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
            Five principles forged from building, struggling, debugging, and shipping software from local code to production.
          </p>

          {/* Interactive Expanding Philosophy Cards (Framer-inspired interaction, desktop horizontal expansion + mobile accordion) */}
          <ExpandingPhilosophyCards principles={engineeringPhilosophyPrinciples} />
        </section>

        {/* ==================================================================== */}
        {/* 06 — PERSONAL TECHNICAL JOURNEY (5 MILESTONES PROGRESSION)           */}
        {/* ==================================================================== */}
        <section id="technical-journey" aria-label="Personal Technical Journey" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-border-subtle">
            <div>
              <div className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                TECHNICAL JOURNEY // 06
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
                Personal Technical <GradientEditorial>Journey</GradientEditorial>
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              5 Milestones • Progression Over Claims
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-3xl">
            A personal progression from building a first website without prior experience to crafting full-stack applications, leading teams, and understanding software as a complete system.
          </p>

          {/* 5 Personal Milestones Timeline Cards */}
          <div className="space-y-4">
            {personalJourneyMilestones.map((milestone) => (
              <SpotlightCard
                key={milestone.step}
                className="about-card-surface p-6 sm:p-7 space-y-4"
                spotlightColor="var(--spotlight-color)"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated/80 border border-border-subtle flex items-center justify-center flex-shrink-0 shadow-xs">
                      {getMilestoneIcon(milestone.step)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-accent font-semibold">
                          MILESTONE {milestone.step}
                        </span>
                        <span className="text-[10px] font-mono text-subtle-foreground uppercase">
                          {'//'} {milestone.phase}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground font-sans">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface border border-border-subtle text-subtle-foreground self-start sm:self-auto">
                    {milestone.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface text-[11px] font-mono text-foreground border border-border-subtle shadow-2xs"
                    >
                      {getMilestoneTagIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 07 — LOOKING FORWARD / CALL TO ACTION                                */}
        {/* ==================================================================== */}
        <section id="closing-cta" aria-label="Looking Forward & Collaboration" className="space-y-6">
          <SpotlightCard
            className="about-card-surface p-8 sm:p-12 space-y-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-8 bg-gradient-to-br from-surface-card via-surface-card to-accent/5"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>LOOKING FORWARD // 07</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
                Let&apos;s Build Something <GradientEditorial>Meaningful</GradientEditorial>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                I started by trying to build a webpage without knowing how to build one. Today, I understand much more about software, but I am still learning. I want to keep building, solving real problems, and becoming a better engineer with every project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/work"
                className="btn-primary w-full sm:w-auto px-6 py-3 rounded-full text-xs font-mono font-semibold transition-colors shadow-xs text-center"
              >
                View My Work →
              </Link>

              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-auto px-6 py-3 rounded-full text-xs font-mono font-semibold transition-colors shadow-2xs text-center"
              >
                Get In Touch →
              </Link>
            </div>
          </SpotlightCard>
        </section>

        {/* Footer Navigation Backlinks */}
        <footer className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-accent hover:underline group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Explore Technical Toolkit &amp; Skills</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-foreground hover:underline group"
          >
            <span>View Real-World Projects</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </footer>
      </main>
    </div>
  );
}
