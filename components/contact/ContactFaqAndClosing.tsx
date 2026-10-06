'use client';

import React, { useState } from 'react';
import { contactFaqs } from '@/data/contact';
import {
  HiOutlineQuestionMarkCircle,
  HiOutlinePlus,
  HiOutlineMinus,
} from 'react-icons/hi2';

export default function ContactFaqAndClosing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-3xl border border-border-subtle bg-surface/90 dark:bg-surface-elevated/90 backdrop-blur-md shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-[1.32fr_0.88fr] divide-y lg:divide-y-0 lg:divide-x divide-border-subtle items-stretch transition-all duration-300">
      {/* Left Column: Frequently Asked Questions */}
      <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-1 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-accent border border-indigo-500/20 flex items-center justify-center shadow-2xs flex-shrink-0">
                <HiOutlineQuestionMarkCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans tracking-tight">
                Frequently Asked <span className="font-serif italic text-[#4f46e5] dark:text-blue-400 font-normal">Questions</span>
              </h3>
            </div>
            <p className="text-xs text-muted-foreground font-sans pt-1">
              Some quick answers before you reach out.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-2.5">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'bg-surface-sunken/80 dark:bg-surface-sunken/90 border-accent/40 shadow-2xs'
                      : 'bg-surface-sunken/50 dark:bg-surface-sunken/60 border-border-subtle hover:border-border'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full py-3 px-4 text-left flex items-center justify-between gap-3 cursor-pointer group/btn"
                  >
                    <span className="font-sans font-medium text-xs sm:text-sm text-foreground group-hover/btn:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-border-subtle bg-surface flex items-center justify-center text-muted-foreground flex-shrink-0 shadow-2xs">
                      {isOpen ? (
                        <HiOutlineMinus className="w-3 h-3 text-[#4f46e5] dark:text-accent" />
                      ) : (
                        <HiOutlinePlus className="w-3 h-3 text-muted-foreground" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-4 pb-3.5 pt-0.5 text-xs text-muted-foreground font-sans leading-relaxed border-t border-border-subtle/50 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: Human Closing Message */}
      <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden group">
        <div className="relative z-10 flex flex-col items-start w-full">
          {/* Quote Icon Badge */}
          <div className="w-9 h-9 rounded-xl bg-[#eef2ff] dark:bg-indigo-950/40 border border-[#c7d2fe]/70 dark:border-indigo-800/40 flex items-center justify-center text-[#4f46e5] dark:text-indigo-300 text-xl font-serif leading-none shadow-2xs mb-6 sm:mb-8 flex-shrink-0">
            “
          </div>

          {/* Dedicated Heading Composition exactly matching reference image */}
          <h3 className="flex flex-col font-serif italic text-3xl sm:text-4xl lg:text-[40px] text-[#4f46e5] dark:text-blue-400 font-normal tracking-tight leading-[1.12] mb-6">
            <span>Good ideas start with</span>
            <span>conversations.</span>
          </h3>

          {/* Body Copy */}
          <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed max-w-md mb-8">
            Whether you have a project in mind, a role to discuss, or just want to connect over technology — I&apos;d love to hear from you. Let&apos;s create something meaningful together.
          </p>

          {/* Signature */}
          <div className="font-sans font-semibold text-sm text-foreground">
            — Guduru Jeevan Kumar
          </div>
        </div>

        {/* Ambient Gradient Glow in Bottom Right Background */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-accent/25 via-purple-500/20 to-transparent blur-3xl z-0"
          aria-hidden="true"
        />

        {/* Multi-layered soft organic waves in bottom right corner matching reference */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-64 z-0 overflow-hidden select-none">
          <svg
            className="absolute bottom-0 right-0 w-full h-full"
            viewBox="0 0 280 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="waveGrad1" x1="140" y1="50" x2="280" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#a5b4fc" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="180" y1="120" x2="280" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#818cf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            {/* Soft background wave 1 */}
            <path
              d="M30 240 C 70 180, 110 130, 160 110 C 210 90, 245 105, 280 80 L 280 240 Z"
              fill="url(#waveGrad1)"
              className="dark:opacity-40"
            />
            {/* Foreground layered wave 2 */}
            <path
              d="M110 240 C 145 195, 180 165, 220 155 C 255 145, 270 150, 280 140 L 280 240 Z"
              fill="url(#waveGrad2)"
              className="dark:opacity-50"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
