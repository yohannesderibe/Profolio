import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <span className="font-mono text-sm tracking-widest text-accent uppercase">
        {number}
      </span>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
