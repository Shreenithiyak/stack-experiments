// src/hooks/useDarkMode.js
// Detects system preference and adds/removes 'dark' class on <html>
import { useEffect } from 'react';

export function useDarkMode() {
  useEffect(() => {
    // Check if user's system prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Set on first load
    handleChange(mediaQuery);

    // Listen for changes (e.g., user switches system theme)
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
}
