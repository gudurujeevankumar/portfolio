'use client';

import React, { useState, useEffect } from 'react';
import Globe from '@/components/ui/Globe';
import { HiOutlineGlobeAlt, HiOutlineUserGroup } from 'react-icons/hi2';

export default function ContactHeroVisual() {
  const [globeSize, setGlobeSize] = useState(360);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setGlobeSize(220);
      } else if (window.innerWidth < 640) {
        setGlobeSize(260);
      } else if (window.innerWidth < 1024) {
        setGlobeSize(300);
      } else {
        setGlobeSize(360);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="heroVisual relative w-full h-[380px] sm:h-[450px] min-h-[380px] sm:min-h-[450px] flex items-center justify-center lg:justify-end select-none overflow-hidden">
      {/* Decorative Handwritten / Editorial Accent Annotation like Reference Image */}
      <div className="absolute -top-3 sm:-top-5 right-2 sm:right-4 z-20 pointer-events-none hidden sm:block text-right">
        <span className="font-serif italic text-xs sm:text-[13px] text-accent/80 dark:text-indigo-400/80 block -rotate-3 tracking-wide">
          Turning ideas into real-world <br />
          applications
        </span>
        <svg
          className="w-10 h-7 text-accent/60 dark:text-indigo-400/60 ml-auto -mt-1 -rotate-6"
          viewBox="0 0 40 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 4 C 16 8, 26 14, 30 24 M 30 24 L 23 20 M 30 24 L 32 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Ambient background soft glow */}
      <div
        className="absolute inset-0 max-w-[420px] max-h-[420px] m-auto rounded-full bg-gradient-to-tr from-accent/20 via-purple-500/15 to-cyan-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Dedicated visual orbit container (aligned to match right column bounds) */}
      <div className="relative w-full max-w-[460px] h-[360px] sm:h-[440px] flex items-center justify-center overflow-hidden">
        {/* Concentric planetary orbit guide rings like reference image */}
        <div
          className="absolute w-[280px] h-[280px] min-[400px]:w-[340px] min-[400px]:h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-indigo-200/45 dark:border-indigo-800/35 pointer-events-none -z-5"
          aria-hidden="true"
        />
        <div
          className="absolute w-[230px] h-[230px] min-[400px]:w-[280px] min-[400px]:h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-indigo-200/30 dark:border-indigo-800/20 pointer-events-none -z-5"
          aria-hidden="true"
        />

        {/* Decorative floating dots around orbit like reference */}
        <span className="absolute top-12 left-8 w-1.5 h-1.5 rounded-full bg-accent/60 pointer-events-none animate-pulse" />
        <span className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-cyan-500/40 pointer-events-none" />
        <span className="absolute top-8 right-20 w-1.5 h-1.5 rounded-full bg-purple-500/40 pointer-events-none" />
        <span className="absolute bottom-10 right-14 w-2 h-2 rounded-full bg-accent/30 pointer-events-none" />

        {/* Globe canvas centered within orbit container */}
        <div className="globe absolute inset-0 flex items-center justify-center z-0 pointer-events-auto">
          <Globe size={globeSize} showDragHint={false} />
        </div>

        {/* Floating Label 1: Upper-Right Orbit — Bengaluru, India */}
        <div className="absolute top-4 sm:top-10 right-1 sm:right-6 z-10 flex flex-col items-center">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface/95 dark:bg-surface-elevated/95 backdrop-blur-md border border-border-subtle shadow-md hover:shadow-lg transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" />
            <div className="text-left">
              <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-semibold text-foreground font-sans block leading-tight">
                Bengaluru, India
              </span>
              <span className="text-[8.5px] sm:text-[10px] font-mono text-muted-foreground block leading-tight mt-0.5">
                Open to Opportunities
              </span>
            </div>
          </div>
          {/* Purple GPS Navigation Pointer pointing towards Bengaluru on the globe */}
          <div className="mt-1 flex items-center justify-center">
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#4f46e5]/15 dark:bg-indigo-400/20 border border-[#4f46e5]/30 dark:border-indigo-400/30 flex items-center justify-center text-[#4f46e5] dark:text-indigo-400 shadow-2xs -rotate-45">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Label 2: Left / Middle Orbit — Remote */}
        <div className="absolute top-[52%] -translate-y-1/2 left-0.5 sm:left-2 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface/95 dark:bg-surface-elevated/95 backdrop-blur-md border border-border-subtle shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <HiOutlineGlobeAlt className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div className="text-left">
            <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-semibold text-foreground font-sans block leading-tight">
              Remote
            </span>
            <span className="text-[8.5px] sm:text-[10px] font-mono text-muted-foreground block leading-tight mt-0.5">
              Open Worldwide
            </span>
          </div>
        </div>

        {/* Floating Label 3: Lower-Right Orbit — Collaboration */}
        <div className="absolute bottom-4 sm:bottom-8 right-1 sm:right-6 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface/95 dark:bg-surface-elevated/95 backdrop-blur-md border border-border-subtle shadow-md hover:shadow-lg transition-all duration-300">
          <div className="p-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <HiOutlineUserGroup className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <div className="text-left">
            <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-semibold text-foreground font-sans block leading-tight">
              Collaboration
            </span>
            <span className="text-[8.5px] sm:text-[10px] font-mono text-muted-foreground block leading-tight mt-0.5">
              Let&apos;s Build Together
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
