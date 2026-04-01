import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const LevelBadge = ({ label, active, colorDot }) => (
  <button className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm
    ${active ? 'bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.2)] text-[#0f111a]' : 'bg-[#1a1c29] text-white hover:bg-[#202336] border border-white/5'}
  `}>
    {!active && <div className={`w-2 h-2 rounded-full ${colorDot}`} />}
    {label}
  </button>
);

const QuestionCard = ({ category, time, question, isExpanded: defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300
      ${isExpanded ? 'border-[#00e5ff]/40 bg-gradient-to-br from-[#1b2034] to-[#141724]' : 'border-white/5 bg-[#171923] hover:border-white/10 hover:bg-[#1a1c29]'}
    `}>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider text-[#a5b4fc] bg-[#312e81]/30 border border-[#3730a3]/50 px-2.5 py-1 rounded uppercase">
              {category}
            </span>
            <span className="text-[11px] font-medium text-[#8c92a4] flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              {time}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug">{question}</h3>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/simulator" className="px-5 py-2.5 bg-[#252a3d] hover:bg-[#2a3045] text-white text-sm font-semibold rounded-lg border border-white/5 transition-colors shadow-sm">
            Practice Now
          </Link>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 rounded-lg bg-transparent hover:bg-[#252a3d] text-[#8c92a4] border border-transparent hover:border-white/5 flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-sm text-[#8c92a4] leading-relaxed">
            This question tests your fundamental understanding of computational complexity. Be prepared to discuss worst-case, average-case, and best-case scenarios for common sorting and searching algorithms.
          </div>
          <div className="md:w-[350px] bg-[#0c0e15] rounded-xl p-5 border border-white/5">
            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase mb-4">Focus Areas</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#8c92a4]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                <span>Space Complexity</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8c92a4]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                <span>Logarithmic vs Linear time</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#8c92a4]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                <span>Amortized Analysis</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default function QuestionBank() {
  return (
    <DashboardLayout>
      <div className="py-2 max-w-[1100px] mx-auto relative min-h-screen">
        
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-12">
          <Link to="/dashboard" className="w-12 h-12 bg-[#1a1c29] hover:bg-[#202336] rounded-xl flex items-center justify-center text-white border border-white/5 transition-colors shadow-sm shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Software Engineer Question Bank</h1>
            <p className="text-[#8c92a4] text-[15px]">Curated for Google, Meta, and Netflix standards</p>
          </div>
        </div>

        {/* Level Filters & Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 hide-scrollbar">
            <LevelBadge label="Beginner" active={true} colorDot="" />
            <LevelBadge label="Intermediate" active={false} colorDot="bg-yellow-400" />
            <LevelBadge label="Advanced" active={false} colorDot="bg-red-400" />
          </div>
          <div className="text-sm italic text-[#5e6376] font-medium shrink-0">
            48 Questions Available
          </div>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-6 pb-40">
          <QuestionCard 
            category="Algorithms" 
            time="15 mins" 
            question="Explain the concept of Big O notation and how you apply it to evaluate algorithm performance." 
            isExpanded={true} 
          />
          <QuestionCard 
            category="Data Structures" 
            time="10 mins" 
            question="What are the primary differences between a Hash Map and a Tree Map?" 
            isExpanded={false} 
          />
          <QuestionCard 
            category="System Design" 
            time="20 mins" 
            question="How would you design a rate limiter for a high-traffic public API?" 
            isExpanded={false} 
          />
          <QuestionCard 
            category="General Logic" 
            time="5 mins" 
            question="Describe your process for debugging a memory leak in a large-scale application." 
            isExpanded={false} 
          />
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-12 right-12 z-50 animate-bounce-slow">
          <Link to="/simulator" className="flex items-center gap-3 bg-[#00e5ff] hover:bg-[#00cbe5] text-[#0f111a] px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-[#00e5ff]">
            Start Mock Interview 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

      </div>
    </DashboardLayout>
  );
}
