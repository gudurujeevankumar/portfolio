import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6 max-w-xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-xs font-mono text-accent">
        <span>ERROR 404 // ROUTE NOT FOUND</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground font-sans">
          Page Not Found
        </h1>
        <p className="text-2xl sm:text-4xl font-serif italic text-muted-foreground">
          This coordinate does not exist.
        </p>
      </div>

      <p className="text-sm text-muted-foreground font-sans leading-relaxed">
        The route you requested may have moved or been reorganized as part of our multi-page developer portfolio architecture.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <Link
          href="/"
          className="btn-primary px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all"
        >
          Return to Home
        </Link>
        <Link
          href="/work"
          className="btn-secondary px-6 py-2.5 rounded-full font-mono text-xs sm:text-sm hover:-translate-y-0.5 transition-all"
        >
          View Projects
        </Link>
      </div>
    </main>
  );
}
