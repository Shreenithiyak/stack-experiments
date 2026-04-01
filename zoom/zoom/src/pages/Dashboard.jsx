import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const ActivityRow = ({ icon, title, date, score }) => (
  <div className="bg-[#1C1F2E] rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center sm:items-start md:items-center gap-4 border border-white/5 hover:border-white/10 transition-colors">
    <div className="flex items-center gap-5 w-full md:w-auto">
      <div className="w-12 h-12 bg-[#252839] rounded-xl flex items-center justify-center text-[#8c92a4] shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-0.5">{title}</h3>
        <p className="text-sm text-[#8c92a4]">Completed • {date}</p>
      </div>
    </div>
    
    <div className="flex items-center justify-between md:justify-end gap-12 w-full md:w-auto">
      <div className="text-center md:text-right">
        <div className="text-[10px] text-[#8c92a4] uppercase tracking-wider font-semibold mb-1">Score</div>
        <div className="text-xl font-bold text-white leading-none">{score}%</div>
      </div>
      <Link to="/history" className="text-[#00e5ff] font-semibold text-sm flex items-center gap-1 hover:text-[#00cbe5] transition-colors">
        View Feedback 
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Link>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1280px] mx-auto pb-12">
        
        {/* Welcome Hero */}
        <div className="mb-14 pt-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Hello, Alex. <span className="text-[#00E5FF]">Ready to level up today?</span>
          </h1>
          <p className="text-xl text-[#8c92a4] max-w-3xl leading-relaxed mb-10">
            You're <strong className="text-white font-semibold">85% ready</strong> for your next Technical Interview. Our AI suggests focusing on System Design today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/practice" className="px-8 py-3.5 bg-[#00e5ff] text-[#0f111a] font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:bg-[#00cbe5] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z"></path>
              </svg>
              Start Mock Interview
            </Link>
            <button className="px-8 py-3.5 bg-transparent text-white font-semibold text-lg rounded-xl border border-white/10 hover:bg-white/5 transition-all">
              Review Roadmap
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Score */}
          <div className="bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="text-[11px] font-bold text-[#8c92a4] uppercase tracking-widest">Overall Score</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div className="flex items-end gap-3 mb-8">
              <div className="text-6xl font-bold text-white leading-none tracking-tight">84%</div>
              <div className="text-sm font-bold text-[#10b981] mb-1">+2.4%</div>
            </div>
            <div className="w-full h-2 bg-[#252839] rounded-full overflow-hidden">
              <div className="h-full bg-[#00e5ff] rounded-full shadow-[0_0_10px_#00e5ff]" style={{ width: '84%' }}></div>
            </div>
          </div>

          {/* Card 2: Interviews */}
          <div className="bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
             <div className="flex justify-between items-start mb-6">
              <div className="text-[11px] font-bold text-[#8c92a4] uppercase tracking-widest">Interviews Completed</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 15l2 2 4-4"></path>
              </svg>
            </div>
            <div className="flex items-end gap-2 mb-8">
              <div className="text-6xl font-bold text-white leading-none tracking-tight">12</div>
              <div className="text-[#8c92a4] font-medium mb-1">Sessions</div>
            </div>
            <div className="text-sm text-[#8c92a4]">
              3 scheduled for next week
            </div>
          </div>

          {/* Card 3: Streak */}
          <div className="bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div className="text-[11px] font-bold text-[#8c92a4] uppercase tracking-widest">Weekly Streak</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.3 2a8.6 8.6 0 0 0-3.3 3c-1.3-1.6-3.8-2.6-6-2-3 1-5 4-5 8a9 9 0 0 0 17.5 3"></path>
                <path d="M8.5 13.5c1.4-1.2 3.7-1 5 1 .6.8 1 2 1 3.5"></path>
              </svg>
            </div>
            <div className="flex items-end gap-2 mb-8">
              <div className="text-6xl font-bold text-white leading-none tracking-tight">5</div>
              <div className="text-[#8c92a4] font-medium mb-1">Days</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="h-2 flex-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.5)]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#252839]"></div>
              <div className="h-2 flex-1 rounded-full bg-[#252839]"></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Recent Activity</h2>
        </div>

        <div className="flex flex-col gap-4">
          <ActivityRow 
            title="Senior Frontend Engineer"
            date="Oct 24, 2024"
            score="92"
            icon={<CodeIcon />}
          />
          <ActivityRow 
            title="Backend Architecture"
            date="Oct 22, 2024"
            score="78"
            icon={<DatabaseIcon />}
          />
          <ActivityRow 
            title="Behavioral Foundations"
            date="Oct 19, 2024"
            score="85"
            icon={<UserIcon />}
          />
        </div>

      </div>
    </DashboardLayout>
  );
}

// Inline SVGs for the activity rows
const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
