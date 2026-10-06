'use client';

import React, { useRef, useState } from 'react';

export interface LogoItem {
  node?: React.ReactNode;
  title: string;
  href?: string;
  badge?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // duration multiplier or speed
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LogoLoop({
  logos = [],
  speed = 28,
  direction = 'left',
  logoHeight = 48,
  gap = 48,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor,
  ariaLabel = 'Technology skills',
  className = '',
}: LogoLoopProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate logos multiple times to ensure seamless infinite looping
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  // Dynamic animation duration calibrated to maintain an even, slow, readable speed
  // For 25 items (repeatedLogos = 100) and speed around 20-35, this yields ~70-110s total duration (~12s per item on screen)
  const animationDuration = Math.max(25, (repeatedLogos.length * 24) / (speed || 28));

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full overflow-hidden select-none py-4 ${className}`}
    >
      {/* Left/Right Fade Out Gradients */}
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent"
            style={
              fadeOutColor
                ? {
                    background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
                  }
                : undefined
            }
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent"
            style={
              fadeOutColor
                ? {
                    background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
                  }
                : undefined
            }
            aria-hidden="true"
          />
        </>
      )}

      {/* Infinite scrolling track */}
      <div
        className="flex items-center w-max logo-loop-track"
        style={{
          gap: `${gap}px`,
          animationName: direction === 'left' ? 'logoLoopScrollLeft' : 'logoLoopScrollRight',
          animationDuration: `${animationDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: isHovered && hoverSpeed === 0 ? 'paused' : 'running',
        }}
      >
        {repeatedLogos.map((item, index) => {
          const content = (
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border-subtle bg-surface/70 backdrop-blur-xs transition-all duration-200 group ${
                scaleOnHover
                  ? 'hover:scale-105 hover:border-border hover:bg-surface-elevated hover:shadow-xs'
                  : ''
              }`}
              style={{ minHeight: `${logoHeight}px` }}
            >
              {item.node && (
                <div
                  className="flex items-center justify-center text-2xl text-muted-foreground group-hover:text-foreground transition-colors"
                  style={{ fontSize: `${Math.min(logoHeight * 0.55, 28)}px` }}
                >
                  {item.node}
                </div>
              )}
              <span className="text-xs sm:text-sm font-mono font-medium text-foreground whitespace-nowrap">
                {item.title}
              </span>
              {item.badge && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium">
                  {item.badge}
                </span>
              )}
            </div>
          );

          if (item.href) {
            return (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-focus rounded-xl"
                aria-label={item.title}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={`${item.title}-${index}`} tabIndex={0} className="focus-visible:outline-hidden">
              {content}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes logoLoopScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes logoLoopScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-loop-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
