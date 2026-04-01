import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const RoleCard = ({ title, description, iconPath, iconBg, active, to = "/questions" }) => {
  return (
    <Link 
      to={to} 
      className={`block p-6 rounded-2xl border transition-all duration-300 relative group
        ${active ? 'border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.05)] bg-gradient-to-b from-[#1a1c29] to-[#13151f]' : 'border-white/5 bg-[#171923] hover:border-white/10 hover:bg-[#1a1c29]'}
      `}
    >
      <div className={`w-10 h-10 mb-6 rounded-lg flex items-center justify-center ${iconBg}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          {iconPath}
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">{title}</h3>
      <p className="text-sm text-[#8c92a4] mb-8 leading-relaxed h-[60px]">{description}</p>
      
      <div className="flex items-center justify-between text-[#8c92a4]">
        <span className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-3 py-1.5 rounded-full">
          3 Levels
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#00e5ff] transition-colors group-hover:translate-x-1">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Link>
  );
};

const CompanyLogo = ({ abbreviation, fullName }) => {
  return (
    <Link to="/questions" className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-[#171923] border border-white/5 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-sm hover:border-[#00e5ff]/50 transition-colors cursor-pointer cursor-pointer hover:bg-[#1a1c29]">
        {abbreviation}
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold text-white mb-0.5">{fullName}</div>
        <div className="text-[9px] text-[#8c92a4] uppercase tracking-widest">Question Bank</div>
      </div>
    </Link>
  );
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="py-8 max-w-[1100px] mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9b0ff] to-[#f4d5ff]">Next Interview</span>
        </h1>
        <p className="text-lg text-[#8c92a4] mb-12 max-w-2xl leading-relaxed">
          Choose your focus area or a specific company bank to begin tailored mock sessions powered by high-fidelity AI coaching.
        </p>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 w-full">
          <div className="flex bg-[#171923] p-1 rounded-xl w-full md:w-auto overflow-hidden">
            <button className="px-6 py-2.5 rounded-lg bg-[#00e5ff] text-[#0f111a] font-semibold text-sm shadow-sm transition-transform active:scale-95">
              By Technology
            </button>
            <button className="px-6 py-2.5 rounded-lg text-slate-300 font-medium text-sm hover:text-white transition-colors">
              By Company (MNC)
            </button>
          </div>
          
          <div className="relative w-full md:max-w-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-[50%] text-[#8c92a4]">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search roles or companies..." 
              className="w-full bg-[#171923] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-[#5e6376] focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 transition-all font-medium"
            />
          </div>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <RoleCard 
            title="Frontend Dev"
            description="React, Vue, Web Performance & Modern CSS Architecture."
            iconBg="bg-slate-700/50"
            iconPath={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></>}
          />
          <RoleCard 
            title="Backend Dev"
            description="Scalable APIs, Database Design, & Distributed Systems."
            iconBg="bg-purple-900/50"
            iconPath={<><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></>}
          />
          <RoleCard 
            title="Full Stack"
            description="End-to-end engineering from DOM to Deployment."
            iconBg="bg-teal-900/50 text-[#00e5ff]"
            active={true}
            iconPath={<><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></>}
          />
          <RoleCard 
            title="Data Science"
            description="Statistical analysis, ML modeling, & data storytelling."
            iconBg="bg-yellow-900/50"
            iconPath={<><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></>}
          />
          
          {/* Row 2 */}
          <RoleCard 
            title="DevOps"
            description="CI/CD, Kubernetes, Cloud Infra & Observability."
            iconBg="bg-red-900/40"
            iconPath={<><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></>}
          />
          <RoleCard 
            title="System Design"
            description="Architecting high-availability large scale services."
            iconBg="bg-cyan-900/40"
            iconPath={<><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></>}
          />
          <RoleCard 
            title="HR/Behavioral"
            description="Soft skills, leadership principles & culture fit."
            iconBg="bg-fuchsia-900/40"
            iconPath={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>}
          />
          
          <button className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-[#8c92a4] hover:text-white hover:border-white/30 transition-all p-6 min-h-[220px]">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <span className="font-semibold">Request New Role</span>
          </button>
        </div>

        {/* Target Top MNCs */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <line x1="9" y1="22" x2="15" y2="22"></line>
              <line x1="8" y1="6" x2="8.01" y2="6"></line>
              <line x1="16" y1="6" x2="16.01" y2="6"></line>
              <line x1="12" y1="6" x2="12.01" y2="6"></line>
              <line x1="12" y1="10" x2="12.01" y2="10"></line>
              <line x1="12" y1="14" x2="12.01" y2="14"></line>
              <line x1="16" y1="10" x2="16.01" y2="10"></line>
              <line x1="16" y1="14" x2="16.01" y2="14"></line>
              <line x1="8" y1="10" x2="8.01" y2="10"></line>
              <line x1="8" y1="14" x2="8.01" y2="14"></line>
            </svg>
            Target Top MNCs
          </h2>
          <div className="flex justify-between items-center w-full gap-4 overflow-x-auto pb-4 hide-scrollbar">
            <CompanyLogo abbreviation="TCS" fullName="TCS" />
            <CompanyLogo abbreviation="INFY" fullName="Infosys" />
            <CompanyLogo abbreviation="WIPRO" fullName="Wipro" />
            <CompanyLogo abbreviation="ACC" fullName="Accenture" />
            <CompanyLogo abbreviation="GOOG" fullName="Google" />
            <CompanyLogo abbreviation="AMZN" fullName="Amazon" />
            <CompanyLogo abbreviation="MSFT" fullName="Microsoft" />
            <CompanyLogo abbreviation="ZOHO" fullName="Zoho" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
