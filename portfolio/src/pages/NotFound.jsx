// src/pages/NotFound.jsx
// NotFound Page — Friendly 404 error page with navigation redirect
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Shree Nithiya K</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-250px)] flex flex-col items-center justify-center text-center px-4 py-20"
      >
        {/* Glowing warning icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse" />
          <div className="w-20 h-20 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500 flex items-center justify-center relative border border-yellow-200/50 dark:border-yellow-800/30">
            <FaExclamationTriangle size={36} />
          </div>
        </div>

        {/* 404 text and gradient headers */}
        <h1 className="text-8xl font-black tracking-widest text-gray-200 dark:text-gray-800 select-none animate-pulse">
          404
        </h1>

        <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-2">
          Page <span className="gradient-text">Not Found</span>
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Action Button to Home */}
        <Button href="/" size="lg">
          <FaHome size={16} /> Return to Homepage
        </Button>
      </motion.div>
    </>
  );
}
