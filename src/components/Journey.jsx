import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { GraduationCap, Lightbulb, Cpu, Server, Rocket } from 'lucide-react'

const steps = [
  {
    icon: GraduationCap,
    title: 'Computer Science Student',
    desc: 'Enrolled in BE Computer Science Engineering (AI & ML) at DY Patil University, building strong foundations in algorithms, data structures, and software engineering.',
    accent: '#4f8ef7',
  },
  {
    icon: Lightbulb,
    title: 'Machine Learning Enthusiast',
    desc: 'Dove deep into ML fundamentals — supervised & unsupervised learning, neural networks, model evaluation, and data analytics pipelines.',
    accent: '#a78bfa',
  },
  {
    icon: Cpu,
    title: 'Generative AI Developer',
    desc: 'Mastered LangChain, RAG pipelines, vector embeddings, and LLM integration. Built QRFolio — an AI-powered portfolio platform with a RAG-based recruiter assistant.',
    accent: '#22d3ee',
  },
  {
    icon: Server,
    title: 'Backend Engineer',
    desc: 'Led backend architecture on RailMind AI using FastAPI, PostgreSQL, JWT authentication, role-based access control, and REST API design at scale.',
    accent: '#4ade80',
  },
  {
    icon: Rocket,
    title: 'Future AI Engineer',
    desc: 'Preparing for GATE Data Science & AI, advancing in computer vision and NLP, and building production-ready intelligent systems for the real world.',
    accent: '#fb923c',
  },
]

export default function Journey() {
  const [ref, inView] = useInView()

  return (
    <section id="journey" className="py-24 px-4 bg-surface/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / Journey</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white">
            My <span className="text-accent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:ml-0 md:pr-8' : 'md:ml-[calc(50%+2rem)]'
                }`}
              >
                {/* Dot on line */}
                <div
                  className="absolute -left-[1.65rem] w-3 h-3 rounded-full border-2 border-void top-3 md:left-auto hidden md:block"
                  style={{
                    background: step.accent,
                    boxShadow: `0 0 12px ${step.accent}80`,
                    [i % 2 === 0 ? 'right' : 'left']: '-1.65rem',
                  }}
                />

                {/* Mobile dot */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 md:hidden"
                  style={{ background: `${step.accent}15` }}
                >
                  <step.icon size={16} style={{ color: step.accent }} />
                </div>

                <div className="glass rounded-xl p-5 flex-1">
                  <div className="hidden md:flex items-center gap-2 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${step.accent}15` }}
                    >
                      <step.icon size={14} style={{ color: step.accent }} />
                    </div>
                    <h3 className="font-display font-semibold text-white text-base">{step.title}</h3>
                  </div>
                  <h3 className="md:hidden font-display font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
