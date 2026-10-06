'use client';

import React from 'react';
import Link from 'next/link';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import GradientEditorial from '@/components/ui/GradientEditorial';

export default function HomeFeaturedWork() {
  const featuredProjects = [
    {
      id: 'project-ecu-fuel-prediction',
      slug: 'ecu-fuel-prediction',
      category: 'Python Application',
      year: '2025',
      title: 'Fuel Consumption Prediction & ECU Telemetry',
      subtitle: 'Vehicle Sensor Telemetry & Analytics Dashboard',
      description:
        'Automotive telemetry analytics system predicting vehicle fuel consumption rates from OBD-II sensor feeds (RPM, speed, throttle) to optimize fleet efficiency.',
      tech: ['Python', 'MySQL', 'JavaScript', 'CSS3', 'Git'],
    },
    {
      id: 'project-ap-eapcet-predictor',
      slug: 'ap-eapcet-predictor',
      category: 'Full-Stack Application',
      year: '2024',
      title: 'AP EAPCET College Predictor',
      subtitle: 'State Engineering Counseling Allotment Simulator',
      description:
        'Counseling allotment predictor evaluating rank percentiles against multi-year cutoff matrices for 270+ engineering institutes across Andhra Pradesh.',
      tech: ['React.js', 'Python', 'CSS3', 'Vercel'],
    },
  ];

  return (
    <section
      aria-label="Featured Projects Teaser"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>SELECTED WORK HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
            Engineered Systems &amp; <br />
            <GradientEditorial>Production Code</GradientEditorial>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
            A small preview of full-stack web and data-driven applications. Explore the full catalog with sticky project navigation in Work.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-hover text-xs font-mono font-medium text-foreground transition-all duration-200 shrink-0 self-start sm:self-auto shadow-2xs group"
        >
          <span>Explore Production &amp; Academic Projects</span>
          <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((p) => (
          <SpotlightCard
            key={p.id}
            className="p-6 sm:p-8 flex flex-col justify-between group space-y-6"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-surface text-muted-foreground border border-border-subtle font-medium">
                  {p.category}
                </span>
                <span className="text-subtle-foreground">{p.year}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-mono text-accent">
                  {p.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed line-clamp-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground bg-surface-sunken border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
              <Link
                href={`/work#${p.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline group-hover:translate-x-0.5 transition-transform"
              >
                <span>Inspect Architecture &amp; Tree →</span>
              </Link>
              <Link
                href={`/work/${p.slug}`}
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                Case Study
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
