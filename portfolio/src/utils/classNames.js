// src/utils/classNames.js
// Helper to combine CSS class names conditionally
// Example: classNames('text-white', isActive && 'bg-primary', !isActive && 'bg-gray-500')

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
