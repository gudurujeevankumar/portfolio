'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { contactAvailability } from '@/data/contact';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import {
  HiOutlineCalendarDays,
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineCheck,
  HiOutlineArrowTopRightOnSquare,
} from 'react-icons/hi2';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

export default function ContactDirectCards() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="h-full flex flex-col justify-between gap-6">
      {/* Card 1: Current Availability */}
      <SpotlightCard
        className="p-6 sm:p-7 space-y-4 group transition-all duration-300"
        spotlightColor="var(--spotlight-color-cyan)"
      >
        <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-2xs flex-shrink-0">
              <HiOutlineCalendarDays className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-sans tracking-tight">
              Current Availability
            </h3>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-sans leading-relaxed">
          {contactAvailability.description}
        </p>

        {/* 3 Mini Info Tiles */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 pt-1">
          <div className="p-2 sm:p-2.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle text-left space-y-0.5 sm:space-y-1 min-w-0">
            <div className="flex items-center gap-1.5 text-purple-500">
              <HiOutlineBriefcase className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground font-sans truncate">
                {contactAvailability.employmentType}
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[10px] text-muted-foreground block font-sans truncate">
              Open
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle text-left space-y-0.5 sm:space-y-1 min-w-0">
            <div className="flex items-center gap-1.5 text-blue-500">
              <HiOutlineMapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground font-sans truncate">
                Location
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[11px] text-muted-foreground block font-sans truncate sm:whitespace-nowrap">
              Bengaluru / Remote
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle text-left space-y-0.5 sm:space-y-1 min-w-0">
            <div className="flex items-center gap-1.5 text-purple-500">
              <HiOutlineCalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground font-sans truncate">
                Start Date
              </span>
            </div>
            <span className="text-[9.5px] sm:text-[10px] text-muted-foreground block font-sans truncate">
              {contactAvailability.startDate}
            </span>
          </div>
        </div>
      </SpotlightCard>

      {/* Card 2: Direct Contact */}
      <SpotlightCard
        className="p-6 sm:p-7 space-y-4 group transition-all duration-300"
        spotlightColor="var(--spotlight-color)"
      >
        <div className="space-y-1 pb-3 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-accent flex items-center justify-center shadow-2xs flex-shrink-0">
              <HiOutlineEnvelope className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground font-sans tracking-tight">
              Direct Contact
            </h3>
          </div>
          <p className="text-xs text-muted-foreground font-sans leading-relaxed pt-1">
            Prefer a direct approach? You can reach me through email or connect on professional platforms.
          </p>
        </div>

        <div className="space-y-3">
          {/* Email with copy button */}
          <div className="h-14 p-3 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle flex items-center justify-between gap-3 hover:border-border transition-colors">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-lg bg-surface border border-border-subtle text-accent flex-shrink-0">
                <HiOutlineEnvelope className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-muted-foreground block uppercase font-medium">
                  Email
                </span>
                <span className="text-xs sm:text-[12.5px] font-sans text-foreground font-semibold truncate block select-all">
                  {profile.email}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 border cursor-pointer ${
                copiedEmail
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-[#eef2ff] dark:bg-indigo-950/40 hover:bg-[#e0e7ff] dark:hover:bg-indigo-900/50 text-[#4f46e5] dark:text-indigo-300 border-[#c7d2fe]/70 dark:border-indigo-800/40 shadow-2xs'
              }`}
              aria-label="Copy email address to clipboard"
            >
              {copiedEmail ? (
                <>
                  <HiOutlineCheck className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>

          {/* LinkedIn Link */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 p-3 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle flex items-center justify-between gap-3 hover:border-border transition-colors group/link"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-lg bg-surface border border-border-subtle text-[#0A66C2] flex-shrink-0">
                <FaLinkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-muted-foreground block uppercase font-medium">
                  LinkedIn
                </span>
                <span className="text-xs sm:text-[12.5px] font-sans text-foreground font-semibold truncate block">
                  linkedin.com/in/gudurujeevankumar
                </span>
              </div>
            </div>

            <span className="p-1 rounded-md text-subtle-foreground group-hover/link:text-accent transition-colors flex-shrink-0">
              <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
            </span>
          </a>

          {/* GitHub Link */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 p-3 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle flex items-center justify-between gap-3 hover:border-border transition-colors group/link"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-lg bg-surface border border-border-subtle text-foreground flex-shrink-0">
                <SiGithub className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-muted-foreground block uppercase font-medium">
                  GitHub
                </span>
                <span className="text-xs sm:text-[12.5px] font-sans text-foreground font-semibold truncate block">
                  github.com/gudurujeevankumar
                </span>
              </div>
            </div>

            <span className="p-1 rounded-md text-subtle-foreground group-hover/link:text-accent transition-colors flex-shrink-0">
              <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
            </span>
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}
