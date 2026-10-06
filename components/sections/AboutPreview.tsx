'use client';

import React from 'react';
import Link from 'next/link';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

export default function AboutPreview() {
  return (
    <section
      aria-label="About the Developer"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>ENGINEERING IDENTITY // 06</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          The Developer Behind <br />
          <span className="font-serif italic font-normal text-muted-foreground">The Architecture</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground font-sans leading-relaxed">
          Guduru Jeevan Kumar — Computer Science Engineer, team builder, and product-minded developer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left column: Narrative & background card (6 cols) */}
        <div className="lg:col-span-6 flex flex-col">
          <SpotlightCard
            className="p-6 sm:p-8 flex flex-col justify-between h-full group"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                  ENGINEERING PHILOSOPHY
                </span>
                <span className="text-xs font-mono text-subtle-foreground">CREC &apos;26</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif italic text-foreground font-normal leading-snug">
                &ldquo;Building useful software with clean code, purposeful UX, and genuine engineering craftsmanship.&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                I am a final-year Computer Science &amp; Engineering student at Chadalawada Ramanamma Engineering College (CREC), maintaining an 8.53 CGPA. My focus spans modern full-stack web applications, distributed APIs, machine-learning systems, and user-centric frontend experiences.
              </p>

              {/* Quick credentials grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl border border-border-subtle bg-surface space-y-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Academic Focus
                  </span>
                  <div className="text-xs sm:text-sm font-sans font-medium text-foreground">
                    B.Tech in Computer Science
                  </div>
                  <div className="text-[11px] font-mono text-accent">8.53 CGPA (Final Year)</div>
                </div>

                <div className="p-3.5 rounded-xl border border-border-subtle bg-surface space-y-1">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Location &amp; Availability
                  </span>
                  <div className="text-xs sm:text-sm font-sans font-medium text-foreground">
                    Bengaluru / Andhra Pradesh
                  </div>
                  <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    Available for Full-Time Roles
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-subtle-foreground">
                Read the comprehensive background story
              </span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium border border-border bg-surface hover:bg-surface-hover text-foreground transition-all duration-200 group"
              >
                <span>Full About Profile</span>
                <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </SpotlightCard>
        </div>

        {/* Right column: Leadership & Technical Milestones (6 cols) */}
        <div className="lg:col-span-6 flex flex-col">
          <SpotlightCard
            className="p-6 sm:p-8 flex flex-col justify-between h-full group"
            spotlightColor="var(--spotlight-color-cyan)"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan font-semibold block">
                  LEADERSHIP &amp; MILESTONES
                </span>
                <span className="text-xs font-mono text-subtle-foreground">COHORT EXECUTION</span>
              </div>

              {/* Milestone 1: Bodha Soft */}
              <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground font-sans">
                    Team Lead — Bodha Soft
                  </h4>
                  <span className="text-[10px] font-mono text-accent-cyan font-medium px-2 py-0.5 rounded bg-accent-cyan/10">
                    6 Teams / 36 Devs
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Progressed from Mobile Frontend Developer Intern to Team Lead, coordinating 6 development teams and 36 developers building a mobile application for UPSC aspirants.
                </p>
              </div>

              {/* Milestone 2: Smart India Hackathon */}
              <div className="p-4 rounded-xl border border-border-subtle bg-surface space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground font-sans">
                    Lead Organizer — SIH Internal Round
                  </h4>
                  <span className="text-[10px] font-mono text-accent font-medium px-2 py-0.5 rounded bg-accent/10">
                    CREC College Round
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Organized and executed institutional qualifier rounds for India&apos;s Smart India Hackathon, managing team registrations, mentor schedules, and technical reviews.
                </p>
              </div>

              {/* Engineering Focus Chips */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                  Key Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Full-Stack Web Development',
                    'React.js & React Native',
                    'Python & Django Backends',
                    'MySQL & SQLite Databases',
                    'Responsive UI & GSAP Motion',
                    'Git & Agile Collaboration',
                  ].map((competency) => (
                    <span
                      key={competency}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-foreground/90 bg-surface-sunken border border-border-subtle"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-subtle-foreground">
                View detailed career progression
              </span>
              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium border border-border bg-surface hover:bg-surface-hover text-accent transition-all duration-200 group"
              >
                <span>View Experience</span>
                <svg className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
