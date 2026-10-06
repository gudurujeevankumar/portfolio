'use client';

import React, { useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';
import { YouTubeVideo } from '@/data/youtube';

interface YouTubeVideoModalProps {
  video: YouTubeVideo | null;
  onClose: () => void;
}

export default function YouTubeVideoModal({ video, onClose }: YouTubeVideoModalProps) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#0E1017] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#141724]">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <SiYoutube className="w-5 h-5 text-red-500 flex-shrink-0" />
            <h3 className="text-xs sm:text-sm font-semibold text-white truncate font-sans">
              {video.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/15 transition-colors"
            >
              <span>Watch on YouTube</span>
              <FiExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close video player"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 16:9 Responsive Video Iframe */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer with Video Details */}
        <div className="px-4 sm:px-6 py-3 bg-[#11131E] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/70">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-accent/20 text-accent font-semibold text-[10px]">
              {video.category}
            </span>
            <span>Duration: {video.duration}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
            {video.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
