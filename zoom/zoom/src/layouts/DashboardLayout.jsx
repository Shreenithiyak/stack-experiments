import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-background flex flex-col p-6 h-screen fixed border-r border-slate-200">
      <div className="mb-8 flex items-center gap-3 pl-2">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          T
        </div>
        <div>
          <div className="font-semibold text-sm">The Digital Mentor</div>
          <div className="text-[0.65rem] text-slate-500 tracking-wider font-bold">LEVEL: EXPERT</div>
        </div>
      </div>

      <Link to="/simulator" className="bg-primary text-white rounded-lg p-3 flex items-center justify-center gap-2 font-semibold text-sm mb-8 hover:bg-primary-hover transition-colors">
        <Icon name="video" size={18} /> Start Mock Interview
      </Link>

      <nav className="flex-1 flex flex-col gap-2">
        <NavLink to="/dashboard" className={({ isActive }) => 
          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-100'}`
        }>
          <Icon name="grid" size={20} /> Dashboard
        </NavLink>
        <NavLink to="/simulator" className={({ isActive }) => 
          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-100'}`
        }>
          <Icon name="video" size={20} /> Simulator
        </NavLink>
        <NavLink to="/questions" className={({ isActive }) => 
          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-100'}`
        }>
          <Icon name="library" size={20} /> Question Bank
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => 
          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-700 hover:bg-slate-100'}`
        }>
          <Icon name="chart" size={20} /> Analytics
        </NavLink>
      </nav>

      <div className="flex flex-col gap-2 mt-auto">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg">
          <Icon name="settings" size={20} className="text-slate-500" /> Settings
        </NavLink>
        <NavLink to="/support" className="flex items-center gap-3 px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg">
          <Icon name="support" size={20} className="text-slate-500" /> Support
        </NavLink>
      </div>
    </aside>
  );
}

const DashboardHeader = ({ title }) => {
  return (
    <header className="flex justify-between items-center px-12 py-6 bg-transparent w-full">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-slate-800">
          {title || <Link to="/">InterviewReady</Link>}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Icon name="search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input type="text" placeholder="Search sessions..." className="py-2 pr-4 pl-10 rounded-full border-none bg-slate-200 text-sm outline-none w-64 focus:ring-2 focus:ring-primary/20" />
        </div>
        <button className="bg-transparent border-none text-slate-500 hover:text-slate-800"><Icon name="bell" size={20} /></button>
        <button className="bg-transparent border-none text-slate-500 hover:text-slate-800"><Icon name="badge" size={20} /></button>
        <Link to="/login" className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
          <img src="https://ui-avatars.com/api/?name=User&background=0d47a1&color=fff" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </header>
  );
};

export default function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen flex bg-background font-sans text-slate-800">
      <Sidebar />
      <div className="ml-60 flex-1 flex flex-col">
        <DashboardHeader title={title} />
        <main className="flex-1 px-12 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}
