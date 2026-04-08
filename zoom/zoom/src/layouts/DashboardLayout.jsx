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
          <img src="https://img.icons8.com/ios-filled/50/8c92a4/bell.png" alt="Notifications" className="w-5 h-5 object-contain hover:brightness-200 transition-all" />
          <div className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#0F111A]"></div>
        </button>
        <button className="text-[#8c92a4] hover:text-white transition-colors">
          <img src="https://img.icons8.com/ios-filled/50/8c92a4/settings.png" alt="Settings" className="w-5 h-5 object-contain hover:brightness-200 transition-all" />
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
