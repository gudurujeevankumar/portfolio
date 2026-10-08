import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { portfolioData } from '@/data/portfolio';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Note Not Found — Guduru Jeevan Kumar',
    };
  }

  return {
    title: `${post.title} — Guduru Jeevan Kumar`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Guduru Jeevan Kumar`,
      description: post.excerpt,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Guduru Jeevan Kumar`,
      description: post.excerpt,
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { profile } = portfolioData;

  return (
    <main className="flex-1 py-12 sm:py-20 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-4xl mx-auto w-full space-y-12 sm:space-y-16">
      {/* Back to Blog Navigation */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to All Notes</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 border-b border-border-subtle pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-accent/15 text-accent font-semibold border border-accent/25">
            {post.category}
          </span>
          <span className="text-subtle-foreground">•</span>
          <span className="text-muted-foreground">{post.date}</span>
          <span className="text-subtle-foreground">•</span>
          <span className="text-muted-foreground">{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-sans leading-[1.12]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded text-xs font-mono bg-surface border border-border-subtle text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <article className="space-y-10 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
        {post.content.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground font-sans pt-2">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}

            {section.codeSnippet && (
              <div className="rounded-xl bg-surface-sunken border border-border-subtle p-4 font-mono text-xs overflow-x-auto shadow-inner my-4">
                <div className="text-[10px] text-accent uppercase tracking-wider mb-2 font-semibold">
                  {section.codeSnippet.language.toUpperCase()}
                </div>
                <pre className="text-foreground/90">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </article>

      {/* Author Bio Card */}
      <SpotlightCard className="p-6 sm:p-8 space-y-4 border-border" spotlightColor="var(--spotlight-color)">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/15 text-accent border border-accent/25 flex items-center justify-center font-mono text-base font-bold">
            GK
          </div>
          <div>
            <div className="text-base font-semibold text-foreground font-sans">
              {profile.name}
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Full-Stack Developer • Problem Solver • Bengaluru, India
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
          {profile.shortBio}
        </p>
        <div className="pt-2 flex items-center gap-3 text-xs font-mono">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <Link href="/contact" className="text-accent hover:underline">
            Get in touch
          </Link>
        </div>
      </SpotlightCard>

      {/* Bottom Post Navigation */}
      <footer className="pt-8 border-t border-border-subtle flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline"
        >
          <span>← Back to All Articles</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:underline"
        >
          <span>Explore Projects →</span>
        </Link>
      </footer>
    </main>
  );
}
