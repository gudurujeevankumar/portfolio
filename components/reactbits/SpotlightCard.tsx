'use client';

import React, { useRef, useState, useCallback } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/**
 * SpotlightCard — Adapted from React Bits (https://reactbits.dev/)
 * Tailored for Guduru Jeevan Kumar's Portfolio Design System.
 *
 * Features:
 * - Dynamic cursor-tracked radial glow on hover.
 * - Fully theme-aware: adapts to Dark (terminal glow) & Light (architectural sheen).
 * - Zero external animation libraries (vanilla React pointer tracking).
 * - Accessibility: Disabled when prefers-reduced-motion is active.
 * - Mobile safe: Gracefully ignores touch devices without performance penalty.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  borderColor,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const reducedMotion = React.useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [reducedMotion]
  );

  const handleFocus = () => {
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (!reducedMotion) {
      setOpacity(1);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const activeSpotlight = spotlightColor || 'var(--spotlight-color)';
  const activeBorderHighlight = borderColor || 'var(--color-border-accent)';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl sm:rounded-[22px] border border-border-subtle bg-surface-card/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[var(--card-shadow-hover)] hover:bg-surface-card ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[20px] transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${activeSpotlight}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Subtle Border Glow Enhancement */}
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[20px] transition-opacity duration-300"
          style={{
            opacity: opacity * 0.4,
            maskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black, transparent)`,
            border: `1.5px solid ${activeBorderHighlight}`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
