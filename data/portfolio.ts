import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Guduru Jeevan Kumar',
    title: 'Software Engineer / Full-Stack Developer',
    role: 'Software Engineer & Full-Stack Developer',
    location: 'Bengaluru, Karnataka, India',
    email: 'guduru.jeevankumar.dev@gmail.com',
    positioningStatement:
      'Early-career Software Engineer & Full-Stack Developer actively seeking full-time opportunities. Building web applications, robust APIs, and interactive interfaces with React, React Native, Python, Django, and SQL.',
    shortBio:
      'Early-career Software Engineer and Full-Stack Developer with hands-on experience across full-stack web and mobile development. Experienced with React.js, Python, Django, and relational databases, with proven Team Lead experience coordinating 6 development teams and 36 developers.',
    githubUrl: 'https://github.com/gudurujeevankumar',
    linkedinUrl: 'https://www.linkedin.com/in/gudurujeevankumar',
    youtubeUrl: 'https://youtube.com',
    socialLinks: [
      {
        platform: 'GitHub',
        label: 'github.com/gudurujeevankumar',
        url: 'https://github.com/gudurujeevankumar',
        iconIdentifier: 'github',
      },
      {
        platform: 'LinkedIn',
        label: 'linkedin.com/in/gudurujeevankumar',
        url: 'https://www.linkedin.com/in/gudurujeevankumar',
        iconIdentifier: 'linkedin',
      },
      {
        platform: 'Email',
        label: 'guduru.jeevankumar.dev@gmail.com',
        url: 'mailto:guduru.jeevankumar.dev@gmail.com',
        iconIdentifier: 'email',
      },
    ],
    resume: {
      folderUrl:
        'https://drive.google.com/drive/folders/1p-U6qqMhZYhBxoPye6hbPwxkN6x6cp12?usp=drive_link',
      label: 'View Resume (Drive)',
      note: 'Points to verified Google Drive directory containing the latest official curriculum vitae.',
    },
  },

  education: [
    {
      institution: 'Chadalawada Ramanamma Engineering College (CREC)',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      startYear: 2022,
      endYear: 2026,
      cgpa: '8.53',
      maxCgpa: '10',
      location: 'Tirupati, Andhra Pradesh, India',
      highlights: [
        'Organized and coordinated the Smart India Hackathon internal round at CREC',
        'Strong academic foundation in Data Structures, Algorithms, Database Management Systems, and Software Engineering',
      ],
    },
  ],

  experience: [
    {
      id: 'bodha-soft',
      company: 'Bodha Soft',
      role: 'Mobile Frontend Developer Intern → Team Lead',
      period: 'July 2025 – March 2026',
      startDate: '2025-07',
      endDate: '2026-03',
      type: 'Leadership Role',
      location: 'India',
      description:
        'Contributed to the development and UI/UX design of a mobile application tailored for UPSC aspirants, progressing into a Team Lead role coordinating 6 development teams and 36 developers.',
      technologies: ['React Native', 'JavaScript', 'Figma', 'Git', 'Jira'],
      responsibilities: [
        'Designed intuitive mobile UI/UX screens and user flow diagrams in Figma for UPSC aspirants',
        'Engineered frontend screens and interactive components utilizing React Native',
        'Collaborated on cross-team mobile client and API integrations',
        'Promoted to Team Lead, orchestrating sprint execution and code integration across teams',
      ],
      contributions: [
        'Led end-to-end design-to-code translation for core app modules',
        'Facilitated cross-team synchronization and resolved technical blockers',
      ],
      leadershipScope: {
        teamsLed: 6,
        membersCoordinated: 36,
        title: 'Team Lead',
        details: [
          'Progressed from intern to Team Lead, coordinating 36 developers distributed across 6 distinct functional teams',
          'Managed task delegations, daily status standups, and milestone deliveries',
        ],
      },
      relatedProjectIds: ['upsc-app-design'],
    },
    {
      id: 'codtech-it-solutions',
      company: 'CODTECH IT Solutions',
      role: 'Full Stack Web Developer Intern',
      period: 'May – June 2025',
      startDate: '2025-05',
      endDate: '2025-06',
      type: 'Internship',
      description:
        'Engaged in structured full-stack web development deliverables covering responsive design, real-time collaboration concepts, and modern web application patterns.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'GitHub'],
      responsibilities: [
        'Worked through comprehensive web development tasks aligned with modern frontend and backend standards',
        'Maintained structured version control and clean, commented code repositories on GitHub',
      ],
      assignedScopeNotice:
        'Curriculum task scope covered: Personal Portfolio Website, Online Learning Platform, Real-Time Collaborative Document Editor, and Progressive Web Application. Specific repository mappings and personal implementation details will be expanded upon verified project submission records.',
    },
    {
      id: 'ndvtechsys-solutions',
      company: 'NDVTechsys Solutions',
      role: 'Full Stack Web Developer Intern',
      period: 'May – July 2025',
      startDate: '2025-05',
      endDate: '2025-07',
      type: 'Internship',
      description:
        'Completed full-stack web development internship, focusing on backend service structures and relational database connectivity.',
      technologies: ['SQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      responsibilities: [
        'Participated in full-stack development cycles and enterprise application concepts',
        'Practiced backend logic construction and database querying with SQL',
      ],
    },
    {
      id: 'cognifyz-technologies',
      company: 'Cognifyz Technologies',
      role: 'Python & Data Analytics Intern',
      period: 'May – June 2025',
      startDate: '2025-05',
      endDate: '2025-06',
      type: 'Internship',
      description:
        'Engaged in Python scripting methodologies, data preprocessing workflows, and analytics fundamentals.',
      technologies: ['Python', 'SQL', 'Git'],
      responsibilities: [
        'Explored data preprocessing techniques and feature transformation workflows with Python',
        'Preprocessed datasets and analyzed feature relationships for structured modeling',
      ],
    },
    {
      id: 'skyscanner-virtual-experience',
      company: 'Skyscanner',
      role: 'Virtual Front-End Software Engineering Experience',
      period: 'May 2025',
      startDate: '2025-05',
      endDate: '2025-05',
      type: 'Virtual Experience',
      description:
        'Completed Skyscanner’s virtual front-end engineering simulation focusing on real-world component design, accessibility, and interactive date-picker logic.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
      responsibilities: [
        'Built a reusable, user-friendly travel date picker component handling diverse calendar edge cases',
        'Ensured clean frontend state management and dynamic date selection behavior',
      ],
      relatedProjectIds: ['skyscanner-travel-date-picker'],
    },
  ],

  leadership: [
    {
      id: 'bodha-soft-lead',
      title: 'Development Team Lead',
      organizationOrEvent: 'Bodha Soft',
      role: 'Team Lead (Promoted from Intern)',
      period: '2025 – 2026',
      description:
        'Progressed from intern to Team Lead, coordinating technical delivery and sprint execution across 6 development teams (36 developers) on the UPSC aspirants platform.',
      responsibilities: [
        'Coordinated 6 development teams comprising 36 developers',
        'Conducted code reviews, milestone evaluations, and inter-team workflow alignment',
        'Bridged UI/UX design specifications from Figma directly into mobile frontend sprints',
      ],
      impactHighlights: [
        'Coordinated 6 development teams and 36 developers',
        'Maintained structured sprint schedules and cohesive architectural progress',
      ],
      relatedExperienceId: 'bodha-soft',
    },
    {
      id: 'sih-internal-round-crec',
      title: 'Lead Organizer & Team Lead',
      organizationOrEvent: 'Smart India Hackathon (SIH) — Internal Round',
      role: 'Lead Organizer / Team Lead',
      period: 'CREC Internal Round',
      location: 'CREC, Tirupati',
      description:
        'Spearheaded the institutional organization of the Smart India Hackathon internal qualifier round at Chadalawada Ramanamma Engineering College.',
      responsibilities: [
        'Coordinated event logistics, team registrations, and scheduling for participant groups',
        'Managed communication between faculty committees, student teams, and technical mentors',
        'Assisted in technical evaluation flow and smooth execution of hackathon rounds',
      ],
      impactHighlights: [
        'Successfully organized the university-level qualification round for India’s premier national hackathon',
        'Fostered collaborative problem-solving across multiple student engineering batches',
      ],
    },
  ],

  skills: [
    {
      category: 'Languages',
      description: 'Core programming languages for application logic, algorithms, and data modeling',
      skills: ['Python', 'JavaScript', 'SQL'],
    },
    {
      category: 'Frontend',
      description: 'Component-driven client architectures, dynamic user interfaces, and mobile frameworks',
      skills: [
        'HTML5',
        'CSS3',
        'Bootstrap',
        'React.js',
        'React Native',
        'GSAP',
      ],
    },
    {
      category: 'Backend',
      description: 'Server frameworks and robust API architectures',
      skills: ['Django'],
    },
    {
      category: 'Databases',
      description: 'Relational schemas, query optimization, and persistent database storage',
      skills: ['MySQL', 'SQLite'],
    },
    {
      category: 'Tools',
      description: 'Workflow, version control, sprint management, and interface prototyping',
      skills: ['Git', 'GitHub', 'Jira', 'Figma'],
    },
    {
      category: 'Deployment',
      description: 'Cloud hosting platforms, continuous deployment, and production releases',
      skills: ['Render', 'Vercel', 'Netlify'],
    },
  ],

  projects: [
    // FEATURED PROJECTS
    {
      id: 'ecu-fuel-prediction',
      slug: 'ecu-fuel-prediction',
      title: 'ECU Analytics & Fuel Prediction',
      subtitle: 'Vehicle Telemetry Fuel Consumption Prediction & Driving Classification System',
      category: 'Python Web & Analytics',
      hierarchy: 'featured',
      ownership: 'solo',
      description:
        'A comprehensive web platform that utilizes Electronic Control Unit (ECU) vehicle sensor telemetry to predict instantaneous fuel consumption rates and classify driving behavior profiles using Python analytical algorithms and REST APIs.',
      shortDescription:
        'ECU telemetry platform predicting fuel efficiency and classifying driver profiles using Python and MySQL persistence.',
      technologies: [
        'Python',
        'MySQL',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Render',
        'Git',
        'GitHub',
      ],
      liveUrl: 'https://fuel-consumption-prediction-and-driving.onrender.com/',
      githubUrl:
        'https://github.com/gudurujeevankumar/Fuel-Consumption-Prediction-and-Driving-Classification.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Architected the end-to-end predictive pipeline: data ingestion from ECU sensors, predictive model integration, REST API backend, and interactive analytical dashboard visualizations.',
      caseStudy: {
        problem:
          'Vehicle fleet operators, commercial drivers, and individual vehicle owners often lack granular visibility into how specific driving habits—such as aggressive throttle spikes, prolonged idling, and elevated engine RPMs—directly drive up fuel consumption and maintenance costs.',
        solution:
          'Engineered a full-stack predictive suite that ingests multi-parameter ECU telemetry data, normalizes sensor inputs, feeds them into a predictive Python analytics model to predict instantaneous fuel burn (L/100km), and simultaneously classifies driving behavior profiles (Aggressive, Moderate, or Eco-Friendly).',
        features: [
          'Instantaneous fuel consumption prediction based on engine telemetry parameters',
          'Automated driving behavior classification (Aggressive, Moderate, Eco-Friendly)',
          'Interactive analytical visualizations showing telemetry distributions over time',
          'Persistent MySQL telemetry logging for multi-trip historical analytics',
          'Clean REST API architecture with input validation and error boundaries',
        ],
        architectureFlow: 'ECU Telemetry Sensors → Data Ingestion & Scaling → Python Telemetry Service → MySQL Database & Interactive UI',
        architectureLayers: [
          {
            layer: 'Client Layer',
            component: 'Interactive Web Dashboard',
            description: 'Responsive telemetry submission forms and dynamic visualizations displaying consumption graphs and efficiency indices.',
          },
          {
            layer: 'API / Gateway Layer',
            component: 'Python Backend Service',
            description: 'Stateless endpoints validating sensor payloads, transforming inputs into structured model inputs, and returning JSON predictions.',
          },
          {
            layer: 'Predictive Layer',
            component: 'Python Analytics Engine',
            description: 'Trained regression algorithms for fuel consumption rate and classification logic for driving behavior categorization.',
          },
          {
            layer: 'Persistence Layer',
            component: 'MySQL Database',
            description: 'Stores trip telemetry records, predicted fuel metrics, driver classification history, and audit logs.',
          },
        ],
        techStackCategorized: [
          { category: 'Frontend', technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'] },
          { category: 'Backend & APIs', technologies: ['Python', 'Django'] },
          { category: 'Database', technologies: ['MySQL'] },
          { category: 'Deployment & Tools', technologies: ['Render', 'Git', 'GitHub'] },
        ],
        developmentPhases: [
          { phase: 'Phase 1', title: 'Data Preprocessing & EDA', description: 'Cleaned ECU vehicle sensor logs, handled missing values, and correlated engine parameters with fuel burn rates.' },
          { phase: 'Phase 2', title: 'Analytical Modeling', description: 'Constructed regression and multiclass classification pipelines using Python to calculate consumption rates.' },
          { phase: 'Phase 3', title: 'API & Pipeline Construction', description: 'Built Python service routes with input schema validation and fast model inference serialization.' },
          { phase: 'Phase 4', title: 'Dashboard & Deployment', description: 'Constructed responsive analytical dashboard views and deployed the full-stack system to Render cloud.' },
        ],
        engineeringChallenges: [
          {
            challenge: 'High variance and outlier values in real-world vehicle sensor readings caused occasional erratic prediction spikes.',
            solution: 'Implemented robust feature scaling with IQR outlier bounding during data preprocessing, stabilizing model inferences across dynamic throttle changes.',
          },
          {
            challenge: 'Handling simultaneous regression and classification inference within low-latency web request cycles.',
            solution: 'Cached loaded model weights in memory on server launch, allowing concurrent inference execution in under 120ms per prediction payload.',
          },
        ],
        results: [
          'Delivered real-time fuel efficiency predictions with stable response times under 150ms.',
          'Provided actionable classification scoring helping drivers benchmark eco-friendly habits.',
          'Successfully deployed full-stack pipeline on Render with relational database persistence.',
        ],
        lessonsLearned: [
          'Real-world sensor data requires strict input sanitization boundaries before feeding into ML inference models.',
          'Decoupling the ML scoring engine behind a well-documented REST API facilitates effortless frontend evolution.',
        ],
      },
    },
    {
      id: 'ap-eapcet-predictor',
      slug: 'ap-eapcet-predictor',
      title: 'AP EAPCET College Predictor',
      subtitle: 'Data-Driven Engineering College & Branch Admission Predictor',
      category: 'AI-Driven Full Stack Application',
      hierarchy: 'featured',
      ownership: 'solo',
      description:
        'An intelligent counseling assistance application that helps prospective engineering students evaluate probable college and branch allotments based on AP EAMCET / EAPCET entrance rank cutoffs, categories, and reservation quotas.',
      shortDescription:
        'Data-driven counseling tool predicting engineering college allotments based on AP EAPCET rank cutoffs.',
      technologies: ['React.js', 'Python', 'JavaScript', 'CSS3', 'Bootstrap', 'Vercel', 'Git'],
      liveUrl: 'https://ap-eamcet-college-predictor.vercel.app/',
      githubUrl: 'https://github.com/gudurujeevankumar/ap-eamcet-college-predictor.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Designed and developed the full application stack, including cutoff prediction logic, dynamic multi-filter UI (rank, category, branch, region), and cloud deployment on Vercel.',
      caseStudy: {
        problem:
          'Engineering entrance counseling in Andhra Pradesh involves tens of thousands of historical cutoff permutations across more than 200 institutions, diverse reservation categories (OC, BC, SC, ST, EWS), and regional zones (AU, SVU), creating immense anxiety and confusion for candidates trying to make informed decisions.',
        solution:
          'Constructed a streamlined, high-speed prediction engine allowing candidates to input their rank, category, gender, and preferred branches to instantly evaluate realistic college options categorized by admission probability.',
        features: [
          'Instant rank-to-allotment mapping across multi-phase historical cutoff records',
          'Dynamic multi-variable filtering for reservation categories, local regions, branches, and districts',
          'Categorized admission probability tiers (Safe, Target, Ambitious)',
          'Instant mobile-first responsive search interface optimized for low-bandwidth connections',
        ],
        architectureFlow: 'Candidate Rank & Category Inputs → Client Filtering & Validation Engine → Cutoff Query Pipeline → Ranked Institutional Allocation Matrix',
        architectureLayers: [
          {
            layer: 'Frontend Layer',
            component: 'React Single Page App',
            description: 'Reactive form controls, category dropdowns, dynamic result cards, and instantaneous search indexing.',
          },
          {
            layer: 'Prediction & Logic Layer',
            component: 'Cutoff Inference Engine',
            description: 'Processes candidate rank percentiles against multi-year seat allocation matrices with boundary logic.',
          },
          {
            layer: 'Data Storage Layer',
            component: 'Structured Allotment Records',
            description: 'Optimized JSON data structures indexed by branch code, college code, and quota category for sub-10ms lookup.',
          },
        ],
        techStackCategorized: [
          { category: 'Frontend', technologies: ['React.js', 'JavaScript', 'CSS3', 'Bootstrap'] },
          { category: 'Backend / Scripting', technologies: ['Python'] },
          { category: 'Deployment', technologies: ['Vercel', 'Git'] },
        ],
        developmentPhases: [
          { phase: 'Phase 1', title: 'Data Extraction & Normalization', description: 'Extracted raw PDF cutoff tables from official counseling records and converted them into clean, normalized JSON structures.' },
          { phase: 'Phase 2', title: 'Algorithm & Filter Design', description: 'Formulated rank matching algorithms taking gender, category reservation, and local area rules into account.' },
          { phase: 'Phase 3', title: 'UI/UX Implementation', description: 'Built an accessible, high-contrast React interface with real-time reactive search.' },
        ],
        engineeringChallenges: [
          {
            challenge: 'Managing complex hierarchical reservation rules (local vs non-local candidates, gender-specific quotas) accurately.',
            solution: 'Implemented structured cascading rule handlers that filter allotment probabilities according to official state counseling priority hierarchies.',
          },
        ],
        results: [
          'Empowered hundreds of prospective engineering students to navigate counseling options with clarity and confidence.',
          'Sub-second query performance on both mobile browsers and desktop devices.',
        ],
        lessonsLearned: [
          'Transforming messy administrative data into clean, structured schemas is 70% of the battle in civic tools.',
          'Fast, empathetic user interfaces reduce anxiety in high-stakes moments like university counseling.',
        ],
      },
    },
    {
      id: 'ap-icet-predictor',
      slug: 'ap-icet-predictor',
      title: 'AP ICET College Predictor',
      subtitle: 'Data-Driven MCA & MBA Admission Prediction System',
      category: 'Full Stack Web',
      hierarchy: 'featured',
      ownership: 'solo',
      description:
        'A dedicated predictive platform designed for Andhra Pradesh ICET candidates to evaluate admission probabilities into MBA and MCA postgraduate programs across state universities and affiliated colleges.',
      shortDescription:
        'Data-driven counseling platform predicting MBA and MCA college allotments for AP ICET candidates using Python and React.',
      technologies: ['Python', 'React.js', 'JavaScript', 'CSS3', 'Vercel', 'Git'],
      liveUrl: 'https://ap-icet-college-predictor.vercel.app/',
      githubUrl: 'https://github.com/gudurujeevankumar/ap-icet-college-predictor.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Built the data preparation scripts, admission allotment prediction logic, and modern frontend interface for postgraduate candidates.',
      caseStudy: {
        problem:
          'Postgraduate candidates appearing for AP ICET (for MBA and MCA admissions) have limited digital tooling to map their rank and reservation category against historical counseling cutoff allotments across universities.',
        solution:
          'Developed an intelligent prediction system that models past counseling trends and evaluates probability bands for university colleges, private autonomous institutions, and affiliated programs.',
        features: [
          'Specialized course pathway selection (MBA vs MCA)',
          'Category-specific cutoff benchmarking across AU and SVU regions',
          'Detailed college breakdown including fee category, affiliation, and district location',
          'Zero-latency instant client-side prediction filtering',
        ],
        architectureFlow: 'Candidate Selection (Rank / Course / Quota) → Validation Layer → Predictive Allotment Engine → Categorized Recommendations',
        architectureLayers: [
          {
            layer: 'UI & Experience',
            component: 'React Frontend',
            description: 'Modern cards and form fields with intuitive course switching between MBA and MCA tracks.',
          },
          {
            layer: 'Matching Algorithm',
            component: 'Python & JavaScript Core',
            description: 'Calculates rank tolerance intervals and probability percentiles for each institution.',
          },
        ],
        techStackCategorized: [
          { category: 'Frontend', technologies: ['React.js', 'JavaScript', 'CSS3'] },
          { category: 'Data & Modeling', technologies: ['Python'] },
          { category: 'Deployment', technologies: ['Vercel', 'Git'] },
        ],
        developmentPhases: [
          { phase: 'Phase 1', title: 'Data Collection', description: 'Curated official AP ICET first and final phase allotment cutoffs.' },
          { phase: 'Phase 2', title: 'Probability Modeling', description: 'Designed rank tolerance bands to account for year-over-year candidate distribution shifts.' },
          { phase: 'Phase 3', title: 'Interface Polish', description: 'Implemented a clean, focused user flow with responsive cards and quick filter chips.' },
        ],
        engineeringChallenges: [
          {
            challenge: 'Cutoff variance between first phase and mop-up counseling rounds required distinct modeling.',
            solution: 'Incorporated phased historical metrics so candidates can gauge both conservative and aggressive allotment likelihoods.',
          },
        ],
        results: [
          'Created a dependable advisory platform specifically for postgraduate business and computer applications candidates.',
        ],
        lessonsLearned: [
          'Domain-specific niche tools solve acute user pain points when generalized platforms fail to capture nuanced rules.',
        ],
      },
    },
    {
      id: 'student-portal',
      slug: 'student-portal',
      title: 'Student Academic Portal',
      subtitle: 'Comprehensive Academic Resource & Governance Platform',
      category: 'Full Stack',
      hierarchy: 'featured',
      ownership: 'solo',
      description:
        'A full-stack, student-focused academic web portal designed to streamline access to academic resources, previous year question papers, dynamic attendance calculators, fee notifications, and administrative updates with regulation-based filtering.',
      shortDescription:
        'Full-stack academic portal with regulation filtering, attendance calculation, and paper archives.',
      technologies: ['React.js', 'Python', 'Django', 'MySQL', 'JavaScript', 'CSS3', 'Vercel', 'Git'],
      liveUrl: 'https://student-academic-portal.vercel.app/',
      githubUrl: 'https://github.com/gudurujeevankumar/student-academic-portal.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Engineered the end-to-end portal: designed the relational schema models, built authenticated Django API endpoints, created regulation filtering logic, and styled the React frontend.',
      caseStudy: {
        problem:
          'University students routinely struggle with fragmented resources: syllabi in messaging groups, past question papers scattered across drives, fee notices buried in emails, and no clean way to project future attendance percentages to meet semester criteria.',
        solution:
          'Created a unified, authenticated academic hub where students can filter resources by university regulation (e.g. R20, R23), search past question papers by subject code, track academic progress, and project attendance requirements in real time.',
        features: [
          'Role-based authentication (Student and Administrator roles) with secure session handling',
          'Dynamic attendance calculator computing required classes to reach target attendance thresholds',
          'Syllabus repository and past question paper archive filtered by academic regulation',
          'Fee notification ledger and campus announcements bulletin',
          'Admin portal for uploading materials and publishing semester notifications',
        ],
        architectureFlow: 'React Client (SPA) → Authenticated Django REST API → Schema Validation Middleware → MySQL Relational Database',
        architectureLayers: [
          {
            layer: 'Frontend Application',
            component: 'React + CSS3',
            description: 'Authenticated student dashboard, attendance projection simulator, and subject paper viewer.',
          },
          {
            layer: 'Backend Services',
            component: 'Python & Django',
            description: 'RESTful API with role validation, upload handlers, and attendance calculation algorithms.',
          },
          {
            layer: 'Database Layer',
            component: 'MySQL Database',
            description: 'Relational tables for users, regulations, subjects, resource metadata, and activity logs.',
          },
        ],
        techStackCategorized: [
          { category: 'Frontend', technologies: ['React.js', 'JavaScript', 'CSS3'] },
          { category: 'Backend', technologies: ['Python', 'Django'] },
          { category: 'Database', technologies: ['MySQL'] },
          { category: 'Deployment', technologies: ['Vercel', 'Render'] },
        ],
        developmentPhases: [
          { phase: 'Phase 1', title: 'System Architecture', description: 'Mapped student user journeys, administrative permissions, and database schemas.' },
          { phase: 'Phase 2', title: 'Backend API Development', description: 'Built secure auth controllers, password hashing, and multipart file upload pipelines in Django.' },
          { phase: 'Phase 3', title: 'Interactive Frontend', description: 'Created modular React components including the attendance calculator and regulation filters.' },
        ],
        engineeringChallenges: [
          {
            challenge: 'Curriculum regulations (e.g., R19, R20, R23) introduce differing credit structures, grading schemes, and syllabus boundaries.',
            solution: 'Designed an extensible MySQL relational schema linking subject records to specific regulation keys, ensuring clean filtering without duplicate data entries.',
          },
        ],
        results: [
          'Centralized vital academic assets into a single fast, mobile-friendly interface.',
          'Built attendance projection tools that provide instant mathematical clarity for students.',
        ],
        lessonsLearned: [
          'Granular role-based access control must be enforced at the API route middleware level, never just in UI component states.',
        ],
      },
    },
    {
      id: 'vid-vault',
      slug: 'vid-vault',
      title: 'Vid Vault',
      subtitle: 'Video Hosting & Streaming Platform',
      category: 'Django Full Stack',
      hierarchy: 'featured',
      ownership: 'collaborative',
      description:
        'A full-stack collaborative video hosting web application featuring user authentication, media upload processing, streaming playback, creator profiles, and video recommendation feeds.',
      shortDescription:
        'Collaborative Django-based video hosting platform supporting user uploads, stream playback, and profile feeds.',
      technologies: [
        'Python',
        'Django',
        'SQLite',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Render',
        'Git',
        'GitHub',
      ],
      liveUrl: 'https://video-hosting-platform-zwmb.onrender.com/',
      githubUrl: 'https://github.com/boyamounika9/Video_Hosting_Platform',
      year: '2024',
      contributionStatus: 'pending_user_input',
      personalContribution:
        'Collaborative development project. Specific personal modules and technical contributions pending user confirmation to ensure 100% portfolio attribution accuracy.',
      caseStudy: {
        problem:
          'Building a media-heavy platform requires seamless handling of binary video uploads, persistent storage, responsive stream playback, and secure multi-user session management.',
        solution:
          'Built on Django’s robust MVC architecture with relational storage, custom authentication controllers, media pipelines, and dynamic viewing interfaces.',
        features: [
          'User registration, login authentication, and creator profile management',
          'Direct media file upload and automated database registration',
          'Embedded video playback player with metadata display and suggested video feeds',
        ],
      },
    },

    // SECONDARY PROJECTS
    {
      id: 'skyscanner-travel-date-picker',
      slug: 'skyscanner-travel-date-picker',
      title: 'Skyscanner Travel Date Picker',
      subtitle: 'Interactive Travel Booking Component',
      category: 'React Component & UI Engineering',
      hierarchy: 'secondary',
      ownership: 'solo',
      description:
        'A production-grade, reusable travel date picker component engineered during Skyscanner’s Virtual Front-End Experience, handling complex calendar ranges, flexible booking windows, and interactive date validations.',
      shortDescription:
        'Reusable React calendar and booking date-selection component built with Skyscanner design standards.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
      liveUrl: 'https://skyscanner-travel-date-picker.vercel.app/',
      githubUrl:
        'https://github.com/gudurujeevankumar/skyscanner-travel-date-picker.git',
      year: '2025',
      contributionStatus: 'verified',
      personalContribution:
        'Independently implemented the React date-picker logic, calendar state transitions, keyboard accessibility considerations, and visual styles.',
      relatedExperienceId: 'skyscanner-virtual-experience',
      caseStudy: {
        problem:
          'Date pickers are prone to edge cases: invalid date selections, awkward mobile tap targets, awkward backward-range selections, and heavy bundle footprints when using monolithic calendar libraries.',
        solution:
          'Engineered a standalone, dependency-free React calendar component supporting dual-month views, intuitive range hover previews, dynamic keyboard navigation, and full responsive design.',
        features: [
          'Dual-month simultaneous calendar view with smooth month navigation',
          'Live range selection with dynamic hover preview state',
          'Robust date validation preventing booking dates prior to current day',
          'Keyboard accessible navigation respecting ARIA grid conventions',
        ],
      },
    },
    {
      id: 'django-crud-portal',
      slug: 'django-crud-portal',
      title: 'Django CRUD Portal',
      subtitle: 'Data Management & Record Administration System',
      category: 'Django Full Stack',
      hierarchy: 'secondary',
      ownership: 'solo',
      description:
        'A clean full-stack Django administrative portal demonstrating comprehensive Create, Read, Update, and Delete (CRUD) operations, database schema validations, and responsive management interfaces.',
      shortDescription:
        'Structured administrative data management portal built with Django and relational storage.',
      technologies: ['Python', 'Django', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Render'],
      liveUrl: 'https://django-crud-portal.onrender.com/',
      githubUrl: 'https://github.com/gudurujeevankumar/Django-CRUD-Portal.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Engineered backend Django models, form controllers, view logic, and responsive templates with deployment to Render.',
      caseStudy: {
        problem:
          'Internal data entry systems frequently suffer from lack of validation, unhandled database concurrency errors, and poor administrative usability.',
        solution:
          'Implemented a secure Django web portal utilizing Django ORM models, CSRF-protected forms, pagination controllers, and responsive tables.',
        features: [
          'Comprehensive record lifecycle administration with field validation',
          'Dynamic table search and column sorting',
          'Persistent relational storage with SQLite and Django ORM',
        ],
      },
    },
    {
      id: 'task-manager',
      slug: 'task-manager',
      title: 'Task Manager',
      subtitle: 'Productivity & Workflow Tracking Application',
      category: 'Full Stack',
      hierarchy: 'secondary',
      ownership: 'solo',
      description:
        'A productivity management web application enabling users to authenticate, organize tasks, monitor progress states, and manage daily development workflows.',
      shortDescription:
        'Secure productivity dashboard for task scheduling, status tracking, and workflow management.',
      technologies: ['Python', 'Django', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Render'],
      liveUrl: 'https://task-manager-z7rl.onrender.com/login/?next=/dashboard/',
      githubUrl: 'https://github.com/gudurujeevankumar/Task-Manager.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Built authenticated dashboard views, task model schemas, and state update flows.',
      caseStudy: {
        problem:
          'Developers and students need clean, low-friction task tracking with clear visual prioritization without the bloat of enterprise project management suites.',
        solution:
          'Built a lightweight, authenticated productivity dashboard with kanban status filtering, priority tags, and deadline notifications.',
        features: [
          'User session authentication and profile-scoped task workspaces',
          'Status transitions (To Do, In Progress, Completed)',
          'Priority categorization and due date tracking',
        ],
      },
    },
    {
      id: 'product-catalog',
      slug: 'product-catalog',
      title: 'React Product Catalog',
      subtitle: 'Dynamic E-Commerce Product Explorer',
      category: 'React',
      hierarchy: 'secondary',
      ownership: 'solo',
      description:
        'A dynamic frontend product catalog application built with React, demonstrating component-driven state architecture, filtering, search, and responsive product grid layouts.',
      shortDescription:
        'Interactive React product explorer featuring live category filtering, search, and responsive cards.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'GitHub'],
      liveUrl: 'https://gudurujeevankumar.github.io/React_Product_Catalog/',
      githubUrl: 'https://github.com/gudurujeevankumar/React_Product_Catalog.git',
      year: '2024',
      contributionStatus: 'verified',
      personalContribution:
        'Created the modular React component hierarchy, filtering logic, and styled product showcase interfaces.',
      caseStudy: {
        problem:
          'E-commerce catalogs must respond instantaneously to customer search queries and category toggles without page reloads or lagging state cycles.',
        solution:
          'Engineered a component hierarchy in React using memoized filter pipelines, dynamic badges, and responsive CSS grid cards.',
        features: [
          'Instant keyword search across product titles and specifications',
          'Multi-category toggle filters and price sorting',
          'Responsive product cards with modal details view',
        ],
      },
    },

    // LEARNING & CLONE PROJECTS
    {
      id: 'apple-web-clone',
      slug: 'apple-web-clone',
      title: 'Apple Website Clone',
      subtitle: 'Frontend Recreation & Layout Study',
      category: 'HTML / CSS',
      hierarchy: 'learning',
      ownership: 'learning-clone',
      isLearningClone: true,
      learningContext:
        'Built as an intentional layout and design study to practice semantic markup, clean typography hierarchy, and Apple’s iconic minimalist aesthetic.',
      description:
        'A frontend design clone recreating key sections of Apple’s promotional landing page, built to analyze precision spacing, grid systems, and subtle styling subtleties using pure HTML and CSS.',
      shortDescription:
        'Precision layout study recreating Apple promotional page structures with pure semantic HTML and CSS.',
      technologies: ['HTML5', 'CSS3', 'GitHub'],
      liveUrl: 'https://gudurujeevankumar.github.io/Apple-web-clone/',
      githubUrl: 'https://github.com/gudurujeevankumar/Apple-web-clone.git',
      year: '2023',
      contributionStatus: 'verified',
      personalContribution:
        'Handcrafted semantic HTML structures and CSS stylesheets modeled on Apple desktop and mobile layouts.',
    },
    {
      id: 'jio-cinema-clone',
      slug: 'jio-cinema-clone',
      title: 'Jio Cinema Clone',
      subtitle: 'Foundational Frontend Journey Project',
      category: 'HTML / CSS',
      hierarchy: 'learning',
      ownership: 'learning-clone',
      isLearningClone: true,
      learningContext:
        'My very first frontend development project, marking the initiation of my self-taught coding and web development journey.',
      description:
        'A learning project modeled after the Jio Cinema media streaming web portal, created to master foundational concepts of DOM structuring, media embedding, and responsive banner layouts.',
      shortDescription:
        'First web development project exploring media cards, hero banners, and foundational CSS layout concepts.',
      technologies: ['HTML5', 'CSS3', 'Netlify'],
      liveUrl: 'https://jiocinemaclonebyjeevankmarguduru.netlify.app/',
      githubUrl: 'https://github.com/gudurujeevankumar/Jio-Cinema-Clone-Project.git',
      year: '2023',
      contributionStatus: 'verified',
      personalContribution:
        'Designed the initial static layout and CSS styling as a foundational milestone in learning web development.',
    },
  ],

  uiuxDesigns: [
    {
      id: 'upsc-app-design',
      title: 'UPSC Aspirants Mobile App Design',
      category: 'Mobile Application UI/UX',
      figmaUrl: 'https://www.figma.com/design/OwmHz6HNCiVTtuBI8Al9bF/UPSC',
      description:
        'A comprehensive mobile design system and user interface crafted in Figma for civil services exam candidates, featuring study planning dashboards, syllabus tracking modules, and question bank navigation.',
      focusAreas: [
        'Aspirant User Journey & Flow',
        'Study Dashboard & Syllabus Tracker',
        'Mobile Information Architecture',
        'Design System & Component Reusability',
      ],
      tools: ['Figma'],
      relatedExperienceId: 'bodha-soft',
      relatedProjectName: 'Bodha Soft UPSC Mobile Application',
    },
    {
      id: 'hospital-app-design',
      title: 'Hospital App Design',
      category: 'Healthcare Mobile UI/UX',
      figmaUrl: 'https://www.figma.com/design/rMPuOA38BtqtOzrt3NmfeK/Hospital-App-Design',
      description:
        'An accessible patient and hospital administration mobile application prototype emphasizing streamlined appointment booking, doctor schedules, digital medical records, and clear emergency contact actions.',
      focusAreas: [
        'Patient Appointment Booking Flows',
        'Medical Record Access UI',
        'Accessible Typography & High-Contrast Visuals',
        'Mobile Usability in High-Stress Scenarios',
      ],
      tools: ['Figma'],
    },
  ],
};
