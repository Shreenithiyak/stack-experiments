// src/components/layout/Footer.jsx
// Simple footer with gradient accent and social links
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold gradient-text mb-1">Shree Nithiya K</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Shree Nithiya K. Built with React, Tailwind & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
