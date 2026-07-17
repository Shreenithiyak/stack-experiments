import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { personalInfo, strengths } from '../data.js';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55 } }),
};

const stats = [
  { num: '7.2', label: 'CGPA' },
  { num: '3+', label: 'Projects' },
  { num: '5+', label: 'Technologies' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Shree Nithiya K</title>
        <meta name="description" content="CS Graduate from Chennai passionate about full stack web development with React and Node.js." />
      </Helmet>

      <section id="about" className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16">
          <div className="section-tag">About Me</div>
          <h1 className="section-title">Who I <span className="gradient-text">Am</span></h1>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex justify-center relative">
            {/* Ring */}
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full animate-spin-slow opacity-30"
                style={{ background: 'conic-gradient(from 0deg, #a855f7, #22d3ee, #a855f7)', filter: 'blur(8px)' }} />
              <div className="relative w-full h-full rounded-full p-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}>
                <div className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0f0f2d, rgba(168,85,247,0.2))' }}>
                  <span className="font-display text-5xl font-extrabold gradient-text">SNK</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 glass-card px-3 py-2 flex items-center gap-2 text-xs font-semibold animate-float shadow-lg">
              <span>🎓</span>
              <div>
                <div className="text-[10px] text-slate-500">Graduated</div>
                <div>B.Sc CS · 2025</div>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-4 glass-card px-3 py-2 flex items-center gap-2 text-xs font-semibold animate-float animation-delay-300 shadow-lg">
              <span>📍</span>
              <div>
                <div className="text-[10px] text-slate-500">Location</div>
                <div>Chennai, India</div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <h2 className="font-display text-3xl font-bold mb-4">
              Passionate <span className="text-purple-400">Full Stack</span> Developer
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              Based in Chennai, Tamil Nadu, India — actively seeking opportunities to grow, collaborate, and contribute to impactful real-world projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 text-center hover:border-purple-500/30 transition-colors">
                  <div className="font-display text-2xl font-extrabold gradient-text">{s.num}</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Strength tags */}
            <div className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-purple-300 border border-purple-500/25"
                  style={{ background: 'rgba(168,85,247,0.1)' }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
