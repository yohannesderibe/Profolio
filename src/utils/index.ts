export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getProjectBySlug(slug: string) {
  // Lazy import to avoid circular deps in some contexts
  return import('@/data/projects').then(({ projects }) =>
    projects.find((p) => p.slug === slug)
  )
}

export const PROJECT_CATEGORIES = [
  'All',
  'Websites',
  'Business Websites',
  'Landing Pages',
  'Dashboards',
  'E-commerce',
  'Interactive Websites',
  'Other',
] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export function filterProjects(
  projects: import('@/types').Project[],
  category: string,
  search: string
) {
  let filtered = projects

  if (category !== 'All') {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (search.trim()) {
    const query = search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query))
    )
  }

  return filtered
}
