// src/components/ui/Button.jsx
// Reusable button component with gradient and hover effects
// Can render as a <button> or <a> tag depending on props

import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  href,
  download,
  type = 'button',
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  size = 'md',         // 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) {
  // Size classes
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  // Variant classes
  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
    outline:
      'border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20',
    ghost:
      'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${sizes[size]} ${variants[variant]} ${className}`;

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={base}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise render as a button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
