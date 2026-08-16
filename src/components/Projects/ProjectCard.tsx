import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import { useIsDesktop } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ProjectCardProps {
  project: Project
  index: number
  variant?: 'default' | 'featured'
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const isDesktop = useIsDesktop()
  const reduced = useReducedMotion()
  const hasDetails = !!project.details
  const isFeatured = variant === 'featured'

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || reduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -8, y: x * 8 })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const paddedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-card transition-shadow duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.06)] ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
      data-cursor="pointer"
    >
      <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

        <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 font-mono text-sm text-accent">
            Visit Website <FiArrowUpRight />
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-accent">{paddedIndex}</span>
            <h3 className="mt-1 font-display text-xl font-semibold text-text-primary md:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase">
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-elevated px-3 py-1 font-mono text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg-primary transition-all hover:bg-accent/90"
          >
            Visit Live Website <FiArrowUpRight />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-primary transition-all hover:border-accent hover:text-accent"
            >
              GitHub <FiGithub />
            </a>
          )}
          {hasDetails && (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-secondary transition-all hover:border-accent hover:text-accent"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
