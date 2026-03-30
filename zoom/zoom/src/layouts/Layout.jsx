import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-transparent max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold text-slate-800">
          InterviewReady
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className={`pb-1 ${location.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-slate-800'}`}>Home</Link>
          <Link to="/simulator" className={`${location.pathname === '/simulator' ? 'text-primary' : 'text-slate-500 hover:text-slate-800'}`}>Simulator</Link>
          <Link to="/questions" className={`${location.pathname === '/questions' ? 'text-primary' : 'text-slate-500 hover:text-slate-800'}`}>Resources</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-slate-800 bg-transparent border-none"><Icon name="bell" size={20} /></button>
        <button className="text-slate-500 hover:text-slate-800 bg-transparent border-none"><Icon name="badge" size={20} /></button>
        <Link to="/login" className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
          <img src="https://ui-avatars.com/api/?name=User&background=0d47a1&color=fff" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </nav>
  );
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="px-12 py-8 flex justify-between text-xs text-slate-500 border-t border-slate-200 max-w-7xl mx-auto w-full">
        <div>© 2024 INTERVIEWREADY AI. BUILT FOR PROFESSIONAL GROWTH.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">RESOURCES</a>
          <a href="#" className="hover:text-primary">PRIVACY POLICY</a>
          <a href="#" className="hover:text-primary">TERMS OF SERVICE</a>
          <a href="#" className="hover:text-primary">CONTACT</a>
        </div>
      </footer>
    </div>
  );
}
