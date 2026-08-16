import { motion } from 'framer-motion'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { aboutTraits } from '@/data/social'

export function About() {
  return (
    <section id="about" className="relative section-padding bg-bg-secondary">
      <div className="container-wide">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Passionate about building interfaces that feel as good as they look."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                 I'm a frontend-focused full-stack developer passionate about
                building modern interfaces, responsive websites, and complete
                web experiences. My strongest area is frontend development,
                where I focus on clean UI, responsive design, reusable
                components, and smooth user experiences.
              </p>
              <p>
                Alongside frontend development, I have hands-on experience
                working with backend technologies, APIs, databases,
                authentication, and connecting frontend applications to
                real-world services. Every project is an opportunity to push my craft forward — from
                thoughtful component architecture to subtle animations that make
                interfaces feel alive. I believe great frontend work sits at the
                intersection of design, engineering, and user experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {aboutTraits.map((trait, i) => (
              <Reveal key={trait} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(0, 212, 255, 0.3)' }}
                  className="group rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300"
                  data-cursor="pointer"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-3 font-display text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                    {trait}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
