import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Spinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
  </div>
);

const Home           = lazy(() => import('../pages/Home.jsx'));
const About          = lazy(() => import('../pages/About.jsx'));
const Skills         = lazy(() => import('../pages/Skills.jsx'));
const Projects       = lazy(() => import('../pages/Projects.jsx'));
const Certifications = lazy(() => import('../pages/Certifications.jsx'));
const Education      = lazy(() => import('../pages/Education.jsx'));
const Contact        = lazy(() => import('../pages/Contact.jsx'));
const NotFound       = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/skills"         element={<Skills />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education"      element={<Education />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
