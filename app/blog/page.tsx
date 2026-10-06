'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import GradientEditorial from '@/components/ui/GradientEditorial';

const BLOG_CATEGORIES = [
  'All',
  'Full-Stack Architecture',
  'Leadership',
  'AI Development',
  'Frontend',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
      {/* Editorial Header — Inspired by Reference Typography */}
      <div className="flex flex-col items-start text-left max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>TECHNICAL ESSAYS &amp; NOTES // BLOG</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.08]">
          Notes from the <br className="hidden sm:inline" />
          <GradientEditorial>Developer Journey</GradientEditorial>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          Reflections on software architecture, full-stack web engineering, team coordination, and modern development practices.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-border-subtle">
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-accent/15 text-accent font-semibold border border-accent/35 shadow-xs'
                  : 'bg-surface text-muted-foreground border border-border-subtle hover:text-foreground hover:bg-surface-hover'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Stream */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <SpotlightCard
            key={post.slug}
            className="p-6 sm:p-8 space-y-4 group transition-all duration-300"
            spotlightColor="var(--spotlight-color)"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent font-medium border border-accent/20">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-subtle-foreground">
                  {post.date}
                </span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {post.readTime}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground font-sans group-hover:text-accent transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground bg-surface border border-border-subtle"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent hover:underline group-hover:translate-x-1 transition-transform"
              >
                <span>Read Note</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </main>
  );
}
