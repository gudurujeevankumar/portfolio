export interface SkillDetail {
  name: string;
  role: string;
  category: string;
}

export interface SkillCategoryData {
  id: string;
  index: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillDetail[];
  chips?: string[];
  isCompactChips?: boolean;
}

export interface AIWorkflowStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface PipelineStageData {
  step: string;
  phase: string;
  title: string;
  role: string;
  description: string;
  skills: string[];
}

/**
 * skillsMatrixData
 * Centralized, strongly-typed source of truth for the Technical Toolkit & Engineering Matrix.
 * Contains 8 categories forming a balanced 2-column grid:
 * 01 / CORE      — Languages (Python, JavaScript, SQL)
 * 02 / CLIENT    — Frontend Engineering (HTML5, CSS3, Bootstrap, React.js, React Native, GSAP)
 * 03 / SERVER    — Backend Engineering (Django)
 * 04 / DATA      — Databases (MySQL, SQLite)
 * 05 / TOOLKIT   — Tools & Collaboration (Git, GitHub, Jira, Figma)
 * 06 / DEPLOY    — Deployment (Render, Vercel, Netlify)
 * 07 / AI TOOLS  — AI & Development Tools (Compact chips)
 * 08 / PRACTICES — Concepts & Practices (Compact chips)
 */
export const skillsMatrixData: SkillCategoryData[] = [
  {
    id: 'languages',
    index: '01 / CORE',
    title: 'Languages',
    badge: 'LANGUAGES',
    description:
      'Core programming languages used for application logic, scripting, problem solving, and relational queries.',
    skills: [
      {
        name: 'Python',
        role: 'Application logic & script automation',
        category: 'languages',
      },
      {
        name: 'JavaScript',
        role: 'ES6+, client state & async interaction',
        category: 'languages',
      },
      {
        name: 'SQL',
        role: 'Relational queries & schema modeling',
        category: 'languages',
      },
    ],
  },
  {
    id: 'frontend',
    index: '02 / CLIENT',
    title: 'Frontend Engineering',
    badge: 'UI / UX',
    description:
      'Technologies used to build responsive web interfaces, reusable components, interactive experiences, and mobile applications.',
    skills: [
      {
        name: 'HTML5',
        role: 'Semantic markup & structured DOM',
        category: 'frontend',
      },
      {
        name: 'CSS3',
        role: 'Responsive styling, Flexbox & CSS Grid',
        category: 'frontend',
      },
      {
        name: 'Bootstrap',
        role: 'Responsive grid & UI utilities',
        category: 'frontend',
      },
      {
        name: 'React.js',
        role: 'Component architecture & state',
        category: 'frontend',
      },
      {
        name: 'React Native',
        role: 'Mobile app interfaces (Bodha Soft)',
        category: 'frontend',
      },
      {
        name: 'GSAP',
        role: 'Interactive timeline animations',
        category: 'frontend',
      },
    ],
  },
  {
    id: 'backend',
    index: '03 / SERVER',
    title: 'Backend Engineering',
    badge: 'SERVER',
    description:
      'Backend development with Django for application logic, MTV architecture, and API-driven applications.',
    skills: [
      {
        name: 'Django',
        role: 'Application logic, MTV pattern & RESTful APIs',
        category: 'backend',
      },
    ],
  },
  {
    id: 'databases',
    index: '04 / DATA',
    title: 'Databases',
    badge: 'DATA',
    description:
      'Relational database technologies used for application data persistence, schema design, and querying.',
    skills: [
      {
        name: 'MySQL',
        role: 'Relational database & schema storage',
        category: 'databases',
      },
      {
        name: 'SQLite',
        role: 'Embedded relational database for development',
        category: 'databases',
      },
    ],
  },
  {
    id: 'tools',
    index: '05 / TOOLKIT',
    title: 'Tools & Collaboration',
    badge: 'TOOLKIT',
    description:
      'Development, version control, project tracking, and interface design tools used in real development workflows.',
    skills: [
      {
        name: 'Git',
        role: 'Version control & branching workflows',
        category: 'tools',
      },
      {
        name: 'GitHub',
        role: 'Code review, pull requests & repositories',
        category: 'tools',
      },
      {
        name: 'Jira',
        role: 'Sprint planning & task tracking',
        category: 'tools',
      },
      {
        name: 'Figma',
        role: 'Interface wireframing & design prototypes',
        category: 'tools',
      },
    ],
  },
  {
    id: 'deployment',
    index: '06 / DEPLOY',
    title: 'Deployment',
    badge: 'DEPLOY',
    description:
      'Platforms used to configure, host, and deploy web applications and backend services to the cloud.',
    skills: [
      {
        name: 'Render',
        role: 'Django web services & cloud hosting',
        category: 'deployment',
      },
      {
        name: 'Vercel',
        role: 'Frontend React SPA deployments',
        category: 'deployment',
      },
      {
        name: 'Netlify',
        role: 'Static web application hosting',
        category: 'deployment',
      },
    ],
  },
  {
    id: 'ai_tools',
    index: '07 / AI TOOLS',
    title: 'AI & Development Tools',
    badge: 'AI TOOLS',
    description:
      'AI-powered development, code assistance, and productivity tools I use across projects.',
    isCompactChips: true,
    skills: [],
    chips: [
      'ChatGPT',
      'Claude Code',
      'GitHub Copilot',
      'Google Antigravity',
      'Bolt',
      'Lovable',
      'Cursor',
      'OpenRouter',
    ],
  },
  {
    id: 'practices',
    index: '08 / PRACTICES',
    title: 'Concepts & Practices',
    badge: 'PRACTICES',
    description:
      'Core software engineering concepts and development practices applied across my projects.',
    isCompactChips: true,
    skills: [],
    chips: [
      'Data Structures',
      'Algorithms',
      'OOP',
      'REST APIs',
      'Database Design',
      'Problem Solving',
      'Debugging',
      'Git & Version Control',
      'Responsive Design',
      'Component-Based Development',
      'API Integration',
      'Deployment',
    ],
  },
];

/**
 * approvedAiTools
 * Strictly limited to the approved AI development tools Guduru Jeevan Kumar uses:
 * ChatGPT, Claude Code, GitHub Copilot, Google Antigravity, Bolt, Lovable, Cursor, OpenRouter
 */
export const approvedAiTools = [
  'ChatGPT',
  'Claude Code',
  'GitHub Copilot',
  'Google Antigravity',
  'Bolt',
  'Lovable',
  'Cursor',
  'OpenRouter',
];

/**
 * aiWorkflowSteps
 * Structured 6-stage AI development workflow communicating how AI is used as an accelerator
 * while engineering judgment, understanding, and code ownership remain entirely with the developer:
 * PLAN -> GENERATE -> REVIEW -> CODE & POLISH -> TEST -> SHIP
 */
export const aiWorkflowSteps: AIWorkflowStep[] = [
  {
    step: '01',
    phase: 'PLAN & EXPLORE',
    title: 'Plan & Explore',
    description:
      'Understand requirements, break down the problem, compare possible approaches, and decide the technical direction.',
    bullets: [
      'Understand requirements & problem space',
      'Break down tasks into architectural units',
      'Compare possible implementation approaches',
      'Decide the technical direction',
    ],
  },
  {
    step: '02',
    phase: 'GENERATE & PROTOTYPE',
    title: 'Generate & Prototype',
    description:
      'Use AI when useful for boilerplate, prototypes, documentation, exploration, and repetitive scaffolding.',
    bullets: [
      'Generate boilerplate & starter code',
      'Rapid prototype component ideas',
      'Explore unfamiliar API patterns & documentation',
      'Reduce repetitive development scaffolding',
    ],
  },
  {
    step: '03',
    phase: 'REVIEW & REASON',
    title: 'Review & Reason',
    description:
      'Read and understand the generated output. Never blindly accept generated code.',
    bullets: [
      'Scrutinize logic, architecture & edge cases',
      'Inspect security, maintainability & efficiency',
      'Verify alignment with actual project requirements',
      'Question and challenge generated assumptions',
    ],
  },
  {
    step: '04',
    phase: 'CODE & POLISH',
    title: 'Code & Polish — Human Ownership',
    description:
      'This is the most critical stage. Write, modify, refine, and own the actual implementation. Use AI suggestions as input, not unquestioned final code.',
    bullets: [
      'Write & modify the actual implementation directly',
      'Refine architecture, code quality & UI/UX responsiveness',
      'Diagnose edge cases & resolve implementation flaws',
      'Retain full engineering ownership of final decisions',
    ],
  },
  {
    step: '05',
    phase: 'TEST & VALIDATE',
    title: 'Test & Validate',
    description:
      'Manually and technically test the implementation across devices, browsers, and runtimes.',
    bullets: [
      'Test functionality & verify edge cases',
      'Check API behavior & runtime stability',
      'Validate cross-device UI responsiveness',
      'Debug issues & verify final correctness',
    ],
  },
  {
    step: '06',
    phase: 'INTEGRATE & SHIP',
    title: 'Integrate & Ship',
    description:
      'Prepare the final implementation for production deployment with complete operational readiness.',
    bullets: [
      'Review architecture & production readiness',
      'Verify clean deployment on target hosting',
      'Ensure high standards of final code quality',
      'Document implementations where necessary',
    ],
  },
];

/**
 * engineeringFlowStages
 * Sequential representation of how confirmed technical skills connect end-to-end:
 * Frontend -> Backend -> Database -> Deployment
 */
export const engineeringFlowStages: PipelineStageData[] = [
  {
    step: '01',
    phase: 'CLIENT LAYER',
    title: 'Frontend',
    role: 'Client Interface & Interaction',
    description:
      'Building responsive web interfaces and mobile applications with reusable components, fluid layouts, and interactive animations.',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'React Native', 'GSAP'],
  },
  {
    step: '02',
    phase: 'APPLICATION LAYER',
    title: 'Backend',
    role: 'Application Logic & APIs',
    description:
      'Developing server-side application logic, MTV pattern architecture, and RESTful API endpoints using Django.',
    skills: ['Django'],
  },
  {
    step: '03',
    phase: 'PERSISTENCE LAYER',
    title: 'Database',
    role: 'Relational Data Storage',
    description:
      'Relational schema modeling, table relationships, and persistent application querying with MySQL and SQLite.',
    skills: ['MySQL', 'SQLite'],
  },
  {
    step: '04',
    phase: 'INFRASTRUCTURE LAYER',
    title: 'Deployment',
    role: 'Cloud Hosting & Releases',
    description:
      'Configuring build pipelines, hosting environments, and deploying production web applications across cloud platforms.',
    skills: ['Render', 'Vercel', 'Netlify'],
  },
];

/**
 * ecosystemSummarySkills
 * Technologies from the approved list featured in the horizontal ecosystem ticker.
 */
export const ecosystemSummarySkills = [
  'Python',
  'JavaScript',
  'SQL',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'React.js',
  'React Native',
  'GSAP',
  'Django',
  'MySQL',
  'SQLite',
  'Git',
  'GitHub',
  'Jira',
  'Figma',
  'Render',
  'Vercel',
  'Netlify',
];
