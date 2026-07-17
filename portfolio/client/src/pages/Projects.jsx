import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaGithub, FaRobot, FaCampground, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data.js';

const iconMap = {
  FaRobot: <FaRobot />,
  FaCampground: <FaCampground />,
  FaGraduationCap: <FaGraduationCap />
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55 } }),
};

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Shree Nithiya K</title>
        <meta name="description" content="Portfolio of full stack projects including Interview Ready, Personal Portfolio, and Student Portal." />
      </Helmet>

      <section id="projects" className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-14">
          <div className="section-tag">Portfolio</div>
          <h1 className="section-title">Featured <span className="gradient-text">Projects</span></h1>
          <p className="text-slate-500 mt-3 text-sm">Things I&apos;ve built that I&apos;m proud of</p>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="project-card"
            >
              {/* Card image area */}
              <div
                className={`h-44 flex items-center justify-center relative bg-gradient-to-br ${p.gradient}`}
              >
                <span className="text-6xl opacity-70">{iconMap[p.icon]}</span>
                <div className="absolute top-3 right-3 text-xs font-bold text-purple-400 px-2.5 py-1 rounded-full border border-purple-500/25"
                  style={{ background: 'rgba(168,85,247,0.12)' }}>
                  {p.number}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="font-display text-lg font-bold mb-2 text-slate-100">{p.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-cyan-400 border border-cyan-500/20"
                      style={{ background: 'rgba(34,211,238,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <p className="text-[11px] text-slate-600 mb-5">{p.stack}</p>

                {/* Buttons */}
                <div className="flex gap-2">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:brightness-110"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}>
                      Live Demo <FaArrowRight className="text-[10px]" />
                    </a>
                  )}
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className={`${p.liveUrl ? 'flex-1' : 'flex-[2]'} flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 border border-white/10 transition-all hover:border-purple-500/40 hover:text-purple-400`}>
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
