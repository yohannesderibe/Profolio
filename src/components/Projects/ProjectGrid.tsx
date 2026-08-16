import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'
import { PROJECT_CATEGORIES, filterProjects } from '@/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ProjectGrid() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const reduced = useReducedMotion()

  const filtered = filterProjects(projects, category, search)

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all cursor-pointer ${
                category === cat
                  ? 'bg-accent text-bg-primary'
                  : 'border border-border text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative max-w-sm flex-1">
          <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-text-muted" />
          <input
            type="search"
            placeholder="Search my projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-border bg-bg-card py-3 pr-4 pl-11 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
            aria-label="Search projects"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${category}-${search}`}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="font-display text-xl text-text-secondary">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setCategory('All')
                  setSearch('')
                }}
                className="mt-4 font-mono text-sm text-accent hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
