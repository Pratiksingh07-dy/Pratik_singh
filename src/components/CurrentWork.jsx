import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Train, Brain, Eye, Code2, BookOpen, Cpu, Zap } from 'lucide-react'

const currentWork = [
  {
    icon: Train,
    title: 'RailMind AI Development',
    desc: 'Expanding the backend with AI-powered analytics, crowd prediction models, and smart alert systems.',
    status: 'In Progress',
    accent: '#22d3ee',
  },
  {
    icon: Brain,
    title: 'Advanced RAG Systems',
    desc: 'Building more sophisticated RAG pipelines with hybrid search, re-ranking, and multi-document reasoning.',
    status: 'Active',
    accent: '#4f8ef7',
  },
  {
    icon: Cpu,
    title: 'NLP Projects',
    desc: 'Exploring transformer architectures, fine-tuning language models, and building NLP applications.',
    status: 'Ongoing',
    accent: '#a78bfa',
  },
  {
    icon: Eye,
    title: 'Computer Vision Projects',
    desc: 'Advancing Surveil-AI and exploring object detection, image segmentation, and real-time video analysis.',
    status: 'Ongoing',
    accent: '#f472b6',
  },
  {
    icon: Code2,
    title: 'Data Structures & Algorithms',
    desc: 'Daily practice on competitive programming platforms to sharpen problem-solving and algorithmic thinking.',
    status: 'Daily',
    accent: '#4ade80',
  },
  {
    icon: BookOpen,
    title: 'GATE DS & AI Prep',
    desc: 'Systematic preparation for GATE in Data Science & AI — covering statistics, ML theory, and core CS.',
    status: 'Active',
    accent: '#fb923c',
  },
]

const statusColors = {
  'In Progress': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  'Active': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Ongoing': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Daily': 'text-green-400 bg-green-400/10 border-green-400/20',
}

export default function CurrentWork() {
  const [ref, inView] = useInView()

  return (
    <section id="current" className="py-24 px-4 bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">06 / Now</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-3">
            Currently <span className="text-accent">Building</span>
          </h2>
          <p className="text-gray-400 text-base">What I'm actively working on right now.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentWork.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accent}15` }}
                >
                  <item.icon size={18} style={{ color: item.accent }} />
                </div>
                <span className={`px-2.5 py-1 text-xs font-mono rounded-full border ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

              {/* Animated progress dots */}
              <div className="flex gap-1 mt-4">
                {[0, 1, 2].map(dot => (
                  <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: item.accent }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: dot * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
