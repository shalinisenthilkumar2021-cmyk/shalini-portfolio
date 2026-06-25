import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Download, Eye, ArrowUpRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const stagger = { animate: { transition: { staggerChildren: 0.08 } } }
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

const contacts = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/shalinisenthilkumar2021-cmyk',
    href: 'https://github.com/',
    color: '#f0f0f0',
    desc: 'Check out my code & projects',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shalini',
    href: 'https://linkedin.com/in/',
    color: '#0a66c2',
    desc: 'Connect professionally',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'shalinisenthilkumar2021@gmail',
    href: 'mailto:shalini@email.com',
    color: '#7c6af7',
    desc: 'Drop me a message anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6383554672',
    href: 'tel:+910000000000',
    color: '#2dd4bf',
    desc: 'Available Mon–Sat',
  },
]

export default function Contact() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp} className="font-mono text-accent text-sm tracking-widest mb-3 uppercase">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Let's connect &<br />
            <span className="gradient-text">collaborate</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-white/45 text-lg mb-14 max-w-xl">
            I'm actively looking for opportunities in Data Analytics and web development.
            Whether it's a job, internship, or collaboration — I'd love to hear from you.
          </motion.p>

          {/* Contact cards */}
          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4 mb-12">
            {contacts.map(({ icon: Icon, label, value, href, color, desc }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Phone' && label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] card-hover flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="font-display font-semibold text-white/80 text-sm">{label}</span>
                    <ArrowUpRight size={13} className="text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>
                  <p className="font-mono text-white/50 text-sm truncate">{value}</p>
                  <p className="font-body text-white/30 text-xs mt-1">{desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume section */}
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl border border-accent/25 bg-accent/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-semibold text-white/90 text-lg mb-1">My Resume</h3>
                <p className="font-body text-white/40 text-sm">
                  B.Tech IT · 2026 · Data Analytics · Python · Power BI · SQL
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href={`${import.meta.env.BASE_URL}shalini-resume.pdf`}
                  download
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent/80 text-white font-display font-semibold text-sm transition-all glow-accent hover:scale-105 active:scale-95"
                >
                  <Download size={15} />
                  Download
                </a>
                <a

                  href={`${import.meta.env.BASE_URL}shalini-resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 hover:border-teal-accent/50 text-white/80 hover:text-white font-display font-semibold text-sm transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
                >
                  <Eye size={15} />
                  View


                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={fadeUp}
            className="text-center font-body text-white/20 text-sm mt-12"
          >
            Built with React · Vite · Tailwind CSS · Framer Motion ·{' '}
            <span className="text-accent/50">Shalini © 2026</span>
          </motion.p>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
