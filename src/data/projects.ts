import type { Project } from '@/types'
import { slugify } from '@/utils'

import InventoryManagementImage from '../../pictures/inventory_real.png'
import bloodDonationImage from '../../pictures/Blood_Donation_Dashboard.png'
import yohannesWatchImage from '../../pictures/watch.png'
import sunChpis from '../../pictures/sun-chpis-1.png'
import SkyObservatory from '../../pictures/Sky Observatory.png'

const rawProjects: Omit<Project, 'slug'>[] = [
  {
    id: 1,
    title: 'Project One — Inventory Management System',
    description:
      'Multi-tenant inventory management platform with role-based dashboards, real-time stock tracking, and PDF/email reporting — built with a React + TypeScript frontend and an ASP.NET Core + PostgreSQL backend.',
    category: 'Business Websites',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'ASP.NET Core', 'PostgreSQL', 'JWT'],
    image: InventoryManagementImage,
    liveUrl: 'https://inventorymanagmentsystem1.vercel.app/',
    githubUrl: 'https://github.com/yohannesderibe/InvnetoryMangmentSystem.git',
    featured: true,
    details: {
      overview:
        'A full-stack inventory system built for companies managing stock across categories and sub-categories. It supports multiple companies (tenants) on one platform, each with isolated data, and four role tiers — SuperAdmin, CompanyAdmin, Manager, and Viewer — each seeing a dashboard scoped to their permissions. I built the entire frontend: authentication flows, role-based routing and dashboards, item/category management with image uploads, analytics, and report generation.',
      features: [
        'Role-based dashboards for SuperAdmin, CompanyAdmin, Manager, and Viewer',
        'Multi-tenant company management with isolated data per company',
        'Item & category CRUD with image uploads and low-stock alerts',
        'Analytics dashboard with charts (Recharts) for stock value and quantity trends',
        'PDF export with Amharic-language support, plus email report delivery',
        'JWT authentication with OTP-based forgot-password flow and idle-session auto-logout',
        'In-app notification system between users',
      ],
      challenges: [
        'Supporting Amharic text in exported PDF reports, since standard PDF fonts do not render Ethiopic script.',
        'Structuring role-based access so four different roles each get the right dashboard, data scope, and permissions without duplicating logic.',
      ],
      solutions: [
        'Embedded a Noto Sans Ethiopic font as base64 directly into the PDF export pipeline (jsPDF + autoTable), falling back gracefully to a default font if the custom font fails to load.',
        'Built a shared DashboardLayout with role-aware routing and a single AuthContext that gates pages and UI elements by role, rather than branching dashboard code per role.',
      ],
      learned: [
        'How to design multi-tenant data access patterns so company data stays properly isolated on the frontend and API layer.',
        'Handling non-Latin font embedding in client-side PDF generation.',
        'Structuring auth state (JWT decode, idle timeout, OTP recovery) so session handling stays secure without hurting UX.',
      ],
      implementation:
        'Built with React and TypeScript using a component-based architecture, React Router for role-based routing, and Axios for API communication with the ASP.NET Core backend. Auth state and JWT handling live in a central AuthContext. Styled with Tailwind CSS for consistent design tokens.',
      responsive:
        'Mobile-first approach with a collapsible sidebar and breakpoints for tablet and desktop layouts across all dashboards and data tables.',
      animations:
        'Subtle scroll and modal transitions, sidebar interactions, and hover states using Framer Motion and CSS transitions.',
    },
  },
  {
    id: 2,
    title: 'Project Two — Blood Donation Platform',
    description:
      'St. Amanuel Church Blood Donation System — A bilingual (English/Amharic) full-stack blood donor management platform built for St. Amanuel Church. Features donor registration with eligibility tracking (90-day intervals), bulk SMS campaigns via Afro Messaging API, CSV/PDF reporting, hospital partner management, and real-time dashboard analytics. Stack: React 19 + TypeScript, ASP.NET Core 10 Web API, PostgreSQL, JWT auth',
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ASP.NET Core', 'PostgreSQL', 'JWT', 'Recharts', 'i18next'],
    image: bloodDonationImage,
    liveUrl: 'https://blood-donation-two-virid.vercel.app/login',
    githubUrl: 'https://github.com/yohannesderibe/blood-donation-.git',

    featured: true,
    details: {
      overview:
        'An admin platform built for St. Amanuel Church to manage its blood donor network end-to-end. Admins register donors through a bilingual (English/Amharic) intake form, track eligibility with an automatic 90-day donation-interval rule, launch bulk SMS campaigns to donors via the Afro Messaging API, generate CSV/PDF reports, and manage partner hospitals used to verify donations. Auth is handled with JWT and BCrypt-hashed passwords, and all admin actions are recorded in an audit log. The backend is an ASP.NET Core 10 Web API over PostgreSQL (via Entity Framework Core), and the frontend is a React 19 + TypeScript SPA built with Vite.',
      features: [
        'Bilingual UI (English / Amharic) with a one-click language toggle across every admin page, powered by i18next',
        'Dashboard with live donor stats, a blood-type distribution pie chart (Recharts), recent donors, and system notifications',
        'Donor registry with a searchable, filterable, paginated table and automatic 90-day eligibility tracking',
        'Bulk SMS campaigns to all, selected, or custom donor groups via the Afro Messaging API, plus live SMS balance lookup',
        'CSV & PDF report generation for donor directories, donation history, and SMS campaign logs',
        'Hospital partner management (CRUD) for hospitals that verify donations',
        'JWT authentication with BCrypt password hashing and an admin audit log',
      ],
    },
  },
  {
    id: 3,
    title: 'Project Three — Yohannes Atelier/watch selling',
    description:
      'Yohannes Atelier is a luxury watch storefront concept designed to feel elevated, modern, and premium. The experience blends a cinematic landing page, immersive product browsing, a live watch customizer, and a streamlined cart and checkout flow to create a polished digital retail experience. It showcases strong front-end development, design-driven UX, and premium product storytelling for a modern luxury brand.',
    category: 'Interactive Websites',
    technologies: ['React', 'JavaScript', 'CSS3', 'GSAP'],
    image: yohannesWatchImage,
    liveUrl: 'https://yohannes-watch-quse.vercel.app/',
    githubUrl: 'https://github.com/yohannesderibe/Yohannes_Watch.git',
    featured: true,
  },
  {
    id: 4,
    title: 'Project Four — sunchips-ethiopia',
    description:
      'A full rebuild of a school project — originally static HTML/CSS/JS — into a modern React + TypeScript application. The goal was to take a functional-but-basic site and turn it into something that actually feels like a snack brand: bold, playful, and interactive.',
    category: 'Business Websites',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router','Framer Motion'],
    image: sunChpis ,
    liveUrl: 'https://react-sun-chip-r8e5.vercel.app/',
    githubUrl: 'https://github.com/yohannesderibe/React_Sun_Chip.git',
    featured: true,
  },
  {
    id: 5,
    title: 'Project Five — Sky Observatory',
    description:
      'Live animated weather dashboard — auto-detects your location and renders a sky that reacts in real time (stars, rain, snow, storms). React + TypeScript + Framer Motion, no backend.',
    category: 'Dashboards',
    technologies: ['React', 'TypeScript', 'JavaScript','Tailwind CSS', 'Framer Motion'],
    image: SkyObservatory,
    liveUrl: 'https://sky-observatory.vercel.app/',
    githubUrl: 'https://github.com/yohannesderibe/sky-observatory.git',
    featured: true,
    details: {
      overview:
        'Sky Observatory is a real-time weather dashboard built around a single idea: the background should feel like the sky outside. On load it geolocates the visitor (falling back to a searchable city lookup) and pulls live conditions, then animates the whole page to match — a day/night gradient that drifts with actual sunrise and sunset times, twinkling stars, falling rain or snow, drifting clouds, and a flickering storm effect. Alongside the live readout it shows an hourly strip for the next 10 hours and a 6-day outlook, with saved favorite locations and a °C/°F toggle. Everything runs client-side against a public weather API — no backend or database.',
      features: [
        'Auto-geolocation with searchable city fallback',
        'Animated sky that reacts to live conditions (rain, snow, storms, clouds, stars)',
        'Real-time day/night gradient driven by actual sunrise/sunset',
        'Hourly (10-hr) and 6-day forecast strips',
        'Saved/favorite locations with quick switching',
        '°C / °F unit toggle with persisted preference',
      ],
    },
  },
  // {
  //   id: 6,
  //   title: 'Project Six — Replace Title',
  //   description:
  //     'Replace with your project description. An e-commerce frontend with product listings and cart interactions.',
  //   category: 'E-commerce',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  //   image: '/projects/placeholder-6.svg',
  //   liveUrl: 'https://replace-with-your-domain.com',
  //   featured: true,
  // },
  // {
  //   id: 7,
  //   title: 'Project Seven — Replace Title',
  //   description:
  //     'Replace with your project description. A creative portfolio-style website with unique visual identity.',
  //   category: 'Websites',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  //   image: '/projects/placeholder-7.svg',
  //   liveUrl: 'https://replace-with-your-domain.com',
  //   featured: false,
  // },
  // {
  //   id: 8,
  //   title: 'Project Eight — Replace Title',
  //   description:
  //     'Replace with your project description. A service-based business website with clear CTAs and contact flow.',
  //   category: 'Business Websites',
  //   technologies: ['React', 'JavaScript', 'Tailwind CSS'],
  //   image: '/projects/placeholder-8.svg',
  //   liveUrl: 'https://replace-with-your-domain.com',
  //   featured: false,
  // },
  // {
  //   id: 9,
  //   title: 'Project Nine — Replace Title',
  //   description:
  //     'Replace with your project description. A marketing landing page optimized for performance and conversion.',
  //   category: 'Landing Pages',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  //   image: '/projects/placeholder-9.svg',
  //   liveUrl: 'https://replace-with-your-domain.com',
  //   featured: false,
  // },
  // {
  //   id: 10,
  //   title: 'Project Ten — Replace Title',
  //   description:
  //     'Replace with your project description. An experimental interactive web experience pushing frontend boundaries.',
  //   category: 'Interactive Websites',
  //   technologies: ['React', 'Three.js', 'TypeScript'],
  //   image: '/projects/placeholder-10.svg',
  //   liveUrl: 'https://replace-with-your-domain.com',
  //   githubUrl: 'https://github.com/yourusername/project-ten',
  //   featured: false,
  // },
]

export const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.title),
}))

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCount = projects.length

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
