'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import {
  SiYoutube,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  HiOutlineAcademicCap,
  HiOutlineFolder,
  HiOutlineCodeBracket,
} from 'react-icons/hi2';
import { youtubeChannel, featuredYouTubeVideos, YouTubeVideo } from '@/data/youtube';
import YouTubeVideoCard from './YouTubeVideoCard';
import YouTubeVideoModal from './YouTubeVideoModal';

function getTopicIcon(topic: string) {
  const t = topic.toLowerCase();
  if (t === 'html') return <SiHtml5 className="w-3 h-3 text-[#E34F26] shrink-0" />;
  if (t === 'css') return <SiCss className="w-3 h-3 text-[#1572B6] shrink-0" />;
  if (t === 'javascript' || t === 'js') return <SiJavascript className="w-3 h-3 text-[#F7DF1E] shrink-0" />;
  if (t === 'react native') return <TbBrandReactNative className="w-3 h-3 text-[#61DAFB] shrink-0" />;
  if (t === 'react') return <SiReact className="w-3 h-3 text-[#61DAFB] shrink-0" />;
  if (t === 'vs code') return <VscVscode className="w-3 h-3 text-[#007ACC] shrink-0" />;
  if (t.includes('git')) return <SiGit className="w-3 h-3 text-[#F05032] shrink-0" />;
  if (t.includes('guidance') || t.includes('ap eapcet') || t.includes('ap icet'))
    return <HiOutlineAcademicCap className="w-3 h-3 text-accent shrink-0" />;
  if (t.includes('project')) return <HiOutlineFolder className="w-3 h-3 text-accent shrink-0" />;
  return <HiOutlineCodeBracket className="w-3 h-3 text-accent shrink-0" />;
}

export default function YouTubeChannelCard() {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');
  const [avatarSrc, setAvatarSrc] = useState(youtubeChannel.avatarLocal);

  // Dynamically load remote YouTube avatar if available
  useEffect(() => {
    async function loadAvatar() {
      try {
        const res = await fetch('/api/youtube/channel');
        if (res.ok) {
          const data = await res.json();
          if (data.avatarUrl) {
            setAvatarSrc(data.avatarUrl);
          }
        }
      } catch {
        // Fallback to local avatar
      }
    }
    loadAvatar();
  }, []);

  const displayedVideos =
    activeTab === 'featured'
      ? featuredYouTubeVideos.slice(0, 3)
      : featuredYouTubeVideos;

  const accentColors: ('purple' | 'cyan' | 'red')[] = ['red', 'cyan', 'purple', 'purple', 'cyan', 'red'];

  return (
    <div className="about-card-surface p-5 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between flex-1 border border-border-subtle shadow-xs">
      {/* ================================================================== */}
      {/* 01 — CREATOR PROFILE HEADER                                        */}
      {/* ================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border-subtle gap-4">
        {/* Real Profile Avatar & Channel Identity */}
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/40 shadow-sm flex-shrink-0 bg-surface-sunken">
            <Image
              src={avatarSrc}
              alt="Jeevan Kumar Guduru YouTube Creator Avatar"
              fill
              sizes="48px"
              className="object-cover"
              onError={() => setAvatarSrc(youtubeChannel.avatarLocal)}
              priority
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold font-sans text-foreground">
                {youtubeChannel.name}
              </h3>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Active Channel" />
            </div>
            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <span>{youtubeChannel.handle}</span>
              <span className="text-border-subtle">•</span>
              <span className="text-accent">Creator &amp; Educator</span>
            </div>
          </div>
        </div>

        {/* View on YouTube Direct Link */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Quick tab toggle for 3 vs 6 videos */}
          <div className="flex items-center bg-surface-sunken p-0.5 rounded-lg border border-border-subtle text-[10px] font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('featured')}
              className={`px-2 py-1 rounded-md transition-colors ${
                activeTab === 'featured'
                  ? 'bg-surface text-foreground font-semibold shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Featured (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-2 py-1 rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-surface text-foreground font-semibold shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All (6)
            </button>
          </div>

          <a
            href={youtubeChannel.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-surface border border-border-subtle text-foreground hover:text-accent hover:border-accent transition-colors flex items-center gap-1.5 shadow-2xs"
            aria-label="Visit YouTube channel"
          >
            <SiYoutube className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">Channel</span>
            <FiExternalLink className="w-3 h-3 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 02 — REAL VIDEO THUMBNAIL CARDS GRID                               */}
      {/* ================================================================== */}
      <div
        className={`grid gap-3.5 ${
          activeTab === 'featured'
            ? 'grid-cols-1 sm:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {displayedVideos.map((video, idx) => (
          <YouTubeVideoCard
            key={video.id}
            video={video}
            onSelect={setSelectedVideo}
            accentColor={accentColors[idx % accentColors.length]}
          />
        ))}
      </div>

      {/* ================================================================== */}
      {/* 03 — VERIFIED CHANNEL TOPIC CHIPS                                  */}
      {/* ================================================================== */}
      <div className="pt-2 border-t border-border-subtle space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span className="font-semibold uppercase text-accent tracking-wider">Channel Focus Areas</span>
          <span>Telugu &amp; English</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {youtubeChannel.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border-subtle text-[11px] font-mono text-foreground/80 hover:text-accent hover:border-accent/40 transition-colors select-none"
            >
              {getTopicIcon(topic)}
              <span>{topic}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox Video Player Modal */}
      <YouTubeVideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
