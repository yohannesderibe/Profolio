import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'
import { Services } from '@/components/Services/Services'
import { Experience } from '@/components/Experience/Experience'
import { FeaturedProjects } from '@/components/Projects/FeaturedProjects'
import { ExploreProjectsCTA } from '@/components/Projects/ExploreProjectsCTA'
import { Process } from '@/components/Process/Process'
import { Contact } from '@/components/Contact/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <FeaturedProjects />
      <ExploreProjectsCTA />
      <Process />
      <Contact />
    </>
  )
}
