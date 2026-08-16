import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { getProjectBySlug } from '@/data/projects'
import { Reveal } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  if (!project.details) {
    return <Navigate to="/projects" replace />
  }

  const { details } = project

  return (
    <main className="min-h-screen section-padding pt-32">
      <div className="container-wide">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-text-secondary uppercase transition-colors hover:text-accent"
        >
          <FiArrowLeft />
          All Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="font-mono text-xs text-accent uppercase">
                {project.category}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {details.overview && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Overview
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {details.overview}
                  </p>
                </Reveal>
              )}

              {details.features && details.features.length > 0 && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Key Features
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {details.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {details.implementation && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Frontend Implementation
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {details.implementation}
                  </p>
                </Reveal>
              )}

              {details.challenges && details.challenges.length > 0 && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Challenges
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {details.challenges.map((c) => (
                      <li key={c} className="text-text-secondary">{c}</li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {details.solutions && details.solutions.length > 0 && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Solutions
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {details.solutions.map((s) => (
                      <li key={s} className="text-text-secondary">{s}</li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {details.responsive && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Responsive Design
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {details.responsive}
                  </p>
                </Reveal>
              )}

              {details.animations && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    Animations & Interactions
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {details.animations}
                  </p>
                </Reveal>
              )}

              {details.learned && details.learned.length > 0 && (
                <Reveal className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    What I Learned
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {details.learned.map((l) => (
                      <li key={l} className="text-text-secondary">{l}</li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-bg-card p-6">
                <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  Technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-bg-elevated px-3 py-1 font-mono text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  size="lg"
                  external
                  className="w-full"
                >
                  Visit Live Website <FiArrowUpRight />
                </Button>
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    size="lg"
                    external
                    className="w-full"
                  >
                    GitHub <FiGithub />
                  </Button>
                )}
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
