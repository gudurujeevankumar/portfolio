'use client';

import React from 'react';
import Link from 'next/link';
import GlassSurface from '@/components/ui/GlassSurface';

export default function CurrentStatus() {
  const currentStatusData = {
    role: 'Software Engineer / Full-Stack Developer',
    headline: 'Early-career software engineer actively seeking full-time developer opportunities.',
    location: 'Bengaluru / Andhra Pradesh, India',
    availability: 'Open to full-time engineering opportunities',
    focus: ['React.js & React Native', 'Python & Django', 'MySQL & SQLite', 'GSAP & Bootstrap'],
    activeSprint: 'Shipped AP ICET Predictor • Team Lead at Bodha Soft (6 teams, 36 devs)',
  };

  return (
    <section aria-label="Current Professional Status" className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <GlassSurface
        width="100%"
        borderRadius={24}
        className="p-6 sm:p-8 border border-border bg-surface-card/70 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left badge & status indicator */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                CURRENT STATUS • 2026
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                {currentStatusData.availability}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-sans font-semibold text-foreground tracking-tight">
                {currentStatusData.role}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                {currentStatusData.headline}
              </p>
            </div>

            {/* Current sprint & location pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-subtle-foreground">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border-subtle">
                <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {currentStatusData.location}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border-subtle">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {currentStatusData.activeSprint}
              </span>
            </div>
          </div>

          {/* Right side: quick focus chips & CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
            <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
              {currentStatusData.focus.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-surface border border-border-subtle text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/about"
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
              >
                Read Journey →
              </Link>
              <Link
                href="/contact"
                className="btn-primary px-4 py-2 rounded-xl text-xs font-mono font-medium hover:-translate-y-0.5 transition-all shadow-xs"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </GlassSurface>
    </section>
  );
}
