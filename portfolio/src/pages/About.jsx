// src/pages/About.jsx
// About Page — Biography, timeline of education, certifications, and strengths
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaCertificate, FaGem, FaCheckCircle } from 'react-icons/fa';
import { personalInfo, education, certifications, strengths } from '../data';
import Card from '../components/ui/Card';

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

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me | {personalInfo.name}</title>
        <meta
          name="description"
          content={`Learn more about ${personalInfo.name}, my education timeline, credentials, certifications, and professional strengths.`}
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="section-container min-h-[calc(100vh-64px)] py-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            My professional path, academic foundation, certifications, and core strengths.
          </p>
        </motion.div>

        {/* Info & Strengths Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Bio */}
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaGem className="text-purple-500" /> Professional Bio
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Email</h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 break-words">{personalInfo.email}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Strengths */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <Card className="h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-cyan-500" /> Core Strengths
              </h2>
              <ul className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800/50"
                  >
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{strength}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <FaGraduationCap className="text-purple-500" /> Education Journey
              </h2>

              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-900 space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Circle Dot marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-white dark:bg-gray-900 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        {item.degree}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/30 self-start sm:self-auto">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Card className="h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaCertificate className="text-blue-500 animate-pulse" /> Certifications
              </h2>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50/55 dark:from-gray-900/60 dark:to-gray-800/20 border border-gray-100 dark:border-gray-800 flex items-start gap-3 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 mt-0.5">
                      <FaCertificate size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                        {cert}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
