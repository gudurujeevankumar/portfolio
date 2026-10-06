'use client';

import React from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  leadershipCallout?: {
    teams: number;
    developers: number;
    focus: string;
  };
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bodha-soft',
    company: 'Bodha Soft',
    role: 'Mobile Frontend Developer Intern → Team Lead',
    period: 'July 2025 – March 2026',
    type: 'Leadership & Engineering',
    location: 'Bengaluru / Hybrid',
    description:
      'Contributed to the development and mobile UI/UX design of an application for UPSC civil service aspirants, progressing into a Team Lead role coordinating 6 development teams and 36 developers.',
    highlights: [
      'Progressed from intern to Team Lead, orchestrating sprint execution and milestone tracking across 6 development teams comprising 36 developers.',
      'Designed end-to-end mobile user flows and interactive interface wireframes in Figma.',
      'Developed core responsive screens and stateful frontend features using React Native.',
      'Facilitated cross-team sprint syncs, code reviews, and integration with backend API services.',
    ],
    technologies: ['React Native', 'JavaScript', 'Figma', 'Git', 'Jira'],
    leadershipCallout: {
      teams: 6,
      developers: 36,
      focus: 'Cross-functional team coordination & mobile UI/UX delivery',
    },
  },
  {
    id: 'codtech-it-solutions',
    company: 'CODTECH IT Solutions',
    role: 'Full Stack Web Developer Intern',
    period: 'May – June 2025',
    type: 'Internship',
    location: 'Remote',
    description:
      'Completed structured full-stack web development deliverables focusing on responsive client architecture, API interactions, and clean Git collaboration.',
    highlights: [
      'Built modern frontend components using HTML5, CSS3, JavaScript, and React.',
      'Implemented clean version control patterns and structured repositories on GitHub.',
      'Practiced modular component structuring and responsive layout adaptation.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GitHub'],
  },
  {
    id: 'ndvtechsys-solutions',
    company: 'NDVTechsys Solutions',
    role: 'Full Stack Web Developer Intern',
    period: 'May – July 2025',
    type: 'Internship',
    location: 'Remote',
    description:
      'Gained structured training in enterprise full-stack development patterns and relational database connectivity with SQL.',
    highlights: [
      'Constructed backend business logic modules and verified service communication.',
      'Executed SQL database queries and managed relational data mappings.',
      'Connected frontend form interfaces with backend validation routines.',
    ],
    technologies: ['SQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
  },
  {
    id: 'cognifyz-technologies',
    company: 'Cognifyz Technologies',
    role: 'Python & Data Analytics Intern',
    period: 'May – June 2025',
    type: 'Internship',
    location: 'Remote',
    description:
      'Explored Python scripting methodologies, dataset preprocessing pipelines, and analytics fundamentals.',
    highlights: [
      'Preprocessed raw data tables, handled missing indicators, and extracted relevant features.',
      'Constructed structured data transformation pipelines in Python.',
      'Analyzed performance metrics to evaluate real-world prediction accuracy.',
    ],
    technologies: ['Python', 'SQL', 'Git'],
  },
  {
    id: 'skyscanner-experience',
    company: 'Skyscanner / Forage',
    role: 'Front-End Virtual Software Engineering',
    period: 'May 2025',
    type: 'Virtual Simulation',
    location: 'Remote',
    description:
      'Completed an industry-modeled engineering simulation for Skyscanner, engineering an interactive, accessible travel date-picker component.',
    highlights: [
      'Engineered dynamic calendar range-selection logic handling edge-case date boundaries.',
      'Ensured adherence to Skyscanner frontend accessibility guidelines and keyboard interactions.',
      'Deployed live interactive demonstration to Vercel with structured GitHub documentation.',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
  },
  {
    id: 'sih-crec',
    company: 'Smart India Hackathon (SIH)',
    role: 'Lead Organizer & Coordinator (CREC Internal Round)',
    period: 'CREC Institutional Qualifier',
    type: 'Leadership & Organization',
    location: 'CREC, Tirupati',
    description:
      'Spearheaded the institutional organization and technical evaluation workflow for the Smart India Hackathon internal qualifier round.',
    highlights: [
      'Coordinated registrations, team formations, and technical guidelines for student development teams.',
      'Liaised between institutional faculty mentors, evaluation panels, and student teams.',
      'Promoted collaborative software prototyping under rigorous competitive hackathon constraints.',
    ],
    technologies: ['Git', 'GitHub', 'Jira'],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface-elevated text-xs font-mono tracking-widest text-accent uppercase mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>TRAJECTORY // 05</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-sans leading-[1.1]">
          Experience &amp; <br />
          <span className="font-serif italic font-normal text-muted-foreground">Engineering Leadership</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          4 internships, 1 virtual experience, and Team Lead experience coordinating 6 development teams and 36 developers across full-stack applications and mobile systems.
        </p>
      </div>

      {/* Structured Experience Timeline Cards */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => {
          const tints = ['card-tint-lavender', 'card-tint-cyan', 'card-tint-blue'];
          const tint = tints[idx % tints.length];
          return (
            <SpotlightCard
              key={exp.id}
              className={`p-6 sm:p-8 lg:p-10 group relative ${tint}`}
              spotlightColor="var(--spotlight-color)"
            >
            <div className="space-y-6">
              {/* Header Row: Company, Role, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground font-sans">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-mono text-accent font-medium">
                    {exp.role}
                  </p>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-subtle-foreground space-y-0.5">
                  <div className="font-medium text-foreground/80">{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              {/* Leadership Callout Banner (if applicable) */}
              {exp.leadershipCallout && (
                <div className="p-4 rounded-xl bg-accent-subtle border border-accent/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold block">
                      LEADERSHIP IMPACT MILESTONE
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-foreground">
                      {exp.leadershipCallout.focus}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="px-3 py-1.5 rounded-lg bg-surface-card border border-border-subtle text-center shadow-2xs">
                      <span className="text-base font-bold font-mono text-accent block">
                        {exp.leadershipCallout.teams}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground uppercase">Teams</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-surface-card border border-border-subtle text-center shadow-2xs">
                      <span className="text-base font-bold font-mono text-accent block">
                        {exp.leadershipCallout.developers}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground uppercase">Developers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                {exp.description}
              </p>

              {/* Scope Bullet Highlights */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground block font-medium">
                  Key Responsibilities &amp; Delivery
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 font-sans">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 text-xs">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-subtle-foreground mr-2 font-medium">
                  Applied Tech:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono text-foreground/80 bg-white/75 dark:bg-white/[0.04] backdrop-blur-md border border-purple-500/10 dark:border-white/10 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        );
      })}
      </div>
    </section>
  );
}
