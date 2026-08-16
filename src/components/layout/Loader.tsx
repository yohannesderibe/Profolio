import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LoaderProps {
  onComplete: () => void
  onSkip: () => void
}

export function Loader({ onComplete, onSkip }: LoaderProps) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(onComplete, reduced ? 800 : 2200)
    return () => clearTimeout(timer)
  }, [onComplete, reduced])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-bg-primary"
        role="status"
        aria-label="Loading portfolio"
      >
        <div className="absolute inset-0 grid-bg opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center"
        >
          <h1 className="font-display text-4xl font-bold tracking-[0.2em] text-text-primary md:text-6xl">
            YOHANNES
          </h1>
          <p className="mt-3 font-mono text-sm tracking-widest text-text-secondary uppercase">
            Frontend Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduced ? 0.5 : 1.8, ease: 'easeInOut' }}
          className="relative z-10 mt-10 h-px w-48 origin-left bg-linear-to-r from-accent to-transparent md:w-64"
        />

        <button
          onClick={onSkip}
          className="relative z-10 mt-12 font-mono text-xs tracking-widest text-text-muted uppercase transition-colors hover:text-accent cursor-pointer"
        >
          Skip intro
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
