import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Sparkles, BookOpen, Target } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

const facts = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech Information Technology' },
  { icon: Calendar, label: 'Graduation', value: '2026 Pass-out Batch' },
  { icon: MapPin, label: 'Location', value: 'India' },
  { icon: Target, label: 'Focus', value: 'Data Analytics & BI' },
]

const interests = [
  { icon: '📊', title: 'Data Analytics', desc: 'Turning raw data into meaningful stories and insights using Power BI and Python.' },
  { icon: '🗄️', title: 'Database Design', desc: 'Writing efficient SQL queries and designing relational data models.' },
  { icon: '🌐', title: 'Web Development', desc: 'Building responsive interfaces with HTML, CSS, and Django.' },
  { icon: '📈', title: 'Visualization', desc: 'Creating dashboards and reports that communicate clearly.' },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-teal-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-5xl mx-auto">

          {/* Section label */}
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm tracking-widest mb-3 uppercase">
            About Me
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Turning data into<br />
            <span className="gradient-text">decisions</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-body text-white/55 text-lg leading-relaxed max-w-2xl mb-14">
            I'm Shalini, a final-year B.Tech IT student with a growing passion for Data Analytics.
            I love the process of asking questions about data, digging in with Python and SQL,
            and presenting the findings visually with Power BI. I'm in my final year and actively
            building my skills and portfolio to land a role where data drives decisions.
          </motion.p>

          {/* Fact cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {facts.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-accent-light" />
                </div>
                <p className="font-mono text-white/35 text-xs tracking-wider uppercase mb-1">{label}</p>
                <p className="font-display font-semibold text-white/90 text-sm leading-snug">{value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently learning */}
          <motion.div variants={fadeUp} className="mb-16 p-6 rounded-2xl border border-accent/20 bg-accent/5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-accent-light" />
              <span className="font-display font-semibold text-white/90">Currently Learning</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Data Analytics', 'Power BI Dashboards', 'Advanced SQL', 'Python for Data Science', 'Statistical Analysis'].map(item => (
                <span key={item} className="px-3 py-1 rounded-full border border-teal-accent/30 bg-teal-accent/10 text-teal-accent text-sm font-mono">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interest areas */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={18} className="text-accent-light" />
              <span className="font-display font-semibold text-white/90 text-lg">Areas of Interest</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-5 rounded-2xl border border-white/8 bg-white/[0.02] card-hover"
                >
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <h3 className="font-display font-semibold text-white/90 mb-1">{title}</h3>
                  <p className="font-body text-white/45 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
