import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { education } from '../data.js';

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.55 } }),
};

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Education — Shree Nithiya K</title>
        <meta name="description" content="B.Sc CS from Voorhees College, Vellore. CGPA 7.2. HSC and SSLC from Tamil Nadu State Board." />
      </Helmet>

      <section id="education" className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <div className="section-tag">Background</div>
          <h1 className="section-title">My <span className="gradient-text">Education</span></h1>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-0">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex gap-6 pb-10"
              >
                {/* Dot */}
                <div className="timeline-dot text-xl">{item.icon}</div>

                {/* Content */}
                <div className="flex-1 glass-card p-5 hover:border-purple-500/30 transition-colors mt-1">
                  <h2 className="font-display font-bold text-base text-slate-100 mb-1">{item.degree}</h2>
                  <p className="text-slate-500 text-sm mb-3">{item.institution}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-purple-400 border border-purple-500/20"
                      style={{ background: 'rgba(168,85,247,0.08)' }}>
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-cyan-400 border border-cyan-500/20"
                      style={{ background: 'rgba(34,211,238,0.08)' }}>
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
