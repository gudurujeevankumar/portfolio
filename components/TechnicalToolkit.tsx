'use client';

import React from 'react';
import Link from 'next/link';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import LogoLoop, { LogoItem } from '@/components/ui/LogoLoop';
import GradientEditorial from '@/components/ui/GradientEditorial';
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
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    badge: 'LANG',
    description: 'Core programming languages for application logic, algorithms, and data modeling.',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    badge: 'UI/UX',
    description: 'Component architectures, dynamic user interfaces, interactive animations, and mobile frameworks.',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'React Native', 'GSAP'],
  },
  {
    title: 'Backend',
    badge: 'SERVER',
    description: 'Server architecture, RESTful API design, and backend business logic.',
    skills: ['Django'],
  },
  {
    title: 'Databases',
    badge: 'DATA',
    description: 'Relational data modeling, schema design, and persistent database storage.',
    skills: ['MySQL', 'SQLite'],
  },
  {
    title: 'Tools',
    badge: 'OPS',
    description: 'Version control, sprint management, project tracking, and interface prototyping.',
    skills: ['Git', 'GitHub', 'Jira', 'Figma'],
  },
  {
    title: 'Deployment',
    badge: 'CLOUD',
    description: 'Cloud hosting platforms, continuous delivery pipelines, and production deployments.',
    skills: ['Render', 'Vercel', 'Netlify'],
  },
];

const techLogos: LogoItem[] = [
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { node: <TbSql />, title: 'SQL', href: 'https://en.wikipedia.org/wiki/SQL' },
  { node: <SiHtml5 />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { node: <SiCss />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { node: <SiBootstrap />, title: 'Bootstrap', href: 'https://getbootstrap.com' },
  { node: <SiReact />, title: 'React.js', href: 'https://react.dev' },
  { node: <SiReact />, title: 'React Native', href: 'https://reactnative.dev' },
  { node: <SiGreensock />, title: 'GSAP', href: 'https://gsap.com' },
  { node: <SiDjango />, title: 'Django', href: 'https://www.djangoproject.com' },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiSqlite />, title: 'SQLite', href: 'https://www.sqlite.org' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiJira />, title: 'Jira', href: 'https://www.atlassian.com/software/jira' },
  { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com' },
  { node: <SiRender />, title: 'Render', href: 'https://render.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
  { node: <SiNetlify />, title: 'Netlify', href: 'https://www.netlify.com' },
];

export default function TechnicalToolkit() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>CAPABILITIES // 04</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          Technical Toolkit &amp; <br />
          <GradientEditorial>Engineering Matrix</GradientEditorial>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          Languages, frameworks, databases, and deployment platforms I leverage to construct reliable, production-oriented software systems.
        </p>
      </div>

      {/* Infinite LogoLoop marquee with real icons configured at slow technical ticker speed (28) */}
      <div className="w-full space-y-3">
        <div className="text-[11px] font-mono uppercase tracking-widest text-subtle-foreground">
          CORE TECHNOLOGIES &amp; ECOSYSTEM
        </div>
        <LogoLoop
          logos={techLogos}
          speed={28}
          direction="left"
          logoHeight={45}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="var(--background)"
          ariaLabel="Technology stack"
        />
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const tints = ['card-tint-lavender', 'card-tint-cyan', 'card-tint-blue', 'card-tint-mint', 'card-tint-rose', 'card-tint-lavender'];
          const tint = tints[idx % tints.length];
          return (
            <SpotlightCard
              key={cat.title}
              className={`p-6 sm:p-8 flex flex-col justify-between group ${tint}`}
              spotlightColor="var(--spotlight-color)"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-purple-500/8 dark:border-white/8">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground font-sans">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-accent uppercase tracking-wider">
                    {cat.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="pt-6 mt-6 border-t border-purple-500/8 dark:border-white/8">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-foreground/90 bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 hover:border-accent/40 hover:text-accent transition-colors shadow-2xs cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Callout to full skills page */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-border bg-surface-card backdrop-blur-md">
        <div>
          <h4 className="text-base font-sans font-semibold text-foreground">
            Looking for detailed competency metrics and engineering philosophy?
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-0.5">
            Read about my engineering principles, tooling stack, and continuous learning roadmaps.
          </p>
        </div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-hover text-xs font-mono font-medium text-foreground transition-all duration-200 whitespace-nowrap shadow-2xs group"
        >
          <span>Explore All Skills &amp; Philosophy</span>
          <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
