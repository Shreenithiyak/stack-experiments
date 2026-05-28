// src/pages/Resume.jsx
// Resume Page — Display professional profile resume summary and a download action link
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { personalInfo, education, certifications, skillCategories } from '../data';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Professional Resume | {personalInfo.name}</title>
        <meta
          name="description"
          content={`View and download the professional software engineer resume of ${personalInfo.name}, showcasing skills, education, and credentials.`}
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="section-container min-h-[calc(100vh-64px)] py-16"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
              Professional <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              Below is a professional summary of my educational background, credentials, and expertise.
            </p>
          </div>

          {/* Resume Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={personalInfo.resumeUrl}
              download="Shree_Nithiya_K_Resume.pdf"
              size="lg"
            >
              <FaDownload size={14} /> Download PDF
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="outline"
              size="lg"
              className="text-sm font-semibold"
            >
              <FaExternalLinkAlt size={12} /> Open PDF
            </Button>
          </div>
        </div>

        {/* Info notice about actual file setup */}
        <motion.div
          variants={itemVariants}
          className="mb-10 p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-sm flex items-start gap-3"
        >
          <FaInfoCircle size={18} className="shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Fresher Setup Tip:</span> To activate the PDF download, simply save your own resume file as <code className="bg-amber-500/10 px-1.5 py-0.5 rounded font-mono text-xs">resume.pdf</code> inside your project's <code className="bg-amber-500/10 px-1.5 py-0.5 rounded font-mono text-xs">public/</code> directory!
          </div>
        </motion.div>

        {/* Visual Resume Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Academic & Certificates) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
            {/* Objective Card */}
            <Card>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                <FaBriefcase className="text-purple-500" /> Career Objective
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                Motivated Computer Science graduate seeking a Full Stack Developer / Frontend Developer role. Passionate about building responsive web applications using the modern MERN stack. Eager to apply logical problem-solving, acquire new technologies, and actively add value to production projects inside a highly team-oriented, progress-driven engineering culture.
              </p>
            </Card>

            {/* Education Card */}
            <Card>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                <FaGraduationCap className="text-blue-500" /> Education Background
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-gray-800 dark:text-gray-100">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                      <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1">
                        {edu.score}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 self-start sm:self-auto shrink-0">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications Card */}
            <Card>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                <FaAward className="text-cyan-500" /> Professional Credentials
              </h3>
              <ul className="space-y-3.5 pl-1">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-5 h-5 rounded bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-semibold">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Right Column (Core Technical Skills matrix) */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-3">
                Skill Summary
              </h3>

              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.id} className="space-y-3">
                    <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-gray-50 dark:bg-gray-850 text-gray-700 dark:text-gray-300 border border-gray-150 dark:border-gray-800/80"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
