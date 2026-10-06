'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

export default function ContactSection() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Connect"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      {/* Centered Editorial Invitation Card */}
      <SpotlightCard
        className="p-8 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto group relative border-accent/20 card-tint-lavender"
        spotlightColor="var(--spotlight-color)"
      >
        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Metadata Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/8 dark:bg-purple-950/30 text-xs font-mono tracking-widest text-purple-700 dark:text-purple-300 uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
            <span>INITIATE COLLABORATION // 07</span>
          </div>

          {/* Display Headlines */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
              Have an idea worth building?
            </h2>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-muted-foreground leading-[1.15]">
              Let&apos;s turn it into something real.
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
            I am actively seeking full-time opportunities as a Software Engineer, Full-Stack Developer, Frontend Developer, or Backend Developer.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Click-to-Copy Primary Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:ring-2 focus-visible:ring-focus"
            >
              <svg
                className={`w-4 h-4 transition-colors ${copiedEmail ? 'text-emerald-400' : 'text-white'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                {copiedEmail ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                )}
              </svg>
              <span>{copiedEmail ? 'Email Copied to Clipboard!' : "Let's Connect"}</span>
            </button>

            {/* Official Resume Link */}
            <a
              href={profile.resume.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-focus"
            >
              <span>View Resume (Drive)</span>
              <svg
                className="w-3.5 h-3.5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Direct Coordinate Channels */}
          <div className="pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-xl bg-surface-sunken border border-border-subtle hover:border-accent hover:text-foreground transition-all space-y-1 block"
            >
              <span className="text-[10px] text-subtle-foreground uppercase block font-medium">Direct Email</span>
              <span className="font-semibold text-foreground truncate block">{profile.email}</span>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface-sunken border border-border-subtle hover:border-accent hover:text-foreground transition-all space-y-1 block"
            >
              <span className="text-[10px] text-subtle-foreground uppercase block font-medium">Code Repositories</span>
              <span className="font-semibold text-foreground truncate block">github.com/gudurujeevankumar</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-surface-sunken border border-border-subtle hover:border-accent hover:text-foreground transition-all space-y-1 block"
            >
              <span className="text-[10px] text-subtle-foreground uppercase block font-medium">Professional Network</span>
              <span className="font-semibold text-foreground truncate block">linkedin.com/in/gudurujeevankumar</span>
            </a>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
