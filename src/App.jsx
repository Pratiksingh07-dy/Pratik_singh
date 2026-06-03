import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Education from './components/Education'
import CurrentWork from './components/CurrentWork'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingContact from './components/FloatingContact'
import Loader from './components/Loader'
import GridBackground from './components/GridBackground'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="relative min-h-screen bg-void noise-bg">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <CurrentWork />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </div>
  )
}
