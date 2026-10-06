'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { HiOutlineCodeBracket, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { YouTubeVideo } from '@/data/youtube';

function getTechIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes('html')) return <SiHtml5 className="w-2.5 h-2.5 text-[#E34F26] shrink-0" />;
  if (n.includes('css')) return <SiCss className="w-2.5 h-2.5 text-[#1572B6] shrink-0" />;
  if (n.includes('javascript') || n === 'js') return <SiJavascript className="w-2.5 h-2.5 text-[#F7DF1E] shrink-0" />;
  if (n.includes('native')) return <TbBrandReactNative className="w-2.5 h-2.5 text-[#61DAFB] shrink-0" />;
  if (n.includes('react')) return <SiReact className="w-2.5 h-2.5 text-[#61DAFB] shrink-0" />;
  if (n.includes('django')) return <SiDjango className="w-2.5 h-2.5 text-[#092E20] dark:text-[#44B78B] shrink-0" />;
  if (n.includes('python')) return <SiPython className="w-2.5 h-2.5 text-[#3776AB] shrink-0" />;
  if (n.includes('git')) return <SiGit className="w-2.5 h-2.5 text-[#F05032] shrink-0" />;
  if (n.includes('figma')) return <SiFigma className="w-2.5 h-2.5 text-[#F24E1E] shrink-0" />;
  if (n.includes('mobile')) return <HiOutlineDevicePhoneMobile className="w-2.5 h-2.5 text-accent shrink-0" />;
  return <HiOutlineCodeBracket className="w-2.5 h-2.5 text-accent shrink-0" />;
}

interface YouTubeVideoCardProps {
  video: YouTubeVideo;
  onSelect: (video: YouTubeVideo) => void;
  accentColor?: 'red' | 'cyan' | 'purple';
}

export default function YouTubeVideoCard({
  video,
  onSelect,
  accentColor = 'purple',
}: YouTubeVideoCardProps) {
  const [thumbError, setThumbError] = useState(false);

  const hoverBorders = {
    red: 'hover:border-red-500/40 hover:shadow-[0_8px_25px_rgba(239,68,68,0.12)]',
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(6,182,212,0.12)]',
    purple: 'hover:border-purple-500/40 hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)]',
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(video)}
      className={`about-card-surface p-3 sm:p-3.5 rounded-xl space-y-2.5 transition-all duration-300 hover:-translate-y-1 ${hoverBorders[accentColor]} group cursor-pointer text-left block w-full focus:outline-hidden focus:ring-2 focus:ring-accent`}
      aria-label={`Play tutorial: ${video.title}`}
    >
      {/* ================================================================== */}
      {/* 01 — REAL YOUTUBE THUMBNAIL WITH PLAY OVERLAY                      */}
      {/* ================================================================== */}
      <div className="relative aspect-video rounded-lg bg-surface-sunken overflow-hidden border border-border-subtle group-hover:border-accent/30 transition-colors">
        {!thumbError ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 240px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="eager"
            priority
            onError={() => setThumbError(true)}
            unoptimized
          />
        ) : (
          /* High-quality styled gradient fallback if YouTube CDN is unreachable */
          <div className="w-full h-full bg-gradient-to-br from-purple-950/60 to-cyan-950/60 flex items-center justify-center p-3 text-center">
            <span className="text-[11px] font-sans font-medium text-white/90 line-clamp-2">
              {video.title}
            </span>
          </div>
        )}

        {/* Subtle Bottom Vignette for Duration Readability */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Play Button Overlay (YouTube Red Brand Color) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-115 group-hover:bg-red-500">
            <FiPlay className="w-4 h-4 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration Badge (Bottom-Right) */}
        <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/85 text-[10px] font-mono font-medium text-white shadow-xs pointer-events-none">
          {video.duration}
        </div>


      </div>

      {/* ================================================================== */}
      {/* 02 — VIDEO METADATA & TITLE                                        */}
      {/* ================================================================== */}
      <div className="space-y-1">
        <h4 className="text-xs font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors font-sans">
          {video.title}
        </h4>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
          <span className="text-accent font-medium truncate">{video.category}</span>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 03 — TECH TAGS WITH ICONS                                          */}
      {/* ================================================================== */}
      <div className="flex flex-wrap items-center gap-1 pt-0.5">
        {video.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-[9px] font-mono text-muted-foreground"
          >
            {getTechIcon(tech)}
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </button>
  );
}
