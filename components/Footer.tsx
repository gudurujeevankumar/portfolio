'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

const FOOTER_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile } = portfolioData;

  return (
    <footer className="border-t border-border-subtle bg-surface-muted/90 dark:bg-surface-sunken/40 py-12 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 mt-auto">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Tier 1: Brand & Main Navigation */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          {/* Brand & Professional Positioning */}
          <div className="space-y-1.5 text-center lg:text-left">
            <Link
              href="/"
              className="text-base font-bold text-foreground font-sans tracking-tight hover:text-accent transition-colors"
            >
              {profile.name}
            </Link>
            <div className="text-xs font-mono text-muted-foreground">
              Software Engineer / Full-Stack Developer • Bengaluru, India
            </div>
          </div>

          {/* Global Multi-Page Navigation Links */}
          <nav
            aria-label="Footer Site Navigation"
            className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 sm:gap-x-6 gap-y-2 text-xs font-sans font-medium text-muted-foreground"
          >
            {FOOTER_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground hover:underline transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Tier 2: Sub-footer divider with Social Links & Copyright */}
        <div className="pt-6 border-t border-border-subtle/70 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          {/* Social Links & Resume */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors py-1"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-border-subtle select-none">•</span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors py-1"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            {profile.youtubeUrl && (
              <>
                <span aria-hidden="true" className="text-border-subtle select-none">•</span>
                <a
                  href={profile.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors py-1"
                  aria-label="YouTube channel (opens in new tab)"
                >
                  YouTube
                </a>
              </>
            )}
            <span aria-hidden="true" className="text-border-subtle select-none">•</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground transition-colors py-1"
              aria-label="Send email"
            >
              Email
            </a>
            <span aria-hidden="true" className="text-border-subtle select-none">•</span>
            <a
              href={profile.resume.folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline py-1"
              aria-label="View verified resume on Google Drive (opens in new tab)"
            >
              Resume ↗
            </a>
          </div>

          {/* Copyright */}
          <div className="text-subtle-foreground text-center lg:text-right">
            © {currentYear} {profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
