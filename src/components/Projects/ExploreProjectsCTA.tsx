import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { projectCount } from '@/data/projects'
import { Reveal } from '@/components/ui/SectionHeading'

export function ExploreProjectsCTA() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card p-10 md:p-16">
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <p className="font-display text-2xl font-semibold text-text-primary md:text-3xl lg:text-4xl">
                I've built more than this.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
                Explore the complete collection of frontend websites and digital
                experiences I've developed.
              </p>
              <p className="mt-2 font-mono text-sm text-accent">
                {projectCount} Frontend Projects
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-bg-primary transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                  data-cursor="pointer"
                >
                  Explore All Projects
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
