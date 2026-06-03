import { Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Pratiksingh07-dy', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pratiksingh2005/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pratiksingh2205@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/pratiksinghkaaccount/', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="font-display font-bold text-accent text-xs">P</span>
          </div>
          <span className="font-display font-semibold text-white text-sm">Pratik Singh</span>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted flex items-center gap-1.5">
          Built with <Heart size={11} className="text-red-400" /> by Pratik Singh · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
