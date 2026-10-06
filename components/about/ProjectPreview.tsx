'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiLock, FiArrowUpRight, FiMaximize2, FiRefreshCw } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

// Desktop viewport width the embedded site is designed for
const DESKTOP_VIEWPORT_WIDTH = 1280;
const DESKTOP_VIEWPORT_HEIGHT = 900;

interface ProjectPreviewProps {
  title?: string;
  liveUrl?: string;
  githubUrl?: string;
  screenshotSrc?: string;
  technologies?: string[];
  className?: string;
}

export default function ProjectPreview({
  title = 'JioCinema Media Portal Clone',
  liveUrl = 'https://jiocinemaclonebyjeevankmarguduru.netlify.app/',
  githubUrl = 'https://github.com/gudurujeevankumar/Jio-Cinema-Clone-Project.git',
  screenshotSrc = '/projects/jiocinema-preview.png',
  technologies = ['HTML5', 'CSS3', 'Netlify Deploy', 'Responsive Layout'],
  className = '',
}: ProjectPreviewProps) {
  const [viewMode, setViewMode] = useState<'iframe' | 'screenshot'>('iframe');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [iframeScale, setIframeScale] = useState(0.43); // sensible initial guess
  const containerRef = useRef<HTMLDivElement>(null);

  const displayUrl = liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  // Measure the media container and compute exact scale so the 1280px
  // desktop iframe shrinks to fit perfectly — no guessing needed.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) setIframeScale(w / DESKTOP_VIEWPORT_WIDTH);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`about-card-surface p-4 sm:p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-border-subtle ${className}`}
    >
      {/* ================================================================== */}
      {/* 01 — BROWSER FRAME CHROME / HEADER                                 */}
      {/* ================================================================== */}
      <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-border-subtle gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* macOS Window Controls */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/80" />
          </div>

          {/* Secure Address Bar */}
          <div className="px-2.5 py-1 rounded-md bg-surface-sunken border border-border-subtle text-[11px] text-muted-foreground flex items-center gap-1.5 truncate max-w-[190px] sm:max-w-[270px]">
            <FiLock className="w-2.5 h-2.5 text-emerald-500 flex-shrink-0" />
            <span className="truncate font-mono select-all">{displayUrl}</span>
          </div>
        </div>

        {/* View Mode Toggle: Interactive Live Embed vs Screenshot Snapshot */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              setViewMode(viewMode === 'iframe' ? 'screenshot' : 'iframe');
              if (iframeError) setIframeError(false);
            }}
            className="px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors flex items-center gap-1 bg-surface border border-border-subtle hover:border-accent/50 text-foreground"
            title="Toggle between interactive embed and static snapshot"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                viewMode === 'iframe' && !iframeError ? 'bg-emerald-500 animate-pulse' : 'bg-accent'
              }`}
            />
            <span>{viewMode === 'iframe' && !iframeError ? 'LIVE EMBED' : 'SNAPSHOT'}</span>
          </button>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 02 — MEDIA CONTAINER (INTERACTIVE IFRAME OR REAL SCREENSHOT)       */}
      {/* ================================================================== */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl bg-[#0B0D14] border border-border-subtle overflow-hidden shadow-inner group"
      >
        {viewMode === 'iframe' && !iframeError ? (
          <>
            {/* Loading Indicator */}
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-sunken text-muted-foreground gap-2">
                <FiRefreshCw className="w-5 h-5 animate-spin text-accent" />
                <span className="text-[11px] font-mono">Loading live deployment...</span>
              </div>
            )}

            <iframe
              src={liveUrl}
              title={title}
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              onError={() => {
                setIframeError(true);
                setViewMode('screenshot');
              }}
              className="border-0 select-auto transition-opacity duration-300 absolute top-0 left-0"
              style={{
                opacity: iframeLoaded ? 1 : 0,
                width: `${DESKTOP_VIEWPORT_WIDTH}px`,
                height: `${DESKTOP_VIEWPORT_HEIGHT}px`,
                transform: `scale(${iframeScale})`,
                transformOrigin: 'top left',
              }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />

            {/* Quick interactive watermark banner */}
            <div className="absolute bottom-2 right-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-muted-foreground border border-border-subtle flex items-center gap-1">
              <FiMaximize2 className="w-3 h-3 text-accent" />
              <span>Scroll &amp; interact inside</span>
            </div>
          </>
        ) : (
          /* High-Resolution Screenshot Fallback */
          <div className="relative w-full h-full bg-[#0B0D14]">
            <Image
              src={screenshotSrc}
              alt={`${title} real interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
              priority
            />
            {/* Subtle Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
              <span className="text-xs font-semibold drop-shadow-md">Real Project Interface</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400">
                Verified Netlify Build
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ================================================================== */}
      {/* 03 — ACTION BUTTONS & METADATA                                     */}
      {/* ================================================================== */}
      <div className="space-y-3 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-mono font-medium hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Open Live Site</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface border border-border-subtle text-foreground text-xs font-mono hover:bg-surface-elevated transition-colors shadow-2xs"
            >
              <SiGithub className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Source Code</span>
            </a>
          )}
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-md bg-surface border border-border-subtle ${
                tech.includes('Netlify') ? 'text-accent font-semibold' : 'text-foreground'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
