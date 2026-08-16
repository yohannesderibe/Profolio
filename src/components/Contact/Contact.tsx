import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiDownload, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { SectionHeading, Reveal } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { socialLinks, CV_URL } from '@/data/social'
import { sendContactEmail } from '@/utils/email'
import type { ContactFormData } from '@/types'

function validateForm(data: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email'
  if (!data.message.trim()) errors.message = 'Message is required'
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setSubmitError(null)
    setSending(true)
    try {
      await sendContactEmail(form)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong sending your message. Please try again.'
      )
    } finally {
      setSending(false)
    }
  }

  const email = socialLinks.find((s) => s.icon === 'email')
  const github = socialLinks.find((s) => s.icon === 'github')
  const linkedin = socialLinks.find((s) => s.icon === 'linkedin')

  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="container-wide relative">
        <SectionHeading
          number="07"
          title="Let's build something remarkable."
          subtitle="Have a project, opportunity, or idea? I'd love to hear from you."
          align="center"
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              {email && (
                <a
                  href={email.url}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-bg-card p-5 transition-all hover:border-accent/30"
                >
                  <FiMail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-mono text-xs text-text-muted uppercase">Email</p>
                    <p className="text-text-primary">{email.url.replace('mailto:', '')}</p>
                  </div>
                </a>
              )}

              <div className="flex gap-4">
                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>

              <Button href={CV_URL} variant="secondary" external>
                <FiDownload />
                Download CV
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-bg-card p-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <FiCheck className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">
                    Message sent.
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    Thanks for reaching out — I'll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', message: '' })
                    }}
                    className="mt-6 font-mono text-sm text-accent hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-border bg-bg-card p-8"
                  noValidate
                >
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-xs text-text-muted uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-xs text-text-muted uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-xs text-text-muted uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-text-primary transition-colors focus:border-accent focus:outline-none"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-400"
                    >
                      <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
                    {sending ? 'Sending…' : 'Send Message'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
