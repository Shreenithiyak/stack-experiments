// src/pages/Home.jsx
// Home / Hero Page — animated intro, typing text, profile avatar, CTA buttons
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { personalInfo, heroTypingTexts } from '../data';
import TypingText from '../utils/TypingText';
import Button from '../components/ui/Button';

// Variants for coordinated child stagger animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Modern Developer Portfolio</title>
        <meta
          name="description"
          content={`Hi, I'm ${personalInfo.name}, a ${personalInfo.role}. Explore my skills, full stack projects, and professional background.`}
        />
      </Helmet>

      {/* Main wrapper with standard fade-in/out and background animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6"
      >
        {/* Decorative background blur shapes */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl -z-10 animate-float" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Intro Text */}
          <div className="flex flex-col space-y-6 text-center md:text-left order-2 md:order-1">
            <motion.div variants={itemVariants} className="inline-flex self-center md:self-start px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-900/30 border border-purple-200/50 dark:border-purple-800/30">
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
            >
              I am a{' '}
              <span className="text-purple-600 dark:text-purple-400 font-bold underline decoration-cyan-400 decoration-2 underline-offset-4">
                <TypingText texts={heroTypingTexts} />
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-700/50 hover:shadow-md transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700/50 hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-xl bg-white/80 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-700/50 hover:shadow-md transition-all duration-300"
                aria-label="Send Email"
              >
                <FaEnvelope size={20} />
              </a>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
            >
              <Button href="/projects" size="lg">
                View My Work
                <FaArrowRight size={14} className="ml-1 animate-pulse" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Premium Visual / Profile Card */}
          <div className="flex justify-center order-1 md:order-2">
            <motion.div
              variants={itemVariants}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Outer shining rotation aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 opacity-20 blur-xl animate-spin-slow -z-10" />

              {/* Glowing gradient border circle */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 p-[3px] shadow-glass">
                <div className="w-full h-full rounded-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center overflow-hidden relative group">
                  {/* Decorative mesh/grid background inside the circle */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20" />

                  {/* Large Stylized Logo Lettering as initial avatar */}
                  <div className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent select-none animate-float">
                    SN
                  </div>

                  {/* Shining gloss highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
                </div>
              </div>

              {/* Floating tech badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-800/50 px-3 py-1.5 rounded-xl shadow-glass text-xs font-semibold flex items-center gap-1.5 cursor-default text-purple-600 dark:text-purple-400"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                React
              </motion.div>

              {/* Floating tech badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 right-2 sm:bottom-12 sm:right-6 bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-800/50 px-3 py-1.5 rounded-xl shadow-glass text-xs font-semibold flex items-center gap-1.5 cursor-default text-cyan-500 dark:text-cyan-400"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                MERN Stack
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
