'use client';

import React from 'react';
import SpecularButton from '@/components/ui/SpecularButton';
import GlassSurface from '@/components/ui/GlassSurface';
import { portfolioData } from '@/data/portfolio';
import GradientEditorial from '@/components/ui/GradientEditorial';

export default function HomeCTA() {
  const { profile } = portfolioData;

  return (
    <section
      aria-label="Call to Action"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <GlassSurface
        width="100%"
        borderRadius={32}
        className="p-8 sm:p-14 lg:p-16 border border-border bg-surface-card/80 text-center relative overflow-hidden shadow-xl"
      >
        {/* Ambient atmospheric glows */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/15 dark:bg-accent/25 blur-[100px] rounded-full"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono text-muted-foreground shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium tracking-wide">
              OPEN TO FULL-TIME SOFTWARE ENGINEER &amp; FULL-STACK ROLES
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-foreground leading-[1.15]">
              Let&apos;s build something <br />
              <GradientEditorial>useful together.</GradientEditorial>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-sans max-w-xl mx-auto leading-relaxed">
              Whether you are looking for an early-career Software Engineer, Full-Stack Developer, or React / Python builder ready to deliver value from day one.
            </p>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <SpecularButton href="/contact" size="lg" radius={18}>
              <span>Let&apos;s Connect</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </SpecularButton>

            <SpecularButton href="/work" size="lg" radius={18} className="bg-surface text-foreground border border-border hover:bg-surface-hover">
              <span>View All Projects</span>
            </SpecularButton>
          </div>

          {/* Direct channels */}
          <div className="pt-6 border-t border-border-subtle/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
            >
              {profile.email}
            </a>
            <span className="text-border">•</span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-border">•</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub ↗
            </a>
            {profile.youtubeUrl && (
              <>
                <span className="text-border">•</span>
                <a
                  href={profile.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  YouTube ↗
                </a>
              </>
            )}
          </div>
        </div>
      </GlassSurface>
    </section>
  );
}
