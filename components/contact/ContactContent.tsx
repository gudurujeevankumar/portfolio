'use client';

import React from 'react';
import ContactHeroVisual from './ContactHeroVisual';
import ContactForm from './ContactForm';
import ContactDirectCards from './ContactDirectCards';
import ContactWaysToConnect from './ContactWaysToConnect';
import ContactFaqAndClosing from './ContactFaqAndClosing';
import { opportunityTypes } from '@/data/contact';
import {
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2';

function getOpportunityIcon(icon: string) {
  switch (icon) {
    case 'rocket':
      return <HiOutlineRocketLaunch className="w-4 h-4 text-cyan-500" />;
    case 'academic':
      return <HiOutlineAcademicCap className="w-4 h-4 text-emerald-500" />;
    case 'briefcase':
      return <HiOutlineBriefcase className="w-4 h-4 text-purple-500" />;
    case 'chat':
      return <HiOutlineChatBubbleLeftRight className="w-4 h-4 text-amber-500" />;
    default:
      return <HiOutlineBriefcase className="w-4 h-4 text-accent" />;
  }
}

export default function ContactContent() {
  return (
    <main
      id="main-content"
      className="flex-1 py-8 sm:py-12 px-4 min-[375px]:px-5 sm:px-6 md:px-7 lg:px-8 max-w-7xl mx-auto w-full space-y-8 sm:space-y-10"
    >
      {/* ==================================================================== */}
      {/* 1. HERO SECTION & CREATIVE VISUAL                                   */}
      {/* ==================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        {/* Left Column: Headline, Copy & Opportunity Chips */}
        <div className="space-y-5 text-left">
          {/* Technical Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c7d2fe]/70 dark:border-indigo-800/40 bg-[#eef2ff] dark:bg-indigo-950/40 text-[11px] font-mono tracking-widest text-[#4f46e5] dark:text-indigo-400 uppercase shadow-2xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] dark:bg-indigo-400 animate-pulse" />
            <span>LET&apos;S CONNECT // OPPORTUNITIES</span>
          </div>

          {/* Main Editorial Display Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-foreground font-sans leading-[1.08]">
              Have an idea worth <br className="hidden sm:inline" />
              building?
            </h1>
            <div className="text-3xl sm:text-4xl lg:text-[44px] font-serif italic text-[#4f46e5] dark:text-blue-400 font-normal tracking-wide leading-tight">
              Let&apos;s make it real.
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed max-w-xl">
            I&apos;m always open to discussing new opportunities, interesting projects, collaborations, or just having a meaningful conversation about technology, ideas, and the future of software.
          </p>

          {/* Compact Row of 4 Opportunity Indicators */}
          <div className="pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {opportunityTypes.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 p-1.5 sm:p-2 rounded-xl transition-all duration-200 hover:bg-surface-elevated/70 group h-full"
                >
                  <div className="p-1.5 sm:p-2 rounded-xl bg-surface border border-border-subtle flex-shrink-0 shadow-2xs group-hover:border-border transition-colors">
                    {getOpportunityIcon(item.icon)}
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-[11px] sm:text-xs text-foreground font-sans block leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-muted-foreground font-sans block leading-tight mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Creative Network/Globe Visual */}
        <div className="flex items-center justify-center">
          <ContactHeroVisual />
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. MAIN CONTACT AREA (TWO-COLUMN BALANCED LAYOUT)                   */}
      {/* ==================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 items-stretch">
        {/* Left Column: Interactive Contact Form */}
        <div className="flex flex-col">
          <ContactForm />
        </div>

        {/* Right Column: Current Availability & Direct Contact */}
        <div className="flex flex-col justify-between gap-6">
          <ContactDirectCards />
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. OTHER WAYS TO CONNECT (4 COMPACT HORIZONTAL CARDS)               */}
      {/* ==================================================================== */}
      <section>
        <ContactWaysToConnect />
      </section>

      {/* ==================================================================== */}
      {/* 4. FREQUENTLY ASKED QUESTIONS & HUMAN CLOSING MESSAGE               */}
      {/* ==================================================================== */}
      <section>
        <ContactFaqAndClosing />
      </section>
    </main>
  );
}
