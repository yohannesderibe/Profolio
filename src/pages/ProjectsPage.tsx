import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { ProjectGrid } from '@/components/Projects/ProjectGrid'
import { projectCount } from '@/data/projects'

export function ProjectsPage() {
  return (
    <main className="min-h-screen section-padding pt-32">
      <div className="container-wide">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-text-secondary uppercase transition-colors hover:text-accent"
        >
          <FiArrowLeft />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm tracking-widest text-accent uppercase">
            Portfolio Archive
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            My Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            A collection of websites and digital experiences I've designed and developed.
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-accent">
            {projectCount} Projects
          </p>
        </motion.div>

        <div className="mt-12">
          <ProjectGrid />
        </div>
      </div>
    </main>
  )
}
