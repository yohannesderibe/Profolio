import type { Skill } from '@/types'

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description: 'Building component-based UIs with hooks, context, and modern patterns.',
    level: 90,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    description: 'Type-safe development with interfaces, generics, and strict typing.',
    level: 85,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    description: 'ES6+ features, async patterns, DOM manipulation, and modern APIs.',
    level: 90,
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    description: 'Semantic markup, accessibility, and modern HTML structure.',
    level: 95,
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    description: 'Flexbox, Grid, animations, custom properties, and responsive design.',
    level: 90,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first styling with design systems and responsive utilities.',
    level: 90,
  },
  {
    id: 'dotnet',
    name: '.NET / C#',
    category: 'backend',
    description: 'Learning Object-Oriented Programming, C# syntax, and building basic Web APIs.',
    level: 45,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'backend',
    description: 'Understanding relational databases, writing basic SQL queries, joins, and CRUD operations.',
    level: 40,
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    description: 'Fundamentals of server-side scripting, handling forms, and basic HTTP workflows.',
    level: 50,
  },

  {
    id: 'responsive',
    name: 'Responsive Design',
    category: 'other',
    description: 'Mobile-first layouts that adapt seamlessly across all screen sizes.',
    level: 90,
  },
  {
    id: 'components',
    name: 'Component Architecture',
    category: 'other',
    description: 'Reusable, maintainable component systems with clear separation of concerns.',
    level: 85,
  },
  {
    id: 'api',
    name: 'REST API Integration',
    category: 'other',
    description: 'Fetching and displaying data from REST APIs with error handling.',
    level: 80,
  },


  {
    id: 'git',
    name: 'Git',
    category: 'tooling',
    description: 'Version control, branching strategies, and collaborative workflows.',
    level: 85,
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tooling',
    description: 'Repository management, pull requests, and open-source collaboration.',
    level: 85,
  },
  {
    id: 'uiux',
    name: 'UI/UX Implementation',
    category: 'other',
    description: 'Translating designs into pixel-perfect, user-friendly interfaces.',
    level: 85,
  },
  {
    id: 'animation',
    name: 'Animation',
    category: 'other',
    description: 'CSS animations, Framer Motion, and purposeful micro-interactions.',
    level: 80,
  },
  {
    id: 'a11y',
    name: 'Accessibility',
    category: 'other',
    description: 'WCAG guidelines, semantic HTML, keyboard navigation, and ARIA.',
    level: 80,
  },

]

export const frontendSkills = skills.filter((s) => s.category === 'frontend')
export const backendSkills = skills.filter((s) => s.category === 'backend')