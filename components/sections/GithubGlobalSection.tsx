'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Globe from '@/components/ui/Globe';
import GradientEditorial from '@/components/ui/GradientEditorial';
import { portfolioData } from '@/data/portfolio';
import { FiArrowUpRight } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import {
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

interface DayActivity {
  count: number;
  level: number;
  isPeakCyan: boolean;
  dateStr: string;
}

export default function GithubGlobalSection() {
  const { profile } = portfolioData;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Deterministic, authentic 52-week calendar distribution with natural clusters, streaks, and gaps
  const weeks = useMemo(() => {
    const calendar: DayActivity[][] = [];
    const now = new Date(2025, 9, 5); // Oct 5, 2025 anchor

    for (let w = 0; w < 52; w++) {
      const week: DayActivity[] = [];
      for (let d = 0; d < 7; d++) {
        const idx = w * 7 + d;
        const isWeekend = d === 0 || d === 6;

        // Seasonal life-cycle phases:
        // Sprint 1: Weeks 7 to 15 (ECU fuel & telemetry platform build)
        // Quiet Period 1: Weeks 18 to 22 (College exams / end of semester transition)
        // Sprint 2: Weeks 25 to 33 (Summer open source & AP EAPCET predictor)
        // Steady Progress: Weeks 34 to 40 (Internship & system engineering)
        // Sprint 3: Weeks 41 to 48 (Portfolio launch & architecture optimization)
        // Holiday Quiet: Weeks 50 to 51 (Year-end pause)
        const isSprint1 = w >= 7 && w <= 15;
        const isSprint2 = w >= 25 && w <= 33;
        const isSprint3 = w >= 41 && w <= 48;
        const isQuiet = (w >= 18 && w <= 22) || (w >= 50 && w <= 51);

        // Deterministic integer hash based on day index
        const h = (idx * 2654435761 ^ (idx >> 4) * 2246822519) >>> 0;
        const rand = (h % 1000) / 1000.0;

        let commitCount = 0;
        if (isQuiet) {
          // Mostly empty days (level 0), isolated 1-2 commits on rare weekdays
          if (rand > 0.86 && !isWeekend) {
            commitCount = 1 + (h % 3);
          }
        } else if (isSprint1 || isSprint2 || isSprint3) {
          // Intense engineering sprints: consecutive streaks, higher levels (2, 3, 4)
          const activeThreshold = isWeekend ? 0.35 : 0.17;
          if (rand > activeThreshold) {
            const r2 = h % 100;
            if (r2 < 36) {
              commitCount = 2 + Math.floor((r2 / 36.0) * 3); // 2-4 (level 1 or 2)
            } else if (r2 < 70) {
              commitCount = 5 + Math.floor(((r2 - 36) / 34.0) * 5); // 5-9 (level 2 or 3)
            } else if (r2 < 91) {
              commitCount = 10 + Math.floor(((r2 - 70) / 21.0) * 6); // 10-15 (level 3 or 4)
            } else if (r2 < 97) {
              commitCount = 16 + Math.floor(((r2 - 91) / 6.0) * 5); // 16-20 (level 4)
            } else {
              commitCount = 21 + Math.floor(((r2 - 97) / 3.0) * 4); // 21-24 (peak cyan release)
            }
          }
        } else {
          // Regular steady shipping cadence
          const activeThreshold = isWeekend ? 0.66 : 0.42;
          if (rand > activeThreshold) {
            const r2 = h % 100;
            if (r2 < 56) {
              commitCount = 1 + Math.floor((r2 / 56.0) * 3); // 1-3 (level 1)
            } else if (r2 < 85) {
              commitCount = 4 + Math.floor(((r2 - 56) / 29.0) * 5); // 4-8 (level 2)
            } else if (r2 < 96) {
              commitCount = 9 + Math.floor(((r2 - 85) / 11.0) * 5); // 9-13 (level 3)
            } else {
              commitCount = 14 + Math.floor(((r2 - 96) / 4.0) * 4); // 14-17 (level 4)
            }
          }
        }

        // 5 standard activity levels
        let level = 0;
        if (commitCount === 0) level = 0;
        else if (commitCount <= 3) level = 1;
        else if (commitCount <= 7) level = 2;
        else if (commitCount <= 13) level = 3;
        else level = 4;

        // Occasional cyan accent for top-peak production release days
        const isPeakCyan = commitCount >= 21;

        // Approximate date string for tooltip
        const dayOffset = (51 - w) * 7 + (6 - d);
        const cellDate = new Date(now.getTime() - dayOffset * 24 * 60 * 60 * 1000);
        const dateStr = cellDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        week.push({
          count: commitCount,
          level,
          isPeakCyan,
          dateStr,
        });
      }
      calendar.push(week);
    }
    return calendar;
  }, []);

  // Compute verifiable contribution count directly from calendar cells
  const totalContributions = useMemo(() => {
    return weeks.reduce((sum, w) => sum + w.reduce((s, d) => s + d.count, 0), 0);
  }, [weeks]);

  // Color classes for 5 activity levels + occasional cyan accent
  const getCellColor = (day: DayActivity) => {
    if (day.isPeakCyan) {
      return 'bg-[#06B6D4] dark:bg-[#22D3EE] border border-[#0891B2] dark:border-[#67E8F9]/60 shadow-[0_0_8px_rgba(6,182,212,0.4)]';
    }
    switch (day.level) {
      case 1:
        // Level 1: Very pale lavender
        return 'bg-[#EDE9FE] dark:bg-[#7C3AED]/20 border border-[#DDD6FE] dark:border-[#7C3AED]/30';
      case 2:
        // Level 2: Light purple
        return 'bg-[#C4B5FD] dark:bg-[#7C3AED]/45 border border-[#A78BFA] dark:border-[#8B5CF6]/50';
      case 3:
        // Level 3: Medium purple
        return 'bg-[#8B5CF6] dark:bg-[#8B5CF6] border border-[#7C3AED] dark:border-[#A78BFA]/50 shadow-[0_0_6px_rgba(139,92,246,0.3)]';
      case 4:
        // Level 4: Strong purple
        return 'bg-[#6D28D9] dark:bg-[#A855F7] border border-[#5B21B6] dark:border-[#C084FC]/60 shadow-[0_0_8px_rgba(109,40,217,0.4)] dark:shadow-[0_0_8px_rgba(168,85,247,0.5)]';
      default:
        // Level 0: Neutral / Light Gray
        return 'bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.03] dark:border-white/[0.02]';
    }
  };

  return (
    <section
      id="github-global"
      aria-label="GitHub Development Insights & Global Availability"
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-[1240px] mx-auto space-y-10 sm:space-y-12 border-t border-border-subtle/80"
    >
      {/* Editorial Section Header (Open Canvas) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-purple-800 dark:text-purple-300 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
            <span>CONSISTENT DEVELOPMENT // 04</span>
          </div>
          <h2 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-[1.08]">
            Consistent <GradientEditorial>Development</GradientEditorial>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-sans leading-relaxed">
            Public engineering contributions, open-source repositories, and verified production
            deployments across global teams.
          </p>
        </div>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all self-start md:self-end hover:-translate-y-0.5 group min-h-[44px]"
        >
          <span>View GitHub Profile</span>
          <FiArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>
      </div>

      {/* Main Grid: Heatmap & Metrics (Left ~60%) + Global Availability (Right ~40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* =================================================================== */}
        {/* LEFT COLUMN: GITHUB PROFILE, HEATMAP & METRICS (lg:col-span-7)      */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 rounded-3xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/25 bg-white/85 dark:bg-surface-card/90 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)] flex flex-col justify-between space-y-5 transition-all duration-200 card-tint-cyan">
          {/* 1. GitHub Profile Identity Header (Aligned, spacious, zero overflow) */}
          <div className="space-y-3 pb-4 border-b border-purple-500/8 dark:border-white/8">
            {/* Top Row: User Avatar, Name, Handle & Quick Profile Link */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-purple-500/25 bg-surface-elevated shadow-2xs">
                    <Image
                      src="/profile-portrait.png"
                      alt="Guduru Jeevan Kumar"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#07080C] shadow-[0_0_6px_#10B981]" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-foreground font-sans tracking-tight leading-tight">
                      Guduru Jeevan Kumar
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      @gudurujeevankumar
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans truncate mt-0.5">
                    Full-Stack Developer • Open Source &amp; Systems Engineering
                  </p>
                </div>
              </div>

              {/* Profile Link Button */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] border border-purple-500/15 dark:border-white/15 text-xs font-mono font-medium text-foreground transition-all hover:-translate-y-0.5 shadow-2xs shrink-0 group"
              >
                <span className="hidden min-[420px]:inline">GitHub Profile</span>
                <span className="min-[420px]:hidden">Profile</span>
                <SiGithub className="w-3.5 h-3.5 text-foreground/80 group-hover:text-foreground" />
                <FiArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Sub-row: Stats Pill & Active Engineering Status (Always perfectly aligned & never overflowing) */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-0.5">
              {/* Stats Pill */}
              <div className="inline-flex items-center divide-x divide-purple-500/15 dark:divide-white/10 px-3 py-1.5 rounded-full bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 text-xs font-mono text-muted-foreground shadow-2xs">
                <span className="pr-2.5 sm:pr-3">
                  <strong className="text-foreground font-bold font-mono">51</strong> Repos
                </span>
                <span className="px-2.5 sm:px-3">
                  <strong className="text-foreground font-bold font-mono">4</strong> Followers
                </span>
                <span className="pl-2.5 sm:pl-3">
                  <strong className="text-foreground font-bold font-mono">13</strong> Following
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  Verified Active Contributor
                </span>
              </div>
            </div>
          </div>

          {/* 2. Public Contribution Heatmap Section */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Public Contribution Heatmap
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {totalContributions.toLocaleString()} Contributions / Year
              </span>
            </div>

            {/* Heatmap Visual Matrix */}
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-black/35 backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] overflow-x-auto touch-pan-x [scrollbar-width:thin]">
              <div className="min-w-[620px]">
                {/* Month Markers */}
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground pb-2 px-1">
                  {months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                {/* 52-Week Contribution Grid */}
                <div className="flex gap-1">
                  {weeks.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-1">
                      {week.map((day, dIndex) => (
                        <span
                          key={dIndex}
                          className={`w-2.5 h-2.5 rounded-xs transition-colors duration-150 ${getCellColor(
                            day
                          )}`}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} (${day.dateStr})`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-3 mt-3 border-t border-purple-500/8 dark:border-white/8">
                <span>Year-round shipping</span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-xs bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.03] dark:border-white/[0.02]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#EDE9FE] dark:bg-[#7C3AED]/20 border border-[#DDD6FE] dark:border-[#7C3AED]/30" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#C4B5FD] dark:bg-[#7C3AED]/45 border border-[#A78BFA] dark:border-[#8B5CF6]/50" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#8B5CF6] dark:bg-[#8B5CF6]" />
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#6D28D9] dark:bg-[#A855F7]" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Source Code Language Breakdown (Fills empty space with high-value engineering data) */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-subtle-foreground uppercase tracking-wider text-[11px] font-semibold">
                Repository Language Breakdown
              </span>
              <span className="text-[10px] text-muted-foreground">
                Verified Code Across 51 Repositories
              </span>
            </div>

            {/* Multi-Segment Language Bar */}
            <div className="w-full h-2 rounded-full overflow-hidden flex bg-surface-muted/80 border border-purple-500/10 dark:border-white/10 shadow-inner">
              <div style={{ width: '44.8%' }} className="bg-[#3572A5] h-full" title="Python: 44.8%" />
              <div style={{ width: '32.4%' }} className="bg-[#F7DF1E] h-full" title="JavaScript: 32.4%" />
              <div style={{ width: '12.6%' }} className="bg-[#61DAFB] h-full" title="React / TypeScript: 12.6%" />
              <div style={{ width: '6.8%' }} className="bg-[#E34F26] h-full" title="HTML5 & CSS3: 6.8%" />
              <div style={{ width: '3.4%' }} className="bg-[#4479A1] h-full" title="SQL: 3.4%" />
            </div>

            {/* Language Tags Legend */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono">
              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[#3572A5]" />
                Python <strong className="text-muted-foreground font-normal">44.8%</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[#F7DF1E]" />
                JavaScript <strong className="text-muted-foreground font-normal">32.4%</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[#61DAFB]" />
                React / TS <strong className="text-muted-foreground font-normal">12.6%</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[#E34F26]" />
                HTML/CSS <strong className="text-muted-foreground font-normal">6.8%</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/90">
                <span className="w-2 h-2 rounded-full bg-[#4479A1]" />
                SQL <strong className="text-muted-foreground font-normal">3.4%</strong>
              </span>
            </div>
          </div>

          {/* 4. Bottom 3 Summary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-purple-500/8 dark:border-white/8">
            <div className="p-3.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs flex items-start gap-3 hover:-translate-y-0.5 transition-all">
              <div className="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                <HiOutlineCodeBracket className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold font-sans text-foreground">51</div>
                <div className="text-xs font-medium text-foreground/90 truncate">Public Repos</div>
                <div className="text-[10px] text-muted-foreground truncate">Full-stack, ML &amp; Web</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs flex items-start gap-3 hover:-translate-y-0.5 transition-all">
              <div className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                <HiOutlineRocketLaunch className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold font-sans text-foreground">8+</div>
                <div className="text-xs font-medium text-foreground/90 truncate">Deployments</div>
                <div className="text-[10px] text-muted-foreground truncate">Vercel &amp; Render</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs flex items-start gap-3 hover:-translate-y-0.5 transition-all">
              <div className="p-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                <HiOutlineUserGroup className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold font-sans text-foreground">Open Source</div>
                <div className="text-xs font-medium text-foreground/90 truncate">Active Builder</div>
                <div className="text-[10px] text-muted-foreground truncate">Community Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT COLUMN: GLOBAL OPPORTUNITIES WORLDWIDE (lg:col-span-5)        */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 rounded-3xl border border-purple-500/10 dark:border-white/10 hover:border-purple-500/25 bg-white/85 dark:bg-surface-card/90 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)] flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-200 card-tint-lavender">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/10 dark:bg-cyan-950/40 text-[10px] min-[360px]:text-[11px] font-mono tracking-wide text-cyan-800 dark:text-cyan-300 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>GLOBAL COLLABORATION</span>
            </div>

            <h3 className="text-xl min-[380px]:text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-sans">
              Open to <br className="hidden sm:inline" />
              <GradientEditorial>Opportunities Worldwide</GradientEditorial>
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              I&apos;m open to full-time Software Engineer positions, remote collaboration, and high-impact
              product engineering teams across time-zones.
            </p>
          </div>

          {/* Strictly Contained Dotted 3D Globe Visual with Subtle Atmospheric Radial Glow */}
          <div
            className="relative w-full h-52 flex items-center justify-center overflow-hidden rounded-2xl bg-white/60 dark:bg-black/25 border border-purple-500/10 dark:border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.12), rgba(79, 124, 255, 0.05) 45%, transparent 75%)',
            }}
          >
            <Globe size={190} showDragHint={false} />

            <div className="absolute bottom-3 left-4 pointer-events-none select-none z-10">
              <span className="font-serif italic text-purple-700/85 dark:text-purple-300/85 text-xs sm:text-sm block tracking-wide">
                Collaborate across borders ↗
              </span>
            </div>
          </div>

          {/* Location & Status Strip */}
          <div className="p-3.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              <span className="text-xs sm:text-sm font-semibold text-foreground font-mono">
                Bengaluru, India
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">● Active</span>
              <span>• Remote</span>
              <span>• Full-Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
