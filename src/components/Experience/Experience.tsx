import { motion } from 'framer-motion'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="container-wide">
        <SectionHeading
          number="04"
          title="Development Journey"
          subtitle="The path that shaped my approach to frontend development."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div
                className={`relative mb-12 flex flex-col md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg-primary md:left-1/2"
                />

                <div
                  className={`flex-1 pl-14 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <span className="font-mono text-xs tracking-widest text-accent uppercase">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
