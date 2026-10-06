'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import SelectedWork from '@/components/SelectedWork';
import GithubStats from '@/components/github/GithubStats';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

export default function WorkPage() {
  return (
    <main className="flex-1 w-full space-y-16 sm:space-y-24">
      {/* 1. The Core Projects Section with Left Sticky BranchedMenu & 11 Project Cards */}
      <SelectedWork />

      {/* 2. GitHub Repo Stats & Open Source Velocity (Framer Component Adapted) */}
      <section
        aria-label="GitHub Repository Statistics"
        className="py-12 sm:py-16 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full space-y-8"
      >
        <div className="flex flex-col items-start text-left max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPEN SOURCE VELOCITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
            GitHub Repository Stats &amp; <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-muted-foreground">Code Intelligence</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
            Real-time repository telemetry, 52-week commit participation cadence, and language breakdown across public engineering codebases on GitHub (@gudurujeevankumar).
          </p>
        </div>

        {/* Framer-adapted Github Repo Stats component */}
        <GithubStats />
      </section>

      {/* 3. UI/UX Design System Section in Figma */}
      <section
        aria-label="UI/UX Prototyping"
        className="py-12 sm:py-16 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full space-y-8"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>UI/UX &amp; PROTOTYPING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
            Figma Design Systems &amp; Mobile Flows
          </h2>
          <p className="text-sm text-muted-foreground font-sans max-w-xl">
            User interface blueprints, design systems, and interaction flows designed for civil service aspirants and healthcare systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.uiuxDesigns.map((design) => (
            <SpotlightCard
              key={design.id}
              className="p-6 sm:p-8 space-y-5"
              spotlightColor="var(--spotlight-color)"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-surface text-muted-foreground border border-border-subtle">
                  {design.category}
                </span>
                <span className="text-xs font-mono text-accent">Figma Prototype</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground font-sans">
                  {design.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans">
                  {design.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground block">
                  Focus Areas:
                </span>
                <ul className="text-xs font-sans text-muted-foreground space-y-1">
                  {design.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-accent text-[10px]">▸</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                <span className="text-xs font-mono text-subtle-foreground">
                  Tools: {design.tools.join(', ')}
                </span>
                <a
                  href={design.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline font-medium"
                >
                  <span>Open in Figma</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-12 border-t border-border-subtle max-w-7xl mx-auto px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline"
        >
          <span>Explore Technical Stack &amp; Skills →</span>
        </Link>
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Initiate Contact →</span>
        </Link>
      </footer>
    </main>
  );
}
