'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { contactSubjectOptions } from '@/data/contact';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import {
  HiOutlinePaperAirplane,
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineBars3BottomLeft,
  HiOutlineCheck,
  HiOutlineArrowRight,
  HiOutlineLockClosed,
} from 'react-icons/hi2';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: contactSubjectOptions[0],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please include a message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch and prepare client mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} — ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Jeevan,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}`
      )}`;

      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: contactSubjectOptions[0],
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <SpotlightCard
      className="p-6 sm:p-7 h-full flex flex-col justify-between group transition-all duration-300"
      spotlightColor="var(--spotlight-color)"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-accent border border-indigo-500/20 flex items-center justify-center shadow-2xs flex-shrink-0">
            <HiOutlinePaperAirplane className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-sans tracking-tight">
              Send a Message
            </h2>
            <p className="text-xs text-muted-foreground font-sans mt-0.5 leading-snug">
              Drop a message and I&apos;ll get back to you as soon as possible. <br className="hidden sm:inline" />
              I usually respond within 24–48 hours.
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#eef2ff] dark:bg-indigo-950/40 border border-[#c7d2fe]/70 dark:border-indigo-800/40 text-[#4f46e5] dark:text-indigo-300 uppercase tracking-wider whitespace-nowrap hidden sm:inline-block self-start sm:self-center">
          Direct &amp; Simple
        </span>
      </div>

      {submitted ? (
        /* Submission Success Confirmation */
        <div className="my-auto p-8 text-center space-y-5 rounded-2xl bg-surface-sunken border border-accent/30 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center font-bold text-2xl shadow-xs ring-4 ring-emerald-500/10">
            <HiOutlineCheck className="w-7 h-7" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-foreground font-sans tracking-tight">
              Message Prepared &amp; Ready!
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              Thank you for reaching out, <strong className="text-foreground">{formData.name}</strong>! Your email client has been opened with your pre-filled message addressed to{' '}
              <strong className="text-foreground">{profile.email}</strong>.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="btn-primary px-5 py-2.5 rounded-full text-xs font-mono font-medium hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              Send Another Message
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="btn-secondary px-5 py-2.5 rounded-full text-xs font-mono transition-all cursor-pointer"
            >
              Email Directly Instead ↗
            </a>
          </div>
        </div>
      ) : (
        /* The Interactive Form */
        <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between pt-4 space-y-4">
          <div className="space-y-4">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono text-foreground font-medium block"
                >
                  Your Name <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-subtle-foreground">
                    <HiOutlineUser className="w-4 h-4" />
                  </span>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Jane Doe"
                    className={`w-full h-11 pl-10 pr-3.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border text-sm font-sans text-foreground placeholder:text-subtle-foreground focus:outline-hidden transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-border-subtle focus:border-accent'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p id="contact-name-error" className="text-[11px] font-mono text-rose-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono text-foreground font-medium block"
                >
                  Your Email <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-subtle-foreground">
                    <HiOutlineEnvelope className="w-4 h-4" />
                  </span>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="jane@example.com"
                    className={`w-full h-11 pl-10 pr-3.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border text-sm font-sans text-foreground placeholder:text-subtle-foreground focus:outline-hidden transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-border-subtle focus:border-accent'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p id="contact-email-error" className="text-[11px] font-mono text-rose-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="text-xs font-mono text-foreground font-medium block"
              >
                Subject <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-subtle-foreground">
                  <HiOutlineBars3BottomLeft className="w-4 h-4" />
                </span>
                <select
                  id="contact-subject"
                  required
                  aria-required="true"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-11 pl-10 pr-9 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border border-border-subtle text-sm font-sans text-foreground focus:outline-hidden focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  {contactSubjectOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface text-foreground py-1">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-subtle-foreground text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="space-y-1.5 flex-1">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono text-foreground font-medium block"
              >
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder="Tell me about what you're working on, what role you have in mind, or any idea you'd like to discuss..."
                className={`w-full p-3.5 rounded-xl bg-surface-sunken/60 dark:bg-surface-sunken/80 border text-sm font-sans text-foreground placeholder:text-subtle-foreground focus:outline-hidden transition-colors resize-y leading-relaxed min-h-[140px] ${
                  errors.message
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-border-subtle focus:border-accent'
                }`}
              />
              {errors.message && (
                <p id="contact-message-error" className="text-[11px] font-mono text-rose-500 mt-1">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Submit Button & Anti-Spam Guarantee */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group/btn"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Preparing Dispatch...</span>
                </>
              ) : (
                <>
                  <span>Let&apos;s Connect</span>
                  <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <HiOutlineLockClosed className="w-3.5 h-3.5 text-accent" />
              <span>No spam. Only meaningful conversations.</span>
            </div>
          </div>
        </form>
      )}
    </SpotlightCard>
  );
}
