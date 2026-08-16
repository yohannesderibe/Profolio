import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/social'

export function Process() {
  return (
    <section id="process" className="relative section-padding bg-bg-secondary">
      <div className="container-wide">
        <SectionHeading
          number="06"
          title="Development Process"
          subtitle="How I approach every frontend project — from understanding to refinement."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30">
                <span className="font-display text-3xl font-bold text-accent/20 transition-colors group-hover:text-accent/40">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
