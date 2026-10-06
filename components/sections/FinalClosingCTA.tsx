'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import GradientEditorial from '@/components/ui/GradientEditorial';

export default function FinalClosingCTA() {
  return (
    <section
      id="contact-cta"
      aria-label="Call to Action & Collaboration"
      className="relative w-full py-16 sm:py-24 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto overflow-hidden border-t border-border-subtle/80"
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full h-full max-w-4xl opacity-80 dark:opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08), transparent 60%), radial-gradient(circle at 40% 60%, rgba(6,182,212,0.06), transparent 50%)',
          }}
        />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[320px] bg-purple-500/[0.04] dark:bg-purple-600/12 blur-[130px] rounded-full" />
      </div>

      {/* Main Centered Card Container (Tactile Liquid Glass Surface with Subtle Shadow) */}
      <div className="relative w-full max-w-4xl mx-auto rounded-[20px] sm:rounded-[24px] border border-white/80 dark:border-white/10 bg-white/75 dark:bg-surface-card/90 backdrop-blur-xl p-5 min-[380px]:p-8 sm:p-12 lg:p-16 text-center shadow-[0_20px_50px_rgba(20,15,40,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        {/* Soft Radial Ambient Splash on the Left Inside Card */}
        <div
          className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-cyan-400/[0.05] dark:bg-cyan-500/15 blur-[95px]"
          aria-hidden="true"
        />

        {/* Centered Content Stack */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-5 sm:space-y-7">
          {/* 1. Purple Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0" />
            <span className="truncate">OPEN TO FULL-TIME ROLES &amp; COLLABORATIONS</span>
          </div>

          {/* 2. Main Headline */}
          <div className="space-y-1">
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-foreground font-sans leading-[1.1]">
              Let&apos;s build something <br className="hidden sm:block" />
              <GradientEditorial>useful together.</GradientEditorial>
            </h2>
          </div>

          {/* 3. Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 w-full">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all min-h-[44px] w-full min-[420px]:w-auto"
            >
              <span>Let&apos;s Connect</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all min-h-[44px] w-full min-[420px]:w-auto"
            >
              <span>View My Work</span>
              <FiArrowRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>

          {/* 4. Narrative Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto pt-1">
            Whether you&apos;re hiring for a full-time software engineering role, architecting a
            real-world product, or looking for a technical collaborator, I&apos;d love to hear from
            you. Let&apos;s turn ambitious ideas into robust, production-ready systems.
          </p>
        </div>
      </div>
    </section>
  );
}
