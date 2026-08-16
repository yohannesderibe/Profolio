import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  to?: string
  external?: boolean
  magnetic?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  'aria-label'?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-bg-primary hover:bg-accent/90 border border-accent shadow-[0_0_20px_rgba(0,212,255,0.2)]',
  secondary:
    'bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-text-secondary hover:text-accent border border-transparent',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external,
  magnetic = false,
  className = '',
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const reduced = useReducedMotion()
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic({
    strength: reduced ? 0 : 0.25,
  })
  const internalRef = useRef<HTMLButtonElement>(null)
  const btnRef = magnetic ? ref : internalRef

  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full font-medium
    transition-all duration-300 ease-out cursor-pointer
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `

  const motionProps = magnetic && !reduced
    ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
    : {}

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-label={ariaLabel}
        {...(motionProps as object)}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...(motionProps as object)}
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...(motionProps as object)}
      ref={btnRef as React.RefObject<HTMLButtonElement>}
    >
      {children}
    </button>
  )
}
