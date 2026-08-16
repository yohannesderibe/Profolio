import type { NavLink, SocialLink, ProcessStep } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/yohannesderibe',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'yohannesliloderibe30@gmail.com',
    icon: 'email',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    description:
      'Understand the problem, requirements, and users before writing a single line of code.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description:
      'Translate ideas into a clear visual interface with strong hierarchy and user flow.',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description:
      'Develop reusable React and TypeScript components with clean, maintainable architecture.',
  },
  {
    id: 'responsive',
    number: '04',
    title: 'Responsive',
    description:
      'Make the experience work seamlessly across desktop, tablet, and mobile devices.',
  },
  {
    id: 'refine',
    number: '05',
    title: 'Refine',
    description:
      'Improve animation, accessibility, performance, and visual details until it feels right.',
  },
]

export const aboutTraits = [
  'Problem Solver',
  'UI Enthusiast',
  'Frontend Developer',
  'Continuous Learner',
]

export const CV_URL = '/CV/Yohannes_Deribe_CV.pdf'
