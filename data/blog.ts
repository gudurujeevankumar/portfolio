import { BlogPost } from '@/types/portfolio';

export const blogPosts: BlogPost[] = [
  {
    slug: 'architecting-ml-web-systems-ecu',
    title: 'Bridging Data Algorithms and Web APIs: Lessons from Building the ECU Fuel Prediction System',
    category: 'Full-Stack Architecture',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt:
      'How to take vehicle sensor telemetry models, build a reliable Python REST API around them, and design responsive web interfaces that explain predictions to drivers.',
    tags: ['Python', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    content: [
      {
        heading: 'The Engineering Challenge: Beyond the Notebook',
        paragraphs: [
          'Many machine learning projects stop at a Jupyter notebook with an accuracy score. But in real-world software engineering, a model is only valuable when it is connected to a resilient data pipeline, exposed through well-contracted APIs, and consumed by an interface that makes predictions actionable.',
          'When designing the ECU Fuel Consumption Prediction system, the challenge was twofold: vehicle telemetry involves multi-variable numerical streams (engine RPM, vehicle speed, intake manifold pressure, throttle position), and predictions needed to be generated in under 150 milliseconds to provide real-time feedback.',
        ],
      },
      {
        heading: 'Architecture: Decoupled Python API and MySQL Telemetry Store',
        paragraphs: [
          'Rather than embedding inference directly inside a monolithic frontend or running heavy Python models client-side, I architected a decoupled pipeline.',
          'The Python backend serializes the trained predictive model into memory on startup. Each prediction endpoint performs schema validation on incoming sensor payloads, normalizes inputs using pre-computed scaling parameters, and evaluates both the regression target (instant fuel consumption in L/100km) and driver profile classification (aggressive, moderate, or eco-friendly).',
        ],
        codeSnippet: {
          language: 'python',
          code: `@app.route('/api/predict', methods=['POST'])
def predict_telemetry():
    data = request.get_json()
    features = extract_and_scale_features(data)
    consumption_rate = regression_model.predict([features])[0]
    driving_profile = classifier_model.predict([features])[0]
    
    # Persist log to MySQL for aggregate trip analysis
    save_trip_telemetry(data['trip_id'], consumption_rate, driving_profile)
    
    return jsonify({
        'status': 'success',
        'estimated_consumption': round(float(consumption_rate), 2),
        'profile': driving_profile,
        'timestamp': datetime.utcnow().isoformat()
    })`,
        },
      },
      {
        heading: 'Key Takeaways for Full-Stack Developers',
        paragraphs: [
          '1. Treat models as stateless computational services behind strict API contracts.',
          '2. Always design for fallback states when sensor inputs fall outside valid physical ranges.',
          '3. Visual explanations build far more user trust than raw numerical predictions.',
        ],
      },
    ],
  },
  {
    slug: 'leading-36-developers-across-6-squads',
    title: 'From Individual Contributor to Team Lead: Coordinating 36 Developers Across 6 Teams',
    category: 'Leadership',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt:
      'Reflections on scaling technical delivery, managing sprint milestones, and bridging Figma design specifications into React Native code at Bodha Soft.',
    tags: ['React Native', 'Figma', 'Git', 'Jira'],
    content: [
      {
        heading: 'Stepping into the Lead Role',
        paragraphs: [
          'Promotions in fast-moving engineering environments rarely come with a manual. At Bodha Soft, progressing from Mobile Frontend Developer Intern to Team Lead coordinating 6 development teams (comprising 36 developers) meant shifting focus from personal commit velocity to team enablement and architectural consistency.',
          'When 36 developers are touching the same repository, code conflicts, divergent style conventions, and dependency chaos can quickly grind progress to a halt if not actively managed.',
        ],
      },
      {
        heading: 'Three Operational Pillars that Kept Us On Track',
        paragraphs: [
          'First: Component Boundary Contracts. We established that before any team wrote React Native code, the screens were mapped in Figma into reusable atomic components. If Team A built a custom card, Team B could not reinvent it.',
          'Second: Clear Branching & PR Checklists. Each PR required verification of layout rendering on both iOS and Android emulators, absence of unhandled promise rejections, and conformance to shared theme tokens.',
          'Third: Daily Block-Clearing Standups. Rather than lengthy status meetings, our daily sync focused strictly on identifying who was blocked by an API contract or third-party dependency, resolving it within minutes.',
        ],
      },
      {
        heading: 'What Good Engineering Leadership Really Means',
        paragraphs: [
          'True technical leadership is not about having all the answers—it is about creating the clarity, architecture, and psychological safety for dozens of developers to ship high-quality software cohesively.',
        ],
      },
    ],
  },
  {
    slug: 'ai-assisted-engineering-philosophy',
    title: 'AI-Assisted Development: An Acceleration Multiplier, Never an Architecture Substitute',
    category: 'AI Development',
    date: 'December 2025',
    readTime: '5 min read',
    excerpt:
      'How I integrate tools like ChatGPT, Claude Code, and GitHub Copilot to write boilerplate and research APIs faster—without abdicating responsibility for system design and correctness.',
    tags: ['Python', 'JavaScript', 'GitHub', 'Git'],
    content: [
      {
        heading: 'The Shift in Modern Software Development',
        paragraphs: [
          'The conversation around AI coding assistants often oscillates between two unhelpful extremes: cynical dismissal or blind over-reliance. As an engineer entering the industry in 2026, my perspective is clear: AI is the most potent productivity multiplier in software engineering history, but it is not an engineer.',
          'An LLM can generate a database schema in 5 seconds. It cannot assess your business constraints, understand future scalability bottlenecks, or take ethical responsibility when an edge case brings down production.',
        ],
      },
      {
        heading: 'The Engineer’s Boundary: Where Human Judgment Is Non-Negotiable',
        paragraphs: [
          'In my daily workflow, I leverage AI tools to:',
          '• Rapidly prototype boilerplate code, test suites, and mock data generators.',
          '• Explore regex patterns and obscure CSS layout properties.',
          '• Accelerate documentation drafting and API schema contracts.',
          'However, every single line of code generated by an AI assistant must pass through three rigorous human gates: mental dry-run comprehension, strict static typing verification, and empirical test execution.',
        ],
      },
      {
        heading: 'The Bottom Line',
        paragraphs: [
          'AI accelerates the distance between an idea and its initial draft. But turning a draft into production-ready, maintainable, accessible, and resilient software remains fundamentally an engineering discipline.',
        ],
      },
    ],
  },
  {
    slug: 'optimizing-react-calendar-edge-cases',
    title: 'Building a High-Performance Travel Date Picker: Managing Complex Calendar State',
    category: 'Frontend',
    date: 'November 2025',
    readTime: '6 min read',
    excerpt:
      'Deep dive into the architecture of the Skyscanner Travel Date Picker: handling multi-month date ranges, keyboard navigation, and zero-dependency date math in React.',
    tags: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
    content: [
      {
        heading: 'The Hidden Complexity of Date Pickers',
        paragraphs: [
          'To the casual user, selecting travel dates appears deceptively simple: you click a departure day, click a return day, and move forward. But beneath the surface, calendar components are among the most state-intensive and error-prone UI widgets in frontend engineering.',
          'During the Skyscanner Front-End Virtual Software Engineering Experience, I set out to build a lightweight, accessible date picker without pulling in heavy external date libraries.',
        ],
      },
      {
        heading: 'State Machine for Range Selection',
        paragraphs: [
          'The selection flow follows a deterministic finite-state transition: Idle → Selecting Departure → Hovering Return Date → Selection Complete. Handling user interactions like backward selection (clicking a return date earlier than departure) requires instantaneous state inversion without flickering.',
          'Furthermore, full keyboard navigation (arrow keys to move between days, PageUp/PageDown to jump months) was implemented using ARIA grid roles to guarantee universal accessibility.',
        ],
      },
      {
        heading: 'Performance Considerations',
        paragraphs: [
          'Rendering two full calendar months represents over 60 dynamic cell nodes. By memoizing day cell renders and computing date ranges with integer timestamps rather than heavy Date object instances on every hover event, the picker maintains a smooth 60fps even on lower-powered mobile devices.',
        ],
      },
    ],
  },
];
