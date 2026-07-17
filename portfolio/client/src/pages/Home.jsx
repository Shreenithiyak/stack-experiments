import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedinIn, FaDownload, FaEye } from 'react-icons/fa';
import { personalInfo, heroTypingTexts } from '../data.js';
import TypingText from '../utils/TypingText.jsx';
import ParticleCanvas from '../components/ui/ParticleCanvas.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Certifications from './Certifications.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shree Nithiya K | Full Stack Developer</title>
        <meta name="description" content="Full Stack MERN Developer — React, Node.js, MongoDB. CS Graduate from Chennai, India." />
      </Helmet>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-[70px]">
        {/* Background layers */}
        <div className="hero-grid absolute inset-0 z-0" />
        <ParticleCanvas />
        <div className="glow-orb w-[500px] h-[500px] -top-24 -right-24 z-0"
          style={{ background: 'rgba(168,85,247,0.08)' }} />
        <div className="glow-orb w-[350px] h-[350px] bottom-0 left-[10%] z-0"
          style={{ background: 'rgba(34,211,238,0.06)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-purple-400 border border-purple-500/25 mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(34,211,238,0.08))' }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4"
          >
            Hi, I&apos;m<br />
            <span className="gradient-text">Shree Nithiya K</span>
          </motion.h1>

          {/* Typing */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-xl sm:text-2xl font-display font-semibold text-cyan-400 mb-4 min-h-[2rem]">
            <TypingText texts={heroTypingTexts} />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            {personalInfo.subtitle}<br />
            <em className="not-italic text-purple-400/80 font-medium">&quot;{personalInfo.tagline}&quot;</em>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-wrap gap-4 mb-8">
            <a href="#projects" className="btn-primary">
              <FaEye /> View My Work
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-outline">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
            className="flex gap-3">
            {[
              { href: personalInfo.github, icon: <FaGithub className="text-xl" />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <FaLinkedinIn className="text-xl" />, label: 'LinkedIn' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all hover:-translate-y-0.5">
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 animate-bounce2 flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[10px] text-slate-600 tracking-[3px] uppercase">Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(var(--purple), transparent)' }} />
        </div>
      </section>

      {/* ── ALL SECTIONS ── */}
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
}
