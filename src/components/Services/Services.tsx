import { FiMonitor, FiZap, FiCode, FiLayout, FiSend } from 'react-icons/fi'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  monitor: FiMonitor,
  sparkles: FiZap,
  code: FiCode,
  layout: FiLayout,
  rocket: FiSend,
}

export function Services() {
  return (
    <section id="services" className="relative section-padding bg-bg-secondary">
      <div className="container-wide">
        <SectionHeading
          number="03"
          title="What I Can Build"
          subtitle="From responsive websites to interactive applications — here's what I deliver."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <div
                  className="group relative rounded-2xl border border-border bg-bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1"
                  data-cursor="pointer"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
