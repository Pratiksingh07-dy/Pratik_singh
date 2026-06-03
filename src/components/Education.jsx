import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">05 / Education</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white">
            Academic <span className="text-accent">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-bright rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={24} className="text-accent" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-accent font-medium mt-1">
                    Computer Science Engineering — Artificial Intelligence & Machine Learning
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-400/10 text-green-400 border border-green-400/20 flex-shrink-0">
                  Final Year
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-5">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded bg-accent/10 flex items-center justify-center">
                    <MapPin size={10} className="text-accent" />
                  </span>
                  DY Patil University, Navi Mumbai
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded bg-accent/10 flex items-center justify-center">
                    <Calendar size={10} className="text-accent" />
                  </span>
                   Graduation: 2023–27
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Specialization', value: 'AI & ML' },
                  { label: 'Degree Type', value: 'B.E. (4 Years)' },
                  { label: 'Focus Area', value: 'Generative AI & NLP' },
                ].map(item => (
                  <div key={item.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
                    <p className="text-xs text-muted mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications / extras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 grid sm:grid-cols-2 gap-4"
        >
          {[
            { title: 'GATE DS & AI', desc: 'Preparing for Graduate Aptitude Test in Engineering — Data Science & Artificial Intelligence', accent: '#4f8ef7' },
            { title: 'Competitive Programming', desc: 'Practicing DSA, algorithmic problem solving, and competitive programming challenges', accent: '#a78bfa' },
          ].map(item => (
            <div key={item.title} className="glass rounded-xl p-5">
              <h4 className="font-display font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
