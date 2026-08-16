export interface ProjectDetails {
  overview?: string
  features?: string[]
  challenges?: string[]
  solutions?: string[]
  learned?: string[]
  implementation?: string
  responsive?: string
  animations?: string
}

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl?: string
  featured?: boolean
  details?: ProjectDetails
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'tooling' | 'other' | 'backend'
  description: string
  level: number
  icon?: string
}

export interface ExperienceItem {
  id: string
  year: string
  title: string
  description: string
  type: 'learning' | 'building' | 'projects' | 'professional' | 'milestone'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'email'
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
