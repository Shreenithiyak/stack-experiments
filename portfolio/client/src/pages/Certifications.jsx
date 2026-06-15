import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { certifications } from '../data.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.5 } }),
};

export default function Certifications() {
  return (
    <>
      <Helmet>
        <title>Certifications — Shree Nithiya K</title>
        <meta name="description" content="Certifications: Oracle Cloud, IBM, Full Stack MERN — Shree Nithiya K." />
      </Helmet>

      <section className="min-h-screen px-6 lg:px-12 pt-28 pb-20">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-14">
          <div className="section-tag">Credentials</div>
          <h1 className="section-title">Certifi<span className="gradient-text">cations</span></h1>
          <p className="text-slate-500 mt-3 text-sm">Recognized credentials that validate my expertise</p>
          <div className="divider-glow" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="cert-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border border-purple-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(34,211,238,0.12))' }}>
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-100 leading-snug">{cert.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
              </div>

              {/* Status badge */}
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-cyan-400 border border-cyan-500/20"
                style={{ background: 'rgba(34,211,238,0.08)' }}>
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
