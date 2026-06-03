import { motion } from 'framer-motion'
import { useInView } from './useInView'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-blue-500/20 to-blue-600/5',
    accent: '#4f8ef7',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    color: 'from-purple-500/20 to-purple-600/5',
    accent: '#a78bfa',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analytics'],
  },
  {
    category: 'Generative AI',
    color: 'from-cyan-500/20 to-cyan-600/5',
    accent: '#22d3ee',
    skills: ['LangChain', 'RAG', 'Sentence Transformers', 'Vector Embeddings', 'LLM Integration', 'Semantic Search'],
  },
  {
    category: 'Backend',
    color: 'from-green-500/20 to-green-600/5',
    accent: '#4ade80',
    skills: ['FastAPI', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    color: 'from-orange-500/20 to-orange-600/5',
    accent: '#fb923c',
    skills: ['MongoDB Atlas', 'PostgreSQL', 'ChromaDB'],
  },
  {
    category: 'Frontend',
    color: 'from-pink-500/20 to-pink-600/5',
    accent: '#f472b6',
    skills: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Tools & DevOps',
    color: 'from-yellow-500/20 to-yellow-600/5',
    accent: '#facc15',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-4 bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">02 / Skills</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white">
            Tech <span className="text-accent">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="glass rounded-2xl p-5 hover:border-white/10 transition-colors group"
            >
              <div className={`inline-block px-2.5 py-1 rounded-lg bg-gradient-to-r ${group.color} mb-4`}>
                <span className="font-mono text-xs font-medium" style={{ color: group.accent }}>
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg text-gray-300 font-medium transition-colors"
                    style={{
                      background: `rgba(255,255,255,0.04)`,
                      border: `1px solid rgba(255,255,255,0.07)`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
