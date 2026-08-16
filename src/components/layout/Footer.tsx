import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks, socialLinks } from '@/data/social'

export function Footer() {
  const github = socialLinks.find((s) => s.icon === 'github')
  const linkedin = socialLinks.find((s) => s.icon === 'linkedin')

  return (
    <footer className="relative border-t border-border bg-bg-secondary section-padding">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-text-primary">
              Yohannes — Frontend Developer
            </p>
            <p className="mt-2 font-mono text-xs text-text-muted">
              Designed & Built with React + TypeScript
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs tracking-widest text-text-secondary uppercase transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  className="font-mono text-xs tracking-widest text-text-secondary uppercase transition-colors hover:text-accent"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
                aria-label={github.label}
              >
                <FaGithub size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
                aria-label={linkedin.label}
              >
                <FaLinkedin size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Yohannes. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            <span className="text-accent">●</span> Available for opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}
