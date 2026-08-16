import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { featuredProjects } from '@/data/projects'

export function FeaturedProjects() {
  return (
    <section id="work" className="relative section-padding bg-bg-secondary">
      <div className="container-wide">
        <SectionHeading
          number="05"
          title="Featured Projects"
          subtitle="A selection of my strongest frontend work. Each project is a live website."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              variant={i === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
