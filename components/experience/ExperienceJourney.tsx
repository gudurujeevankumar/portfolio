'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineMapPin,
  HiArrowUpRight,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';
import { portfolioData } from '@/data/portfolio';
import GradientEditorial from '@/components/ui/GradientEditorial';

interface ExperienceCard {
  id: string;
  yearBadge: string;
  period: string;
  company: string;
  role: string;
  type: string;
  location: string;
  description: string;
  contributions: string[];
  technologies: string[];
  themeColor: {
    node: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    glow: string;
    lineColor: string;
  };
}

interface TimelineStage {
  year: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  themeColor: string;
  cards: ExperienceCard[];
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    year: '2025',
    title: 'Industry Experience',
    subtitle: 'Real-world experience & Leadership',
    icon: <HiOutlineBriefcase className="w-5 h-5 text-purple-400" />,
    themeColor: '#a855f7',
    cards: [
      {
        id: 'bodha-soft',
        yearBadge: '2025 – 2026',
        period: 'July 2025 – March 2026',
        company: 'Bodha Soft',
        role: 'Mobile Frontend Developer Intern → Team Lead',
        type: 'Leadership',
        location: 'Bengaluru / Hybrid',
        description:
          'Contributed to the development and UI/UX design of a mobile application tailored for UPSC civil service aspirants, progressing into a Team Lead role coordinating 6 development teams and 36 developers.',
        contributions: [
          'Progressed from intern to Team Lead, orchestrating sprint execution and milestone tracking across 6 development teams comprising 36 developers.',
          'Designed intuitive mobile UI/UX user flows, typography hierarchies, and interactive wireframes in Figma.',
          'Engineered core responsive screens and stateful frontend features using React Native.',
          'Facilitated cross-team sprint syncs, code reviews, and integration with backend API services.',
        ],
        technologies: ['React Native', 'JavaScript', 'Figma', 'Git', 'Jira'],
        themeColor: {
          node: '#a855f7',
          border: 'border-purple-500/30 hover:border-purple-500/70',
          badgeBg: 'bg-purple-500/15',
          badgeText: 'text-purple-400',
          glow: 'rgba(168, 85, 247, 0.4)',
          lineColor: '#a855f7',
        },
      },
      {
        id: 'codtech-it-solutions',
        yearBadge: '2025',
        period: 'May – June 2025',
        company: 'CODTECH IT Solutions',
        role: 'Full Stack Web Developer Intern',
        type: 'Internship',
        location: 'Remote',
        description:
          'Engaged in structured full-stack web development deliverables covering responsive design, real-time collaboration concepts, and modern web application patterns.',
        contributions: [
          'Worked on full-stack development tasks aligned with modern web standards.',
          'Maintained structured version control and clean, commented code repositories on GitHub.',
          'Applied modular component structuring and responsive layout adaptation.',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'GitHub'],
        themeColor: {
          node: '#818cf8',
          border: 'border-indigo-500/30 hover:border-indigo-500/70',
          badgeBg: 'bg-indigo-500/15',
          badgeText: 'text-indigo-400',
          glow: 'rgba(99, 102, 241, 0.4)',
          lineColor: '#818cf8',
        },
      },
      {
        id: 'ndvtechsys-solutions',
        yearBadge: '2025',
        period: 'May – July 2025',
        company: 'NDVTechsys Solutions',
        role: 'Full Stack Web Developer Intern',
        type: 'Internship',
        location: 'Remote',
        description:
          'Completed full-stack web development internship, focusing on backend service structures and relational database connectivity with SQL.',
        contributions: [
          'Participated in full-stack development cycles and enterprise application concepts.',
          'Practiced backend logic construction and relational database querying with SQL.',
          'Connected frontend form interfaces with backend validation routines.',
        ],
        technologies: ['SQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
        themeColor: {
          node: '#10b981',
          border: 'border-emerald-500/30 hover:border-emerald-500/70',
          badgeBg: 'bg-emerald-500/15',
          badgeText: 'text-emerald-400',
          glow: 'rgba(16, 185, 129, 0.4)',
          lineColor: '#10b981',
        },
      },
      {
        id: 'cognifyz-technologies',
        yearBadge: '2025',
        period: 'May – June 2025',
        company: 'Cognifyz Technologies',
        role: 'Python & Data Analytics Intern',
        type: 'Internship',
        location: 'Remote',
        description:
          'Explored Python scripting methodologies, dataset preprocessing pipelines, and analytics fundamentals.',
        contributions: [
          'Preprocessed raw data tables, handled missing indicators, and extracted relevant features.',
          'Constructed structured data transformation pipelines in Python.',
          'Analyzed performance metrics to evaluate real-world prediction accuracy.',
        ],
        technologies: ['Python', 'SQL', 'Git'],
        themeColor: {
          node: '#06b6d4',
          border: 'border-cyan-500/30 hover:border-cyan-500/70',
          badgeBg: 'bg-cyan-500/15',
          badgeText: 'text-cyan-400',
          glow: 'rgba(6, 182, 212, 0.4)',
          lineColor: '#06b6d4',
        },
      },
      {
        id: 'skyscanner-experience',
        yearBadge: '2025',
        period: 'May 2025',
        company: 'Skyscanner',
        role: 'Front-End Software Engineering Virtual Experience',
        type: 'Simulation',
        location: 'Remote',
        description:
          'Completed an industry-modeled engineering simulation for Skyscanner, engineering an interactive, accessible travel date-picker component.',
        contributions: [
          'Engineered dynamic calendar range-selection logic handling edge-case date boundaries.',
          'Ensured adherence to Skyscanner frontend accessibility guidelines and keyboard interactions.',
          'Deployed live interactive demonstration to Vercel with structured GitHub documentation.',
        ],
        technologies: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
        themeColor: {
          node: '#38bdf8',
          border: 'border-sky-500/30 hover:border-sky-500/70',
          badgeBg: 'bg-sky-500/15',
          badgeText: 'text-sky-400',
          glow: 'rgba(56, 189, 248, 0.4)',
          lineColor: '#38bdf8',
        },
      },
    ],
  },
  {
    year: '2024',
    title: 'Learning & Building',
    subtitle: 'Projects & Skill Development',
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-emerald-400" />,
    themeColor: '#10b981',
    cards: [
      {
        id: 'applied-academic-projects',
        yearBadge: '2024',
        period: 'January – December 2024',
        company: 'Academic & Production Systems',
        role: 'Full-Stack Developer & Systems Builder',
        type: 'Academic',
        location: 'CREC / Independent',
        description:
          'Developed multiple full-stack and data-driven web applications to apply theoretical computer science knowledge to high-stakes student and user workflows.',
        contributions: [
          'Built and deployed the AP EAPCET and AP ICET college allotment prediction engines handling state counseling cutoffs.',
          'Engineered the Student Academic Management Portal with attendance, grades, and CGPA calculation modules.',
          'Constructed relational schemas and optimized queries in MySQL and SQLite.',
          'Deployed full-stack services to Vercel and Render with continuous Git workflows.',
        ],
        technologies: ['React.js', 'Python', 'Django', 'MySQL', 'SQLite', 'Git'],
        themeColor: {
          node: '#10b981',
          border: 'border-emerald-500/30 hover:border-emerald-500/70',
          badgeBg: 'bg-emerald-500/15',
          badgeText: 'text-emerald-400',
          glow: 'rgba(16, 185, 129, 0.4)',
          lineColor: '#10b981',
        },
      },
    ],
  },
  {
    year: '2023',
    title: 'Core Development',
    subtitle: 'Full-Stack Projects',
    icon: <HiOutlineCodeBracket className="w-5 h-5 text-blue-400" />,
    themeColor: '#3b82f6',
    cards: [
      {
        id: 'core-dev-projects',
        yearBadge: '2023',
        period: 'January – December 2023',
        company: 'Core Development Projects',
        role: 'Frontend & Backend Foundations',
        type: 'Projects',
        location: 'Independent',
        description:
          'Advanced from static web layouts to dynamic applications, component-driven UI architecture, and structured database querying.',
        contributions: [
          'Built interactive user interfaces with JavaScript, CSS3, and React prototypes.',
          'Practiced relational data modeling and SQL schema design with joins and indices.',
          'Established Git branch workflows, pull requests, and GitHub version control discipline.',
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'Git'],
        themeColor: {
          node: '#3b82f6',
          border: 'border-blue-500/30 hover:border-blue-500/70',
          badgeBg: 'bg-blue-500/15',
          badgeText: 'text-blue-400',
          glow: 'rgba(59, 130, 246, 0.4)',
          lineColor: '#3b82f6',
        },
      },
    ],
  },
  {
    year: '2022',
    title: 'Foundation',
    subtitle: 'Software Fundamentals',
    icon: <HiOutlineBookOpen className="w-5 h-5 text-amber-400" />,
    themeColor: '#f59e0b',
    cards: [
      {
        id: 'cs-foundations',
        yearBadge: '2022',
        period: '2022 – Ongoing',
        company: 'Learning & Foundation',
        role: 'Computer Science Fundamentals — B.Tech CSE',
        type: 'Education',
        location: 'CREC Tirupati',
        description:
          'Focused on core programming concepts, data structures, algorithms, and web development fundamentals. Built initial projects and explored web technologies.',
        contributions: [
          'Learned fundamental programming concepts, algorithm analysis, and relational data modeling.',
          'Explored web technologies and semantic markup, building initial clones and responsive layouts.',
          'Organized the institutional qualification round for the Smart India Hackathon at CREC.',
        ],
        technologies: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
        themeColor: {
          node: '#f59e0b',
          border: 'border-amber-500/30 hover:border-amber-500/70',
          badgeBg: 'bg-amber-500/15',
          badgeText: 'text-amber-400',
          glow: 'rgba(245, 158, 11, 0.4)',
          lineColor: '#f59e0b',
        },
      },
    ],
  },
];

const GROWTH_YEARS = [
  { year: '2021', label: 'Basics', height: '22%', active: false },
  { year: '2022', label: 'B.Tech', height: '38%', active: false },
  { year: '2023', label: 'Projects', height: '58%', active: false },
  { year: '2024', label: 'Full-Stack', height: '78%', active: false },
  { year: '2025', label: 'Industry', height: '92%', active: true },
  { year: '2026', label: 'Lead', height: '100%', active: true },
];

const SKILL_BARS = [
  { label: 'Frontend Development', pct: '90%', barColor: 'from-purple-500 to-indigo-500' },
  { label: 'Backend Development', pct: '80%', barColor: 'from-blue-500 to-cyan-500' },
  { label: 'Database & APIs', pct: '75%', barColor: 'from-emerald-500 to-teal-500' },
  { label: 'Tools & Deployment', pct: '70%', barColor: 'from-amber-500 to-orange-500' },
];

export default function ExperienceJourney() {
  const { profile } = portfolioData;
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [segmentHeights, setSegmentHeights] = useState<{ [index: number]: number }>({});

  // Pre-calculate flattened journey cards with cross-stage boundary metadata
  const allCardsWithMeta = TIMELINE_STAGES.flatMap((stage, stageIdx) =>
    stage.cards.map((card, cardIdx) => ({
      card,
      stage,
      isStageEnd:
        cardIdx === stage.cards.length - 1 &&
        stageIdx < TIMELINE_STAGES.length - 1,
    }))
  );

  // Dynamically measure exact pixel distance between consecutive dots across all screens and stages
  useEffect(() => {
    const updateHeights = () => {
      const newHeights: { [index: number]: number } = {};
      for (let i = 0; i < allCardsWithMeta.length - 1; i++) {
        const cur = dotRefs.current[i];
        const nxt = dotRefs.current[i + 1];
        if (cur && nxt) {
          const curRect = cur.getBoundingClientRect();
          const nxtRect = nxt.getBoundingClientRect();
          const dist = (nxtRect.top + nxtRect.height / 2) - (curRect.top + curRect.height / 2);
          if (dist > 0) {
            newHeights[i] = Math.round(dist);
          }
        }
      }
      setSegmentHeights(newHeights);
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateHeights) : null;
    if (timelineRef.current && ro) {
      ro.observe(timelineRef.current);
    }
    dotRefs.current.forEach((el) => {
      if (el && ro) ro.observe(el);
    });

    return () => {
      window.removeEventListener('resize', updateHeights);
      if (ro) ro.disconnect();
    };
  }, [allCardsWithMeta.length]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ==================================================================== */}
      {/* 1. TOP HEADER & GROWTH HERO ROW                                      */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Editorial Header & Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>PROFESSIONAL JOURNEY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.08]">
              Experience &amp;{' '}
              <GradientEditorial>Growth</GradientEditorial>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-xl">
              A timeline of my professional journey, showcasing the experiences, skills, and impact
              I&apos;ve gained along the way.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-medium hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <span>Verified Resume</span>
              <HiArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-xs font-mono text-subtle-foreground">
              6 Teams • 36 Developers • 4 Internships + 1 Virtual Experience
            </span>
          </div>
        </div>

        {/* Right: "My Growth" Progress Bar Chart Card (Reference Matching) */}
        <div className="lg:col-span-5 rounded-2xl border border-border bg-surface-card/90 p-5 sm:p-6 backdrop-blur-sm shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-sans font-semibold text-foreground">My Growth</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-medium">
              <span>Continuous Growth</span>
              <HiArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            From learning fundamentals to building real-world solutions — every experience has shaped me into a better engineer.
          </p>

          {/* Visual Rising Year-by-Year Bars */}
          <div className="pt-2">
            <div className="h-24 flex items-end justify-between gap-3 px-2 border-b border-border-subtle pb-2">
              {GROWTH_YEARS.map((g) => (
                <div key={g.year} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div className="w-full relative flex items-end justify-center h-full">
                    <div
                      className={`w-full max-w-[28px] rounded-t-md transition-all duration-700 ${
                        g.active
                          ? 'bg-gradient-to-t from-accent to-purple-400 shadow-xs shadow-purple-500/30'
                          : 'bg-surface-elevated border-t border-x border-border-subtle group-hover:bg-accent/40'
                      }`}
                      style={{ height: g.height }}
                    />
                  </div>
                  <span
                    className={`font-mono text-[10px] tracking-tight ${
                      g.active ? 'text-accent font-semibold' : 'text-subtle-foreground'
                    }`}
                  >
                    {g.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. MAIN WATERFALL TIMELINE & EXPERIENCE CARDS + RIGHT SIDEBAR        */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ================================================================== */}
        {/* LEFT + CENTER: WATERFALL TIMELINE & EXPERIENCE CARDS (lg:col-span-8) */}
        {/* ================================================================== */}
        <div ref={timelineRef} className="lg:col-span-8 space-y-12">
          {TIMELINE_STAGES.map((stage) => (
            <div key={stage.year} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* ------------------------------------------------------------ */}
              {/* Left Column: Milestone Node (Year + Icon + Subtitle)         */}
              {/* ------------------------------------------------------------ */}
              <div className="md:col-span-4 lg:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 md:sticky md:top-24">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: stage.themeColor }}
                  />
                  <span className="font-mono text-base font-bold text-foreground tracking-wide">
                    {stage.year}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center shrink-0 shadow-2xs"
                    style={{ borderColor: `${stage.themeColor}40` }}
                  >
                    {stage.icon}
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs sm:text-sm font-sans font-semibold text-foreground block">
                      {stage.title}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground block">
                      {stage.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* Middle/Center: Continuous S-Curved Waterfall Spine + Experience Cards */}
              {/* ------------------------------------------------------------ */}
              <div className="md:col-span-8 lg:col-span-9 relative pl-10 sm:pl-14 space-y-6">
                {stage.cards.map((card) => {
                  const isHovered = hoveredCardId === card.id;
                  const globalIdx = allCardsWithMeta.findIndex(
                    (item) => item.card.id === card.id
                  );
                  const isFirstOverall = globalIdx === 0;
                  const isLastOverall =
                    globalIdx === allCardsWithMeta.length - 1;
                  const nextCardMeta = !isLastOverall
                    ? allCardsWithMeta[globalIdx + 1]
                    : null;
                  const isStageEnd =
                    allCardsWithMeta[globalIdx]?.isStageEnd ?? false;
                  const sign = globalIdx % 2 === 0 ? -1 : 1;
                  const amp = 24;

                  return (
                    <div
                      key={card.id}
                      className="relative group"
                      onMouseEnter={() => setHoveredCardId(card.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                    >
                      {/* Integrated Spine Column: Continuous S-Curve + Anchor Node + Connector */}
                      <div className="absolute -left-10 sm:-left-14 top-0 w-10 sm:w-14 h-full pointer-events-none overflow-visible">
                        {/* 1. Top Lead-in ONLY for the Very First Card in the Journey */}
                        {isFirstOverall && (
                          <svg
                            className="absolute left-0 -top-7 w-full h-7 pointer-events-none overflow-visible"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="leadin-journey-start"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={stage.themeColor}
                                  stopOpacity="0.25"
                                />
                                <stop
                                  offset="100%"
                                  stopColor={card.themeColor.node}
                                  stopOpacity="0.95"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 45 0 L 45 100"
                              fill="none"
                              stroke="url(#leadin-journey-start)"
                              strokeWidth="2.5"
                              vectorEffect="non-scaling-stroke"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {/* 2. Continuous Organic S-Curve Segment connecting to next Card (intra-stage or cross-stage) */}
                        {!isLastOverall && nextCardMeta && (
                          <svg
                            className={`absolute left-0 pointer-events-none overflow-visible w-full ${
                              !segmentHeights[globalIdx]
                                ? isStageEnd
                                  ? 'h-[calc(100%+7.25rem)] md:h-[calc(100%+3rem)]'
                                  : 'h-[calc(100%+1.5rem)]'
                                : ''
                            }`}
                            style={{
                              top: '1.75rem',
                              height: segmentHeights[globalIdx]
                                ? `${segmentHeights[globalIdx]}px`
                                : undefined,
                            }}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id={`scurve-journey-${card.id}`}
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={card.themeColor.node}
                                  stopOpacity="0.95"
                                />
                                <stop
                                  offset="100%"
                                  stopColor={nextCardMeta.card.themeColor.node}
                                  stopOpacity="0.95"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d={`M 45 0 C 45 15, ${45 + sign * amp} 25, 45 50 C ${45 - sign * amp} 75, 45 85, 45 100`}
                              fill="none"
                              stroke={`url(#scurve-journey-${card.id})`}
                              strokeWidth="2.5"
                              vectorEffect="non-scaling-stroke"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {/* 3. Soft Gradient Lead-out Tail ONLY for the Very Last Card in the Journey */}
                        {isLastOverall && (
                          <svg
                            className="absolute left-0 w-full h-16 pointer-events-none overflow-visible"
                            style={{ top: '1.75rem' }}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="tail-journey-end"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={card.themeColor.node}
                                  stopOpacity="0.95"
                                />
                                <stop
                                  offset="100%"
                                  stopColor={card.themeColor.node}
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 45 0 C 45 30, 36 60, 45 100"
                              fill="none"
                              stroke="url(#tail-journey-end)"
                              strokeWidth="2.5"
                              vectorEffect="non-scaling-stroke"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {/* 4. Anchor Node (Dot) centered precisely on the S-Curve spine */}
                        <div
                          ref={(el) => {
                            dotRefs.current[globalIdx] = el;
                          }}
                          className="absolute top-7 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-surface-card transition-all duration-300 pointer-events-auto z-10"
                          style={{
                            left: 'calc(45% - 8px)',
                            borderColor: card.themeColor.node,
                            boxShadow: isHovered
                              ? `0 0 16px ${card.themeColor.glow}`
                              : `0 0 8px ${card.themeColor.glow}`,
                            transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full absolute inset-0 m-auto"
                            style={{ backgroundColor: card.themeColor.node }}
                          />
                        </div>

                        {/* 5. Horizontal Connector Branch from Node to Card border */}
                        <div
                          className="absolute top-7 -translate-y-1/2 h-[2px] transition-colors duration-300"
                          style={{
                            left: 'calc(45% + 8px)',
                            right: 0,
                            backgroundColor: isHovered
                              ? card.themeColor.node
                              : undefined,
                          }}
                        >
                          {!isHovered && (
                            <div className="w-full h-full bg-border-subtle" />
                          )}
                        </div>
                      </div>

                      {/* The Experience Card (Reference Matching) */}
                      <div
                        className={`rounded-2xl border bg-surface-card/95 backdrop-blur-md p-6 sm:p-7 space-y-5 transition-all duration-300 shadow-sm ${
                          card.themeColor.border
                        } ${isHovered ? 'shadow-lg -translate-y-0.5' : ''}`}
                      >
                        {/* Top Header Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-subtle">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-muted-foreground shrink-0">
                              <HiOutlineBuildingOffice2 className="w-4 h-4" />
                            </div>
                            <span className="font-mono text-xs text-muted-foreground">
                              {card.period}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground bg-surface px-2.5 py-1 rounded-md border border-border-subtle">
                              <HiOutlineMapPin className="w-3 h-3 text-muted-foreground" />
                              <span>{card.location}</span>
                            </span>

                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${card.themeColor.badgeBg} ${card.themeColor.badgeText} border border-current/20`}
                            >
                              {card.type}
                            </span>
                          </div>
                        </div>

                        {/* Title & Role */}
                        <div className="space-y-1">
                          <h2 className="text-xl sm:text-2xl font-sans font-semibold tracking-tight text-foreground">
                            {card.company}
                          </h2>
                          <p
                            className="text-xs sm:text-sm font-mono font-medium"
                            style={{ color: card.themeColor.node }}
                          >
                            {card.role}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                          {card.description}
                        </p>

                        {/* Contributions Bullets */}
                        <div className="space-y-2 pt-2 border-t border-border-subtle/70">
                          <ul className="space-y-1.5 font-sans">
                            {card.contributions.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                  style={{ backgroundColor: card.themeColor.node }}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology Pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {card.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-sunken border border-border-subtle text-foreground/80 hover:text-foreground transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ================================================================== */}
        {/* RIGHT SIDEBAR: KEY HIGHLIGHTS, SKILLS PROGRESSION & QUOTE (lg:col-span-4) */}
        {/* ================================================================== */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* Panel 1: Key Highlights (Reference Matching) */}
          <div className="rounded-2xl border border-border bg-surface-card/90 p-6 backdrop-blur-sm shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
              <HiOutlineSparkles className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-sans font-semibold text-foreground tracking-tight">
                Key Highlights
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-surface-sunken border border-border-subtle flex items-center gap-3 group hover:border-accent/40 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-500 shrink-0 font-mono text-sm font-bold">
                  ⚡
                </span>
                <div>
                  <span className="text-sm font-sans font-semibold text-foreground block">
                    4 Internships + 1 Virtual Experience
                  </span>
                  <span className="text-xs font-mono text-muted-foreground block">
                    Industry Experience
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-sunken border border-border-subtle flex items-center gap-3 group hover:border-accent/40 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent shrink-0 font-mono text-xs font-bold">
                  &lt;/&gt;
                </span>
                <div>
                  <span className="text-sm font-sans font-semibold text-foreground block">
                    Multiple Production &amp; Academic Projects
                  </span>
                  <span className="text-xs font-mono text-muted-foreground block">
                    Real-world Applications
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-sunken border border-border-subtle flex items-center gap-3 group hover:border-accent/40 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                  <HiOutlineUserGroup className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-sm font-sans font-semibold text-foreground block">
                    Growing Skills
                  </span>
                  <span className="text-xs font-mono text-muted-foreground block">
                    Continuous Learning
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-sunken border border-border-subtle flex items-center gap-3 group hover:border-accent/40 transition-colors">
                <span className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 font-mono text-xs font-bold">
                  👥
                </span>
                <div>
                  <span className="text-sm font-sans font-semibold text-foreground block">
                    Team Lead Experience
                  </span>
                  <span className="text-xs font-mono text-muted-foreground block">
                    Coordinated 6 Teams &amp; 36 Devs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Skills Progression (Reference Matching) */}
          <div className="rounded-2xl border border-border bg-surface-card/90 p-6 backdrop-blur-sm shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
              <HiOutlineChartBar className="w-4 h-4 text-accent" />
              <h2 className="text-sm font-sans font-semibold text-foreground tracking-tight">
                Skills Progression
              </h2>
            </div>

            <div className="space-y-4">
              {SKILL_BARS.map((bar) => (
                <div key={bar.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground">{bar.label}</span>
                    <span className="text-foreground font-semibold">{bar.pct}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-surface-sunken border border-border-subtle overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${bar.barColor}`}
                      style={{ width: bar.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
              <span className="text-subtle-foreground">Progression:</span>
              <span className="text-accent font-medium">Applied Systems</span>
            </div>
          </div>

          {/* Panel 3: Philosophy / Reflection Card (Reference Matching) */}
          <div className="rounded-2xl border border-border bg-surface-card/90 p-6 backdrop-blur-sm shadow-sm space-y-3 relative overflow-hidden">
            <span className="text-5xl font-serif text-accent/20 absolute -top-1 right-4 select-none pointer-events-none">
              &ldquo;
            </span>

            <p className="text-xs sm:text-sm text-foreground/90 font-sans italic leading-relaxed relative z-10">
              &ldquo;Every experience, whether big or small, has contributed to my growth as a developer.&rdquo;
            </p>

            <span className="text-xs font-mono text-muted-foreground block pt-1 text-right">
              — Jeevan Kumar
            </span>
          </div>

          {/* Quick CTA to Work & Projects */}
          <div className="p-5 rounded-2xl border border-border-subtle bg-surface-sunken flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-sans font-semibold text-foreground block">
                Explore Applied Work
              </span>
              <span className="text-[11px] font-mono text-muted-foreground block">
                Browse production &amp; academic projects
              </span>
            </div>

            <Link
              href="/work"
              className="px-3.5 py-1.5 rounded-lg bg-surface border border-border-subtle hover:border-accent text-xs font-mono text-foreground hover:text-accent transition-colors"
            >
              View Work →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
