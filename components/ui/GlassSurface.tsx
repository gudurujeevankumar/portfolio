'use client';

import React from 'react';

interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number | string;
  width?: number | string;
  height?: number | string;
  backdropBlur?: number | string;
  highlightIntensity?: number;
}

export default function GlassSurface({
  children,
  className = '',
  borderRadius = 24,
  width,
  height,
  backdropBlur = '16px',
  style,
  ...props
}: GlassSurfaceProps) {
  const containerStyle: React.CSSProperties = {
    borderRadius,
    width,
    height,
    backdropFilter: `blur(${backdropBlur})`,
    WebkitBackdropFilter: `blur(${backdropBlur})`,
    ...style,
  };

  return (
    <div
      className={`relative overflow-hidden bg-background/60 dark:bg-background/40 border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 transition-all duration-300 ${className}`}
      style={containerStyle}
      {...props}
    >
      {/* Top Specular Edge Highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent dark:via-white/15"
        aria-hidden="true"
      />

      {/* Surface Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 to-transparent dark:from-white/5 opacity-50"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
