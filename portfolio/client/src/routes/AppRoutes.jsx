import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Spinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
  </div>
);

const Home     = lazy(() => import('../pages/Home.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"  element={<Home />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
