'use client';

import React from 'react';
import Link from 'next/link';
import Globe from '@/components/ui/Globe';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

export default function ExperienceGlobeSnapshot() {
  return (
    <section
      aria-label="Experience & Global Engineering"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>LEADERSHIP &amp; REACH // 05</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          Engineering Leadership &amp; <br />
          <span className="font-serif italic font-normal text-muted-foreground">Global Web Reach</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground font-sans leading-relaxed">
          From coordinating development teams and sprints to deploying scalable web products across continents.
        </p>
      </div>

      {/* Bento Grid: Left = Flagship Leadership Card, Right = Interactive Globe Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Bodha Soft Flagship Card (7 cols) */}
        <div className="lg:col-span-7 flex">
          <SpotlightCard
            className="p-6 sm:p-8 flex flex-col justify-between w-full group relative"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
                      Bodha Soft
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold border border-accent/30">
                      FLAGSHIP LEADERSHIP
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-accent font-medium">
                    Mobile Frontend Developer Intern → Team Lead
                  </p>
                </div>
                <div className="text-left sm:text-right font-mono text-xs text-muted-foreground">
                  <div>July 2025 – March 2026</div>
                  <div className="text-subtle-foreground">Bengaluru / Hybrid</div>
                </div>
              </div>

              {/* Big metrics bento badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl border border-border-subtle bg-surface text-center">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-accent">6</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    Dev Teams
                  </div>
                </div>
                <div className="p-3.5 rounded-xl border border-border-subtle bg-surface text-center">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-foreground">36</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    Developers
                  </div>
                </div>
                <div className="p-3.5 rounded-xl border border-border-subtle bg-surface text-center">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-accent">100%</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    Sprint Delivery
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Progressed from Mobile Frontend Developer Intern to Team Lead, coordinating 6 development teams and 36 developers on a civil service aspirant preparation app. Designed Figma UI/UX wireframes, built responsive mobile interfaces with React Native, and coordinated sprint execution using Git and Jira.
              </p>

              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-subtle-foreground font-medium">
                  Core Highlights
                </div>
                <ul className="space-y-2 text-xs text-foreground/90 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>Spearheaded sprint planning, GitHub PR reviews, and blocker resolution across 36 engineers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>Designed full user journey and delivered production UI components in React Native.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {['React Native', 'JavaScript', 'Figma', 'Git', 'Jira'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-sunken text-muted-foreground border border-border-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline shrink-0 ml-2"
              >
                <span>Full Timeline →</span>
              </Link>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Interactive Globe Card (5 cols) */}
        <div className="lg:col-span-5 flex">
          <SpotlightCard
            className="p-6 sm:p-8 flex flex-col justify-between w-full group relative overflow-hidden"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  GLOBAL NETWORK
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  UTC+05:30 • IST
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground font-sans">
                Building for the Modern Web
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                Collaborating with distributed teams, contributing to open-source software, and shipping low-latency web applications worldwide.
              </p>
            </div>

            {/* Interactive Globe Centerpiece */}
            <div className="my-4 flex items-center justify-center">
              <Globe size={280} />
            </div>

            {/* Hub info bar */}
            <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-subtle-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-foreground font-medium">Bengaluru / India</span>
              </div>
              <span>Remote &amp; Global Ready</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
