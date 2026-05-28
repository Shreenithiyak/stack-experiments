// src/routes/AppRoutes.jsx — All routes defined here
// Uses React.lazy for code-splitting (pages load only when needed)
import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../components/layout/LoadingSpinner';

// Lazy-loaded pages — each page is loaded only when visited
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Skills = lazy(() => import('../pages/Skills'));
const Contact = lazy(() => import('../pages/Contact'));
const Resume = lazy(() => import('../pages/Resume'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence enables exit animations when switching routes
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
