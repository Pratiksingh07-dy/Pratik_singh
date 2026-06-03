import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Trophy, Zap, Code2, BookOpen, Star, Target } from 'lucide-react'

const achievements = [
  {
    icon: Zap,
    title: 'AI/ML Project Development',
    desc: 'Built 4 production-grade AI/ML projects covering RAG, NLP, Computer Vision, and Backend Engineering.',
    highlight: '4 Projects',
    accent: '#4f8ef7',
  },
  {
    icon: Trophy,
    title: 'Generative AI Projects',
    desc: 'Developed QRFolio — an AI-powered portfolio platform using RAG, LangChain, and vector embeddings from scratch.',
    highlight: 'RAG Expert',
    accent: '#a78bfa',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    desc: 'Built end-to-end applications with React frontends, FastAPI backends, MongoDB/PostgreSQL databases, and cloud deployment.',
    highlight: 'Full Stack',
    accent: '#22d3ee',
  },
  {
    icon: Star,
    title: 'Computer Vision System',
    desc: 'Designed and deployed Surveil-AI — a deep learning crime detection system with CNN-LSTM architecture for real-time video analysis.',
    highlight: 'Deep Learning',
    accent: '#f472b6',
  },
  {
    icon: Target,
    title: 'Backend Architecture',
    desc: 'Led backend design for RailMind AI including REST APIs, role-based access, PostgreSQL schema, and JWT authentication.',
    highlight: 'Backend Lead',
    accent: '#4ade80',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Actively pursuing GATE DS & AI preparation, daily DSA practice, and hands-on experimentation with new AI technologies.',
    highlight: 'GATE Aspirant',
    accent: '#fb923c',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section id="achievements" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">07 / Achievements</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-3">
            Key <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-base">Milestones and impact from my engineering journey.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 group hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: item.accent }}
              />

              <div className="flex items-start justify-between mb-4 relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accent}15` }}
                >
                  <item.icon size={18} style={{ color: item.accent }} />
                </div>
                <span
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: `${item.accent}15`, color: item.accent }}
                >
                  {item.highlight}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white mb-2 text-base relative">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed relative">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
