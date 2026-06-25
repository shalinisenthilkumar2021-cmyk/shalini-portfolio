import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Eye, Github, Linkedin, Mail } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
  const resumeUrl = `${import.meta.env.BASE_URL}shalini-resume.pdf`;
  return (
    <PageWrapper>
      <section className="min-h-screen grid-bg flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse-slow" />
            Available for opportunities · 2026 Graduate
          </motion.div>

          {/* Avatar placeholder */}
          <motion.div variants={fadeUp} className="mx-auto mb-8 w-28 h-28 rounded-2xl bg-gradient-to-br from-accent to-teal-accent/60 flex items-center justify-center text-5xl font-display font-bold text-white glow-accent animate-float">
            S
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text text-glow">Shalini</span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p variants={fadeUp} className="font-body text-white/50 text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
            B.Tech Information Technology · 2026 · Aspiring{' '}
            <span className="text-teal-accent font-medium">Data Analyst</span>
          </motion.p>

          <motion.p variants={fadeUp} className="font-body text-white/40 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            I build with Python, SQL, Power BI and turn raw data into insights.
            Passionate about clean code and beautiful UIs.
          </motion.p>

          {/* CTA buttons
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-white font-display font-semibold text-sm transition-all glow-accent hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-accent/50 text-white/80 hover:text-white font-display font-semibold text-sm transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-teal-accent/50 text-white/80 hover:text-white font-display font-semibold text-sm transition-all hover:bg-white/5 hover:scale-105 active:scale-95"
            >
              <Eye size={16} /> View CV
            </a>
          </motion.div> */}


          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-12">

            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent/80 text-white"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href={resumeUrl}
              download

              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"

              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15"
            >
              <Eye size={16} /> View CV
            </a>

          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex gap-5 justify-center">
            {[
              { icon: Github, href: 'https://github.com/shalinisenthilkumar2021-cmyk', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shalinisenthilkumar2021@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
          />
        </motion.div>
      </section>
    </PageWrapper>
  )
}
