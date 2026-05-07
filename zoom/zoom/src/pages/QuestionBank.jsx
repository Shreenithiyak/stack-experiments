import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const LevelBadge = ({ label, active, colorDot, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm
    ${active ? 'bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.2)] text-[#0f111a]' : 'bg-[#1a1c29] text-white hover:bg-[#202336] border border-white/5'}
  `}>
    {!active && <div className={`w-2 h-2 rounded-full ${colorDot}`} />}
    {label}
  </button>
);

const QuestionCard = ({ category, time, question, description, focusAreas, isExpanded: defaultExpanded }) => {
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
              <img src="https://img.icons8.com/ios-filled/50/8c92a4/clock--v1.png" alt="clock" className="w-3 h-3 object-contain" />
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

const questionsData = {
  beginner: [
    {
      id: 1,
      category: "Algorithms",
      time: "15 mins",
      question: "Explain the concept of Big O notation and how you apply it to evaluate algorithm performance.",
      description: "This question tests your fundamental understanding of computational complexity. Be prepared to discuss worst-case, average-case, and best-case scenarios for common sorting and searching algorithms.",
      focusAreas: ["Space Complexity", "Logarithmic vs Linear time", "Amortized Analysis"]
    },
    {
      id: 2,
      category: "Data Structures",
      time: "10 mins",
      question: "What are the primary differences between an Array and a Linked List?",
      description: "Understanding memory allocation and access patterns is crucial for choosing the right data structure for your application.",
      focusAreas: ["Random Access", "Insertion/Deletion Efficiency", "Memory Overhead"]
    },
    {
      id: 3,
      category: "Web Basics",
      time: "12 mins",
      question: "Describe the process of what happens when you type a URL into a browser and press Enter.",
      description: "A classic high-level question that tests your breadth of knowledge across networking, DNS, and browser rendering.",
      focusAreas: ["DNS Lookup", "TCP/IP Handshake", "DOM/CSSOM Construction"]
    }
  ],
  intermediate: [
    {
      id: 4,
      category: "Data Structures",
      time: "10 mins",
      question: "What are the primary differences between a Hash Map and a Tree Map?",
      description: "Hash maps provide constant time average access, while tree maps maintain order. Knowing when to trade speed for ordering is a key intermediate skill.",
      focusAreas: ["Time Complexity (O(1) vs O(log n))", "Ordering Guarantees", "Hash Collisions vs Balancing"]
    },
    {
      id: 5,
      category: "Web Tech",
      time: "15 mins",
      question: "Explain the event loop in JavaScript and how it handles asynchronous operations.",
      description: "Deep dive into the concurrency model of JS. Essential for frontend and Node.js developers.",
      focusAreas: ["Call Stack", "Task Queue vs Microtask Queue", "Blocking vs Non-blocking"]
    },
    {
      id: 6,
      category: "Database",
      time: "20 mins",
      question: "When would you choose a NoSQL database over a traditional SQL database?",
      description: "Tests your understanding of data modeling, scaling requirements, and the CAP theorem.",
      focusAreas: ["ACID vs BASE", "Horizontal Scalability", "Schema Flexibility"]
    }
  ],
  advanced: [
    {
      id: 7,
      category: "System Design",
      time: "20 mins",
      question: "How would you design a rate limiter for a high-traffic public API?",
      description: "This tests your ability to handle scale, synchronization in distributed systems, and choosing between different algorithms like Token Bucket or Leaky Bucket.",
      focusAreas: ["Token Bucket Algorithm", "Distributed Locking (Redis)", "Scalability & Fault Tolerance"]
    },
    {
      id: 8,
      category: "Architecture",
      time: "25 mins",
      question: "Describe your process for debugging a memory leak in a large-scale application.",
      description: "Advanced debugging requires understanding of heap snapshots, garbage collection cycles, and profiler tools.",
      focusAreas: ["Heap Analysis", "Garbage Collection Strategies", "Retention Paths"]
    },
    {
      id: 9,
      category: "Concurrency",
      time: "30 mins",
      question: "How do you handle race conditions in a distributed system with multiple microservices?",
      description: "Focuses on consistency models, idempotent operations, and distributed coordination.",
      focusAreas: ["Optimistic vs Pessimistic Locking", "Idempotency Keys", "Distributed Transactions (Saga Pattern)"]
    }
  ]
};

export default function QuestionBank() {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const currentQuestions = questionsData[activeLevel];

  return (
    <DashboardLayout>
      <div className="py-2 max-w-[1100px] mx-auto relative min-h-screen">
        
        {/* Header Section */}
        <div className="flex items-start gap-6 mb-12">
          <Link to="/dashboard" className="w-12 h-12 bg-[#1a1c29] hover:bg-[#202336] rounded-xl flex items-center justify-center text-white border border-white/5 transition-colors shadow-sm shrink-0">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/back.png" alt="back" className="w-6 h-6 object-contain" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Software Engineer Question Bank</h1>
            <p className="text-[#8c92a4] text-[15px]">Curated for Google, Meta, and Netflix standards</p>
          </div>
        </div>

        {/* Level Filters & Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 hide-scrollbar">
            <LevelBadge 
              label="Beginner" 
              active={activeLevel === 'beginner'} 
              colorDot="" 
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
            {Object.values(questionsData).flat().length} Questions Available
          </div>
        </div>

        {/* Questions List */}
        <div className="flex flex-col gap-6 pb-40">
          {currentQuestions.map((q) => (
            <QuestionCard 
              key={q.id}
              category={q.category} 
              time={q.time} 
              question={q.question} 
              description={q.description}
              focusAreas={q.focusAreas}
              isExpanded={false} 
            />
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-12 right-12 z-50 animate-bounce-slow">
          <Link to="/simulator" className="flex items-center gap-3 bg-[#00e5ff] hover:bg-[#00cbe5] text-[#0f111a] px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all hover:scale-105 active:scale-95 border-2 border-[#00e5ff]">
            Start Mock Interview 
            <img src="https://img.icons8.com/ios-filled/50/0f111a/chevron-right.png" alt="start" className="w-6 h-6 object-contain" />
          </Link>
        </div>

      </div>
    </DashboardLayout>
  );
}
