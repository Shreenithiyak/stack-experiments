import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import FloatingSocial from './components/layout/FloatingSocial.jsx';
import ScrollTop from './components/ui/ScrollTop.jsx';
import CursorGlow from './components/ui/CursorGlow.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 2, retry: 1 } },
});

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-[#050510] text-slate-100">
            <CursorGlow />
            <FloatingSocial />
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
            <ScrollTop />
            <ToastContainer
              position="bottom-right"
              autoClose={3500}
              theme="dark"
              toastClassName="rounded-xl font-sans bg-[#0f0f2d] border border-purple-500/20"
            />
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
