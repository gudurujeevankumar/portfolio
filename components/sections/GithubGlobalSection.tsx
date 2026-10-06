'use client';

import React, { useState, useEffect, useMemo } from 'react';
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

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalContributions: number;
  contributions: { date: string; count: number; level: number }[];
  languages: { name: string; pct: number; color: string }[];
  isLive: boolean;
}

export default function GithubGlobalSection() {
  const { profile } = portfolioData;
  const [liveStats, setLiveStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github/stats');
        if (res.ok) {
          const data: GitHubStats = await res.json();
          if (isMounted) {
            setLiveStats(data);
          }
        }
      } catch (err) {
        console.warn('[GitHub Stats Fetch]', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // 53-week Sunday-to-Saturday calendar grid for Year 2026 (matching official GitHub calendar)
  const { weeks, monthHeaders } = useMemo(() => {
    const dayMap: Record<string, { count: number; level: number }> = {};

    if (liveStats?.contributions && liveStats.contributions.length > 0) {
      for (const d of liveStats.contributions) {
        dayMap[d.date] = { count: d.count, level: d.level };
      }
    }

    const startDate = new Date(Date.UTC(2026, 0, 1)); // Jan 1, 2026 (Thursday)
    const firstDayOfWeek = startDate.getUTCDay(); // 4
    const calendarStart = new Date(startDate);
    calendarStart.setUTCDate(startDate.getUTCDate() - firstDayOfWeek); // Dec 28, 2025 (Sunday)

    const calendar: DayActivity[][] = [];
    const monthFirstWeekMap: Record<number, number> = {};
    let curr = new Date(calendarStart);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let w = 0; w < 53; w++) {
      const week: DayActivity[] = [];
      for (let d = 0; d < 7; d++) {
        const dateKey = curr.toISOString().split('T')[0];
        const isCurrentYear = curr.getUTCFullYear() === 2026;
        const monthIndex = curr.getUTCMonth();

        if (isCurrentYear && monthFirstWeekMap[monthIndex] === undefined) {
          monthFirstWeekMap[monthIndex] = w;
        }

        const data = dayMap[dateKey];
        const count = isCurrentYear && data ? data.count : 0;
        const level = isCurrentYear && data ? data.level : 0;
        const isPeakCyan = count >= 15;

        const dateStr = curr.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          timeZone: 'UTC',
        });

        week.push({
          count,
          level,
          isPeakCyan,
          dateStr: isCurrentYear ? dateStr : '',
        });

        curr.setUTCDate(curr.getUTCDate() + 1);
      }
      calendar.push(week);
    }

    const headers: { month: string; weekIndex: number }[] = [];
    for (let m = 0; m < 12; m++) {
      if (monthFirstWeekMap[m] !== undefined) {
        headers.push({
          month: monthNames[m],
          weekIndex: monthFirstWeekMap[m],
        });
      }
    }

    return { weeks: calendar, monthHeaders: headers };
  }, [liveStats]);

  // Compute total contributions from live stats or fallback matrix (843 in 2026)
  const totalContributions = useMemo(() => {
    if (liveStats?.totalContributions) {
      return liveStats.totalContributions;
    }
    return 843;
  }, [liveStats]);

  // Dynamic language breakdown
  const languagesList = useMemo(() => {
    if (liveStats?.languages && liveStats.languages.length > 0) {
      return liveStats.languages;
    }
    return [
      { name: 'Python', pct: 44.8, color: '#3572A5' },
      { name: 'JavaScript', pct: 32.4, color: '#f1e05a' },
      { name: 'React / TS', pct: 12.6, color: '#61dafb' },
      { name: 'HTML/CSS', pct: 6.8, color: '#e34c26' },
      { name: 'SQL', pct: 3.4, color: '#e38c00' },
    ];
  }, [liveStats]);

  const reposCount = liveStats?.publicRepos ?? 52;
  const followersCount = liveStats?.followers ?? 4;
  const followingCount = liveStats?.following ?? 13;

  // High-contrast, crystal-clear 5-tier activity color density (Strictly 1:1 with legend)
  const getCellColor = (day: DayActivity) => {
    switch (day.level) {
      case 1:
        // Level 1: Soft lavender
        return 'bg-[#DDD6FE] dark:bg-[#7C3AED]/40 border border-[#C4B5FD] dark:border-[#7C3AED]/50';
      case 2:
        // Level 2: Medium purple
        return 'bg-[#A78BFA] dark:bg-[#8B5CF6]/70 border border-[#8B5CF6] dark:border-[#8B5CF6]/80';
      case 3:
        // Level 3: Deep rich purple
        return 'bg-[#7C3AED] dark:bg-[#A855F7] border border-[#6D28D9] dark:border-[#C084FC]/70 shadow-[0_0_4px_rgba(124,58,237,0.35)]';
      case 4:
        // Level 4: Peak high-intensity purple
        return 'bg-[#4C1D95] dark:bg-[#D8B4FE] border border-[#3B0764] dark:border-white/90 shadow-[0_0_6px_rgba(76,29,149,0.45)] dark:shadow-[0_0_8px_rgba(216,180,254,0.6)]';
      default:
        // Level 0: Clean, visible no-commit empty cell
        return 'bg-slate-200/60 dark:bg-white/[0.06] border border-slate-300/70 dark:border-white/[0.08]';
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
          {/* 1. GitHub Profile Identity Header */}
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

            {/* Sub-row: Stats Pill & Active Engineering Status */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-0.5">
              {/* Stats Pill */}
              <div className="inline-flex items-center divide-x divide-purple-500/15 dark:divide-white/10 px-3 py-1.5 rounded-full bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 text-xs font-mono text-muted-foreground shadow-2xs">
                <span className="pr-2.5 sm:pr-3">
                  <strong className="text-foreground font-bold font-mono">{reposCount}</strong> Repos
                </span>
                <span className="px-2.5 sm:px-3">
                  <strong className="text-foreground font-bold font-mono">{followersCount}</strong> Followers
                </span>
                <span className="pl-2.5 sm:pl-3">
                  <strong className="text-foreground font-bold font-mono">{followingCount}</strong> Following
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {liveStats?.isLive ? 'Verified Live GitHub Sync' : 'Verified Active Contributor'}
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
              <span className="text-emerald-600 dark:text-emerald-400 font-medium font-mono">
                {totalContributions.toLocaleString()} Contributions in 2026
              </span>
            </div>

            {/* Heatmap Visual Matrix (Fixed square cells with smooth scroll) */}
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-black/35 backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] overflow-x-auto touch-pan-x [scrollbar-width:thin]">
              <div className="w-max min-w-[690px] pb-1">
                {/* Month Markers (Aligned with the 53 week columns) */}
                <div className="flex items-center h-4 mb-2.5 pl-7">
                  <div className="flex gap-[3px]">
                    {weeks.map((_, wIdx) => {
                      const match = monthHeaders.find((h) => h.weekIndex === wIdx);
                      return (
                        <div key={wIdx} className="w-2.5 shrink-0 text-[10px] font-mono text-muted-foreground relative select-none">
                          {match ? (
                            <span className="absolute left-0 bottom-0 whitespace-nowrap font-medium text-foreground/80 pointer-events-none">
                              {match.month}
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 53-Week Contribution Grid with Weekday Labels on Left */}
                <div className="flex items-start gap-2">
                  {/* Weekday Row Labels */}
                  <div className="flex flex-col gap-[3px] pr-1 text-[9px] font-mono text-muted-foreground select-none shrink-0">
                    <span className="w-5 h-2.5 flex items-center leading-none" />
                    <span className="w-5 h-2.5 flex items-center leading-none">Mon</span>
                    <span className="w-5 h-2.5 flex items-center leading-none" />
                    <span className="w-5 h-2.5 flex items-center leading-none">Wed</span>
                    <span className="w-5 h-2.5 flex items-center leading-none" />
                    <span className="w-5 h-2.5 flex items-center leading-none">Fri</span>
                    <span className="w-5 h-2.5 flex items-center leading-none" />
                  </div>

                  {/* 53 Weekly Columns of 7 Days */}
                  <div className="flex gap-[3px]">
                    {weeks.map((week, wIndex) => (
                      <div key={wIndex} className="flex flex-col gap-[3px] shrink-0">
                        {week.map((day, dIndex) => (
                          <span
                            key={dIndex}
                            className={`w-2.5 h-2.5 rounded-[2px] shrink-0 transition-colors duration-150 ${getCellColor(
                              day
                            )}`}
                            title={
                              day.dateStr
                                ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.dateStr}`
                                : undefined
                            }
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heatmap Legend (Strict 1:1 match with cell colors) */}
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-3 mt-3 border-t border-purple-500/8 dark:border-white/8">
                <span>Jan – Dec Activity</span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-slate-200/60 dark:bg-white/[0.06] border border-slate-300/70 dark:border-white/[0.08]"
                    title="0 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[#DDD6FE] dark:bg-[#7C3AED]/40 border border-[#C4B5FD] dark:border-[#7C3AED]/50"
                    title="1-3 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[#A78BFA] dark:bg-[#8B5CF6]/70 border border-[#8B5CF6] dark:border-[#8B5CF6]/80"
                    title="4-8 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[#7C3AED] dark:bg-[#A855F7] border border-[#6D28D9] dark:border-[#C084FC]/70 shadow-[0_0_4px_rgba(124,58,237,0.35)]"
                    title="9-14 contributions"
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-[2px] bg-[#4C1D95] dark:bg-[#D8B4FE] border border-[#3B0764] dark:border-white/90 shadow-[0_0_6px_rgba(76,29,149,0.45)] dark:shadow-[0_0_8px_rgba(216,180,254,0.6)]"
                    title="15+ contributions"
                  />
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
                Verified Code Across {reposCount} Repositories
              </span>
            </div>

            {/* Multi-Segment Language Bar */}
            <div className="w-full h-2 rounded-full overflow-hidden flex bg-surface-muted/80 border border-purple-500/10 dark:border-white/10 shadow-inner">
              {languagesList.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                  className="h-full transition-all duration-300"
                  title={`${lang.name}: ${lang.pct}%`}
                />
              ))}
            </div>

            {/* Language Tags Legend */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono">
              {languagesList.map((lang) => (
                <span key={lang.name} className="inline-flex items-center gap-1.5 text-foreground/90">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  {lang.name} <strong className="text-muted-foreground font-normal">{lang.pct}%</strong>
                </span>
              ))}
            </div>
          </div>

          {/* 4. Bottom 3 Summary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-purple-500/8 dark:border-white/8">
            <div className="p-3.5 rounded-xl bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs flex items-start gap-3 hover:-translate-y-0.5 transition-all">
              <div className="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-500/20 shrink-0">
                <HiOutlineCodeBracket className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold font-sans text-foreground">{reposCount}</div>
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
