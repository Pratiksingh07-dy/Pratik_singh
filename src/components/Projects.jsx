import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, Shield, Train, Brain } from 'lucide-react'
import { useInView } from './useInView'

const projects = [
  {
    id: 1,
    title: 'QRFolio',
    subtitle: 'AI-Powered Smart Portfolio Platform with RAG-Based Recruiter Assistant',
    role: 'Full-Stack Developer & Generative AI Developer',
    description:
      'QRFolio transforms traditional resumes into intelligent, interactive professional profiles. Recruiters can explore projects, skills, and experience through an AI-powered assistant built with Retrieval-Augmented Generation (RAG).',
    features: [
      'AI Recruiter Assistant (RAG)',
      'ATS Resume Analysis',
      'Semantic Search',
      'QR Code Portfolio Sharing',
      'Resume Management System',
      'JWT Authentication',
    ],
    tech: ['React', 'FastAPI', 'Python', 'LangChain', 'RAG', 'ChromaDB', 'Sentence Transformers', 'MongoDB Atlas', 'Tailwind CSS'],
    github: 'https://github.com/Pratiksingh07-dy/QRFolio',
    live: null,
    icon: Brain,
    accent: '#4f8ef7',
    featured: true,
  },
  {
    id: 2,
    title: 'RailMind AI',
    subtitle: 'Intelligent Railway Incident Management Platform',
    role: 'Backend Lead & System Integrator',
    description:
      'An intelligent railway incident management and analytics platform for improving passenger safety, crowd monitoring, and railway operations. Reports real-time incidents with smart alerts and crowd predictions.',
    features: [
      'Incident Reporting System',
      'Admin & Staff Dashboards',
      'Role-Based Access Control',
      'Trust Score System',
      'Analytics Dashboard',
      'Notifications System',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Pydantic'],
    github: 'https://github.com/Pratiksingh07-dy/RailMindAI',
    live: null,
    icon: Train,
    accent: '#22d3ee',
    featured: false,
  },
  {
    id: 3,
    title: 'Surveil-AI',
    subtitle: 'Real-Time Crime Detection System',
    role: 'AI Developer & Computer Vision Developer',
    description:
      'A deep learning-based surveillance system that detects violent and suspicious activities from videos and live webcam feeds, using a hybrid CNN-LSTM architecture for spatial and temporal analysis.',
    features: [
      'Real-Time Crime Detection',
      'Violence Detection',
      'Live Webcam Monitoring',
      'CNN-LSTM Architecture',
      'CCTV Surveillance Support',
      'Deep Learning Pipeline',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MobileNetV2', 'LSTM', 'NumPy'],
    github: 'https://github.com/Pratiksingh07-dy/Surveil-AI',
    live: null,
    icon: Shield,
    accent: '#f472b6',
    featured: false,
  },
  {
    id: 4,
    title: 'AI Interview Evaluator',
    subtitle: 'Intelligent Interview Assessment Platform',
    role: 'AI & NLP Developer',
    description:
      'An AI-powered interview assessment platform that evaluates candidate responses using NLP. Analyzes communication quality, detects filler words, and provides automated feedback to improve interview performance.',
    features: [
      'Speech Analysis',
      'Filler Word Detection',
      'Response Quality Evaluation',
      'Confidence Analysis',
      'Automated Feedback',
      'Performance Scoring',
    ],
    tech: ['Python', 'Machine Learning', 'NLP', 'Sentence Transformers'],
    github: 'https://github.com/Pratiksingh07-dy/AI-Interview-Voices',
    live: null,
    icon: Cpu,
    accent: '#a78bfa',
    featured: false,
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`glass rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-300 hover:-translate-y-1 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${project.accent}60, transparent)` }} />

      <div className={`p-6 ${project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}>
        {/* Left / main content */}
        <div>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono mb-4"
              style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}
            >
              ★ FLAGSHIP PROJECT
            </span>
          )}

          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${project.accent}15` }}
            >
              <project.icon size={18} style={{ color: project.accent }} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
              <p className="text-xs text-muted mt-0.5">{project.role}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-1 font-medium">{project.subtitle}</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: features (featured only) or inline */}
        <div className={project.featured ? 'mt-6 md:mt-0' : 'mt-5'}>
          <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">Key Features</p>
          <div className={`grid ${project.featured ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-2`}>
            {project.features.map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                {f}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
            >
              <Github size={13} />
              GitHub
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">03 / Projects</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-3">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Production-grade AI systems built from scratch — from RAG pipelines to real-time deep learning surveillance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Pratiksingh07-dy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={15} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
