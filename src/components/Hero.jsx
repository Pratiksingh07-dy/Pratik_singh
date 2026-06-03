import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin, Sparkles } from 'lucide-react'

const ROLES = [
  'AI & ML Engineering Student',
  'Generative AI Developer',
  'Full-Stack Developer',
  'RAG Systems Builder',
  'NLP Engineer',
]

function TypingEffect() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = ROLES[roleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="text-accent font-display">
      {displayed}
      <span className="cursor-blink text-accent">|</span>
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-bright mb-8">
          <Sparkles size={12} className="text-accent" />
          <span className="font-mono text-xs text-accent/80 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 leading-none">
          Pratik{' '}
          <span className="shimmer-text">Singh</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div variants={item} className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-4 min-h-[2em]">
          <TypingEffect />
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item} className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-3 leading-relaxed">
          Building Intelligent Applications with AI, Machine Learning, NLP, RAG, and Modern Web Technologies.
        </motion.p>

        {/* Location */}
        <motion.div variants={item} className="flex items-center justify-center gap-1.5 text-muted text-sm mb-10">
          <MapPin size={13} />
          <span>Mumbai, Maharashtra, India</span>
          <span className="mx-2 text-border">·</span>
          <span>Final Year @ DY Patil University</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1hla8wiij3mLFS7ZS1Jp8Pqw4nuWPfV_a/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FileText size={15} />
            View Resume
          </a>
          <a
            href="https://github.com/Pratiksingh07-dy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratiksingh2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a href="#contact" className="btn-ghost">
            <Mail size={15} />
            Contact
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-6 mt-14">
          {[
            { num: '4+', label: 'Projects Built' },
            { num: 'AI/ML', label: 'Specialization' },
            { num: 'RAG', label: 'Expert' },
            { num: '2027', label: 'Graduating' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-white">{s.num}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted hover:text-white transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  )
}
