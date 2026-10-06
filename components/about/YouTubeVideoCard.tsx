'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import { YouTubeVideo } from '@/data/youtube';

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
      {/* 03 — TECH TAGS                                                     */}
      {/* ================================================================== */}
      <div className="flex flex-wrap items-center gap-1 pt-0.5">
        {video.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.2 rounded bg-surface border border-border-subtle text-[9px] font-mono text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </button>
  );
}
