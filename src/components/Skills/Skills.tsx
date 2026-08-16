import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDotnet,
  SiPostgresql,
  SiPhp,
} from 'react-icons/si'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  dotnet: SiDotnet,
  postgres: SiPostgresql,
  php: SiPhp,
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = iconMap[skill.id]

  return (
    <Reveal delay={index * 0.05}>
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
        data-cursor="pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative">
          {Icon && (
            <Icon className="mb-4 h-8 w-8 text-accent transition-transform group-hover:scale-110" />
          )}
          <h3 className="font-display text-lg font-semibold text-text-primary">
            {skill.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {skill.description}
          </p>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-text-muted">Proficiency</span>
              <span className="font-mono text-accent">{skill.level}%</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-bg-elevated">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="container-wide relative">
        <SectionHeading
          number="02"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
