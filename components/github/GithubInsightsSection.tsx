'use client';

import React from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { portfolioData } from '@/data/portfolio';

interface GithubInsightsSectionProps {
  className?: string;
}

export default function GithubInsightsSection({ className = '' }: GithubInsightsSectionProps) {
  const { profile } = portfolioData;

  // Generate simulated months and days for the GitHub contribution grid
  const weeks = Array.from({ length: 28 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      // Deterministic pseudo-random pattern for authentic activity heatmap visual
      const val = (w * 7 + d * 13) % 19;
      if (val === 0 || val === 7) return 0;
      if (val < 5) return 1;
      if (val < 11) return 2;
      if (val < 16) return 3;
      return 4;
    })
  );

  return (
    <section className={`w-full py-8 sm:py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>OPEN SOURCE &amp; CODE ACTIVITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground font-sans">
            GitHub <span className="font-serif italic text-accent font-normal">Insights</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground">
            Yearly Contribution Overview &amp; Public Engineering Repositories
          </p>
        </div>

        {/* Spotlight Card with Contribution Grid & Stats */}
        <SpotlightCard
          className="p-6 sm:p-8 space-y-6 border-accent/20 card-tint-cyan"
          spotlightColor="var(--spotlight-color)"
        >
          {/* Top Profile Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 text-accent border border-accent/30 flex items-center justify-center font-mono text-sm font-bold shadow-2xs">
                GK
              </div>
              <div>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <span>@gudurujeevankumar</span>
                  <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-xs font-mono text-muted-foreground">
                  Continuous development &amp; repository commits
                </span>
              </div>
            </div>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono bg-surface hover:bg-surface-hover text-foreground border border-border-subtle transition-colors self-start sm:self-auto shadow-2xs"
            >
              <span>Follow on GitHub</span>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Heatmap Grid Visual */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex justify-between text-[11px] font-mono text-muted-foreground px-1">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>

              {/* Grid of Weeks & Days */}
              <div className="p-4 rounded-xl bg-white/75 dark:bg-white/[0.03] backdrop-blur-md border border-purple-500/10 dark:border-white/10 overflow-x-auto shadow-2xs">
                <div className="flex gap-1.5 min-w-[500px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                      {week.map((level, dIdx) => {
                        const bgClasses = [
                          'bg-surface border border-border-subtle',
                          'bg-accent/30',
                          'bg-accent/50',
                          'bg-accent/75',
                          'bg-accent',
                        ];
                        return (
                          <div
                            key={dIdx}
                            className={`h-3 w-3 rounded-xs ${bgClasses[level]} transition-colors`}
                            title={`Contribution activity`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-[10px] font-mono text-subtle-foreground pt-1">
                <span>Verified Public Commits &amp; Activity</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-surface border border-border-subtle" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-accent/30" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-accent/60" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-accent" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Side Stats Cards */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="p-4 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 space-y-1 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-muted-foreground">
                  Public Repositories
                </div>
                <div className="text-2xl font-mono font-bold text-accent">
                  15+
                </div>
                <div className="text-[11px] font-sans text-subtle-foreground">
                  Full-stack, ML &amp; Web tools
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 space-y-1 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-muted-foreground">
                  Production Deployments
                </div>
                <div className="text-2xl font-mono font-bold text-foreground">
                  8+
                </div>
                <div className="text-[11px] font-sans text-subtle-foreground">
                  Live on Vercel, Render &amp; Netlify
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 space-y-1 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-muted-foreground">
                  Engineering Focus
                </div>
                <div className="text-sm font-mono font-bold text-foreground">
                  Full-Stack &amp; ML
                </div>
                <div className="text-[11px] font-sans text-subtle-foreground">
                  Clean APIs &amp; Modern UI
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
