# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Contact Form Email (EmailJS)

The Contact form sends messages directly from the browser using [EmailJS](https://www.emailjs.com) — no backend server required.

### Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Add an Email Service** (e.g. Gmail, Outlook) under *Email Services* — note the **Service ID**.
3. **Create an Email Template** under *Email Templates* using these variables in your template body:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   In the template's **Settings** tab, set:
   - **To Email** — your inbox, e.g. `yohannesliloderibe30@gmail.com`. This is what determines where every message goes — it's fixed in the template, not something the visitor can change.
   - **Reply To** — `{{reply_to}}`, so hitting "reply" in your inbox replies straight to the visitor.

   Note the **Template ID**.
4. Go to *Account → General* and copy your **Public Key**.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Restart the dev server (`npm run dev`) so Vite picks up the new env vars.

That's it — the form in `src/components/Contact/Contact.tsx` will now send real emails via `src/utils/email.ts`. The free EmailJS tier allows 200 emails/month, which is plenty for a portfolio site.

If the `.env` values are missing, submitting the form will show an inline error instead of silently failing.
