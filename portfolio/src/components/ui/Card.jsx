// src/components/ui/Card.jsx
// Glassmorphism card with hover animation
// Used in Projects and Skills pages

import { motion } from 'framer-motion';

export default function Card({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`
        bg-white/80 dark:bg-gray-900/60
        backdrop-blur-lg
        rounded-2xl
        border border-gray-200/50 dark:border-gray-700/30
        shadow-glass
        p-6
        transition-all duration-300
        hover:shadow-glass-lg
        hover:border-purple-300/50 dark:hover:border-purple-600/30
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
}
