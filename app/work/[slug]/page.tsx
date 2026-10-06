import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  portfolioData.projects.forEach((p) => {
    slugs.push({ slug: p.slug });
    if (p.id !== p.slug) {
      slugs.push({ slug: p.id });
    }
  });
  return slugs;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!project) {
    return {
      title: 'Project Not Found — Guduru Jeevan Kumar',
    };
  }

  return {
    title: `${project.title} — Case Study | Guduru Jeevan Kumar`,
    description: project.shortDescription || project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find(
    (p) => p.slug === slug || p.id === slug
  );

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  // Fallback defaults for projects without custom deep fields
  const problemStatement =
    caseStudy?.problem ||
    'Building modern software applications requires managing state predictability, clean user experience, and robust architectural boundaries.';
  const solutionStatement =
    caseStudy?.solution ||
    project.description;
  const featuresList =
    caseStudy?.features ||
    caseStudy?.keyFeatures || [
      'Responsive, component-driven user interface',
      'Clean architectural boundaries and data flow',
      'Robust error handling and validation logic',
    ];
  const resultsList =
    caseStudy?.results || [
      'Successfully engineered and deployed production-ready application.',
      'Achieved responsive performance across mobile and desktop devices.',
    ];
  const lessonsList =
    caseStudy?.lessonsLearned || [
      'Architectural discipline early in development prevents severe rework downstream.',
      'User feedback cycles ground engineering assumptions in actual utility.',
    ];

  return (
    <main className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-5xl mx-auto w-full space-y-12 sm:space-y-16">
      {/* Back to Work Navigation */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* 1. Project Header */}
      <header className="space-y-6 border-b border-border-subtle pb-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/30 shadow-2xs">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground bg-surface border border-border-subtle">
            {project.year || '2024'}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-subtle-foreground bg-surface border border-border-subtle">
            {project.ownership === 'solo' ? 'Solo Project' : 'Collaborative Platform'}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-base sm:text-xl text-accent font-serif italic">
              {project.subtitle}
            </p>
          )}
        </div>

        <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-subtle-foreground font-medium block">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono text-foreground/90 bg-surface border border-border-subtle hover:border-accent/40 transition-colors shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm hover:-translate-y-0.5 transition-all duration-200 shadow-md active:scale-[0.98]"
            >
              <span>Visit Live Platform</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface hover:bg-surface-hover text-foreground font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>Inspect Source Code</span>
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>
      </header>

      {/* 2. Executive Summary: Problem & Solution */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>01 // EXECUTIVE SUMMARY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <SpotlightCard className="p-6 sm:p-8 space-y-3" spotlightColor="var(--spotlight-color)">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-500 dark:text-rose-400 font-semibold">
              <span>⚠ The Problem</span>
            </div>
            <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
              {problemStatement}
            </p>
          </SpotlightCard>

          {/* Solution Card */}
          <SpotlightCard className="p-6 sm:p-8 space-y-3" spotlightColor="var(--spotlight-color-cyan)">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>✓ The Engineering Solution</span>
            </div>
            <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
              {solutionStatement}
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* 3. System Architecture Diagram & Data Flow */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>02 // SYSTEM ARCHITECTURE &amp; DATA FLOW</span>
        </div>

        <SpotlightCard className="p-6 sm:p-8 space-y-6" spotlightColor="var(--spotlight-color)">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
              Architectural Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans">
              High-level structural breakdown showing request lifecycles, service boundaries, and persistence.
            </p>
          </div>

          {/* Architecture Flow Banner */}
          <div className="p-4 rounded-xl bg-surface-sunken border border-border-subtle font-mono text-xs text-foreground/90 leading-relaxed shadow-inner">
            <div className="text-[10px] text-accent uppercase tracking-wider mb-1 font-semibold">
              DATA FLOW PIPELINE:
            </div>
            {caseStudy?.architectureFlow ||
              'User Interaction → Client Validation → API Gateway → Application Logic → Database Persistence & Cloud Delivery'}
          </div>

          {/* Architecture Layers Breakdown */}
          {caseStudy?.architectureLayers && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {caseStudy.architectureLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface border border-border-subtle space-y-1.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-accent font-semibold">{layer.layer}</span>
                    <span className="text-subtle-foreground font-medium">{layer.component}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </SpotlightCard>
      </section>

      {/* 4. Core Features & Capabilities */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>03 // CORE CAPABILITIES</span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface-card space-y-6 shadow-card">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
            Feature Breakdown &amp; Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresList.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-border-subtle">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm text-foreground/90 font-sans leading-relaxed">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Categorized Tech Stack */}
      {caseStudy?.techStackCategorized && (
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>04 // TECHNOLOGY SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudy.techStackCategorized.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border bg-surface-card space-y-2.5 shadow-2xs"
              >
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold block">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-sunken text-foreground/90 border border-border-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Development Process */}
      {caseStudy?.developmentPhases && (
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>05 // ENGINEERING PHASES</span>
          </div>

          <div className="space-y-3">
            {caseStudy.developmentPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl border border-border bg-surface-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/15 text-accent font-semibold border border-accent/25 shrink-0">
                    {phase.phase}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground font-sans">
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-0.5">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Engineering Challenges & Solutions */}
      {caseStudy?.engineeringChallenges && caseStudy.engineeringChallenges.length > 0 && (
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>06 // TECHNICAL CHALLENGES &amp; RESOLUTIONS</span>
          </div>

          <div className="space-y-4">
            {caseStudy.engineeringChallenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-surface-card space-y-3 shadow-2xs"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-rose-500 dark:text-rose-400 uppercase tracking-wider font-semibold">
                    Challenge {idx + 1}
                  </span>
                  <p className="text-sm font-medium text-foreground font-sans">
                    {item.challenge}
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-border-subtle">
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                    Implemented Solution
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Results & Lessons Learned */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>07 // OUTCOMES &amp; KEY LESSONS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Results Card */}
          <div className="p-6 sm:p-7 rounded-xl border border-border bg-surface-card space-y-3 shadow-2xs">
            <h3 className="text-base font-semibold text-foreground font-sans">
              Measurable Outcomes
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-sans">
              {resultsList.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent text-xs mt-0.5">✓</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="p-6 sm:p-7 rounded-xl border border-border bg-surface-card space-y-3 shadow-2xs">
            <h3 className="text-base font-semibold text-foreground font-sans">
              Engineering Takeaways
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-sans">
              {lessonsList.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent-cyan text-xs mt-0.5">▸</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <footer className="pt-10 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline"
        >
          <span>← Back to All Projects</span>
        </Link>
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Discuss This Project →</span>
        </Link>
      </footer>
    </main>
  );
}
