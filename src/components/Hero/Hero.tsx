import { motion, type Variants } from 'framer-motion'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { Button } from '@/components/ui/Button'
import { HeroCanvas } from './HeroCanvas'
import { CV_URL } from '@/data/social'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: 0.2 },
    },
  }

  const item :Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut'as const } },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-sm tracking-widest text-accent uppercase"
          >
            Hi, I'm Yohannes
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl leading-[1.1] font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">Frontend Developer</span>
            <br />
            crafting immersive digital experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg text-text-secondary md:text-xl"
          >
            I build modern, responsive and interactive web experiences using React,
            TypeScript and Tailwind CSS.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#work" variant="primary" size="lg" magnetic>
              View My Work
              <FiArrowUpRight />
            </Button>
            <Button href="#contact" variant="secondary" size="lg" magnetic>
              Contact Me
            </Button>
            <Button href={CV_URL} variant="ghost" size="lg" external>
              <FiDownload />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // className="relative h-[350px] md:h-[450px] lg:h-[500px]"
          className="relative h-87.5 md:h-112.5 lg:h-125"
          aria-hidden="true"
        >
          <HeroCanvas />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
            Scroll
          </span>
          <motion.div
            animate={reduced ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            // className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
          className="h-8 w-px bg-linear-to-b from-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
