'use client';

import React from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { waysToConnect } from '@/data/contact';
import {
  HiOutlineUserGroup,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
} from 'react-icons/hi2';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

function getWayIcon(platform: string) {
  switch (platform) {
    case 'LinkedIn':
      return <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-foreground" />;
    case 'Email':
      return <HiOutlineEnvelope className="w-5 h-5 text-rose-500" />;
    case 'Resume':
      return <HiOutlineDocumentText className="w-5 h-5 text-purple-500" />;
    default:
      return <HiOutlineUserGroup className="w-5 h-5 text-accent" />;
  }
}

export default function ContactWaysToConnect() {
  return (
    <SpotlightCard
      className="p-6 sm:p-7 space-y-6 group transition-all duration-300"
      spotlightColor="var(--spotlight-color)"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-accent flex items-center justify-center shadow-2xs flex-shrink-0">
            <HiOutlineUserGroup className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans tracking-tight">
              Other Ways to Connect
            </h3>
            <p className="text-xs text-muted-foreground font-sans mt-0.5">
              Feel free to reach out on any of these platforms. I&apos;m most active on email and LinkedIn.
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#eef2ff] dark:bg-indigo-950/40 border border-[#c7d2fe]/70 dark:border-indigo-800/40 text-[#4f46e5] dark:text-indigo-300 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
          Let&apos;s stay in touch
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {waysToConnect.map((way) => (
          <a
            key={way.id}
            href={way.url}
            target={way.isExternal ? '_blank' : undefined}
            rel={way.isExternal ? 'noopener noreferrer' : undefined}
            className="p-4 sm:p-5 rounded-2xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle hover:border-border transition-all duration-200 group/tile flex flex-col justify-between h-full min-h-[175px] shadow-2xs hover:shadow-xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface border border-border-subtle flex items-center justify-center group-hover/tile:border-border transition-colors shadow-2xs">
                {getWayIcon(way.platform)}
              </div>

              <h4 className="text-sm sm:text-base font-semibold text-foreground font-sans tracking-tight mt-3">
                {way.title}
              </h4>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed mt-1">
                {way.description}
              </p>
            </div>

            <div className="w-full py-2 px-3 mt-4 rounded-xl bg-[#eef2ff] dark:bg-indigo-950/40 group-hover/tile:bg-[#e0e7ff] dark:group-hover/tile:bg-indigo-900/50 text-[#4f46e5] dark:text-indigo-300 font-sans font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-colors border border-[#c7d2fe]/70 dark:border-indigo-800/40">
              <span>{way.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </SpotlightCard>
  );
}
