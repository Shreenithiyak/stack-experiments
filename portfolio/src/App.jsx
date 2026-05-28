// src/App.jsx — Main app shell
// Wraps everything with Router, Helmet for SEO, Toastify for notifications
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollTop from './components/ui/ScrollTop';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Main app wrapper — dark mode is automatic via Tailwind 'media' */}
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {/* Sticky navbar */}
          <Navbar />

          {/* Page content */}
          <main>
            <AppRoutes />
          </main>

          {/* Footer */}
          <Footer />

          {/* Scroll to top button */}
          <ScrollTop />

          {/* Toast notifications (for contact form) */}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="colored"
            toastClassName="rounded-xl"
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
