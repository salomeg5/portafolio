import About from '@/components/about'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import SectionDivider from '@/components/section-divider'
import Experience from '@/components/experience'
import Image from 'next/image'
import Contact from '@/components/contact'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      < SectionDivider />
      < About />
      <Skills />
      <Experience />
      < Projects />
      <Contact />
      < Footer />
      </main>
  )
}
