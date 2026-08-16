import emailjs from '@emailjs/browser'
import type { ContactFormData } from '@/types'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** True once real EmailJS credentials have been provided via .env */
export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * Sends the contact form using EmailJS (frontend-only, no backend required).
 * Throws if credentials are missing or the request fails, so callers can
 * catch and show an error state.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!isEmailConfigured) {
    throw new Error(
      'Email is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to a .env file.'
    )
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      reply_to: data.email,
      message: data.message,
    },
    { publicKey: PUBLIC_KEY }
  )
}
