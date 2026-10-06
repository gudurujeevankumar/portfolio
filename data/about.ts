export interface PhilosophyPrinciple {
  number: string;
  standard: string;
  title: string;
  tagline: string;
  description: string;
}

export interface JourneyMilestone {
  step: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface SihStat {
  value: string;
  label: string;
  sublabel: string;
  accentColor?: string;
}

/**
 * engineeringPhilosophyPrinciples
 * 5 non-negotiable principles guiding development and engineering decisions:
 * 01 — Build to Learn
 * 02 — Understand Before Shipping
 * 03 — End-to-End Ownership
 * 04 — Keep Improving
 * 05 — Tools Accelerate, Engineers Decide
 */
export const engineeringPhilosophyPrinciples: PhilosophyPrinciple[] = [
  {
    number: '01',
    standard: '01 / PRINCIPLE',
    title: 'Build to Learn',
    tagline: 'Action precedes true understanding.',
    description:
      'I learn fastest when I build something real rather than passively consuming tutorials. Real understanding emerges when wrestling with actual bugs, layout breakages, and live deployments.',
  },
  {
    number: '02',
    standard: '02 / PRINCIPLE',
    title: 'Understand Before Shipping',
    tagline: 'Working code is not automatically good software.',
    description:
      'I take time to understand why code behaves the way it does instead of blindly accepting generated output. Code must be understood by the engineer who maintains it.',
  },
  {
    number: '03',
    standard: '03 / PRINCIPLE',
    title: 'End-to-End Ownership',
    tagline: 'I care about what happens after implementation.',
    description:
      'Engineering does not stop at writing a function. I care about how data is modeled, how responsive the UI feels across screens, how errors are caught, and how cleanly it runs in production.',
  },
  {
    number: '04',
    standard: '04 / PRINCIPLE',
    title: 'Keep Improving',
    tagline: 'Mistakes and imperfect projects provide feedback for the next iteration.',
    description:
      'I intentionally kept the mistakes in my early JioCinema project because early flaws serve as an honest baseline. Continuous self-reflection drives lasting engineering growth.',
  },
  {
    number: '05',
    standard: '05 / PRINCIPLE',
    title: 'Tools Accelerate, Engineers Decide',
    tagline: 'AI amplifies speed; engineering judgment guarantees correctness.',
    description:
      'I can build software without AI. I use AI tools to move faster, explore solutions, and reduce repetitive work, while remaining fully responsible for the architecture, code, testing, and final result.',
  },
];

/**
 * personalJourneyMilestones
 * 5 personal milestones communicating development progression without repeating the Skills tech inventory:
 * 01 — Where It Started
 * 02 — From Frontend to Full Stack
 * 03 — Building Through Projects
 * 04 — Leadership & SIH
 * 05 — Where I Am Now
 */
export const personalJourneyMilestones: JourneyMilestone[] = [
  {
    step: '01',
    phase: 'GENESIS',
    title: 'Where It Started',
    subtitle: 'First Website · JioCinema Clone · HTML + CSS',
    description:
      'Started building a webpage without properly knowing HTML or CSS. Watched a Let\'sUpgrade webinar, chose to build my own version from scratch with HTML/CSS, leaned on ChatGPT as a patient learning guide for tags and styling, struggled with layouts, and learned by building.',
    tags: ['First Web Project', 'HTML5 & CSS3', 'Learn by Building', 'Netlify Deploy'],
  },
  {
    step: '02',
    phase: 'EXPANSION',
    title: 'From Frontend to Full Stack',
    subtitle: 'Expanding the Engineering Range',
    description:
      'Progressed beyond static markup into dynamic JavaScript, React.js component hierarchies, Python scripting, Django backend logic, relational SQL database modeling, and cloud deployments. Focused on understanding how tiers connect rather than claiming instant mastery.',
    tags: ['Frontend to Backend', 'Component Architecture', 'Relational Databases', 'Full-Stack Integration'],
  },
  {
    step: '03',
    phase: 'APPLICATION',
    title: 'Building Through Projects',
    subtitle: 'Real Projects & Development Workflows',
    description:
      'Applied technical foundations to real development deliverables: crafting mobile interfaces with React Native at Bodha Soft, building responsive web interfaces, connecting relational databases, and managing Git/Jira sprint workflows with cross-functional teams.',
    tags: ['Mobile & Web Deliverables', 'Sprint Collaboration', 'Client Requirements', 'Real Development Workflows'],
  },
  {
    step: '04',
    phase: 'LEADERSHIP',
    title: 'Leadership & SIH',
    subtitle: 'Coordination, Communication & Execution Under Pressure',
    description:
      'Stepped into event ownership: organizing the Smart India Hackathon internal round with a 3-member core team, addressing 500+ students on stage in Telugu, guiding 20 participating teams, and competing with my own 6-member team under high pressure.',
    tags: ['500+ Students Reached', '3-Member Core Team', 'Stage & Public Speaking', 'Pressure Management'],
  },
  {
    step: '05',
    phase: 'TODAY',
    title: 'Where I Am Now',
    subtitle: 'Continuous Learning & Systems Thinking',
    description:
      'Focused on continuously building, learning, debugging, and improving. Dedicated to understanding not only how to write code, but how software operates end-to-end as a resilient, complete system backed by sound engineering judgment.',
    tags: ['Systems Thinking', 'Continuous Improvement', 'End-to-End Ownership', 'Engineering Judgment'],
  },
];

/**
 * sihStatistics
 * Key validated metrics from the Smart India Hackathon Internal Round
 */
export const sihStatistics: SihStat[] = [
  {
    value: '500+',
    label: 'Students Reached',
    sublabel: 'Interacted across departments & presentations',
    accentColor: 'text-foreground',
  },
  {
    value: '20 Teams',
    label: 'Participated',
    sublabel: 'Mobilized through guidance & motivation',
    accentColor: 'text-emerald-400',
  },
  {
    value: '3 Members',
    label: 'Core Organizing Team',
    sublabel: 'Took major execution ownership with faculty guidance',
    accentColor: 'text-accent',
  },
  {
    value: '6 Members',
    label: 'Own SIH Team',
    sublabel: 'Competed while co-organizing the event',
    accentColor: 'text-purple-400',
  },
];

/**
 * sihExecutionSequence
 * Visual sequential workflow of the SIH event:
 * MOTIVATION → ORGANIZATION → GUIDANCE → PRACTICE → COORDINATION → EXECUTION
 */
export const sihExecutionSequence = [
  { phase: 'MOTIVATION', label: 'Presented to 500+ students & lecturers' },
  { phase: 'ORGANIZATION', label: '3-member core team handling execution' },
  { phase: 'GUIDANCE', label: 'Preparation & presentation guidance for 20 teams' },
  { phase: 'PRACTICE', label: 'Conducted practice sessions & rehearsals' },
  { phase: 'COORDINATION', label: 'Stage, sound, presentations, judges & media' },
  { phase: 'EXECUTION', label: 'Managed live event under pressure to completion' },
];

/**
 * jioCinemaProgressionSequence
 * Visual treatment:
 * STARTING POINT → NO HTML/CSS EXPERIENCE → BUILD → STRUGGLE → LEARN → DEPLOY → KEEP THE MISTAKES AS PROOF OF GROWTH
 */
export const jioCinemaProgressionSequence = [
  { step: '01', title: 'STARTING POINT', desc: 'Curiosity to build a webpage' },
  { step: '02', title: 'NO PRIOR EXPERIENCE', desc: 'Did not know where to start' },
  { step: '03', title: 'BUILD', desc: 'Started building instead of waiting' },
  { step: '04', title: 'STRUGGLE', desc: 'Layout positioning & responsive bugs' },
  { step: '05', title: 'LEARN', desc: 'ChatGPT as a guide for tags & CSS' },
  { step: '06', title: 'DEPLOY', desc: 'First live release on Netlify' },
  { step: '07', title: 'KEEP THE MISTAKES', desc: 'Preserved as proof of where I began' },
];
