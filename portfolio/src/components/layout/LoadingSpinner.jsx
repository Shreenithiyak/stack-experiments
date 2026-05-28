// src/components/layout/LoadingSpinner.jsx
// Shown while lazy-loaded pages are being fetched
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning gradient ring */}
        <motion.div
          className="w-14 h-14 rounded-full border-4 border-gray-200 dark:border-gray-800 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
