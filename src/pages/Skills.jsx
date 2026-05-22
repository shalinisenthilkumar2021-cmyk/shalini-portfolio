import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const skillGroups = [
  {
    category: 'Data & Analytics',
    color: '#7c6af7',
    skills: [
      { name: 'Power BI', level: 78, desc: 'Dashboards, DAX, data modeling' },
      { name: 'Python', level: 72, desc: 'Pandas, NumPy, data analysis' },
      { name: 'SQL', level: 80, desc: 'Queries, joins, stored procedures' },
      { name: 'Excel', level: 85, desc: 'Pivot tables, VLOOKUP, charts' },
    ],
  },
  {
    category: 'Web Development',
    color: '#2dd4bf',
    skills: [
      { name: 'HTML', level: 82, desc: 'Semantic markup, accessibility' },
      { name: 'CSS', level: 75, desc: 'Flexbox, Grid, animations' },
      { name: 'Django', level: 60, desc: 'MVC, ORM, REST basics' },
    ],
  },
  {
    category: 'Data Visualization',
    color: '#f472b6',
    skills: [
      { name: 'Data Analytics', level: 70, desc: 'Statistical analysis, trends' },
    ],
  },
]

function SkillBar({ name, level, desc, color, index }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex items-end justify-between mb-2">
        <div>
          <span className="font-display font-semibold text-white/90 text-sm">{name}</span>
          <span className="block font-mono text-white/30 text-xs mt-0.5">{desc}</span>
        </div>
        <span className="font-mono text-sm font-medium" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animated ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const stagger = { animate: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function Skills() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm tracking-widest mb-3 uppercase">
            My Skills
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Tools I work<br />
            <span className="gradient-text">with</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-white/45 text-lg mb-14 max-w-xl">
            Continuously growing my skill set — from data pipelines to polished visualizations.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                  <h3 className="font-display font-semibold text-white/70 text-sm tracking-wide uppercase">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={group.color}
                      index={gi * 4 + si}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech badges */}
          <motion.div variants={fadeUp} className="mt-12">
            <p className="font-mono text-white/30 text-xs tracking-widest uppercase mb-5">All Technologies</p>
            <div className="flex flex-wrap gap-3">
              {['Power BI', 'Python', 'SQL', 'Excel', 'HTML5', 'CSS3', 'Django', 'Data Analytics', 'Responsive UI', 'Git'].map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-white/60 font-mono text-sm hover:border-accent/40 hover:text-accent-light hover:bg-accent/5 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
