'use client';

import React from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const AI_WORKFLOW_ITEMS = [
  { label: 'Rapid Prototyping', desc: 'Accelerating initial spikes and architectural proofs of concept.' },
  { label: 'Alternative Implementations', desc: 'Comparing algorithmic approaches, trade-offs, and library choices.' },
  { label: 'Debugging Assistance', desc: 'Isolating subtle edge-case faults and tracing asynchronous race conditions.' },
  { label: 'Documentation Synthesis', desc: 'Drafting structured API contracts, schema manifests, and README guides.' },
  { label: 'Test Case Generation', desc: 'Formulating rigorous unit tests, boundary validations, and mock fixtures.' },
  { label: 'Code Review Assistance', desc: 'Cross-checking lint consistency, type soundness, and security posture.' },
  { label: 'UI Experimentation', desc: 'Iterating through responsive CSS layout variations and visual micro-states.' },
  { label: 'Technical Research', desc: 'Synthesizing framework documentation and version migration nuances.' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About and AI Philosophy"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>PERSPECTIVE // 06</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          About Me &amp; <br />
          <span className="font-serif italic font-normal text-muted-foreground">Engineering Philosophy</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          The principles that drive how I think about software development, systems architecture, and modern AI acceleration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-6 space-y-6 text-muted-foreground font-sans text-base leading-relaxed">
          <SpotlightCard className="p-6 sm:p-8 space-y-6 card-tint-lavender" spotlightColor="var(--spotlight-color)">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
              Developer → Engineer → Problem Solver
            </h3>

            <p>
              I am a Computer Science Engineering graduate from{' '}
              <strong className="text-foreground font-medium">Chadalawada Ramanamma Engineering College (CREC)</strong>{' '}
              (B.Tech CSE &apos;26, 8.53 CGPA), based in Bengaluru, India. My passion lies in constructing practical, production-oriented software that bridges thoughtful user interfaces with resilient backend architectures.
            </p>

            <p>
              Unlike developers who confine themselves to a single tier, I enjoy the entire progression: sketching user flows in Figma, architecting stateful React interfaces with CSS3, Bootstrap, and GSAP, designing backend services in Django, normalizing relational tables in MySQL and SQLite, and orchestrating deployments on Render, Vercel, and Netlify.
            </p>

            <p>
              My leadership experience—coordinating 6 development teams and 36 developers at Bodha Soft and organizing the Smart India Hackathon qualifier at CREC—taught me that software success is as much about clear communication, task deconstruction, and architectural discipline as it is about syntax.
            </p>

            {/* Academic Credential Pill */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-foreground font-medium">CREC • B.Tech Computer Science &amp; Engineering</span>
              <span className="text-accent font-semibold">CGPA: 8.53 / 10.0</span>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: AI Development Philosophy Card */}
        <div className="lg:col-span-6 space-y-6">
          <SpotlightCard
            className="p-6 sm:p-8 space-y-6 border-accent/25 card-tint-cyan"
            spotlightColor="var(--spotlight-color-cyan)"
            borderColor="var(--color-accent)"
          >
            {/* Philosophy Header Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/30">
                Modern Workflow Protocol
              </span>
              <span className="text-xs font-mono text-subtle-foreground">
                Human-Driven Engineering
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
              AI-Accelerated Development
            </h3>

            {/* Core Principle Quote */}
            <blockquote className="p-4 rounded-xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 border-l-2 border-l-accent text-sm sm:text-base font-serif italic text-foreground leading-relaxed shadow-2xs">
              &ldquo;AI accelerates my development process; engineering decisions, architecture, validation, and final implementation remain my responsibility.&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              I view AI not as a replacement for software engineering, but as a high-leverage productivity multiplier. It functions as a rapid co-pilot across 8 distinct phases of my workflow:
            </p>

            {/* 8 Areas of AI leverage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {AI_WORKFLOW_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="p-2.5 rounded-lg bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 space-y-1 shadow-2xs"
                >
                  <span className="text-xs font-mono font-semibold text-foreground block">
                    ✓ {item.label}
                  </span>
                  <p className="text-[11px] text-muted-foreground font-sans leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Principle Stamp */}
            <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-subtle-foreground">
              <span>Rigor Over Speed</span>
              <span className="text-accent-cyan font-medium">100% Verified Production Quality</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
