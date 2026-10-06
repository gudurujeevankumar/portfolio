'use client';

import React from 'react';

interface ECUTelemetryProps {
  className?: string;
}

export default function ECUTelemetry({ className = '' }: ECUTelemetryProps) {
  // Coordinated sensor telemetry parameters
  const metrics = {
    rpm: '2,450',
    throttle: '28.4%',
    estLoss: '-0.8%',
    avgConsumption: '6.4 L',
    classification: 'ECO-OPTIMAL (94.2%)',
  };

  return (
    <div
      className={`rounded-2xl border border-purple-500/10 dark:border-white/10 bg-white/85 dark:bg-surface-card/90 backdrop-blur-xl p-3.5 sm:p-5 lg:p-6 shadow-[0_10px_35px_rgba(80,60,120,0.06),0_2px_8px_rgba(80,60,120,0.04)] space-y-4 sm:space-y-5 ${className}`}
    >
      {/* Console Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-foreground font-semibold tracking-wide">
            ECU Telemetry Visualizer
          </span>
        </div>
        <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
          SIMULATED LAB INGEST
        </span>
      </div>

      {/* Consumption Curve Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>CONSUMPTION CURVE (L/100KM)</span>
          <span className="text-accent-cyan font-medium">AVG: {metrics.avgConsumption}</span>
        </div>

        {/* Constrained Chart Container */}
        <div className="h-34 w-full rounded-xl bg-white/80 dark:bg-surface-elevated/70 border border-purple-500/8 dark:border-white/8 p-3 flex flex-col justify-between relative overflow-hidden shadow-2xs">
          {/* Background Reference Grid */}
          <div className="absolute inset-x-3 top-3 bottom-8 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="w-full border-b border-dashed border-foreground/40" />
            <div className="w-full border-b border-dashed border-foreground/40" />
            <div className="w-full border-b border-dashed border-foreground/40" />
          </div>

          {/* Strictly Clipped SVG Plotting Surface with Edge-to-Edge Coverage */}
          <div className="relative w-full h-20 overflow-hidden rounded-lg">
            <svg
              className="w-full h-full block overflow-hidden"
              viewBox="0 0 500 80"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Strict Boundary Clip Path enclosing the plotting area */}
                <clipPath id="ecuStrictClip">
                  <rect x="0" y="0" width="500" height="80" rx="4" />
                </clipPath>

                {/* Shaded Area Gradient */}
                <linearGradient id="ecuAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <g clipPath="url(#ecuStrictClip)">
                {/* Shaded Area under Curve extending from edge to edge */}
                <path
                  d="M 0 55 Q 74 22 142 44 T 279 26 T 390 40 T 500 28 L 500 80 L 0 80 Z"
                  fill="url(#ecuAreaGradient)"
                />

                {/* Main Plotted Telemetry Curve spanning full width */}
                <path
                  id="ecuMainCurve"
                  d="M 0 55 Q 74 22 142 44 T 279 26 T 390 40 T 500 28"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.2"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />

                {/* Sensor Sampling Reference Stations positioned directly on the curve */}
                <circle cx="142" cy="44" r="2.5" fill="var(--border-hover)" />
                <circle cx="279" cy="26" r="2.5" fill="var(--border-hover)" />
                <circle cx="390" cy="40" r="2.5" fill="var(--border-hover)" />

                {/* Active Dynamic Sensor Probe Dot — follows the curve from edge to edge */}
                <g>
                  <animateMotion
                    dur="7s"
                    repeatCount="indefinite"
                    path="M 0 55 Q 74 22 142 44 T 279 26 T 390 40 T 500 28"
                    rotate="auto"
                  />
                  {/* Subtle concentric SVG pulse ring without escaping transform boundaries */}
                  <circle cx="0" cy="0" r="6" fill="var(--accent-cyan)" opacity="0.25">
                    <animate
                      attributeName="r"
                      values="3.5;7.5;3.5"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0.1;0.5"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Outer probe ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="3.5"
                    fill="var(--accent-cyan)"
                    stroke="var(--surface-card)"
                    strokeWidth="1.2"
                  />
                  {/* Core luminous point */}
                  <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                </g>
              </g>
            </svg>
          </div>

          {/* X-Axis Speed Band Labels */}
          <div className="flex justify-between font-mono text-[9px] text-subtle-foreground pt-1.5 border-t border-border-subtle">
            <span>0 km/h</span>
            <span>40 km/h</span>
            <span>80 km/h</span>
            <span>120 km/h (Speed Band)</span>
          </div>
        </div>
      </div>

      {/* Sensor Metric Readouts */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-white/80 dark:bg-surface-elevated/70 border border-purple-500/8 dark:border-white/8 shadow-2xs">
          <span className="text-[10px] font-mono text-muted-foreground block">RPM</span>
          <span className="text-sm font-mono font-semibold text-foreground">{metrics.rpm}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-white/80 dark:bg-surface-elevated/70 border border-purple-500/8 dark:border-white/8 shadow-2xs">
          <span className="text-[10px] font-mono text-muted-foreground block">THROTTLE</span>
          <span className="text-sm font-mono font-semibold text-foreground">{metrics.throttle}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-white/80 dark:bg-surface-elevated/70 border border-purple-500/8 dark:border-white/8 shadow-2xs">
          <span className="text-[10px] font-mono text-muted-foreground block">EST. LOSS</span>
          <span className="text-sm font-mono font-semibold text-emerald-700 dark:text-emerald-400">
            {metrics.estLoss}
          </span>
        </div>
      </div>

      {/* Driving Profile Result Box */}
      <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-2 font-mono text-xs">
        <div>
          <span className="text-[10px] text-accent-cyan uppercase tracking-wider block font-medium">
            Driving Behavior Profile
          </span>
          <span className="text-foreground font-semibold">{metrics.classification}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-accent-cyan/20 text-accent-cyan text-[10px] font-medium self-start min-[380px]:self-auto">
          Telemetry Processed
        </span>
      </div>
    </div>
  );
}
