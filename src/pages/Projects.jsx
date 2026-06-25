import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const projects = [

  {
    title: 'AI Supply Chain Dashboard',
    desc: 'AI-powered supply chain dashboard with forecasting, chatbot, KPI cards and email alerts.',
    tags: ['Python', 'Django', 'Plotly', 'Pandas'],
    color: '#34d399',
    emoji: '📦',

    github: 'https://github.com/shalinisenthilkumar2021-cmyk/AI_Supply_Chain_Dashboard.gi',

    live: 'https://ai-supply-chain-dashboard-3238.onrender.com'
  },


  {
    title: 'Air Traffic Analysis',
    desc: 'Interactive dashboard for analyzing air traffic trends, passenger movement, airport performance and flight statistics using Python and data visualization tools.',

    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit'],

    color: '#38bdf8',

    emoji: '✈️',

    github: 'https://github.com/shalinisenthilkumar2021-cmyk/Airtraffic-Analysis',

    live: 'https://airtraffic-analysis.onrender.com'
  },

  {
    title: 'Banking Analysis Dashboard',
    desc: 'Excel dashboard analyzing loans, customers and transactions.',

    tags: ['Excel', 'Power Query', 'Pivot'],

    color: '#60a5fa',

    emoji: '🏦',

    github: 'https://github.com/shalinisenthilkumar2021-cmyk/Banking-Analysis-Excel',

    live: null
  },
 
    
 {
    title: 'Cybersecurity Incident Analysis Dashboard',

    desc: 'Developed an interactive Excel dashboard to monitor cybersecurity incidents, evaluate risk scores, analyze severity levels, and generate actionable security insights.',

    tags: ['Excel', 'Cybersecurity', 'Dashboard'],

    color: '#ef4444',

    emoji: '🔐',

    github: 'https://github.com/shalinisenthilkumar2021-cmyk/Cybersecurity-Incident-Intelligence-Dashboard',

    live: null
  },

 
  {
    title: "Telecom Customer Churn Dashboard",

    desc: "An interactive Power BI dashboard developed to analyze customer churn patterns, demographics, subscription details, and key business metrics. The dashboard provides actionable insights to improve customer retention strategies.",

    tags: [ "Power BI","DAX","Power Query","Excel"],

    color: "#3B82F6",

    emoji: "📊",

    github: "https://github.com/shalinisenthilkumar2021-cmyk/Telecom-Dashboard",

    live: null
  },

 {
    title: 'Student Database — SQL',
    desc: 'Relational database schema for a college management system with complex joins, stored procedures, and optimized queries for reports.',
    tags: ['SQL', 'MySQL', 'Normalization'],
    color: '#2dd4bf',
    emoji: '🗄️',
    github: 'https://github.com/',
    live: null,
  },

  {
    title: 'Personal Portfolio — Web',
    desc: 'This responsive dark-theme portfolio website built with React, Vite, Tailwind CSS, and Framer Motion animations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    color: '#f472b6',
    emoji: '🌐',
    github: 'https://github.com/',
    live: '#',
  },

]

const stagger = { animate: { transition: { staggerChildren: 0.07 } } }
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function Projects() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-6xl mx-auto">
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm tracking-widest mb-3 uppercase">
            My Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Projects I've<br />
            <span className="gradient-text">built</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-white/45 text-lg mb-14 max-w-xl">
            A collection of data projects and web apps — each one a new thing learned.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((proj, i) => (
              <motion.article
                key={proj.title}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] card-hover flex flex-col"
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${proj.color}18` }}
                  >
                    {proj.emoji}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                        <Github size={14} />
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-white/90 mb-2 leading-snug">
                  {proj.title}
                </h3>
                <p className="font-body text-white/40 text-sm leading-relaxed flex-1 mb-4">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border"
                      style={{
                        borderColor: `${proj.color}40`,
                        background: `${proj.color}10`,
                        color: proj.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
