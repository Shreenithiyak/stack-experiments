import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaPaintBrush, FaCogs, FaDatabase, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data.js';

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaDocker: <FaDocker />,
  FaPaintBrush: <FaPaintBrush />,
  FaCogs: <FaCogs />,
  FaDatabase: <FaDatabase />,
  FaTools: <FaTools />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills — Shree Nithiya K</title>
        <meta name="description" content="Tech stack: React, Node.js, MongoDB, Express.js, Tailwind CSS and more." />
      </Helmet>

      <section id="skills" className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-14">
          <div className="section-tag">Tech Stack</div>
          <h1 className="section-title">My <span className="gradient-text">Skills</span></h1>
          <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
            Technologies I work with to build modern, scalable web applications
          </p>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={ci}
              className="glass-card p-7 relative overflow-hidden group transition-all duration-300 hover:border-purple-500/35"
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #a855f7, #22d3ee)' }} />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{iconMap[cat.icon]}</span>
                <h2 className="font-display font-bold text-base text-slate-100">{cat.category}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {skill.icon && iconMap[skill.icon] && (
                      <span style={{ color: skill.color }}>{iconMap[skill.icon]}</span>
                    )}
                    <span className="text-xs">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
