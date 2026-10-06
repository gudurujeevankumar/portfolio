'use client';

import React from 'react';
import Image from 'next/image';

interface AboutPortraitProps {
  imageSrc?: string;
  className?: string;
}

export default function AboutPortrait({
  imageSrc = '/profile-portrait-cutout.png',
  className = '',
}: AboutPortraitProps) {
  return (
    <div
      className={`relative w-full max-w-[320px] min-[420px]:max-w-[360px] sm:max-w-[390px] lg:max-w-[430px] mx-auto select-none ${className}`}
    >
      {/* ==================================================================== */}
      {/* 01 — AMBIENT ORGANIC PASTEL BLOBS (LAYER BEHIND PORTRAIT)            */}
      {/* Irregular organic shapes: Lavender, Violet, Cyan, Soft Pink           */}
      {/* ==================================================================== */}
      <div
        className="pointer-events-none absolute -inset-6 sm:-inset-10 -z-10 overflow-visible"
        aria-hidden="true"
      >
        {/* Blob 1: Lavender / Violet Organic Shape (Top Left) */}
        <div
          className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 w-44 sm:w-60 h-44 sm:h-60 rounded-[44%_56%_62%_38%_/_48%_38%_62%_52%] blur-3xl opacity-55 dark:opacity-25 transition-all duration-700 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.45), rgba(139, 92, 246, 0.25) 60%, transparent 80%)',
          }}
        />

        {/* Blob 2: Soft Cyan Glow (Top Right) */}
        <div
          className="absolute -top-3 right-0 sm:-right-6 w-36 sm:w-52 h-36 sm:h-52 rounded-[60%_40%_35%_65%_/_55%_60%_40%_45%] blur-3xl opacity-45 dark:opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.35), rgba(56, 189, 248, 0.15) 65%, transparent 80%)',
          }}
        />

        {/* Blob 3: Pale Rose / Peach Warmth (Bottom Center) */}
        <div
          className="absolute -bottom-6 left-8 sm:left-14 w-40 sm:w-56 h-40 sm:h-56 rounded-[52%_48%_65%_35%_/_42%_58%_42%_58%] blur-3xl opacity-40 dark:opacity-15 transition-all duration-700 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.30), rgba(168, 85, 247, 0.15) 70%, transparent 85%)',
          }}
        />
      </div>

      {/* ==================================================================== */}
      {/* 02 — EDITORIAL HANDWRITTEN ANNOTATIONS & ACCENTS                     */}
      {/* ==================================================================== */}
      {/* Upper-Left Annotation with Curved Dashed Arrow */}
      <div
        className="hidden md:flex flex-col items-start absolute -top-8 -left-6 lg:-left-10 select-none pointer-events-none z-20"
        aria-hidden="true"
      >
        <span className="font-serif italic text-xs lg:text-[13px] text-accent/90 tracking-wide drop-shadow-2xs">
          Turning ideas into
        </span>
        <span className="font-serif italic text-xs lg:text-[13px] text-accent/90 tracking-wide drop-shadow-2xs -mt-0.5">
          real-world applications
        </span>
        <svg
          className="w-8 h-8 text-accent/80 mt-1 ml-4"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 3"
        >
          <path d="M 6,10 Q 20,12 28,26" />
          <path d="M 22,26 L 28,26 L 27,20" strokeDasharray="none" />
        </svg>
      </div>



      {/* Playful Hand-Drawn Spark Burst Accents */}
      <svg
        className="hidden sm:block absolute -top-1 right-2 sm:right-6 w-5 h-5 text-accent/75 select-none pointer-events-none z-20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="12" y1="2" x2="12" y2="7" />
        <line x1="19" y1="5" x2="15.5" y2="8.5" />
        <line x1="22" y1="12" x2="17" y2="12" />
      </svg>

      <svg
        className="hidden sm:block absolute bottom-12 -left-3 w-5 h-5 text-accent/70 select-none pointer-events-none z-20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="2" y1="12" x2="7" y2="12" />
        <line x1="5" y1="19" x2="8.5" y2="15.5" />
        <line x1="12" y1="22" x2="12" y2="17" />
      </svg>

      {/* ==================================================================== */}
      {/* 03 — MAIN PORTRAIT PHOTO FRAME                                       */}
      {/* Elevated translucent glass with subtle shadow & inner highlight      */}
      {/* The photograph is completely clear, heroic, and unobscured           */}
      {/* ==================================================================== */}
      <div className="relative z-10 transition-transform duration-300 hover:-translate-y-1">
        {/* Floating Photo Card Container */}
        <div
          className="relative rounded-[28px] sm:rounded-[36px] p-3 sm:p-4 transition-all duration-300
            bg-white/85 dark:bg-[#0C0E16]/85 backdrop-blur-xl
            border border-white/95 dark:border-white/10
            shadow-[0_22px_65px_rgba(90,60,140,0.12),0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.95)]
            dark:shadow-[0_25px_80px_rgba(120,70,255,0.16),0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
          "
        >
          {/* Inner Photo Frame with Subtle Atmospheric Gradient */}
          <div
            className="relative w-full aspect-[4/5] sm:aspect-[0.92] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-purple-500/10 dark:border-white/5
              bg-gradient-to-b from-[#F6F4FE] via-[#FAF9F7] to-[#EEF2FF]
              dark:from-[#141829] dark:via-[#0F111D] dark:to-[#171428]
              group
            "
          >
            {/* Subtle Inner Glow Behind Head */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-purple-400/15 dark:bg-purple-500/15 blur-2xl pointer-events-none" />

            {/* Actual Portrait Image — Heroic & Completely Visible */}
            <Image
              src={imageSrc}
              alt="Guduru Jeevan Kumar portrait"
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 390px, 440px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
            />
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 04 — SUBTLE FLOATING STATUS PILL (BOTTOM-RIGHT CORNER)               */}
        {/* Minimal, compact, and non-intrusive so it never dominates the photo  */}
        {/* ==================================================================== */}
        <div
          className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div
            className="px-3.5 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2.5 shadow-md transition-all
              bg-white/95 dark:bg-[#121522]/95 backdrop-blur-xl
              border border-white/95 dark:border-white/12
              shadow-[0_12px_28px_rgba(80,50,130,0.12),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.95)]
              dark:shadow-[0_12px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]
            "
          >
            {/* Pulsing Status Dot */}
            <div className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </div>

            {/* Message Text */}
            <span className="text-[11px] sm:text-xs font-sans font-medium text-foreground whitespace-nowrap">
              Passionate about building impactful software.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
