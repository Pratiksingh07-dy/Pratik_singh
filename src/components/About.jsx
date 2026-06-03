import { motion } from 'framer-motion'
import { Brain, Code2, Cpu, Database, Globe, Layers } from 'lucide-react'
import { useInView } from './useInView'

const interests = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Cpu, label: 'Machine Learning' },
  { icon: Globe, label: 'Natural Language Processing' },
  { icon: Layers, label: 'Generative AI & RAG' },
  { icon: Database, label: 'Computer Vision' },
  { icon: Code2, label: 'Full Stack Development' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">01 / About</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <h2 className="section-title text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Passionate about<br />
              <span className="text-accent">Intelligent Systems</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Computer Science Engineering student</span> at DY Patil University, specializing in Artificial Intelligence and Machine Learning. Final year, building things that matter.
              </p>
              <p>
                My passion lies in creating <span className="text-white font-medium">AI-powered applications</span> — from RAG-based assistants to real-time surveillance systems. I bridge the gap between cutting-edge ML research and production-ready software.
              </p>
              <p>
                Beyond projects, I continuously sharpen my skills through <span className="text-white font-medium">DSA practice</span>, competitive programming, and <span className="text-white font-medium">GATE Data Science & AI preparation</span>.
              </p>
              <p className="text-accent/80 font-medium">
                Goal: Become a highly skilled AI Engineer capable of building production-ready intelligent systems.
              </p>
            </div>
          </div>

          {/* Right: interest cards */}
          <div className="grid grid-cols-2 gap-3">
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-bright rounded-xl p-4 flex items-center gap-3 hover:border-accent/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon size={16} className="text-accent" />
                </div>
                <span className="text-sm text-gray-300 font-medium leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
