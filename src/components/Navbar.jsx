import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass border-b border-border' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="font-display font-bold text-accent text-sm">P</span>
            </div>
            <span className="font-display font-semibold text-white text-sm hidden sm:block">Pratik Singh</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 text-sm text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5 font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1hla8wiij3mLFS7ZS1Jp8Pqw4nuWPfV_a/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-30 glass border-b border-border px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1hla8wiij3mLFS7ZS1Jp8Pqw4nuWPfV_a/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
