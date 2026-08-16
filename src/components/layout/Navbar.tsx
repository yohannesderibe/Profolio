import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '@/data/social'
import { Button } from '@/components/ui/Button'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sectionIds = ['home', 'about', 'skills', 'work', 'experience', 'contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (!isHome && href.startsWith('#')) {
      window.location.href = `/${href}`
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <nav
          className="container-wide flex items-center justify-between px-6 md:px-12 lg:px-20"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
          >
            Y<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = isHome && activeSection === id
              return (
                <li key={link.href}>
                  <a
                    href={isHome ? link.href : `/${link.href}`}
                    className={`relative font-mono text-xs tracking-widest uppercase transition-colors ${
                      isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:block">
            <Button
              href={isHome ? '#contact' : '/#contact'}
              variant="secondary"
              size="sm"
              magnetic
            >
              Let's Talk
            </Button>
          </div>

          <button
            className="text-text-primary lg:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-2xl font-medium text-text-primary transition-colors hover:text-accent"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                href={isHome ? '#contact' : '/#contact'}
                variant="primary"
                size="lg"
                onClick={() => setMobileOpen(false)}
              >
                Let's Talk
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
