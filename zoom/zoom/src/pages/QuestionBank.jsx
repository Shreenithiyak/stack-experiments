import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { useCompany } from '../context/CompanyContext';
import { useRole } from '../context/RoleContext';

// Sub-components remains the same
const LevelBadge = ({ label, active, colorDot, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm
    ${active ? 'bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.2)] text-[#0f111a]' : 'bg-[#1a1c29] text-white hover:bg-[#202336] border border-white/5'}
  `}>
    {!active && colorDot && <div className={`w-2 h-2 rounded-full ${colorDot}`} />}
    {label}
  </button>
);

const QuestionCard = ({ category, time, question, description, focusAreas }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              <img src="https://img.icons8.com/ios-filled/50/8c92a4/clock--v1.png" alt="clock" className="w-3 h-3 object-contain" />
              {time}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug">{question}</h3>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <Link 
            to="/simulator" 
            state={{ selectedQuestion: question }}
            className="px-5 py-2.5 bg-[#252a3d] hover:bg-[#2a3045] text-white text-sm font-semibold rounded-lg border border-white/5 transition-colors shadow-sm"
          >
            Practice Now
          </Link>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 rounded-lg bg-transparent hover:bg-[#252a3d] text-[#8c92a4] border border-transparent hover:border-white/5 flex items-center justify-center transition-colors"
          >
            <img src="https://img.icons8.com/ios-filled/50/8c92a4/expand-arrow.png" alt="toggle" className={`w-5 h-5 object-contain transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-sm text-[#8c92a4] leading-relaxed">
            {description || "This question tests your fundamental understanding of the topic. Be prepared to discuss practical applications and edge cases."}
          </div>
          <div className="md:w-[350px] bg-[#0c0e15] rounded-xl p-5 border border-white/5">
            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase mb-4">Focus Areas</h4>
            <ul className="space-y-3">
              {focusAreas && focusAreas.length > 0 ? (
                focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#8c92a4]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                    <span>{area}</span>
                  </li>
                ))
              ) : (
                <li className="flex items-start gap-3 text-sm text-[#8c92a4]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 mt-1.5" />
                  <span>General Implementation</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default function QuestionBank() {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedCompany } = useCompany();
  const { roles, selectedRoleId } = useRole();
  
  const selectedRole = roles.find(r => r.id === selectedRoleId);
  const roleTitle = selectedRole ? selectedRole.title : 'Tech Role';

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        console.log("Fetching questions from:", `${API_URL}/api/user/questions`);
        console.log("Params:", { level: activeLevel, company: selectedCompany, role: selectedRole ? selectedRole.title : undefined });
        
        const response = await axios.get(`${API_URL}/api/user/questions`, {
          params: {
            level: activeLevel,
            company: selectedCompany,
            role: selectedRole ? selectedRole.title : undefined
          }
        });
        
        console.log("Fetched questions count:", response.data.data ? response.data.data.length : 0);
        setQuestions(response.data.data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError(`Failed to load questions: ${err.message}. Ensure backend is running at ${API_URL} and database is seeded.`);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [API_URL, activeLevel, selectedCompany, selectedRole]);

  return (
    <DashboardLayout>
      <div className="py-2 max-w-[1100px] mx-auto relative min-h-screen px-4 md:px-0">
        
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-12">
          <Link to="/practice" className="w-12 h-12 bg-[#1a1c29] hover:bg-[#202336] rounded-xl flex items-center justify-center text-white border border-white/5 transition-colors shadow-sm shrink-0">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/back.png" alt="back" className="w-6 h-6 object-contain" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                {selectedCompany ? `${selectedCompany} Question Bank (${roleTitle})` : `Global Question Bank (${roleTitle})`}
            </h1>
            <p className="text-[#8c92a4] text-[15px]">Curated for Top-tier MNC standards</p>
          </div>
        </div>


        {/* Level Filters & Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 hide-scrollbar">
            <LevelBadge 
              label="Beginner" 
              active={activeLevel === 'beginner'} 
              colorDot="bg-green-400" 
              onClick={() => setActiveLevel('beginner')}
            />
            <LevelBadge 
              label="Intermediate" 
              active={activeLevel === 'intermediate'} 
              colorDot="bg-yellow-400" 
              onClick={() => setActiveLevel('intermediate')}
            />
            <LevelBadge 
              label="Advanced" 
              active={activeLevel === 'advanced'} 
              colorDot="bg-red-400" 
              onClick={() => setActiveLevel('advanced')}
            />
          </div>
          <div className="text-sm italic text-[#5e6376] font-medium shrink-0">
            {questions.length} Questions Available
          </div>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-6 pb-40">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00e5ff]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-400 bg-red-400/10 rounded-2xl border border-red-400/20 px-6">
              <p className="mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg transition-colors text-sm font-bold"
              >
                Retry
              </button>
            </div>
          ) : questions.length > 0 ? (
            questions.map((q) => (
              <QuestionCard 
                key={q._id}
                category={q.category} 
                time={q.time} 
                question={q.question} 
                description={q.description}
                focusAreas={q.focusAreas}
              />
            ))
          ) : (
            <div className="text-center py-20 text-[#5e6376] bg-[#171923] rounded-2xl border border-white/5">
              No questions found for the "{activeLevel}" level.
            </div>
          )}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-12 right-12 z-50">
          <Link to="/simulator" className="flex items-center gap-3 bg-[#00e5ff] hover:bg-[#00cbe5] text-[#0f111a] px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-[#00e5ff]">
            Start Mock Interview 
            <img src="https://img.icons8.com/ios-filled/50/0f111a/chevron-right.png" alt="start" className="w-6 h-6 object-contain" />
          </Link>
        </div>

      </div>
    </DashboardLayout>
  );
}
