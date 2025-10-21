import About from '@/components/about'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import SectionDivider from '@/components/section-divider'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Certificates from '@/components/certificates'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Certificates />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}
