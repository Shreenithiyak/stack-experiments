import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const RoleCard = ({ title, description, iconSrc, iconBg, active, to = "/questions" }) => {
  return (
    <Link 
      to={to} 
      className={`block p-6 rounded-2xl border transition-all duration-300 relative group
        ${active ? 'border-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.05)] bg-gradient-to-b from-[#1a1c29] to-[#13151f]' : 'border-white/5 bg-[#171923] hover:border-white/10 hover:bg-[#1a1c29]'}
      `}
    >
      <div className={`w-10 h-10 mb-6 rounded-lg flex items-center justify-center ${iconBg}`}>
        <img src={iconSrc} alt={title} className="w-5 h-5 object-contain" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">{title}</h3>
      <p className="text-sm text-[#8c92a4] mb-8 leading-relaxed h-[60px]">{description}</p>
      
      <div className="flex items-center justify-between text-[#8c92a4]">
        <span className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-3 py-1.5 rounded-full">
          3 Levels
        </span>
        <img src="https://img.icons8.com/ios-filled/50/8c92a4/right-arrow.png" alt="arrow" className="w-[18px] h-[18px] object-contain opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
};

const CompanyLogo = ({ abbreviation, fullName }) => {
  return (
    <Link to="/questions" className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-[#171923] border border-white/5 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-sm hover:border-[#00e5ff]/50 transition-colors cursor-pointer hover:bg-[#1a1c29]">
        {abbreviation}
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold text-white mb-0.5">{fullName}</div>
        <div className="text-[9px] text-[#8c92a4] uppercase tracking-widest">Question Bank</div>
      </div>
    </Link>
  );
};

export default function Practice() {
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
            <img src="https://img.icons8.com/ios-filled/50/8c92a4/search--v1.png" alt="search" className="absolute left-4 top-1/2 -translate-y-[50%] w-4 h-4 object-contain" />
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
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/monitor.png"
          />
          <RoleCard 
            title="Backend Dev"
            description="Scalable APIs, Database Design, & Distributed Systems."
            iconBg="bg-purple-900/50"
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/database.png"
          />
          <RoleCard 
            title="Full Stack"
            description="End-to-end engineering from DOM to Deployment."
            iconBg="bg-teal-900/50 text-[#00e5ff]"
            active={true}
            iconSrc="https://img.icons8.com/ios-filled/50/00e5ff/code.png"
          />
          <RoleCard 
            title="Data Science"
            description="Statistical analysis, ML modeling, & data storytelling."
            iconBg="bg-yellow-900/50"
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/bar-chart.png"
          />
          
          {/* Row 2 */}
          <RoleCard 
            title="DevOps"
            description="CI/CD, Kubernetes, Cloud Infra & Observability."
            iconBg="bg-red-900/40"
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/server.png"
          />
          <RoleCard 
            title="System Design"
            description="Architecting high-availability large scale services."
            iconBg="bg-cyan-900/40"
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/networking-manager.png"
          />
          <RoleCard 
            title="HR/Behavioral"
            description="Soft skills, leadership principles & culture fit."
            iconBg="bg-fuchsia-900/40"
            iconSrc="https://img.icons8.com/ios-filled/50/ffffff/user-group-man-man.png"
          />
          
          <button className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-[#8c92a4] hover:text-white hover:border-white/30 transition-all p-6 min-h-[220px]">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
              <img src="https://img.icons8.com/ios-filled/50/8c92a4/plus-math.png" alt="plus" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-semibold">Request New Role</span>
          </button>
        </div>

        {/* Target Top MNCs */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white mb-8">
            <img src="https://img.icons8.com/ios-filled/50/00e5ff/briefcase.png" alt="briefcase" className="w-6 h-6 object-contain" />
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
