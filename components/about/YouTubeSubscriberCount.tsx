'use client';

import React, { useEffect, useState } from 'react';

interface ChannelStats {
  subscriberCount: number | null;
  subscriberCountFormatted: string | null;
  videoCount: number;
  isLive: boolean;
  source?: string;
}

export default function YouTubeSubscriberCount() {
  const [stats, setStats] = useState<ChannelStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchStats() {
      try {
        const res = await fetch('/api/youtube/channel', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (mounted) {
            setStats(data);
          }
        }
      } catch (err) {
        console.warn('Failed to fetch YouTube stats', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchStats();
    return () => {
      mounted = false;
    };
  }, []);

  const subDisplay = stats?.subscriberCountFormatted
    ? `${stats.subscriberCountFormatted} Subscribers`
    : stats?.subscriberCount !== null && stats?.subscriberCount !== undefined
    ? `${stats.subscriberCount.toLocaleString()} Subscribers`
    : 'Subscribers Tracked';

  const videoDisplay = `${stats?.videoCount ?? 26} Public Videos`;

  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-muted-foreground select-none">
      <span className="flex items-center gap-1.5">
        <span
          className={`w-2 h-2 rounded-full ${
            stats?.isLive ? 'bg-red-500 animate-pulse' : 'bg-red-500/70'
          }`}
        />
        <span className="font-semibold text-foreground">
          {loading ? (
            <span className="inline-block w-16 h-3 bg-muted/40 animate-pulse rounded" />
          ) : (
            subDisplay
          )}
        </span>
      </span>

      <span className="text-border-subtle">•</span>

      <span>{videoDisplay}</span>

      {stats?.isLive && (
        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/25">
          LIVE
        </span>
      )}
    </div>
  );
}
