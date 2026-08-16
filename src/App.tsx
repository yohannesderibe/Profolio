import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { Loader } from '@/components/layout/Loader'
import { Home } from '@/pages/Home'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailsPage } from '@/pages/ProjectDetailsPage'
import { useLoader } from '@/hooks/useLoader'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppContent() {
  const { showLoader, completeLoader, skipLoader } = useLoader()

  return (
    <>
      {showLoader && <Loader onComplete={completeLoader} onSkip={skipLoader} />}
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}
