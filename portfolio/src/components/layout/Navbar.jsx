// src/components/layout/Navbar.jsx
// Sticky responsive navbar with hamburger menu and active route highlighting
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data';

export default function Navbar() {
  // Controls mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Style for active vs inactive links
  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg
     ${isActive
       ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
       : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo / Brand */}
        <NavLink to="/" className="group flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-glow group-hover:shadow-glow-accent transition-shadow duration-300">
            S
          </div>
          <span className="text-lg font-bold gradient-text hidden sm:inline">
            Shree Nithiya
          </span>
        </NavLink>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={linkClass}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
