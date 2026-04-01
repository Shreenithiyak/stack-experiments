import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="flex justify-between items-center px-8 lg:px-12 py-5 bg-[#0F111A] border-b border-white/5 sticky top-0 z-50">
      
      {/* Brand / Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#00E5FF]">
          Neon Interview AI
        </Link>
      </div>

      {/* Center Nav Items */}
      <div className="hidden md:flex items-center gap-8 pl-12 flex-1">
        <NavLink 
          to="/dashboard" 
          className={() => 
            `text-sm font-medium transition-all relative ${location.pathname === '/dashboard' ? 'text-[#00e5ff]' : 'text-[#8c92a4] hover:text-white'}`
          }
        >
          Dashboard
          {location.pathname === '/dashboard' && (
            <div className="absolute -bottom-[23px] left-0 right-0 h-[2px] bg-[#00e5ff]" />
          )}
        </NavLink>
        <NavLink 
          to="/practice" 
          className={() => 
            `text-sm font-medium transition-all relative ${location.pathname.startsWith('/practice') || location.pathname.startsWith('/questions') ? 'text-[#00e5ff]' : 'text-[#8c92a4] hover:text-white'}`
          }
        >
          Practice
          {(location.pathname.startsWith('/practice') || location.pathname.startsWith('/questions')) && (
            <div className="absolute -bottom-[23px] left-0 right-0 h-[2px] bg-[#00e5ff]" />
          )}
        </NavLink>
        <NavLink 
          to="/analytics" 
          className={() => 
            `text-sm font-medium transition-all relative ${location.pathname.startsWith('/analytics') ? 'text-[#00e5ff]' : 'text-[#8c92a4] hover:text-white'}`
          }
        >
          Analytics
          {location.pathname.startsWith('/analytics') && (
            <div className="absolute -bottom-[23px] left-0 right-0 h-[2px] bg-[#00e5ff]" />
          )}
        </NavLink>

      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="text-[#8c92a4] hover:text-white transition-colors relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <div className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0F111A]"></div>
        </button>
        <button className="text-[#8c92a4] hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
        <Link to="/login" className="w-8 h-8 rounded-full overflow-hidden border border-white/20 hover:border-white/50 transition-colors ml-4">
          <img src="https://ui-avatars.com/api/?name=Alex&background=1e293b&color=00e5ff" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>

    </nav>
  );
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#11141D] text-slate-200 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-12">
        {children}
      </main>
      
      {/* Footer from image */}
      <footer className="w-full max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-[#5e6376] mt-auto uppercase tracking-wide">
        <div>© 2024 NEON LUMINARY AI. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Feedback</a>
        </div>
      </footer>
    </div>
  );
}
