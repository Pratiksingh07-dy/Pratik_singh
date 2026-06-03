import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Mail, Linkedin, Github } from 'lucide-react'

const links = [
  { icon: Mail, href: 'mailto:pratiksingh2205@gmail.com', label: 'Email', color: '#4f8ef7' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pratiksingh2005/', label: 'LinkedIn', color: '#0ea5e9' },
  { icon: Github, href: 'https://github.com/Pratiksingh07-dy', label: 'GitHub', color: '#a78bfa' },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      <AnimatePresence>
        {open && links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl glass-bright hover:border-white/20 transition-colors group"
          >
            <l.icon size={14} style={{ color: l.color }} />
            <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{l.label}</span>
          </motion.a>
        ))}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white hover:bg-accent-glow transition-colors shadow-lg shadow-accent/25"
        aria-label="Toggle contact links"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}><X size={16} /></motion.div>
            : <motion.div key="msg" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}><MessageCircle size={16} /></motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
