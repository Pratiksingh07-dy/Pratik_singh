import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Mail, Linkedin, Github, FileText, Instagram, Send } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pratiksingh2205@gmail.com',
    href: 'mailto:pratiksingh2205@gmail.com',
    accent: '#4f8ef7',
    desc: 'Drop me a message',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pratiksingh2005',
    href: 'https://www.linkedin.com/in/pratiksingh2005/',
    accent: '#0ea5e9',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Pratiksingh07-dy',
    href: 'https://github.com/Pratiksingh07-dy',
    accent: '#a78bfa',
    desc: 'See my code',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'View / Download',
    href: 'https://drive.google.com/file/d/1hla8wiij3mLFS7ZS1Jp8Pqw4nuWPfV_a/view',
    accent: '#4ade80',
    desc: 'My full resume',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@pratiksinghkaaccount',
    href: 'https://www.instagram.com/pratiksinghkaaccount/',
    accent: '#f472b6',
    desc: 'Follow along',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-24 px-4 bg-surface/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-border max-w-24" />
            <span className="font-mono text-xs text-accent tracking-widest uppercase">08 / Contact</span>
            <div className="flex-1 h-px bg-border max-w-24" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
            Open to internships, collaborations, research opportunities, and building something impactful together.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 group hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${c.accent}15` }}
                >
                  <c.icon size={18} style={{ color: c.accent }} />
                </div>
                <Send size={13} className="text-muted group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">{c.desc}</p>
                <p className="font-medium text-white text-sm">{c.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-bright rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
          <h3 className="font-display text-2xl font-bold text-white mb-2 relative">
            Ready to build something great?
          </h3>
          <p className="text-gray-400 text-sm mb-6 relative">
            Whether it's an AI product, internship, or research collaboration — I'm all in.
          </p>
          <a
            href="mailto:pratiksingh2205@gmail.com"
            className="btn-primary relative"
          >
            <Mail size={15} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
