'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PhilosophyPrinciple } from '@/data/about';
import {
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineArrowTrendingUp,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiChevronDown,
} from 'react-icons/hi2';

interface ExpandingPhilosophyCardsProps {
  principles: PhilosophyPrinciple[];
}

/**
 * Returns icon matching each principle number
 */
function getPrincipleIcon(number: string, className = 'w-5 h-5') {
  switch (number) {
    case '01':
      return <HiOutlineRocketLaunch className={`${className} text-rose-500 dark:text-rose-400`} />;
    case '02':
      return <HiOutlineShieldCheck className={`${className} text-emerald-500 dark:text-emerald-400`} />;
    case '03':
      return <HiOutlineCube className={`${className} text-sky-500 dark:text-sky-400`} />;
    case '04':
      return <HiOutlineArrowTrendingUp className={`${className} text-purple-500 dark:text-purple-400`} />;
    case '05':
      return <HiOutlineCpuChip className={`${className} text-cyan-500 dark:text-cyan-400`} />;
    default:
      return <HiOutlineSparkles className={`${className} text-accent`} />;
  }
}

/**
 * Principle accent configuration for borders, halos, badges, and tints
 */
const PRINCIPLE_THEMES: Record<
  string,
  {
    borderActive: string;
    glowActive: string;
    tintClass: string;
    badgeBg: string;
    dotBg: string;
    ambientBg: string;
  }
> = {
  '01': {
    borderActive: 'border-rose-500/40 dark:border-rose-400/50',
    glowActive: 'shadow-[0_16px_50px_-10px_rgba(244,63,94,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(244,63,94,0.22)]',
    tintClass: 'card-tint-rose',
    badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20',
    dotBg: 'bg-rose-500',
    ambientBg: 'rgba(244, 63, 94, 0.12)',
  },
  '02': {
    borderActive: 'border-emerald-500/40 dark:border-emerald-400/50',
    glowActive: 'shadow-[0_16px_50px_-10px_rgba(16,185,129,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(16,185,129,0.22)]',
    tintClass: 'card-tint-mint',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
    dotBg: 'bg-emerald-500',
    ambientBg: 'rgba(16, 185, 129, 0.12)',
  },
  '03': {
    borderActive: 'border-sky-500/40 dark:border-sky-400/50',
    glowActive: 'shadow-[0_16px_50px_-10px_rgba(14,165,233,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(14,165,233,0.22)]',
    tintClass: 'card-tint-cyan',
    badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20',
    dotBg: 'bg-sky-500',
    ambientBg: 'rgba(14, 165, 233, 0.12)',
  },
  '04': {
    borderActive: 'border-purple-500/40 dark:border-purple-400/50',
    glowActive: 'shadow-[0_16px_50px_-10px_rgba(168,85,247,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(168,85,247,0.22)]',
    tintClass: 'card-tint-lavender',
    badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20',
    dotBg: 'bg-purple-500',
    ambientBg: 'rgba(168, 85, 247, 0.12)',
  },
  '05': {
    borderActive: 'border-cyan-500/40 dark:border-cyan-400/50',
    glowActive: 'shadow-[0_16px_50px_-10px_rgba(6,182,212,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(6,182,212,0.22)]',
    tintClass: 'card-tint-blue',
    badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20',
    dotBg: 'bg-cyan-500',
    ambientBg: 'rgba(6, 182, 212, 0.12)',
  },
};

export default function ExpandingPhilosophyCards({ principles }: ExpandingPhilosophyCardsProps) {
  // Sticky expansion state:
  // Starts with card 0 (Build to Learn) expanded on page load.
  // When user hovers/focuses another card, it smoothly expands slowly.
  // When cursor leaves, it stays expanded on that card until another card is hovered!
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Keyboard navigation for desktop cards
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let nextIndex = index;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (index + 1) % principles.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (index - 1 + principles.length) % principles.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = principles.length - 1;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveIndex(index);
        return;
      }

      if (nextIndex !== index) {
        setActiveIndex(nextIndex);
        cardRefs.current[nextIndex]?.focus();
      }
    },
    [principles.length]
  );

  return (
    <div className="w-full space-y-4">
      {/* ==================================================================== */}
      {/* DESKTOP / LARGE TABLET VIEW: HORIZONTAL EXPANDING CARDS              */}
      {/* Visible on lg screens and up (>=1024px)                              */}
      {/* Cards are strictly stable (NO translateY jump on hover)              */}
      {/* Buttery-smooth, unhurried 700ms expansion                            */}
      {/* ==================================================================== */}
      <div
        className="hidden lg:flex flex-row items-stretch gap-3 xl:gap-4 w-full h-[400px] xl:h-[420px] select-none"
        role="region"
        aria-label="Interactive Engineering Principles Showcase"
      >
        {principles.map((p, index) => {
          const isActive = activeIndex === index;
          const theme = PRINCIPLE_THEMES[p.number] || PRINCIPLE_THEMES['01'];

          return (
            <button
              key={p.number}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              type="button"
              onClick={() => {
                setActiveIndex(index);
              }}
              onMouseEnter={() => {
                setActiveIndex(index);
              }}
              onFocus={() => {
                setActiveIndex(index);
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isActive}
              aria-label={`Principle ${p.number}: ${p.title}`}
              className={`
                about-card-surface expanding-card-stable text-left relative overflow-hidden rounded-2xl
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                flex flex-col justify-between p-5 xl:p-6 cursor-pointer h-full
                ${theme.tintClass}
                ${
                  isActive
                    ? `${theme.borderActive} ${theme.glowActive} bg-opacity-95 dark:bg-opacity-95`
                    : 'border-border-subtle opacity-75 hover:opacity-100 hover:border-border'
                }
              `}
              style={{
                flex: isActive ? '3.5 1 0%' : '1 1 0%',
                transform: 'none',
                transition: prefersReducedMotion
                  ? 'none'
                  : 'flex 700ms cubic-bezier(0.16, 1, 0.3, 1), border-color 450ms ease, box-shadow 450ms ease, background-color 450ms ease, opacity 450ms ease',
                willChange: 'flex',
              }}
            >
              {/* Background ambient blush for active state */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${theme.ambientBg}, transparent 65%)`,
                  }}
                />
              )}

              {/* CARD TOP ROW: Icon + Number + Status Badge */}
              <div className="relative z-10 w-full flex items-center justify-between gap-2 flex-shrink-0">
                <div className="flex items-center gap-2 xl:gap-2.5 min-w-0">
                  <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-surface-elevated/90 border border-border-subtle flex items-center justify-center shadow-xs flex-shrink-0">
                    {getPrincipleIcon(p.number, 'w-4 h-4 xl:w-5 xl:h-5')}
                  </div>
                  <div className="text-[11px] xl:text-xs font-mono font-bold tracking-wider text-accent uppercase whitespace-nowrap">
                    {isActive ? p.standard : p.number}
                  </div>
                </div>

                {/* Active Indicator Badge (Rendered ONLY when expanded to protect header layout) */}
                {isActive && (
                  <div
                    className={`
                      flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border flex-shrink-0
                      ${theme.badgeBg}
                      transition-opacity duration-500 ease-out
                    `}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.dotBg} animate-pulse`} />
                    <span>Principle {p.number}</span>
                  </div>
                )}
              </div>

              {/* CARD MIDDLE BODY: Title + Tagline + Smooth CSS Grid Description */}
              <div className="relative z-10 my-auto py-2 flex flex-col justify-center overflow-hidden w-full flex-1">
                {/* Title */}
                <h3 className="font-sans font-semibold text-foreground tracking-tight text-base xl:text-lg leading-snug line-clamp-3">
                  {p.title}
                </h3>

                {/* Tagline / Bold Preview */}
                <p className="font-sans text-xs xl:text-sm font-medium text-foreground/85 leading-snug pt-1 line-clamp-2">
                  {p.tagline}
                </p>

                {/* Full Supporting Description via CSS Grid Rows (Smooth & Stable without jump) */}
                <div
                  className={`
                    grid transition-[grid-template-rows,opacity] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100 pt-2 delay-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs xl:text-sm text-muted-foreground font-sans leading-relaxed max-w-xl">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD FOOTER: Subtle metadata & hint */}
              <div className="relative z-10 pt-3 border-t border-border-subtle/80 flex items-center justify-between text-[10px] font-mono text-subtle-foreground w-full flex-shrink-0">
                <span className="truncate">
                  {isActive ? 'Standard // Non-Negotiable' : `// ${p.number}`}
                </span>
                <span
                  className={`transition-opacity duration-500 text-[10px] font-mono ${
                    isActive ? 'opacity-100 text-accent font-semibold' : 'opacity-0'
                  }`}
                >
                  Active ↗
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ==================================================================== */}
      {/* MOBILE & TABLET ACCORDION VIEW: VERTICAL STACK                       */}
      {/* Visible on screens <1024px (<lg) with zero horizontal overflow      */}
      {/* ==================================================================== */}
      <div className="flex lg:hidden flex-col gap-3 w-full" role="tablist" aria-label="Engineering Principles Accordion">
        {principles.map((p, index) => {
          const isActive = mobileActiveIndex === index;
          const theme = PRINCIPLE_THEMES[p.number] || PRINCIPLE_THEMES['01'];

          return (
            <div
              key={p.number}
              className={`
                about-card-surface expanding-card-stable rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border
                ${theme.tintClass}
                ${
                  isActive
                    ? `${theme.borderActive} ${theme.glowActive} bg-opacity-95`
                    : 'border-border-subtle'
                }
              `}
              style={{
                transform: 'none',
              }}
            >
              {/* Accordion Header / Trigger Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileActiveIndex(isActive ? -1 : index);
                }}
                aria-expanded={isActive}
                aria-controls={`philosophy-content-${p.number}`}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-elevated/90 border border-border-subtle flex items-center justify-center shadow-2xs flex-shrink-0">
                    {getPrincipleIcon(p.number, 'w-4 h-4')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono font-bold tracking-wider text-accent uppercase">
                      {p.standard}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground font-sans truncate">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {isActive && (
                    <span className={`hidden min-[400px]:inline-block px-2 py-0.5 rounded-full text-[9px] font-mono border font-semibold ${theme.badgeBg}`}>
                      Active
                    </span>
                  )}
                  <div
                    className={`
                      w-6 h-6 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-muted-foreground transition-transform duration-500
                      ${isActive ? 'rotate-180 text-accent border-accent/30' : ''}
                    `}
                  >
                    <HiChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>

              {/* Accordion Expandable Content */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={`philosophy-content-${p.number}`}
                    role="region"
                    aria-labelledby={`principle-header-${p.number}`}
                    initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.15 : 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 space-y-2.5 border-t border-border-subtle/50">
                      <p className="text-xs sm:text-sm font-semibold text-foreground/90 font-sans leading-snug">
                        {p.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                        {p.description}
                      </p>
                      <div className="pt-2 text-[10px] font-mono text-subtle-foreground flex items-center justify-between">
                        <span>Standard // Non-Negotiable</span>
                        <span className="text-accent font-medium">Principle {p.number} of 05</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
